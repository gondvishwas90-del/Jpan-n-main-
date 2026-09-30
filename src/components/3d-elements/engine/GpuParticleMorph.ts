import * as THREE from 'three';

const ParticleVertexShader = `
  uniform float uProgress;
  uniform float uTime;
  uniform float uScatter;
  uniform float uPixelRatio;
  uniform float uBaseSize;
  uniform vec3 uOffsetStart;
  uniform vec3 uOffsetEnd;

  attribute vec3 aTargetPos;
  attribute vec3 aSeed;
  attribute vec3 aColorStart;
  attribute vec3 aColorEnd;

  varying vec3 vColor;
  varying float vAlpha;

  // Pseudo-random noise
  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  void main() {
    // Progress with slight per-particle variance for staggered flow
    float staggeredP = clamp((uProgress - aSeed.x * 0.25) / 0.75, 0.0, 1.0);
    // Smooth ease in-out
    float smoothP = smoothstep(0.0, 1.0, staggeredP);

    // Initial and target positions offset by world section corners
    vec3 pStart = position + uOffsetStart;
    vec3 pEnd = aTargetPos + uOffsetEnd;

    // Linear interpolation
    vec3 currentPos = mix(pStart, pEnd, smoothP);

    // Parabolic arc / explosion in the middle of transition
    float arc = sin(smoothP * 3.14159265);
    vec3 dispersion = aSeed * arc * uScatter;

    // Add gentle orbital curl during flight
    float curlAngle = uTime * 2.0 + aSeed.y * 6.28;
    dispersion.x += cos(curlAngle) * arc * 0.8;
    dispersion.y += sin(curlAngle) * arc * 0.8;

    currentPos += dispersion;

    // Color transition
    vColor = mix(aColorStart, aColorEnd, smoothP);

    // Alpha peaks strongly during mid-flight and settles softly at endpoints
    vAlpha = mix(0.35, 1.0, arc);

    vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Point size with distance attenuation and explosion expansion
    float dynamicSize = uBaseSize * (1.0 + arc * 1.4);
    gl_PointSize = (dynamicSize * uPixelRatio) / (-mvPosition.z);
  }
`;

const ParticleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft circular radial falloff
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    // Glow profile with intense metallic luminous core
    float core = 1.0 - smoothstep(0.0, 0.22, dist);
    float halo = 1.0 - smoothstep(0.0, 0.5, dist);

    vec3 finalColor = vColor + vec3(core * 0.7);
    float finalAlpha = (halo * 0.8 + core * 0.2) * vAlpha;

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

export interface MorphConfig {
  pointCount: number;
}

export class GpuParticleMorph {
  public points: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private material: THREE.ShaderMaterial;
  private pointCount: number;

  constructor(pointCount: number = 16000) {
    this.pointCount = pointCount;
    this.geometry = new THREE.BufferGeometry();

    // Default attributes
    const positions = new Float32Array(pointCount * 3);
    const targetPositions = new Float32Array(pointCount * 3);
    const seeds = new Float32Array(pointCount * 3);
    const colorsStart = new Float32Array(pointCount * 3);
    const colorsEnd = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const idx = i * 3;
      seeds[idx] = (Math.random() - 0.5) * 2.0;
      seeds[idx + 1] = (Math.random() - 0.5) * 2.0;
      seeds[idx + 2] = (Math.random() - 0.5) * 2.0;

      // Default warm copper / gold
      colorsStart[idx] = 0.85;
      colorsStart[idx + 1] = 0.47;
      colorsStart[idx + 2] = 0.29;

      colorsEnd[idx] = 0.83;
      colorsEnd[idx + 1] = 0.69;
      colorsEnd[idx + 2] = 0.22;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('aTargetPos', new THREE.BufferAttribute(targetPositions, 3));
    this.geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3));
    this.geometry.setAttribute('aColorStart', new THREE.BufferAttribute(colorsStart, 3));
    this.geometry.setAttribute('aColorEnd', new THREE.BufferAttribute(colorsEnd, 3));

    this.material = new THREE.ShaderMaterial({
      vertexShader: ParticleVertexShader,
      fragmentShader: ParticleFragmentShader,
      uniforms: {
        uProgress: { value: 0.0 },
        uTime: { value: 0.0 },
        uScatter: { value: 3.5 },
        uPixelRatio: { value: 1.0 },
        uBaseSize: { value: 24.0 },
        uOffsetStart: { value: new THREE.Vector3() },
        uOffsetEnd: { value: new THREE.Vector3() },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
  }

  public setSourceAndTarget(
    sourcePts: Float32Array,
    targetPts: Float32Array,
    startOffset: THREE.Vector3,
    endOffset: THREE.Vector3,
    colorA: THREE.Color,
    colorB: THREE.Color
  ) {
    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const targetAttr = this.geometry.attributes.aTargetPos as THREE.BufferAttribute;
    const colStartAttr = this.geometry.attributes.aColorStart as THREE.BufferAttribute;
    const colEndAttr = this.geometry.attributes.aColorEnd as THREE.BufferAttribute;

    const sArr = posAttr.array as Float32Array;
    const tArr = targetAttr.array as Float32Array;
    const csArr = colStartAttr.array as Float32Array;
    const ceArr = colEndAttr.array as Float32Array;

    const count = this.pointCount;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      sArr[idx] = sourcePts[idx] || 0;
      sArr[idx + 1] = sourcePts[idx + 1] || 0;
      sArr[idx + 2] = sourcePts[idx + 2] || 0;

      tArr[idx] = targetPts[idx] || 0;
      tArr[idx + 1] = targetPts[idx + 1] || 0;
      tArr[idx + 2] = targetPts[idx + 2] || 0;

      csArr[idx] = colorA.r;
      csArr[idx + 1] = colorA.g;
      csArr[idx + 2] = colorA.b;

      ceArr[idx] = colorB.r;
      ceArr[idx + 1] = colorB.g;
      ceArr[idx + 2] = colorB.b;
    }

    posAttr.needsUpdate = true;
    targetAttr.needsUpdate = true;
    colStartAttr.needsUpdate = true;
    colEndAttr.needsUpdate = true;

    this.material.uniforms.uOffsetStart.value.copy(startOffset);
    this.material.uniforms.uOffsetEnd.value.copy(endOffset);
  }

  public update(progress: number, time: number, dpr: number) {
    this.material.uniforms.uProgress.value = progress;
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uPixelRatio.value = dpr;
  }

  public setVisible(visible: boolean) {
    this.points.visible = visible;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
