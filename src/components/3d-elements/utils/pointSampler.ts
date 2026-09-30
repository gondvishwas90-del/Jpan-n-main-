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

  let totalTriangles = 0;
  const meshTriangles: number[] = [];
  for (const mesh of meshes) {
    const geom = mesh.geometry;
    const index = geom.index;
    const triCount = index ? index.count / 3 : (geom.attributes.position ? geom.attributes.position.count / 3 : 0);
    meshTriangles.push(triCount);
    totalTriangles += triCount;
  }

  if (totalTriangles === 0) return points;

  let pIdx = 0;
  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();
  const target = new THREE.Vector3();

  for (let m = 0; m < meshes.length; m++) {
    const mesh = meshes[m];
    const geom = mesh.geometry;
    const pos = geom.attributes.position;
    if (!pos) continue;
    const index = geom.index;
    const mCount = Math.round((meshTriangles[m] / totalTriangles) * count);
    const triTotal = meshTriangles[m];
    if (triTotal === 0) continue;

    for (let i = 0; i < mCount && pIdx < count * 3; i++) {
      const triIdx = Math.floor(Math.random() * triTotal);
      let iA: number, iB: number, iC: number;
      if (index) {
        iA = index.getX(triIdx * 3);
        iB = index.getX(triIdx * 3 + 1);
        iC = index.getX(triIdx * 3 + 2);
      } else {
        iA = triIdx * 3;
        iB = triIdx * 3 + 1;
        iC = triIdx * 3 + 2;
      }

      vA.fromBufferAttribute(pos, iA).applyMatrix4(mesh.matrixWorld);
      vB.fromBufferAttribute(pos, iB).applyMatrix4(mesh.matrixWorld);
      vC.fromBufferAttribute(pos, iC).applyMatrix4(mesh.matrixWorld);

      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 + r2 > 1) {
        r1 = 1 - r1;
        r2 = 1 - r2;
      }
      const r3 = 1 - r1 - r2;

      target.set(0, 0, 0)
        .addScaledVector(vA, r1)
        .addScaledVector(vB, r2)
        .addScaledVector(vC, r3);

      points[pIdx++] = target.x;
      points[pIdx++] = target.y;
      points[pIdx++] = target.z;
    }
  }

  while (pIdx < count * 3) {
    points[pIdx] = points[pIdx - 3] || 0;
    points[pIdx + 1] = points[pIdx - 2] || 0;
    points[pIdx + 2] = points[pIdx - 1] || 0;
    pIdx += 3;
  }

  return points;
}
