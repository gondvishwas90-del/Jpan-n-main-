"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NeonReveal } from "@/components/ui/neon-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] pt-36 pb-16 lg:pt-48 lg:pb-24 flex flex-col justify-center bg-[#071321] overflow-hidden">
      {/* Visual Background: Previous Hero Image - Crystal Clear */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero-bg.png"
          alt="Precision Engineering Smart Manufacturing Facility"
          fill
          priority
          className="object-cover object-center brightness-105 contrast-105"
        />
        {/* Crystal Clear Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/55 via-black/10 to-[#071321]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071321]/40 via-transparent to-[#071321]/60" />
      </div>

      {/* Realistic WebGL Neon Reveal Bar Effect - Brand Light Blue (#7BA4D0 / Hue 210) */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <NeonReveal
          color={210}
          verticalOffset={0.97}
          glowReach={0.48}
          direction="horizontal"
          expandFrom="center"
          barWidth={1.0}
          barHeight={0.02}
          revealDuration={2500}
          revealDelay={300}
          intensity={1.45}
          glowSpread={1.1}
          loop={true}
          loopDelay={4000}
        />
      </div>

      <div className="container-custom relative z-10 w-full my-auto">
        {/* Center Main Stage (Norma 2-Column Product Focus Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Exact 2-Line Display Typography */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-heading font-black tracking-tight leading-[1.08] text-white">
              <span className="block text-slate-300/80 font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Precision in every bend.
              </span>
              <span className="block text-white font-black mt-1 sm:mt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Under extreme pressure.
              </span>
            </h1>
          </div>

          {/* Right Column: Highlighted Narrative & Sleek Pill Actions */}
          <div className="lg:col-span-5 lg:pl-4 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-slate-200/90 font-normal leading-relaxed mb-8 max-w-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              A <strong className="text-white font-bold">precision tubular engineering partner</strong>. Fabricating custom copper, brass, and steel assemblies for <strong className="text-white font-bold">global HVAC, automotive, and industrial OEMs</strong> — delivering zero-defect reliability across every shipment.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 dark:bg-[#7BA4D0] dark:hover:bg-white text-[#0D2440] dark:text-[#0D2440] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about#infrastructure"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

