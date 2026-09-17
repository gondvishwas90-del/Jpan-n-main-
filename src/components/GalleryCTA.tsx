"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe } from "lucide-react";

export function GalleryCTA() {
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-charcoal relative overflow-hidden">
      {/* Decorative Blueprint Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        {/* Floating Technical Markers */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 flex flex-col gap-2 items-end hidden md:flex"
        >
          <div className="w-12 h-[1px] bg-gold/50" />
          <span className="text-[8px] font-mono text-gold/50 tracking-tighter uppercase font-bold">HQ FACILITY</span>
          <span className="text-[8px] font-mono text-gold/50 tracking-tighter uppercase font-bold">STATUS: ACTIVE</span>
        </motion.div>

        {/* Subtle Light Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-deepblue/5 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-silver/5 dark:bg-white/[0.03] border border-border/50 dark:border-white/10 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden group shadow-2xl shadow-deepblue/5"
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-white/40 dark:bg-white/[0.01] backdrop-blur-3xl -z-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side: Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Infrastructure</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-black text-charcoal dark:text-white leading-tight tracking-tight">
                Experience Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue to-deepblue/60 dark:from-gold dark:to-gold/60">Manufacturing Might</span>
              </h2>
              
              <p className="text-charcoal/60 dark:text-white/60 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Interested in seeing our facilities in person or learning more 
                about our custom manufacturing capabilities? Let's discuss your 
                technical requirements.
              </p>
            </div>

            {/* Right Side: Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link
                href="/contact#enquiry-form"
                className="group/btn px-8 py-4 bg-gold dark: text-charcoal dark: font-black text-xs uppercase tracking-widest rounded-full flex items-center gap-3 transition-all duration-500 shadow-2xl shadow-gold/20 hover:scale-105 btn-slide-white group"
              >
                Engineering Team
                <div className="w-6 h-6 rounded-full bg-charcoal/10 dark:bg-charcoal/10 flex items-center justify-center group-hover/btn:bg-white/20 dark:group-hover/btn:bg-charcoal/10 group-hover/btn:rotate-45 transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              
              <Link
                href="/about"
                className="px-8 py-4 bg-white dark:bg-charcoal border border-border text-charcoal dark:text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-500 dark: shadow-md btn-slide-gold group"
              >
                Company Story
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
