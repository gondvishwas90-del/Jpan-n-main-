"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Preloader } from "./Preloader";

export function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      {/* 1. Executive Fullscreen Preloader with Curved Curtain Wipe */}
      <Preloader
        onCurtainComplete={() => setIsRevealed(true)}
      />

      <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-20 flex flex-col justify-center bg-[#071321] overflow-hidden z-20">
        {/* Visual Background: Previous Hero Image - Crystal Clear with Settling Scale */}
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: isRevealed ? 1.0 : 1.06 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none select-none"
        >
          <Image
            src="/images/hero-bg.png"
            alt="Precision Engineering Smart Manufacturing Facility"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-105"
          />
          {/* Crystal Clear Light Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/65 via-black/15 to-[#071321]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071321]/45 via-transparent to-[#071321]/65" />
        </motion.div>

        <div className="container-custom relative z-10 w-full my-auto">
          {/* Main Stage Grid - Exactly Matching Reference Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
            
            {/* Left Column (Cols 1-8): Matches Red Boxes 1, 2, 3 */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              {/* Red Box 1: Massive Display Headline (Slides from Left) */}
              <motion.div
                initial={{ x: -90, opacity: 0 }}
                animate={
                  isRevealed
                    ? { x: 0, opacity: 1 }
                    : { x: -90, opacity: 0 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05,
                }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-heading font-black tracking-tight leading-[0.98] text-white uppercase">
                  Precision in every bend.
                </h1>
              </motion.div>

              {/* Red Box 2: Subtitle & Descriptive Narrative (Slides from Left) */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={
                  isRevealed
                    ? { x: 0, opacity: 1 }
                    : { x: -80, opacity: 0 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.18,
                }}
                className="mt-6 sm:mt-8 max-w-2xl"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-wider text-slate-200 mb-3">
                  Under extreme pressure.
                </h2>
                <p className="text-sm sm:text-base text-slate-300/90 font-normal leading-relaxed">
                  A <strong className="text-white font-bold">precision tubular engineering partner</strong>. Fabricating custom copper, brass, and steel assemblies for <strong className="text-white font-bold">global HVAC, automotive, and industrial OEMs</strong> — delivering zero-defect reliability across every shipment.
                </p>
              </motion.div>

              {/* Red Box 3: Prominent Call-to-Action Buttons (Slides from Left) */}
              <motion.div
                initial={{ x: -70, opacity: 0 }}
                animate={
                  isRevealed
                    ? { x: 0, opacity: 1 }
                    : { x: -70, opacity: 0 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4"
              >
                <Link
                  href="/products"
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 dark:bg-[#7BA4D0] dark:hover:bg-white text-[#0D2440] dark:text-[#0D2440] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2.5 shadow-lg group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about#infrastructure"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Our Capabilities</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column (Cols 9-12): Matches Red Box 4 & Script Accent (Slides from Right) */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end self-stretch pt-4 lg:pt-2 min-h-[160px] lg:min-h-[340px]">
              {/* Red Box 4: Sector Specializations List (Top Right) */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={
                  isRevealed
                    ? { x: 0, opacity: 1 }
                    : { x: 80, opacity: 0 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="flex flex-col items-start lg:items-end space-y-1.5 font-mono text-xs sm:text-sm tracking-[0.22em] text-slate-300/85 uppercase"
              >
                <span className="hover:text-white transition-colors cursor-default">HVAC Systems</span>
                <span className="hover:text-white transition-colors cursor-default">Automotive OEM</span>
                <span className="hover:text-white transition-colors cursor-default">Industrial Piping</span>
              </motion.div>

              {/* Reference Script Watermark: precision engineering */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={
                  isRevealed
                    ? { x: 0, opacity: 1 }
                    : { x: 80, opacity: 0 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.32,
                }}
                className="font-serif italic text-2xl sm:text-3xl text-white/55 tracking-wide select-none pt-8 lg:pt-0"
              >
                precision engineering
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
