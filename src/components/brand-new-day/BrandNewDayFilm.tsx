"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Volume2, Shield } from 'lucide-react';
import { BrandNewDayCanvas } from './BrandNewDayCanvas';
import { BrandNewDayDOM, DOMOverlayHandle } from './BrandNewDayDOM';

export interface BrandNewDayFilmProps {
  className?: string;
}

export function BrandNewDayFilm({ className = "" }: BrandNewDayFilmProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<{ p: number; targetP: number }>({ p: 0, targetP: 0 });
  const domHandleRef = useRef<DOMOverlayHandle | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Passive scroll handler that writes scalar p to mutable ref
    // ZERO React setState calls = ZERO re-renders
    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const totalDist = track.scrollHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const scrolled = -rect.top;
      const rawP = Math.max(0, Math.min(1, scrolled / totalDist));
      scrollRef.current.p = rawP;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Trigger initial calculation
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className={`relative w-full h-[2200vh] bg-[#150406] text-[#f2f3f5] ${className}`}
    >
      {/* Single Sticky Full-Screen Stage (0 sections, 1 canvas) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none">
        
        {/* 1. Core WebGL Canvas Engine */}
        <BrandNewDayCanvas scrollRef={scrollRef} domHandleRef={domHandleRef} />

        {/* 2. Kinetic DOM Typography Overlays */}
        <BrandNewDayDOM ref={domHandleRef} />

        {/* 3. Top Navigation & Telemetry HUD */}
        <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 py-6 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#9a8a8d] hover:text-[#f2f3f5] transition-colors py-2 px-3 rounded-full bg-[#1e070a]/60 border border-[#431a20]/40 backdrop-blur-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#e0202b]" />
            <span>JPAN METROLOGY</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#9a8a8d] px-3.5 py-1.5 rounded-full bg-[#1e070a]/60 border border-[#431a20]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#e0202b] animate-pulse" />
              <span>2200vh CONTINUOUS TRACK</span>
            </div>

            <Link
              href="/products"
              className="px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wider bg-[#e0202b] text-white hover:bg-[#ff5d64] transition-all shadow-[0_0_20px_rgba(224,32,43,0.4)]"
            >
              EXPLORE FITTINGS
            </Link>
          </div>
        </header>

        {/* 4. Bottom Scroll Cue & Technical Spec */}
        <footer className="absolute bottom-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 py-6 pointer-events-none text-xs font-mono text-[#75666a]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#2b4fd0]" />
            <span>TOLERANCE: &plusmn;0.02MM &bull; ALLOY: C12200</span>
          </div>
          <div className="flex items-center gap-2 tracking-widest uppercase">
            <span>SCROLL TO TRAVERSE 6 ACTS</span>
            <span className="inline-block w-1.5 h-3 bg-[#e0202b] animate-bounce" />
          </div>
        </footer>

      </div>
    </div>
  );
}
