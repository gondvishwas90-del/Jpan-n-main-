import * as THREE from 'three';

const ParticleVertexShader = `
  uniform float uProgress;
  uniform float uTime;
  uniform float uScatter;
  uniform float uPixelRatio;
  uniform float uBaseSize;
  uniform vec3 uOffsetStart;
  uniform vec3 uOffsetEnd;
  uniform vec3 uModelRotation;
  uniform vec3 uMouseWorld;
  uniform float uMouseRadius;
  uniform float uMouseStrength;

  attribute vec3 aTargetPos;
  attribute vec3 aSeed;
  attribute vec3 aColorStart;
  attribute vec3 aColorEnd;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vSparkle;

  // Euler rotation matrix around origin
  mat3 getEulerRotationMatrix(vec3 angles) {
    float cx = cos(angles.x);
    float sx = sin(angles.x);
    float cy = cos(angles.y);
    float sy = sin(angles.y);
    float cz = cos(angles.z);
    float sz = sin(angles.z);

    return mat3(
      cy * cz, -cy * sz, sy,
      sx * sy * cz + cx * sz, -sx * sy * sz + cx * cz, -sx * cy,
      -cx * sy * cz + sx * sz, cx * sy * sz + sx * cz, cx * cy
    );
  }

  void main() {
    // Progress with slight per-particle variance for staggered flow
    float staggeredP = clamp((uProgress - aSeed.x * 0.22) / 0.78, 0.0, 1.0);
    float smoothP = smoothstep(0.0, 1.0, staggeredP);

    mat3 rotMat = getEulerRotationMatrix(uModelRotation);

    // Apply local rotation to both source and target models around their centroids
    vec3 rotStart = rotMat * position;
    vec3 rotEnd = rotMat * aTargetPos;

    // Initial and target positions offset by world section corners
    vec3 pStart = rotStart + uOffsetStart;
    vec3 pEnd = rotEnd + uOffsetEnd;

    // Interpolate position across sections
    vec3 currentPos = mix(pStart, pEnd, smoothP);

    // Mid-transition parabolic arc & explosion
    float arc = sin(smoothP * 3.14159265);
    vec3 dispersion = aSeed * arc * uScatter;

    // Orbital curl turbulence during flight
    float curlAngle = uTime * 2.2 + aSeed.y * 6.28;
    dispersion.x += cos(curlAngle) * arc * 1.1;
    dispersion.y += sin(curlAngle) * arc * 1.1;
    dispersion.z += sin(curlAngle * 1.4) * arc * 0.9;
    currentPos += dispersion;

    // Idle organic breathing wave when stationary
    float idleDamp = 1.0 - arc;
    float idleWave = sin(uTime * 1.8 + currentPos.y * 1.2 + aSeed.x * 6.28) * 0.04 * idleDamp;
    currentPos.y += idleWave;
    currentPos.x += cos(uTime * 1.3 + currentPos.z * 1.1 + aSeed.y * 6.28) * 0.03 * idleDamp;

    // Interactive Mouse Dispersion & Repulsion
    float mouseDist = length(currentPos.xy - uMouseWorld.xy);
    if (mouseDist < uMouseRadius && mouseDist > 0.01) {
      float repelNorm = 1.0 - (mouseDist / uMouseRadius);
      float repelForce = repelNorm * repelNorm; // quadratic falloff
      vec2 repelDir = normalize(currentPos.xy - uMouseWorld.xy);
      currentPos.xy += repelDir * (repelForce * uMouseStrength);
      currentPos.z += repelForce * (uMouseStrength * 0.6) * aSeed.z;
    }

    // Color transition between metallic palettes
    vColor = mix(aColorStart, aColorEnd, smoothP);

    // Metallic twinkle sparkle
    vSparkle = sin(uTime * 4.0 + aSeed.x * 24.0) * 0.5 + 0.5;

    // Alpha stays high permanently (0.86 idle to 1.0 mid-morph)
    vAlpha = mix(0.86 + 0.14 * sin(uTime * 2.0 + aSeed.y * 10.0), 1.0, arc);

    vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point size with distance attenuation
    float dynamicSize = uBaseSize * (1.0 + arc * 1.2 + vSparkle * 0.25);
    gl_PointSize = (dynamicSize * uPixelRatio) / (-mvPosition.z);
  }
`;

const ParticleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSparkle;

  void main() {
    // Soft circular radial falloff
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    // Luminous metallic profile: high-intensity core + glowing metallic corona
    float core = 1.0 - smoothstep(0.0, 0.18, dist);
    float midGlow = 1.0 - smoothstep(0.0, 0.38, dist);
    float halo = 1.0 - smoothstep(0.0, 0.50, dist);

    // Specular highlight on metal core
    vec3 metallicGlow = vColor * (0.95 + 0.35 * vSparkle) + vec3(core * 1.05);
    float finalAlpha = (halo * 0.65 + midGlow * 0.4 + core * 0.55) * vAlpha;

    gl_FragColor = vec4(metallicGlow, clamp(finalAlpha, 0.0, 1.0));
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

  constructor(pointCount: number = 60000) {
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
        uScatter: { value: 3.6 },
        uPixelRatio: { value: 1.0 },
        uBaseSize: { value: 32.0 },
        uOffsetStart: { value: new THREE.Vector3() },
        uOffsetEnd: { value: new THREE.Vector3() },
        uModelRotation: { value: new THREE.Vector3() },
        uMouseWorld: { value: new THREE.Vector3(999, 999, 0) },
        uMouseRadius: { value: 2.8 },
        uMouseStrength: { value: 1.6 },
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

  public update(
    progress: number,
    time: number,
    dpr: number,
    rotation: THREE.Vector3,
    mouseWorld: THREE.Vector3
  ) {
    this.material.uniforms.uProgress.value = progress;
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uPixelRatio.value = dpr;
    this.material.uniforms.uModelRotation.value.copy(rotation);
    this.material.uniforms.uMouseWorld.value.copy(mouseWorld);
  }

  public setVisible(visible: boolean) {
    this.points.visible = visible;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
