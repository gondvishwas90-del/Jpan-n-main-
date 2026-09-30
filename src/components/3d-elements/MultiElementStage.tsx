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

    // 3. Instantiate the 6 Crystal-Clear 3D Models for high-density point sampling
    const models = [
      new CopperPipeFitting3D(),  // 0: AboutSnapshot
      new BrassDistributor3D(),    // 1: Industries
      new VrvHeader3D(),           // 2: ProductShowcase
      new ChillerSuction3D(),      // 3: WhyChooseUs
      new SsStrainer3D(),          // 4: Infrastructure
      new RefnetJoint3D(),         // 5: Certifications
    ];

    // Scale models so they sit neatly and comfortably in the corners without crowding cards
    models.forEach((model) => {
      model.group.scale.multiplyScalar(0.95);
    });

    // 4. Sample Ultra-Dense 60,000 Point Cloud for each model
    const POINT_COUNT = 60000;
    const sampledPointClouds = models.map((model) => model.samplePoints(POINT_COUNT));

    // 5. GPU Particle Morph System (Permanently Active Point Cloud)
    const particleMorph = new GpuParticleMorph(POINT_COUNT);
    scene.add(particleMorph.points);
    particleMorph.setVisible(true);

    // 6. Section Configurations & Dynamic Viewport Corner Positions
    const getCornerPositions = (cam: THREE.PerspectiveCamera) => {
      const isMob = window.innerWidth <= 768;
      const isTab = window.innerWidth > 768 && window.innerWidth <= 1024;

      const vFovRad = THREE.MathUtils.degToRad(cam.fov);
      const halfHeight = cam.position.z * Math.tan(vFovRad / 2); // ~5.37
      const halfWidth = halfHeight * cam.aspect;

      // Insets from the screen borders so elements sit nestled purely in the corners,
      // completely leaving the center container cards unblocked and in 100% prime focus.
      let cornerX: number;
      let topY: number;
      let bottomY: number;

      if (isMob) {
        cornerX = Math.min(halfWidth - 0.85, 1.4);
        topY = halfHeight - 1.8;
        bottomY = -(halfHeight - 1.8);
      } else if (isTab) {
        cornerX = Math.max(halfWidth - 2.2, 3.2);
        topY = halfHeight - 2.2;
        bottomY = -(halfHeight - 2.2);
      } else {
        // Desktop / Ultrawide:
        // Position comfortably in the corner margins outside the center content cards (x > 5.5)
        cornerX = Math.max(halfWidth - 2.8, 5.6);
        topY = Math.min(halfHeight - 2.2, 3.1);
        bottomY = -Math.min(halfHeight - 2.2, 3.1);
      }

      return {
        topRight: new THREE.Vector3(cornerX, topY, 0),
        bottomLeft: new THREE.Vector3(-cornerX, bottomY, 0),
        midRight: new THREE.Vector3(cornerX, 0.4, 0),
        topLeft: new THREE.Vector3(-cornerX, topY, 0),
        bottomRight: new THREE.Vector3(cornerX, bottomY, 0),
        floatingCorner: new THREE.Vector3(-cornerX * 0.95, bottomY * 0.85, 0),
      };
    };

    const initialCorners = getCornerPositions(camera);

    const configs: ProductElementConfig[] = [
      {
        name: "Precision Copper Return Bend & Sensor Tube",
        category: "HVAC & Cold Bending",
        corner: "top-right",
        position: initialCorners.topRight.clone(),
        color: new THREE.Color("#fb923c"), // Luminous Polished Copper
      },
      {
        name: "Brass Multi-Port Distributor Manifold",
        category: "Precision CNC Machining",
        corner: "bottom-left",
        position: initialCorners.bottomLeft.clone(),
        color: new THREE.Color("#facc15"), // Radiant Machined Brass
      },
      {
        name: "VRV High-Pressure Header Assembly",
        category: "Commercial VRF Systems",
        corner: "mid-right",
        position: initialCorners.midRight.clone(),
        color: new THREE.Color("#fbbf24"), // Amber Copper Header
      },
      {
        name: "Heavy-Duty Chiller Suction Assembly",
        category: "Industrial Chiller Lines",
        corner: "mid-left",
        position: initialCorners.topLeft.clone(),
        color: new THREE.Color("#ea580c"), // Industrial Deep Bronze
      },
      {
        name: "Industrial SS Strainer & Filter Unit",
        category: "Fluid Filtration Systems",
        corner: "lower-right",
        position: initialCorners.bottomRight.clone(),
        color: new THREE.Color("#93c5fd"), // Electropolished SS / Chrome
      },
      {
        name: "Engineered Refnet Y-Joint Connector",
        category: "Aerodynamic Branch Splitters",
        corner: "floating-right",
        position: initialCorners.floatingCorner.clone(),
        color: new THREE.Color("#f97316"), // Laser Braze Copper
      },
    ];

    // 8. Interactive Mouse Movement & World Raycast Unprojection
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const mouseNDC = new THREE.Vector2(0, 0);
    const mouseWorld = new THREE.Vector3(999, 999, 0);
    const raycaster = new THREE.Raycaster();
    const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

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

      const corners = getCornerPositions(camera);
      configs[0].position.copy(corners.topRight);
      configs[1].position.copy(corners.bottomLeft);
      configs[2].position.copy(corners.midRight);
      configs[3].position.copy(corners.topLeft);
      configs[4].position.copy(corners.bottomRight);
      configs[5].position.copy(corners.floatingCorner);

      if (currentSourceIdx >= 0 && currentTargetIdx >= 0) {
        particleMorph.setSourceAndTarget(
          sampledPointClouds[currentSourceIdx],
          sampledPointClouds[currentTargetIdx],
          configs[currentSourceIdx].position,
          configs[currentTargetIdx].position,
          configs[currentSourceIdx].color,
          configs[currentTargetIdx].color
        );
      }
    };
    window.addEventListener("resize", onResize);

    // 10. Animation Loop (60 FPS)
    let animId: number;
    let clock = new THREE.Clock();
    let currentSourceIdx = -1;
    let currentTargetIdx = -1;
    const modelRotation = new THREE.Vector3();

    const renderLoop = () => {
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Project mouse into 3D world space at z=0 for interactive particle repulsion
      mouseNDC.set(mouseX, mouseY);
      raycaster.setFromCamera(mouseNDC, camera);
      raycaster.ray.intersectPlane(zPlane, mouseWorld);

      // Smooth scroll lerp
      currentScrollSpan += (targetScrollSpan - currentScrollSpan) * 0.12;

      // Calculate current base section and morph fraction
      const baseIdx = Math.min(Math.floor(currentScrollSpan), configs.length - 2);
      const nextIdx = baseIdx + 1;
      const spanFraction = currentScrollSpan - baseIdx; // 0.0 -> 1.0

      // Update active name in UI HUD
      const activeIdx = spanFraction > 0.5 ? nextIdx : baseIdx;
      if (activeIdx !== lastActiveIndex) {
        lastActiveIndex = activeIdx;
        setActiveProductName(configs[activeIdx].name);
        setActiveCategory(configs[activeIdx].category);
      }

      // Configure GPU particle morph pair if section span changed
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

      // Continuous 3D rotation: Idle spin + interactive mouse tilt parallax
      modelRotation.set(
        -mouseY * 0.4 + Math.sin(time * 0.8) * 0.08,
        mouseX * 0.5 + time * 0.35,
        Math.cos(time * 0.6) * 0.05
      );

      // Update particle morphing shader permanently (always visible)
      particleMorph.update(spanFraction, time, dpr, modelRotation, mouseWorld);

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
