"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export function GrievanceHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] md:h-[70vh] lg:min-h-[600px] flex items-center overflow-hidden bg-charcoal">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/grievance-support.png" 
          alt="J Pan Tubular Components Limited Investor Grievance"
          fill
          priority
          className="object-cover object-center opacity-40 grayscale brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent dark:from-black dark:via-black/95 dark:to-transparent md:w-3/4" />
      </div>

      {/* Institutional Accents */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold/30 via-transparent to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[45%] bg-white/2 skew-x-[-15deg] translate-x-1/4 border-l border-white/5" />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mt-16 md:mt-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm backdrop-blur-sm border border-gold/20"
            >
              <ShieldCheck className="w-6 h-6 text-gold" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold/50" 
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Investor Protection
            </motion.span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-10 leading-[1.05] tracking-tight text-white"
          >
            Investor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-gold italic font-light">Grievance</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-center gap-12"
          >
            <p className="text-xl md:text-2xl text-silver/60 leading-relaxed max-w-xl font-light">
              A transparent, responsive, and definitive mechanism for 
              redressing investor concerns with absolute priority and 
              fairness.
            </p>
            
            <div className="flex items-center gap-10 border-l border-white/10 pl-12 hidden lg:flex">
               <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                     <HeartHandshake className="w-5 h-5 text-gold" />
                     <span className="text-white font-bold text-3xl tracking-tighter">100%</span>
                  </div>
                  <span className="text-[10px] text-silver/40 uppercase tracking-widest font-bold">Accountability</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-white font-bold text-4xl mb-1 tracking-tighter">7-15</span>
                  <span className="text-[10px] text-silver/40 uppercase tracking-widest font-bold">Days Resolution</span>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
