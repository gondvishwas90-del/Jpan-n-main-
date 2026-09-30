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

  attribute vec3 aTargetPos;
  attribute vec3 aSeed;

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
    mat3 rotMat = getEulerRotationMatrix(uModelRotation);

    // Apply rigid model rotation to both source and target models around origin
    vec3 rotStart = rotMat * position;
    vec3 rotEnd = rotMat * aTargetPos;

    // Initial and target positions offset by world section corners
    vec3 pStart = rotStart + uOffsetStart;
    vec3 pEnd = rotEnd + uOffsetEnd;

    // Progress
    float p = clamp(uProgress, 0.0, 1.0);
    float smoothP = smoothstep(0.0, 1.0, p);

    // Interpolate position across sections
    vec3 currentPos = mix(pStart, pEnd, smoothP);

    // ZERO dispersion when static (smoothP == 0.0 or 1.0)
    // Tightly bounded laminar streamline flow during scroll transition only
    float arc = sin(smoothP * 3.14159265);
    if (arc > 0.001) {
      vec3 stream = vec3(
        sin(smoothP * 3.14159265 + aSeed.x * 3.14159) * 0.2,
        sin(smoothP * 6.28318530 + aSeed.y * 3.14159) * 0.2,
        cos(smoothP * 3.14159265 + aSeed.z * 3.14159) * 0.2
      ) * arc;
      currentPos += stream;
    }

    vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point size with distance attenuation - clean, constant, non-shining
    float dynamicSize = uBaseSize * (1.0 + arc * 0.25);
    gl_PointSize = (dynamicSize * uPixelRatio) / (-mvPosition.z);
  }
`;

const ParticleFragmentShader = `
  uniform vec3 uColor;

  void main() {
    // Sharp circular point profile with clean anti-aliasing
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    // Clean matte edge falloff (no glow, no shine, no white highlights)
    float alpha = 1.0 - smoothstep(0.42, 0.50, dist);

    // 100% same solid color - completely non-shining, no sparkle, no white core
    gl_FragColor = vec4(uColor, alpha * 0.95);
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

  constructor(pointCount: number = 120000) {
    this.pointCount = pointCount;
    this.geometry = new THREE.BufferGeometry();

    // Default attributes
    const positions = new Float32Array(pointCount * 3);
    const targetPositions = new Float32Array(pointCount * 3);
    const seeds = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const idx = i * 3;
      seeds[idx] = (Math.random() - 0.5) * 2.0;
      seeds[idx + 1] = (Math.random() - 0.5) * 2.0;
      seeds[idx + 2] = (Math.random() - 0.5) * 2.0;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('aTargetPos', new THREE.BufferAttribute(targetPositions, 3));
    this.geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3));

    this.material = new THREE.ShaderMaterial({
      vertexShader: ParticleVertexShader,
      fragmentShader: ParticleFragmentShader,
      uniforms: {
        uProgress: { value: 0.0 },
        uTime: { value: 0.0 },
        uScatter: { value: 2.0 },
        uPixelRatio: { value: 1.0 },
        uBaseSize: { value: 22.0 },
        uColor: { value: new THREE.Color("#d26d3d") },
        uOffsetStart: { value: new THREE.Vector3() },
        uOffsetEnd: { value: new THREE.Vector3() },
        uModelRotation: { value: new THREE.Vector3() },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
  }

  public setColor(color: THREE.Color) {
    this.material.uniforms.uColor.value.copy(color);
  }

  public setSourceAndTarget(
    sourcePts: Float32Array,
    targetPts: Float32Array,
    startOffset: THREE.Vector3,
    endOffset: THREE.Vector3,
    _colorA?: THREE.Color,
    _colorB?: THREE.Color
  ) {
    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const targetAttr = this.geometry.attributes.aTargetPos as THREE.BufferAttribute;

    const sArr = posAttr.array as Float32Array;
    const tArr = targetAttr.array as Float32Array;

    const count = this.pointCount;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      sArr[idx] = sourcePts[idx] || 0;
      sArr[idx + 1] = sourcePts[idx + 1] || 0;
      sArr[idx + 2] = sourcePts[idx + 2] || 0;

      tArr[idx] = targetPts[idx] || 0;
      tArr[idx + 1] = targetPts[idx + 1] || 0;
      tArr[idx + 2] = targetPts[idx + 2] || 0;
    }

    posAttr.needsUpdate = true;
    targetAttr.needsUpdate = true;

    this.material.uniforms.uOffsetStart.value.copy(startOffset);
    this.material.uniforms.uOffsetEnd.value.copy(endOffset);
  }

  public update(
    progress: number,
    time: number,
    dpr: number,
    rotation: THREE.Vector3,
    _mouseWorld?: THREE.Vector3
  ) {
    this.material.uniforms.uProgress.value = progress;
    this.material.uniforms.uTime.value = time;
    this.material.uniforms.uPixelRatio.value = dpr;
    this.material.uniforms.uModelRotation.value.copy(rotation);
  }

  public setVisible(visible: boolean) {
    this.points.visible = visible;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
