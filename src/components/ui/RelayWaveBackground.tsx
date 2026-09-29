"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { BeadCloud } from "@/components/brand-new-day/engine/BeadCloud";
import { MetrologyLattice } from "@/components/brand-new-day/engine/MetrologyLattice";
import { ConduitSystem } from "@/components/brand-new-day/engine/ConduitSystem";
import { CameraSpine } from "@/components/brand-new-day/engine/CameraSpine";
import { PostProcessing } from "@/components/brand-new-day/engine/PostProcessing";
import { ScrollState, clamp01 } from "@/components/brand-new-day/engine/types";

export interface RelayWaveBackgroundProps {
  className?: string;
  speed?: number;
}

/**
 * Replaces the legacy green wave with the 3D Brand New Day Precision Copper Fitting & Metrology Room
 * Driven strictly as a pure function of scroll p (0 -> 1)
 * Completely isolated from Hero, Globe (ContactMap), and Footer
 */
export function RelayWaveBackground({
  className = "",
}: RelayWaveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);

    // 1. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(dpr);
    // Transparent / dark red-black ink
    renderer.setClearColor(0x0a121d, 0.45);

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // 2. Scene
    const scene = new THREE.Scene();
    const sceneFog = new THREE.FogExp2(0x0a121d, 0.0035);
    scene.fog = sceneFog;

    // 3. Subsystems
    const cameraRig = new CameraSpine();
    cameraRig.setAspect(container.clientWidth, container.clientHeight);

    const beadCloud = new BeadCloud();
    scene.add(beadCloud.group);

    const lattice = new MetrologyLattice();
    scene.add(lattice.group);

    const conduits = new ConduitSystem(isMobile);
    conduits.setResolution(container.clientWidth * dpr, container.clientHeight * dpr);
    scene.add(conduits.group);

    const postProcessing = new PostProcessing(renderer, scene, cameraRig.camera);
    postProcessing.setSize(container.clientWidth, container.clientHeight);

    // 4. Mouse Tracking
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 5. Scroll State Tracking
    const scrollState: ScrollState = {
      p: 0,
      sp: 0,
      targetP: 0,
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      reducedMotion,
      dpr,
    };

    const onScroll = () => {
      // Calculate scroll p relative to window scroll
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const rawP = clamp01(window.scrollY / docHeight);
      scrollState.p = rawP;
      scrollState.sp = clamp01(rawP / 0.82);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRig.setAspect(w, h);
      renderer.setSize(w, h);
      postProcessing.setSize(w, h);
      conduits.setResolution(w * dpr, h * dpr);
    };
    window.addEventListener("resize", onResize);

    // 6. RAF Loop
    let animId: number;
    const loop = () => {
      scrollState.mouseX = mouseX;
      scrollState.mouseY = mouseY;

      beadCloud.update(scrollState);
      lattice.update(scrollState);
      conduits.update(scrollState, (val) => cameraRig.getSpinePosition(val));
      cameraRig.update(scrollState, sceneFog);

      postProcessing.render(scrollState.sp);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      beadCloud.dispose();
      lattice.dispose();
      conduits.dispose();
      postProcessing.dispose();
      renderer.dispose();
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full pointer-events-none ${className}`}
    />
  );
}

export default RelayWaveBackground;
