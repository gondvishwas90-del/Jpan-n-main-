"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, FileCheck, Scale } from "lucide-react";

export function SEBIDisclosureHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-charcoal">
      {/* Immersive Background Layer */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/blueprint.png" 
          alt="SEBI Regulatory Compliance"
          fill
          priority
          className="object-cover object-center opacity-10 grayscale brightness-125"
        />
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        
        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </motion.div>

      {/* Decorative Light Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-deepblue/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-6 sm:mb-8"
            >
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">Regulatory Compliance</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8"
            >
              SEBI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-medium">
                Disclosures
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-silver/60 max-w-2xl leading-relaxed mb-8 sm:mb-10 border-l-2 border-gold/20 pl-6 md:pl-8"
            >
              Official statutory disclosures as per SEBI (LODR) Regulations. 
              J Pan Tubular Components Limited maintains absolute market transparency through 
              systematic and timely reporting.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 sm:px-6 py-3 sm:py-4 rounded-sm">
                <Shield className="w-5 h-5 text-gold" />
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] text-silver/40 uppercase font-bold tracking-widest leading-none mb-1">Status</span>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white font-bold uppercase tracking-widest">Compliant</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 sm:px-6 py-3 sm:py-4 rounded-sm">
                <Scale className="w-5 h-5 text-gold" />
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] text-silver/40 uppercase font-bold tracking-widest leading-none mb-1">Standard</span>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white font-bold uppercase tracking-widest">LODR 2015</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Decorative Element */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="relative aspect-square w-full max-w-[280px] xl:max-w-[320px] flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-6 xl:inset-8 border border-white/5 rounded-full animate-reverse-spin" />
              
              <div className="relative z-10 w-28 h-28 xl:w-32 xl:h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
                <FileCheck className="w-10 h-10 xl:w-12 xl:h-12 text-gold mb-3 opacity-80" strokeWidth={1.5} />
                <div className="text-[8px] xl:text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] text-center px-4 leading-tight">Verified <br/> Filings</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* HUD Corner Elements */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="flex items-center gap-4 text-silver/20 font-mono text-[9px] uppercase tracking-widest">
          <span className="flex h-1.5 w-1.5 rounded-full bg-gold/50 animate-pulse" />
          SEC: Corporate Governance
        </div>
      </div>
    </section>
  );
}
