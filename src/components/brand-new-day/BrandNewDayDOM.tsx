"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { smoothstep, clamp01 } from './engine/types';

export interface DOMOverlayHandle {
  update: (sp: number, p: number) => void;
}

export const BrandNewDayDOM = forwardRef<DOMOverlayHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // References to overlay containers for each act
  const act1Ref = useRef<HTMLDivElement>(null);
  const act2Ref = useRef<HTMLDivElement>(null);
  const act3Ref = useRef<HTMLDivElement>(null);
  const act4Ref = useRef<HTMLDivElement>(null);
  const act5Ref = useRef<HTMLDivElement>(null);
  const act6Ref = useRef<HTMLDivElement>(null);

  // Expose direct imperative update to RAF loop — ZERO React state or re-renders
  useImperativeHandle(ref, () => ({
    update: (sp: number, p: number) => {
      // Act 1: sp [0.0, 0.22] — BRAND NEW DAY
      updateTextLayer(act1Ref.current, sp, 0.0, 0.08, 0.16, 0.23);

      // Act 2: sp [0.20, 0.38] — OUT OF THE STATIC
      updateTextLayer(act2Ref.current, sp, 0.20, 0.27, 0.32, 0.39);

      // Act 3: sp [0.36, 0.52] — INTO THE FIRE
      updateTextLayer(act3Ref.current, sp, 0.36, 0.42, 0.48, 0.54);

      // Act 4: sp [0.50, 0.68] — OUT OF THE STATIC
      updateTextLayer(act4Ref.current, sp, 0.50, 0.56, 0.62, 0.69);

      // Act 5: sp [0.66, 0.84] — INTO THE FIRE
      updateTextLayer(act5Ref.current, sp, 0.66, 0.72, 0.78, 0.85);

      // Act 6: evaluated on real p [0.82, 1.0] — BRAND NEW DAY finale
      updateTextLayer(act6Ref.current, p, 0.82, 0.88, 0.96, 1.00, true);
    }
  }));

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none z-20 overflow-hidden font-sans"
    >
      {/* Act 1 Overlay */}
      <div
        ref={act1Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 1, visibility: 'visible' }}
      >
        <span className="text-xs uppercase tracking-[0.45em] text-[#9a8a8d] mb-4 font-mono">
          ACT I &bull; PRECISION INCEPTION
        </span>
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-[#f2f3f5] font-heading leading-none">
          {renderSpans('BRAND NEW DAY')}
        </h1>
        <p className="mt-6 text-sm sm:text-base font-mono tracking-widest text-[#e0202b] uppercase">
          40,000 DISCRETE INSTANCES &bull; 0.5R BEAD CLOUD
        </p>
      </div>

      {/* Act 2 Overlay */}
      <div
        ref={act2Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <span className="text-xs uppercase tracking-[0.45em] text-[#75666a] mb-4 font-mono">
          ACT II &bull; RESONANCE
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#f2f3f5] font-heading">
          {renderSpans('OUT OF THE STATIC')}
        </h2>
      </div>

      {/* Act 3 Overlay */}
      <div
        ref={act3Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <span className="text-xs uppercase tracking-[0.45em] text-[#e0202b] mb-4 font-mono">
          ACT III &bull; FLOW VELOCITY
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#f2f3f5] font-heading">
          {renderSpans('INTO THE FIRE')}
        </h2>
      </div>

      {/* Act 4 Overlay */}
      <div
        ref={act4Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <span className="text-xs uppercase tracking-[0.45em] text-[#75666a] mb-4 font-mono">
          ACT IV &bull; METROLOGY CORRIDOR
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#f2f3f5] font-heading">
          {renderSpans('OUT OF THE STATIC')}
        </h2>
      </div>

      {/* Act 5 Overlay */}
      <div
        ref={act5Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <span className="text-xs uppercase tracking-[0.45em] text-[#e0202b] mb-4 font-mono">
          ACT V &bull; KINEMATIC TRAJECTORY
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#f2f3f5] font-heading">
          {renderSpans('INTO THE FIRE')}
        </h2>
      </div>

      {/* Act 6 Overlay: Finale */}
      <div
        ref={act6Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <span className="text-xs uppercase tracking-[0.5em] text-[#ff5d64] mb-4 font-mono">
          ACT VI &bull; ZERO DEFECT RESOLUTION
        </span>
        <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#f2f3f5] font-heading">
          {renderSpans('BRAND NEW DAY')}
        </h2>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm font-mono tracking-widest text-[#9a8a8d] uppercase">
            JPAN TUBULAR &bull; GLOBAL OEM SPECIFICATION
          </p>
        </div>
      </div>
    </div>
  );
});

BrandNewDayDOM.displayName = 'BrandNewDayDOM';

// Helper to wrap each letter into a GPU-promoted span
function renderSpans(text: string) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className="char-span inline-block transition-none"
      style={{
        willChange: 'transform, opacity, filter',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}

// Update text layer with front-to-back blur entrance and back-to-front blur exit
function updateTextLayer(
  layer: HTMLElement | null,
  curr: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
  isEnding = false
) {
  if (!layer) return;

  if (curr < inStart || (!isEnding && curr > outEnd)) {
    layer.style.opacity = '0';
    layer.style.visibility = 'hidden';
    return;
  }

  let opacity = 1.0;
  let blurAmount = 0.0;
  let translateY = 0.0;

  // In-ramp: Front-to-back resolve out of blur
  if (curr <= inEnd) {
    const t = smoothstep(inStart, inEnd, curr);
    opacity = t;
    blurAmount = (1.0 - t) * 16.0;
    translateY = (1.0 - t) * 20.0;
  }
  // Out-ramp: Back-to-front blur exit
  else if (curr >= outStart && !isEnding) {
    const t = smoothstep(outStart, outEnd, curr);
    opacity = 1.0 - t;
    blurAmount = t * 20.0;
    translateY = -t * 24.0;
  }

  if (opacity < 0.01) {
    layer.style.opacity = '0';
    layer.style.visibility = 'hidden';
  } else {
    layer.style.opacity = opacity.toFixed(3);
    layer.style.visibility = 'visible';
    layer.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
    layer.style.filter = blurAmount > 0.1 ? `blur(${blurAmount.toFixed(1)}px)` : 'none';

    // Per-letter staggered micro-depth
    const chars = layer.querySelectorAll<HTMLElement>('.char-span');
    const total = chars.length;
    chars.forEach((span, idx) => {
      // Entrances: front-to-back; Exits: back-to-front
      const charOffset = curr <= inEnd ? idx / total : (total - 1 - idx) / total;
      const charBlur = Math.max(0, blurAmount - charOffset * 4.0);
      span.style.filter = charBlur > 0.1 ? `blur(${charBlur.toFixed(1)}px)` : 'none';
    });
  }
}
