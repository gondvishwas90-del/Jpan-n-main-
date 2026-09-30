import * as THREE from 'three';

/**
 * Samples `count` points uniformly from the surface of all meshes in a THREE.Group
 */
export function samplePointsFromGroup(group: THREE.Group, count: number): Float32Array {
  const points = new Float32Array(count * 3);
  const meshes: THREE.Mesh[] = [];
  group.updateMatrixWorld(true);
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      meshes.push(child as THREE.Mesh);
    }
  });

  if (meshes.length === 0) return points;

  // 1. Calculate physical surface area for each triangle across all meshes
  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();
  const e1 = new THREE.Vector3();
  const e2 = new THREE.Vector3();
  const normal = new THREE.Vector3();

  interface TriangleData {
    meshIndex: number;
    iA: number;
    iB: number;
    iC: number;
    area: number;
  }

  const triangles: TriangleData[] = [];
  let totalArea = 0;

  for (let m = 0; m < meshes.length; m++) {
    const mesh = meshes[m];
    const geom = mesh.geometry;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    if (!pos) continue;
    const index = geom.index as THREE.BufferAttribute | null;
    const triCount = index ? index.count / 3 : pos.count / 3;

    for (let t = 0; t < triCount; t++) {
      let iA = index ? index.getX(t * 3) : t * 3;
      let iB = index ? index.getX(t * 3 + 1) : t * 3 + 1;
      let iC = index ? index.getX(t * 3 + 2) : t * 3 + 2;

      vA.fromBufferAttribute(pos, iA).applyMatrix4(mesh.matrixWorld);
      vB.fromBufferAttribute(pos, iB).applyMatrix4(mesh.matrixWorld);
      vC.fromBufferAttribute(pos, iC).applyMatrix4(mesh.matrixWorld);

      e1.subVectors(vB, vA);
      e2.subVectors(vC, vA);
      normal.crossVectors(e1, e2);
      const area = normal.length() * 0.5;

      if (area > 0.000001) {
        triangles.push({ meshIndex: m, iA, iB, iC, area });
        totalArea += area;
      }
    }
  }

  if (triangles.length === 0 || totalArea === 0) return points;

  // 2. Precompute cumulative area distribution for O(log N) or continuous uniform sampling
  const cumulativeAreas = new Float64Array(triangles.length);
  let acc = 0;
  for (let i = 0; i < triangles.length; i++) {
    acc += triangles[i].area / totalArea;
    cumulativeAreas[i] = acc;
  }
  cumulativeAreas[triangles.length - 1] = 1.0;

  // 3. Binary search helper to pick triangle proportional to area
  const pickTriangle = (val: number): TriangleData => {
    let low = 0;
    let high = cumulativeAreas.length - 1;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (cumulativeAreas[mid] < val) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return triangles[low];
  };

  // 4. Sample points with uniform barycentric coordinates
  let pIdx = 0;
  const target = new THREE.Vector3();

  for (let i = 0; i < count; i++) {
    const tri = pickTriangle(Math.random());
    const mesh = meshes[tri.meshIndex];
    const pos = mesh.geometry.attributes.position as THREE.BufferAttribute;

    vA.fromBufferAttribute(pos, tri.iA).applyMatrix4(mesh.matrixWorld);
    vB.fromBufferAttribute(pos, tri.iB).applyMatrix4(mesh.matrixWorld);
    vC.fromBufferAttribute(pos, tri.iC).applyMatrix4(mesh.matrixWorld);

    let r1 = Math.random();
    let r2 = Math.random();
    if (r1 + r2 > 1.0) {
      r1 = 1.0 - r1;
      r2 = 1.0 - r2;
    }
    const r3 = 1.0 - r1 - r2;

    target.set(0, 0, 0)
      .addScaledVector(vA, r1)
      .addScaledVector(vB, r2)
      .addScaledVector(vC, r3);

    points[pIdx++] = target.x;
    points[pIdx++] = target.y;
    points[pIdx++] = target.z;
  }

  return points;
}
