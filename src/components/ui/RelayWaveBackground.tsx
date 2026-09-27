"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface RelayWaveBackgroundProps {
  className?: string;
  speed?: number;
}

export function RelayWaveBackground({
  className = "",
  speed = 1.0,
}: RelayWaveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ current: 0, target: 0, velocity: 0 });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, and WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Interactive Scroll-Driven Color Flow Shader
    // The wave's travel and macro movement are 100% DRIVEN BY SCROLLING,
    // avoiding the "video looping in background" feel while ensuring the first end starts in section 1.
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uScroll;     // Number of viewport heights scrolled (0.0 at top of Hero)
      uniform float uVelocity;   // Real-time scroll speed
      uniform vec2 uMouse;

      // Color Palette: Faded, Sophisticated Corporate Blues & Cyans
      const vec3 cBackground = vec3(0.024, 0.059, 0.106); // #060f1b (Matches Hero)
      const vec3 cDeepNavy   = vec3(0.047, 0.176, 0.369); // #0c2d5e
      const vec3 cRoyalBlue  = vec3(0.145, 0.388, 0.922); // #2563eb
      const vec3 cElectric   = vec3(0.220, 0.741, 0.973); // #38bdf8 (Cyan)
      const vec3 cIceCyan    = vec3(0.878, 0.949, 0.996); // #e0f2fe
      const vec3 cCoreWhite  = vec3(0.92, 0.96, 1.0);     // Soft ice white

      // Serpentine path matching the user's orange drawing:
      // Enters top-right (x > 0), sweeps diagonally down to mid-left (x < 0),
      // loops past center, and sweeps down to bottom-right!
      // MOVEMENT IS TIED 1:1 TO SCROLLING:
      float getRiverPath(float y, float scroll, float time, float vel) {
        // Direct scroll progression (scrolling physically moves the river through the screen)
        float travel = scroll * 2.4 + vel * 0.6;
        float phase = (1.0 - y) * 2.8 + travel;

        float s1 = sin(phase) * 0.36;
        float s2 = cos(phase * 0.58) * 0.16;
        
        // Very subtle ambient breathing (does NOT look like a running video)
        float microBreathe = sin(phase * 1.6 + time * 0.25) * 0.018;

        return s1 + s2 + microBreathe;
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;
        vec2 p = (uv - 0.5);
        p.x *= aspect;

        // Mouse Parallax
        p.x += uMouse.x * 0.03;
        p.y += uMouse.y * 0.02;

        float yNorm = uv.y; // 0.0 (bottom of screen) to 1.0 (top of screen)

        // 1. Primary River Spine Coordinate
        float riverX = getRiverPath(yNorm, uScroll, uTime, uVelocity) * aspect;

        // Subtle fluid ripple along the stream
        float fluidRipple = sin(yNorm * 8.0 - uScroll * 3.0 + uTime * 0.3) * 0.02;
        float dist = abs(p.x - riverX + fluidRipple);

        // --- LAYER 1: Broad Volumetric Ambient Canopy (Softest feathering) ---
        float mistWidth = 1.05;
        float mistGlow = exp(-pow(dist / mistWidth, 2.0) * 1.25);

        // --- LAYER 2: Wide Velvety Blue Body (Broad river presence) ---
        float bodyWidth = 0.62;
        float bodyGlow = exp(-pow(dist / bodyWidth, 2.0) * 1.75);

        // --- LAYER 3: Soft Ice Cyan / White Core ---
        float coreWidth = 0.28;
        float coreGlow = exp(-pow(dist / coreWidth, 2.0) * 2.6);

        // --- LAYER 4: Broad Flowing Silk Folds (Travel with scroll) ---
        float fold1 = exp(-pow(abs(p.x - riverX + sin(yNorm * 4.5 + uScroll * 1.5) * 0.16) / 0.28, 2.0) * 1.8);
        float fold2 = exp(-pow(abs(p.x - riverX - cos(yNorm * 3.8 - uScroll * 1.2) * 0.18) / 0.32, 2.0) * 1.8);
        float silkFlow = (fold1 * 0.6 + fold2 * 0.5) * (0.85 + 0.2 * sin(yNorm * 5.0 - uScroll * 2.0));

        // --- LAYER 5: Secondary Ethereal Companion Veil ---
        float compX = getRiverPath(yNorm, uScroll + 0.12, uTime * 0.7, uVelocity) * aspect * 0.85;
        float compDist = abs(p.x - compX);
        float compGlow = exp(-pow(compDist / 0.88, 2.0) * 1.6);

        // Faded, Elegant Color Composition
        vec3 waveColor = vec3(0.0);

        // Broad Ambient Mist
        waveColor += cDeepNavy * (mistGlow * 0.38) + cRoyalBlue * (mistGlow * 0.16);

        // Companion Veil
        waveColor += cDeepNavy * (compGlow * 0.15) + cRoyalBlue * (compGlow * 0.07);

        // Fluid Body
        waveColor += cRoyalBlue * (bodyGlow * 0.24) + cElectric * (bodyGlow * 0.16);

        // Silk Undulations
        waveColor += cIceCyan * (silkFlow * 0.12);

        // Faded Core
        waveColor += cIceCyan * (coreGlow * 0.22) + cCoreWhite * (coreGlow * 0.15);

        // Combine softly with midnight background
        vec3 col = cBackground + waveColor;

        // Viewport edge vignette
        float vignette = smoothstep(0.0, 0.08, uv.x) * smoothstep(1.0, 0.92, uv.x);
        col = mix(cBackground, col, vignette);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const uniforms = {
      uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uVelocity: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    // 3. Floating Ambient Glowing Dust Motes
    const MOTE_COUNT = 65;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(MOTE_COUNT * 3);
    const moteSeeds = new Float32Array(MOTE_COUNT * 3);

    for (let i = 0; i < MOTE_COUNT; i++) {
      motePos[i * 3] = (Math.random() - 0.5) * 2;
      motePos[i * 3 + 1] = (Math.random() - 0.5) * 2;
      motePos[i * 3 + 2] = 0;

      moteSeeds[i * 3] = 0.04 + Math.random() * 0.1;
      moteSeeds[i * 3 + 1] = Math.random() * 100;
      moteSeeds[i * 3 + 2] = 0.5 + Math.random() * 1.5;
    }
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));

    const moteMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 2.0,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);

    // 4. Scroll Tracking (Directly integrated with Lenis & window scroll)
    const getScrollY = () => {
      if (typeof window === "undefined") return 0;
      const lenis = (window as unknown as { __lenis?: { scroll?: number } }).__lenis;
      if (lenis && typeof lenis.scroll === "number") {
        return lenis.scroll;
      }
      return window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    };

    const updateScrollTarget = () => {
      const vh = window.innerHeight || 1;
      let relativeScroll = 0;
      if (container) {
        const parent = container.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          relativeScroll = Math.max(0, -rect.top);
        }
      }
      if (relativeScroll === 0) {
        const scrollY = getScrollY();
        relativeScroll = Math.max(0, scrollY - vh * 0.9);
      }
      scrollRef.current.target = relativeScroll / vh;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener("scroll", updateScrollTarget, { passive: true });
    window.addEventListener("wheel", updateScrollTarget, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    updateScrollTarget();

    // 5. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let previousScroll = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continually refresh scroll target from Lenis or native window scroll
      updateScrollTarget();

      const elapsed = clock.getElapsedTime() * speed;

      // Smooth scroll lerp with tactile responsiveness
      const currentScroll = scrollRef.current.current;
      const targetScroll = scrollRef.current.target;
      scrollRef.current.current += (targetScroll - currentScroll) * 0.08;
      
      const scrollVelocity = (scrollRef.current.current - previousScroll) * 20;
      previousScroll = scrollRef.current.current;

      // Mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Update Uniforms
      uniforms.uTime.value = elapsed;
      uniforms.uScroll.value = scrollRef.current.current;
      uniforms.uVelocity.value = scrollVelocity;
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      // Animate Motes (drift down when scrolling)
      const mPos = moteGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < MOTE_COUNT; i++) {
        const spd = moteSeeds[i * 3];
        const seed = moteSeeds[i * 3 + 1];

        // Motes physically move with scroll
        mPos[i * 3 + 1] -= spd * 0.015 + scrollVelocity * 0.02;
        mPos[i * 3] += Math.sin(elapsed * 0.3 + seed) * 0.002;

        if (mPos[i * 3 + 1] < -1.1) {
          mPos[i * 3 + 1] = 1.1;
          mPos[i * 3] = (Math.random() - 0.5) * 2;
        } else if (mPos[i * 3 + 1] > 1.1) {
          mPos[i * 3 + 1] = -1.1;
        }
      }
      moteGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      uniforms.uResolution.value.set(w, h);
      renderer.setSize(w, h);
      updateScrollTarget();
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup
    return () => {
      window.removeEventListener("scroll", updateScrollTarget);
      window.removeEventListener("wheel", updateScrollTarget);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      moteGeo.dispose();
      moteMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-[#060f1b] ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Subtle Technical Dot Matrix Coordinate Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.35) 1px, transparent 0)`,
          backgroundSize: "46px 46px",
        }}
      />
    </div>
  );
}
