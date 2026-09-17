"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] md:h-[70vh] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.png" 
          alt="J Pan Tubular Components Limited Insights Hub"
          fill
          priority
          className="object-cover object-center brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-deepblue/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent md:w-3/4" />
      </div>

      <div className="container-custom relative z-10 text-white mt-16 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold" 
            />
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Knowledge Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-[1.1] tracking-tight">
            Industry <span className="text-silver/40 font-light">&</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-gold">Technical Insights</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-silver/80 leading-relaxed max-w-2xl font-light"
          >
            Exploring the latest innovations in precision engineering, 
            manufacturing technology, and the future of industrial components.
          </motion.p>
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
