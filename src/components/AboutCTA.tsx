"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Immersive Parallax Background - Light & Elegant */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deepblue/5 dark:from-white/5 via-transparent to-transparent blur-[100px]" />
      </motion.div>

      {/* Architectural Grid & Lines */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Animated vertical accent line */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isInView ? { opacity: 1, height: 60 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-px bg-gradient-to-b from-transparent via-gold to-transparent mb-6"
          />

          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6"
          >
            Ready to Engineer the Future
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-charcoal dark:text-white mb-6 leading-[1.1] tracking-tight"
          >
            Forget a Partnership Built on <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-deepblue via-charcoal to-gold dark:from-silver dark:via-white dark:to-gold">Uncompromising Precision</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal/70 dark:text-silver/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Discover why global leaders trust J Pan Tubular Components Limited for critical thermal management solutions. Let's build something exceptional together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact#enquiry-form"
              className="group relative flex items-center gap-4 bg-charcoal dark:bg-white px-10 py-5 text-white dark:text-charcoal rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10 transition-transform hover:-translate-y-1 active:scale-95 btn-slide-gold group"
            >
              
              <span className="relative z-10 text-sm font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-500">
                Initiate Project
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black" />
            </Link>

            <Link
              href="/products"
              className="group flex items-center gap-4 px-10 py-5 rounded-[2rem] border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white transition-all duration-500 hover:border-charcoal dark: dark:hover:border-white dark: hover:-translate-y-1 active:scale-95 btn-slide-gold group"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                Explore Capabilities
              </span>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
