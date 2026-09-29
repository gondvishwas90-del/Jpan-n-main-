"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface RelayWaveBackgroundProps {
  className?: string;
  speed?: number;
}

/**
 * Awwwards-Caliber Precision Industrial Fluid & Thermal Caustics Background
 * 
 * Inspired by high-end engineering showcases (Apple Pro, Polestar, Leica).
 * Blends liquid copper thermal flowlines with JPAN deep cobalt currents,
 * subtle laser metrology CAD grid lines, and interactive mouse/scroll fluid dynamics.
 * 
 * Fully responsive to Light and Dark mode, perfectly preserving card legibility.
 */
export function RelayWaveBackground({
  className = "",
  speed = 1.0,
}: RelayWaveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect device capabilities & reduced motion
    const isMobile = window.innerWidth <= 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);

    // Check initial dark mode state
    let isDark = document.documentElement.classList.contains("dark");
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // 1. Scene, Camera, and WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

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
    renderer.setClearColor(0x000000, 0.0);

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // 2. High-Precision Awwwards Liquid Metal Shader
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
      uniform float uScroll;
      uniform vec2 uMouse;
      uniform float uIsDark;
      uniform float uSpeed;

      // Simplex 2D noise implementation for silky domain warping
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Fractional Brownian Motion (fBm)
      float fbm(vec2 p) {
        float total = 0.0;
        float amp = 0.55;
        for (int i = 0; i < 4; i++) {
          total += amp * snoise(p);
          p = p * 2.03 + vec2(1.2, 0.7);
          amp *= 0.48;
        }
        return total;
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);

        // Aspect corrected coordinates
        float t = uTime * 0.18 * uSpeed;

        // Interactive mouse displacement (soft magnetic wake)
        vec2 mouseOffset = (uMouse - 0.5) * 1.6;
        float mouseDist = length(p - mouseOffset);
        float mouseImpulse = exp(-mouseDist * 2.8) * 0.45;

        // Scroll flow velocity
        float scrollOffset = uScroll * 1.8;

        // Multi-octave domain warping (simulating laminar thermal flow of copper & refrigerant)
        vec2 q = vec2(
          fbm(p * 0.85 + vec2(0.0, t * 0.8) + vec2(mouseImpulse * 0.3, scrollOffset * 0.2)),
          fbm(p * 0.85 + vec2(4.3, t * 0.6) - vec2(mouseImpulse * 0.2, 0.0))
        );

        vec2 r = vec2(
          fbm(p * 1.2 + q * 1.5 + vec2(1.7, 9.2) + vec2(t * 0.4, 0.0)),
          fbm(p * 1.2 + q * 1.5 + vec2(8.3, 2.8) + vec2(0.0, t * 0.5))
        );

        float flow = fbm(p * 0.95 + r * 1.8 + mouseImpulse * 0.5);

        // --- JPAN BRAND COLOR PALETTE DEFINITION ---
        // 1. JPAN Deep Cobalt / Sapphire: #2E5E99 -> vec3(0.18, 0.368, 0.6)
        vec3 cCobaltPrimary = vec3(0.180, 0.368, 0.600);
        // 2. Luminous Ice Cyan / Highlight: #7BA4D0 -> vec3(0.482, 0.643, 0.815)
        vec3 cCobaltHighlight = vec3(0.482, 0.643, 0.815);
        // 3. Precision Metallic Copper / Gold: #D97706 / #E06D3B -> vec3(0.85, 0.466, 0.231)
        vec3 cCopper = vec3(0.850, 0.466, 0.231);
        vec3 cCopperGleam = vec3(0.960, 0.680, 0.420);

        // Dark vs Light Base Field
        vec3 cDarkBase = vec3(0.039, 0.078, 0.133); // #0A1422 deep midnight navy
        vec3 cLightBase = vec3(0.905, 0.941, 0.980); // #E7F0FA clean ice pearl

        vec3 baseField = mix(cLightBase, cDarkBase, uIsDark);

        // 1. Primary Cobalt Fluid Ribbons
        float ribbon1 = smoothstep(-0.4, 0.7, flow);
        vec3 colorFlow = mix(baseField, cCobaltPrimary, ribbon1 * (uIsDark > 0.5 ? 0.75 : 0.28));

        // 2. Cyan Caustic Rim
        float rim = pow(clamp(flow + 0.3, 0.0, 1.0), 3.2);
        colorFlow = mix(colorFlow, cCobaltHighlight, rim * (uIsDark > 0.5 ? 0.65 : 0.35));

        // 3. Molten Copper Streamlines (Symbolizing copper thermal piping craft)
        // High-contrast, narrow filaments of glowing metallic copper
        float copperMask = smoothstep(0.45, 0.68, r.x) * smoothstep(0.42, 0.65, q.y);
        float copperShine = pow(clamp(r.y * 1.2, 0.0, 1.0), 4.5);
        vec3 copperFinal = mix(cCopper, cCopperGleam, copperShine);

        colorFlow = mix(colorFlow, copperFinal, copperMask * (uIsDark > 0.5 ? 0.70 : 0.45));

        // 4. Subtle Engineering CAD Metrology Grid (Awwwards blueprint detail)
        vec2 gridUv = fract(uv * vec2(28.0, 16.0));
        float gridLineX = smoothstep(0.965, 0.99, gridUv.x);
        float gridLineY = smoothstep(0.965, 0.99, gridUv.y);
        float cadGrid = max(gridLineX, gridLineY) * 0.045; // ultra-faint, elegant

        // Micro-plus crosses at major coordinates
        vec2 crossUv = fract(uv * vec2(7.0, 4.0)) - 0.5;
        float crossArm = min(
          max(abs(crossUv.x) - 0.015, abs(crossUv.y) - 0.002),
          max(abs(crossUv.y) - 0.015, abs(crossUv.x) - 0.002)
        );
        float crossMark = (1.0 - smoothstep(0.0, 0.006, crossArm)) * 0.06;

        vec3 gridColor = uIsDark > 0.5 ? vec3(0.482, 0.643, 0.815) : vec3(0.180, 0.368, 0.600);
        colorFlow += gridColor * (cadGrid + crossMark);

        // 5. Cinematic Vignette (keeps center luminous, corners deep)
        float vignette = 1.0 - length((uv - 0.5) * 1.35);
        vignette = smoothstep(0.1, 0.95, vignette);

        // In light mode: ensure high contrast readability for cards
        float finalAlpha = uIsDark > 0.5 ? (0.65 + flow * 0.25) * vignette : (0.28 + flow * 0.15) * vignette;

        gl_FragColor = vec4(colorFlow, finalAlpha);
      }
    `;

    // 3. Uniforms Setup
    const uniforms = {
      uResolution: { value: new THREE.Vector2(container.clientWidth * dpr, container.clientHeight * dpr) },
      uTime: { value: 0.0 },
      uScroll: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uIsDark: { value: isDark ? 1.0 : 0.0 },
      uSpeed: { value: reducedMotion ? 0.3 : speed },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // 4. Mouse & Scroll Physics Tracking
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const scroll = { current: 0, target: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX / window.innerWidth;
      mouse.targetY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scroll.target = window.scrollY / maxScroll;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w * dpr, h * dpr);
    };
    window.addEventListener("resize", onResize);

    // 5. High-FPS Physics Render Loop
    let animId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * (reducedMotion ? 0.02 : 0.06);
      mouse.y += (mouse.targetY - mouse.y) * (reducedMotion ? 0.02 : 0.06);
      uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Scroll smoothing
      scroll.current += (scroll.target - scroll.current) * 0.08;
      uniforms.uScroll.value = scroll.current;

      // Time progression
      uniforms.uTime.value += dt;

      // Theme toggle update
      uniforms.uIsDark.value = isDark ? 1.0 : 0.0;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${className}`}
    />
  );
}

export default RelayWaveBackground;
