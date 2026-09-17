"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Target, Cpu, Globe, ArrowRight } from "lucide-react";

export function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Immersive Background Layer */}
      <motion.div 
        style={{ y, scale }}
        className="absolute -top-[200px] -bottom-[200px] left-0 right-0 z-0"
      >
        <Image
          src="/images/about-hero-new.png"
          alt="J Pan Tubular Components Limited Advanced Manufacturing"
          fill
          priority
          className="object-cover brightness-[0.6] grayscale-[0.3]"
        />
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Since 1998 | ISO 9001:2015</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-5xl md:text-8xl font-heading font-bold text-white leading-[0.95] tracking-tight mb-10"
            >
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-medium">
                Future of Tubing
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-silver/60 max-w-2xl leading-relaxed mb-12 border-l-2 border-gold/20 pl-8"
            >
              A legacy of precision, innovation, and unwavering commitment to quality in the global manufacturing landscape.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm">
                <Target className="w-5 h-5 text-gold" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-silver/40 uppercase font-bold tracking-widest leading-none mb-1">Precision</span>
                  <span className="text-sm text-white font-bold uppercase tracking-widest">99.9% Tolerance</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm">
                <Globe className="w-5 h-5 text-gold" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-silver/40 uppercase font-bold tracking-widest leading-none mb-1">Impact</span>
                  <span className="text-sm text-white font-bold uppercase tracking-widest">Global Reach</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Decorative Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-white/5 rounded-full animate-reverse-spin" />
              
              <div className="text-center">
                <div className="text-6xl font-heading font-bold text-white mb-2">28+</div>
                <div className="text-[10px] text-gold font-bold uppercase tracking-[0.4em]">Years of Mastery</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* HUD Corner Elements */}
      <div className="absolute top-12 right-12 hidden md:block">
        <div className="flex items-center gap-4 text-silver/20 font-mono text-[9px] uppercase tracking-widest">
          <span className="flex h-1.5 w-1.5 rounded-full bg-gold/50" />
          System Active: Manufacturing Hub
        </div>
      </div>
    </section>
  );
}
