"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export interface PlantLocationMarker {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
  phi: number;
  theta: number;
  size?: number;
}

interface CobeInteractiveGlobeProps {
  markers: PlantLocationMarker[];
  activeIndex: number | null;
  onSelectMarker?: (index: number) => void;
  accentColor?: [number, number, number];
  isDark?: boolean;
  className?: string;
}

export function CobeInteractiveGlobe({
  markers,
  activeIndex,
  accentColor = [46 / 255, 94 / 255, 153 / 255],
  isDark = false,
  className = ""
}: CobeInteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const defaultPhi = markers[0]?.phi ?? (-77.5014 * Math.PI / 180 - Math.PI / 2);
  const defaultTheta = markers[0]?.theta ?? (28.5129 * Math.PI / 180);
  const phiRef = useRef(defaultPhi);
  const thetaRef = useRef(defaultTheta);
  const targetPhiRef = useRef(defaultPhi);
  const targetThetaRef = useRef(defaultTheta);
  const isDragging = useRef(false);
  const dragStartPhi = useRef(defaultPhi);

  useEffect(() => {
    if (activeIndex !== null && markers[activeIndex]) {
      const active = markers[activeIndex];
      targetPhiRef.current = active.phi;
      targetThetaRef.current = active.theta;
    }
  }, [activeIndex, markers]);

  useEffect(() => {
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const cobeMarkers = markers.map((m, idx) => ({
      location: [m.lat, m.lng] as [number, number],
      size: activeIndex === idx ? 0.035 : (m.size || 0.018),
      color: activeIndex === idx ? ([1, 1, 1] as [number, number, number]) : accentColor
    }));

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 2 : 2, 2),
      width: (width || 800) * 2,
      height: (width || 800) * 2,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: isDark ? 1 : 0,
      diffuse: 1.6,
      mapSamples: 24000,
      mapBrightness: isDark ? 2.4 : 1.4,
      baseColor: isDark ? [0.12, 0.16, 0.24] : [0.94, 0.95, 0.97],
      markerColor: accentColor,
      glowColor: isDark ? [0.1, 0.25, 0.35] : [0.88, 0.93, 0.98],
      markers: cobeMarkers,
      arcs: [],
      arcColor: accentColor,
      arcWidth: 0
    });

    let animationFrameId: number;
    let idleTick = 0;

    const animate = () => {
      idleTick += 0.012;
      let targetPhi = targetPhiRef.current;
      let targetTheta = targetThetaRef.current;
      if (!isDragging.current) {
        targetPhi += Math.sin(idleTick) * 0.006;
        targetTheta += Math.cos(idleTick * 0.8) * 0.004;
      }
      let diffPhi = targetPhi - phiRef.current;
      diffPhi = ((diffPhi + Math.PI) % (2 * Math.PI)) - Math.PI;
      phiRef.current += diffPhi * 0.08;
      thetaRef.current += (targetTheta - thetaRef.current) * 0.08;
      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width: (width || 800) * 2,
        height: (width || 800) * 2
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [markers, activeIndex, accentColor, isDark]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          isDragging.current = true;
          pointerInteracting.current = e.clientX;
          dragStartPhi.current = targetPhiRef.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          isDragging.current = false;
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
          if (activeIndex !== null && markers[activeIndex]) {
            targetPhiRef.current = markers[activeIndex].phi;
            targetThetaRef.current = markers[activeIndex].theta;
          }
        }}
        onPointerOut={() => {
          isDragging.current = false;
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
          if (activeIndex !== null && markers[activeIndex]) {
            targetPhiRef.current = markers[activeIndex].phi;
            targetThetaRef.current = markers[activeIndex].theta;
          }
        }}
        onMouseMove={(e) => {
          if (isDragging.current && pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            targetPhiRef.current = dragStartPhi.current + delta * 0.003;
          }
        }}
        onTouchMove={(e) => {
          if (isDragging.current && pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            targetPhiRef.current = dragStartPhi.current + delta * 0.003;
          }
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-1000 opacity-100 touch-none"
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
      />
      {/* Atmospheric Halo & Orbital Rings */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none scale-[0.84] transition-all duration-700"
        style={{
          border: `2.5px solid rgba(${accentColor[0] * 255}, ${accentColor[1] * 255}, ${accentColor[2] * 255}, 0.22)`,
          boxShadow: `0 0 140px rgba(${accentColor[0] * 255}, ${accentColor[1] * 255}, ${accentColor[2] * 255}, 0.16)`
        }}
      />
      <div 
        className="absolute inset-0 rounded-full pointer-events-none scale-[0.96] opacity-30"
        style={{
          border: `1px dashed rgba(${accentColor[0] * 255}, ${accentColor[1] * 255}, ${accentColor[2] * 255}, 0.2)`
        }}
      />
    </div>
  );
}
