"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Users, Calendar, Sparkles } from "lucide-react";

export function EventsHero() {
  return (
    <section className="relative min-h-[460px] md:min-h-[500px] pt-32 pb-20 flex items-center overflow-hidden bg-[#070d14]">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.png" 
          alt="J Pan Tubular Components Limited at Global Exhibitions"
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
              <span className="text-gold font-extrabold">Events & Expos</span>
            </motion.nav>

            {/* Accent Category Tag - Exact Text Preserved */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-gold to-gold/30" />
              <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">
                GLOBAL PRESENCE
              </span>
            </motion.div>

            {/* Main H1 Title - Exact Text Preserved */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Events & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-medium">
                Expos
              </span>
            </motion.h1>

            {/* Subtitle Paragraph - Exact Text Preserved */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl border-l-2 border-gold/50 pl-5"
            >
              Connecting with industry leaders and showcasing our precision engineering excellence at the world's most prestigious trade fairs.
            </motion.p>
          </div>

          {/* Interactive Graphic Desk (Right Column) */}
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
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[9px] font-extrabold uppercase tracking-widest">
                  Worldwide Network
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-white">Global Trade Fairs</h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  Participating in ACREX India, Chillventa Germany, and AHR Expo USA to showcase our OEM tubular innovations.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gold">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Industry Leader Delegations</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
