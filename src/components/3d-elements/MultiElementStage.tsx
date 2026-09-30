"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  CopperPipeFitting3D,
  BrassDistributor3D,
  VrvHeader3D,
  ChillerSuction3D,
  SsStrainer3D,
  RefnetJoint3D,
} from "./models";
import { GpuParticleMorph } from "./engine/GpuParticleMorph";

export interface MultiElementStageProps {
  className?: string;
  speed?: number;
}

interface ProductElementConfig {
  name: string;
  category: string;
  corner: "top-right" | "bottom-left" | "mid-right" | "mid-left" | "lower-right" | "floating-right";
  position: THREE.Vector3;
  color: THREE.Color;
}

export function MultiElementStage({ className = "" }: MultiElementStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProductName, setActiveProductName] = useState<string>("Precision Copper Return Bend & Sensor Tube");
  const [activeCategory, setActiveCategory] = useState<string>("HVAC & Refrigeration");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 14);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // 2. High-Fidelity Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0d2440, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 3.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0e7ff, 1.4);
    fillLight.position.set(-7, -4, 6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x2563eb, 2.8);
    rimLight.position.set(0, -6, -5);
    scene.add(rimLight);

    // 3. Instantiate the 6 Crystal-Clear 3D Models
    const models = [
      new CopperPipeFitting3D(),  // 0: AboutSnapshot
      new BrassDistributor3D(),    // 1: Industries
      new VrvHeader3D(),           // 2: ProductShowcase
      new ChillerSuction3D(),      // 3: WhyChooseUs
      new SsStrainer3D(),          // 4: Infrastructure
      new RefnetJoint3D(),         // 5: Certifications
    ];

    // Model group wrappers to position independently in designated corners
    const modelWrappers: THREE.Group[] = [];
    models.forEach((model) => {
      const wrapper = new THREE.Group();
      wrapper.add(model.group);
      scene.add(wrapper);
      modelWrappers.push(wrapper);
      model.setOpacity(0);
    });

    // 4. Pre-sample point clouds for each model (16,000 points each)
    const POINT_COUNT = 16000;
    const sampledPointClouds = models.map((model) => model.samplePoints(POINT_COUNT));

    // 5. GPU Particle Morph System
    const particleMorph = new GpuParticleMorph(POINT_COUNT);
    scene.add(particleMorph.points);

    // 6. Section Configurations & Designated Empty Corner Coordinates
    // Scaled appropriately so elements occupy whitespace without overlapping content
    const cornerScale = isMobile ? 0.55 : isTablet ? 0.75 : 1.0;
    const xOffset = isMobile ? 1.6 : isTablet ? 2.8 : 3.8;
    const yOffset = isMobile ? 1.8 : 1.4;

    const configs: ProductElementConfig[] = [
      {
        name: "Precision Copper Return Bend & Sensor Tube",
        category: "HVAC & Cold Bending",
        corner: "top-right",
        position: new THREE.Vector3(xOffset, yOffset, 0),
        color: new THREE.Color("#d9774a"),
      },
      {
        name: "Brass Multi-Port Distributor Manifold",
        category: "Precision CNC Machining",
        corner: "bottom-left",
        position: new THREE.Vector3(-xOffset, -yOffset, 0),
        color: new THREE.Color("#d4af37"),
      },
      {
        name: "VRV High-Pressure Header Assembly",
        category: "Commercial VRF Systems",
        corner: "mid-right",
        position: new THREE.Vector3(xOffset, 0.4, 0),
        color: new THREE.Color("#d47a4c"),
      },
      {
        name: "Heavy-Duty Chiller Suction Assembly",
        category: "Industrial Chiller Lines",
        corner: "mid-left",
        position: new THREE.Vector3(-xOffset, 0.2, 0),
        color: new THREE.Color("#cb6c3c"),
      },
      {
        name: "Industrial SS Strainer & Filter Unit",
        category: "Fluid Filtration Systems",
        corner: "lower-right",
        position: new THREE.Vector3(xOffset, -yOffset, 0),
        color: new THREE.Color("#e2e8f0"),
      },
      {
        name: "Engineered Refnet Y-Joint Connector",
        category: "Aerodynamic Branch Splitters",
        corner: "floating-right",
        position: new THREE.Vector3(xOffset * 0.9, yOffset * 1.1, 0),
        color: new THREE.Color("#d9774a"),
      },
    ];

    // Position each wrapper at its respective corner
    configs.forEach((cfg, idx) => {
      modelWrappers[idx].position.copy(cfg.position);
      modelWrappers[idx].scale.setScalar(cornerScale);
    });

    // Initial state: Model 0 active and 100% crystal clear
    models[0].setOpacity(1.0);

    // 7. Metrology Blueprint Orbit Ring around active element
    const orbitGroup = new THREE.Group();
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    for (let r = 0; r < 3; r++) {
      const ringGeom = new THREE.RingGeometry(2.4 + r * 1.0, 2.42 + r * 1.0, 48);
      const ring = new THREE.Line(ringGeom, ringMat);
      ring.rotation.x = Math.PI * 0.35 + r * 0.2;
      orbitGroup.add(ring);
    }
    scene.add(orbitGroup);

    // 8. Interactive Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 9. Scroll Tracking Across the 6 Homepage Sections
    let currentScrollSpan = 0; // 0.0 to 5.0
    let targetScrollSpan = 0;
    let lastActiveIndex = 0;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      if (docHeight <= 0) return;

      const heroOffset = winHeight * 0.65;
      const globeOffset = docHeight - winHeight * 0.95;
      const effectiveDist = Math.max(globeOffset - heroOffset, 1);

      const normalizedProgress = THREE.MathUtils.clamp((scrollY - heroOffset) / effectiveDist, 0, 1);
      targetScrollSpan = normalizedProgress * (configs.length - 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 10. Animation Loop (60 FPS)
    let animId: number;
    let clock = new THREE.Clock();
    let currentSourceIdx = -1;
    let currentTargetIdx = -1;

    const renderLoop = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Smooth scroll lerp
      currentScrollSpan += (targetScrollSpan - currentScrollSpan) * 0.12;

      // Calculate current base section and morph fraction
      const baseIdx = Math.min(Math.floor(currentScrollSpan), configs.length - 2);
      const nextIdx = baseIdx + 1;
      const spanFraction = currentScrollSpan - baseIdx; // 0.0 -> 1.0

      // Update active name in UI
      const activeIdx = spanFraction > 0.5 ? nextIdx : baseIdx;
      if (activeIdx !== lastActiveIndex) {
        lastActiveIndex = activeIdx;
        setActiveProductName(configs[activeIdx].name);
        setActiveCategory(configs[activeIdx].category);
      }

      // Configure GPU particle morph pair if indices changed
      if (currentSourceIdx !== baseIdx || currentTargetIdx !== nextIdx) {
        currentSourceIdx = baseIdx;
        currentTargetIdx = nextIdx;

        particleMorph.setSourceAndTarget(
          sampledPointClouds[baseIdx],
          sampledPointClouds[nextIdx],
          configs[baseIdx].position,
          configs[nextIdx].position,
          configs[baseIdx].color,
          configs[nextIdx].color
        );
      }

      // Transition Curve:
      // [0.00 -> 0.15]: Solid Base Model at 100% opacity, stationary in its corner
      // [0.15 -> 0.85]: GPU Particle Morph active (particles explode, stream, and re-condense)
      // [0.85 -> 1.00]: Solid Next Model at 100% opacity, stationary in its corner
      const morphStart = 0.12;
      const morphEnd = 0.88;

      let baseOpacity = 0;
      let nextOpacity = 0;
      let morphProgress = 0;
      let particlesVisible = false;

      if (spanFraction < morphStart) {
        baseOpacity = 1.0;
        nextOpacity = 0.0;
        particlesVisible = false;
        morphProgress = 0.0;
      } else if (spanFraction > morphEnd) {
        baseOpacity = 0.0;
        nextOpacity = 1.0;
        particlesVisible = false;
        morphProgress = 1.0;
      } else {
        particlesVisible = true;
        morphProgress = (spanFraction - morphStart) / (morphEnd - morphStart);

        // Cross-fade solid models during the start/end of particle flight
        baseOpacity = Math.max(0, 1.0 - morphProgress * 2.5);
        nextOpacity = Math.max(0, (morphProgress - 0.6) * 2.5);
      }

      // Apply opacities to models
      models.forEach((model, i) => {
        if (i === baseIdx) {
          model.setOpacity(baseOpacity);
        } else if (i === nextIdx) {
          model.setOpacity(nextOpacity);
        } else {
          model.setOpacity(0);
        }
      });

      // Update particle morphing shader
      particleMorph.setVisible(particlesVisible);
      if (particlesVisible) {
        particleMorph.update(morphProgress, time, dpr);
      }

      // Add gentle idle floating and mouse parallax to the active model wrapper
      const currentActiveWrapper = modelWrappers[activeIdx];
      if (currentActiveWrapper) {
        const floatY = Math.sin(time * 1.5) * 0.12;
        const floatRot = Math.cos(time * 1.2) * 0.06;

        currentActiveWrapper.position.y = configs[activeIdx].position.y + floatY;
        currentActiveWrapper.rotation.y = floatRot + mouseX * 0.35;
        currentActiveWrapper.rotation.x = -mouseY * 0.25;

        // Position metrology orbit ring around active model
        orbitGroup.position.copy(currentActiveWrapper.position);
        orbitGroup.rotation.z = time * 0.2;
        orbitGroup.visible = (baseOpacity > 0.4 || nextOpacity > 0.4);
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      models.forEach((m) => m.dispose());
      particleMorph.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
    >
      {/* Subtle Metrology Engineering Tag (Minimalistic HUD Badge in corner) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 pointer-events-none transition-all duration-300">
        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            3D SPEC • {activeCategory}
          </span>
          <span className="text-xs font-semibold tracking-tight text-white/90">
            {activeProductName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MultiElementStage;
