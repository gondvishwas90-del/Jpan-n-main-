"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, FileCheck } from "lucide-react";

export function QualityHero() {
  return (
    <section className="relative min-h-[460px] md:min-h-[500px] pt-32 pb-20 flex items-center overflow-hidden bg-[#070d14]">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quality-hero.png"
          alt="J Pan Tubular Quality Excellence & Inspection"
          fill
          priority
          className="object-cover object-center brightness-[0.25] contrast-125 scale-105"
        />
        {/* Multi-stage Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d14] via-[#070d14]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d14] via-transparent to-[#070d14]/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-deepblue/20 to-transparent mix-blend-screen" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-deepblue/30 rounded-full blur-[160px] pointer-events-none" />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
            backgroundSize: '48px 48px' 
          }} 
        />
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Glassmorphic Breadcrumb Badge */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 shadow-lg"
            >
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="text-gold">/</span>
              <span className="text-gold font-extrabold">Quality Assurance</span>
            </motion.nav>

            {/* Accent Category Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-gold to-gold/30" />
              <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">
                GLOBAL TECHNICAL STANDARDS
              </span>
            </motion.div>

            {/* Main H1 Title - Fixed Typography Size */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Certifications & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-medium">
                Quality Excellence
              </span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl border-l-2 border-gold/50 pl-5"
            >
              Committed to global manufacturing standards, sub-micron metrology, and zero-defect precision in every copper, brass, and steel component we engineer.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-6 text-xs font-bold text-white/70 uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>ISO 9001:2015 & IATF 16949 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>100% Helium (HLT) & Water Leak (WLT) Tested</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Graphic Panel (Right Column) */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl space-y-6 overflow-hidden group"
            >
              {/* Subtle Spinning Ring Background */}
              <div className="absolute -top-12 -right-12 w-40 h-40 border border-gold/20 rounded-full animate-spin-slow pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[9px] font-extrabold uppercase tracking-widest">
                  Quality Desk
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-white">Sub-Micron Precision</h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  Our metrology labs utilize 3D CMM inspection, helium mass spectrometer leak detection, and eddy current flaw testing for extreme reliability.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gold">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-gold" />
                  <span>Zero-Defect Protocol</span>
                </div>
                <span className="text-[10px] text-white/50">DIN 8964</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
