"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ScrollState, clamp01, smoothstep } from './engine/types';
import { BeadCloud } from './engine/BeadCloud';
import { CopperPipeFitting3D } from './models/CopperPipeFitting3D';
import { MetrologyLattice } from './engine/MetrologyLattice';
import { ConduitSystem } from './engine/ConduitSystem';
import { CameraSpine } from './engine/CameraSpine';
import { PostProcessing } from './engine/PostProcessing';
import { DOMOverlayHandle } from './BrandNewDayDOM';
import type { ActGates } from './engine/types';

declare global {
  interface Window {
    __BRAND_NEW_DAY_GATES__?: {
      p: number;
      sp: number;
      act1: number;
      act2: number;
      act3: number;
      act4: number;
      act5: number;
      act6: number;
      activeActsCount: number;
    };
  }
}

export interface BrandNewDayCanvasProps {
  scrollRef: React.MutableRefObject<{ p: number; targetP: number }>;
  domHandleRef: React.RefObject<DOMOverlayHandle | null>;
}

export function BrandNewDayCanvas({ scrollRef, domHandleRef }: BrandNewDayCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect device capabilities & reduced motion
    const isMobile = window.innerWidth <= 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // DPR clamped: 1.0 mobile, 1.5 desktop
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);

    // 1. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false, // Post-processing handles smoothing
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      });
    } catch (e) {
      console.error('WebGL not available', e);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.NoToneMapping; // OutputPass will handle ACES tone mapping
    // Clear color: Raw Ink-950 #150406 (Red-black hue ~354deg)
    renderer.setClearColor(0x150406, 1.0);

    const canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    // 2. Scene & Fog (Red-black fog: floor is fog, no finite planes)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x150406);
    const sceneFog = new THREE.FogExp2(0x150406, 0.003);
    scene.fog = sceneFog;

    // 2b. Studio Lights for PBR Metallic Specular Sheen
    const ambientLight = new THREE.AmbientLight(0x0d2440, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 3.2);
    keyLight.position.set(5, 14, 10);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x2b4fd0, 2.5);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // 3. Subsystems
    const cameraRig = new CameraSpine();
    cameraRig.setAspect(container.clientWidth, container.clientHeight);

    // Solid PBR 3D Pipe Fitting
    const solidFitting = new CopperPipeFitting3D();
    solidFitting.group.position.set(0, 9, 0);
    scene.add(solidFitting.group);

    const beadCloud = new BeadCloud();
    scene.add(beadCloud.group);

    const lattice = new MetrologyLattice();
    scene.add(lattice.group);

    const conduits = new ConduitSystem(isMobile);
    conduits.setResolution(container.clientWidth * dpr, container.clientHeight * dpr);
    scene.add(conduits.group);

    const postProcessing = new PostProcessing(renderer, scene, cameraRig.camera);
    postProcessing.setSize(container.clientWidth, container.clientHeight);

    // 4. Mouse Tracking for Parallax (passive)
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 5. Scroll State mutable structure
    const localState: ScrollState = {
      p: 0,
      sp: 0,
      targetP: 0,
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      reducedMotion,
      dpr
    };

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRig.setAspect(w, h);
      renderer.setSize(w, h);
      postProcessing.setSize(w, h);
      conduits.setResolution(w * dpr, h * dpr);
    };
    window.addEventListener('resize', onResize);

    // 6. Dev Gates Exposer for Overlap Verification
    // (window.__BRAND_NEW_DAY_GATES__ is typed at top level)

    // 7. Single Deterministic RAF Loop
    let animId: number;
    const renderLoop = () => {
      // READ SCROLL: Scalar p from mutable ref
      const currentP = scrollRef.current.p;
      localState.p = currentP;
      // Define act axis sp = clamp01(p / 0.82)
      localState.sp = clamp01(currentP / 0.82);

      // Smooth cursor parallax
      localState.mouseX = mouseX;
      localState.mouseY = mouseY;

      const sp = localState.sp;

      // Compute overlapping act gates (0.06 - 0.14 overlap)
      const g1 = (1.0 - smoothstep(0.16, 0.28, sp));
      const g2 = smoothstep(0.16, 0.26, sp) * (1.0 - smoothstep(0.36, 0.46, sp));
      const g3 = smoothstep(0.34, 0.44, sp) * (1.0 - smoothstep(0.52, 0.62, sp));
      const g4 = smoothstep(0.50, 0.60, sp) * (1.0 - smoothstep(0.68, 0.78, sp));
      const g5 = smoothstep(0.66, 0.76, sp) * (1.0 - smoothstep(0.84, 0.94, sp));
      const g6 = smoothstep(0.82, 0.92, currentP); // Act 6 runs on raw p

      if (process.env.NODE_ENV !== 'production') {
        const activeCount = [g1, g2, g3, g4, g5, g6].filter(v => v > 0.01).length;
        window.__BRAND_NEW_DAY_GATES__ = {
          p: currentP,
          sp,
          act1: g1,
          act2: g2,
          act3: g3,
          act4: g4,
          act5: g5,
          act6: g6,
          activeActsCount: activeCount
        };
      }

      // Update 3D Subsystems
      if (sp <= 0.28) {
        solidFitting.group.visible = true;
        solidFitting.group.position.set(0, 9.0 + Math.sin(sp * Math.PI * 8.0) * 0.25, 0);
        solidFitting.group.rotation.x = mouseY * 0.18;
        solidFitting.group.rotation.y = sp * Math.PI * 2.0 + mouseX * 0.28;
      } else {
        const exitT = clamp01((sp - 0.28) / 0.12);
        solidFitting.group.position.z = -exitT * 30.0;
        solidFitting.group.scale.setScalar(Math.max(0.01, 1.25 * (1.0 - exitT)));
        solidFitting.group.visible = exitT < 0.99;
      }

      beadCloud.update(localState);
      lattice.update(localState);
      conduits.update(localState, (val) => cameraRig.getSpinePosition(val));
      cameraRig.update(localState, sceneFog);

      // Render through exact Post-Processing Stack
      postProcessing.render(sp);

      // Update DOM overlays imperatively — ZERO React re-renders
      if (domHandleRef.current) {
        domHandleRef.current.update(sp, currentP);
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      solidFitting.dispose();
      beadCloud.dispose();
      lattice.dispose();
      conduits.dispose();
      postProcessing.dispose();
      renderer.dispose();
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, [scrollRef, domHandleRef]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#150406]"
    />
  );
}
