"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Settings, Cpu, Gauge, Zap, Binary, Activity, Layers, Workflow } from "lucide-react";


const stats = [
  { label: "Production Area", value: "50,000+", unit: "Sq. Ft.", icon: Layers, color: "gold" },
  { label: "Annual Capacity", value: "65K+", unit: "Tons", icon: Zap, color: "deepblue" },
  { label: "CNC Machines", value: "60+", unit: "Units", icon: Cpu, color: "gold" },
  { label: "Quality Pass Rate", value: "99.9", unit: "%", icon: Gauge, color: "deepblue" },
];

export function AboutManufacturing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-white dark:bg-charcoal overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--color-gold) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side (Left) */}
          <motion.div 
            className="lg:col-span-6 relative pb-8 pr-4 sm:pb-10 sm:pr-6 md:pb-12 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl group border border-border/50 bg-silver/10 w-full">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                  src="/images/about-manufacturing.png"
                  alt="Advanced Manufacturing Facility"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/40 via-transparent to-transparent" />
              
              {/* Technical Annotation Pins */}
              <motion.div 
                className="absolute top-1/4 left-1/3 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
              </motion.div>
              <motion.div 
                className="absolute bottom-1/3 right-1/4 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-3 h-3 bg-deepblue rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* Floating Technical Badge - Fixed Size and Position */}
            <motion.div 
              className="absolute bottom-0 right-0 p-5 md:p-6 bg-white/90 dark:bg-charcoal/90 rounded-[2rem] border border-border shadow-2xl backdrop-blur-2xl z-20 max-w-[200px]"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-deepblue to-gold dark:from-gold dark:to-white leading-none">
                100%
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/60 dark:text-white/60 mt-2 mb-4">
                In-House Production
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-1 w-full bg-gold/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gold"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side (Right) */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-gold" />
                </div>
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">Technical Prowess</span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Manufacturing at <br />
                <span className="text-deepblue dark:text-gold">Industrial Scale</span>
              </motion.h2>

              <motion.p 
                className="text-muted-foreground text-xl leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Our infrastructure is engineered for precision and scale. We utilize 
                the latest CNC technology and automated processes to maintain 
                unparalleled consistency across thousands of components.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group flex gap-4 sm:gap-5 items-start"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border border-border/50 group-hover:scale-110 transition-all duration-300 ${
                    stat.color === 'gold' ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white' : 'bg-deepblue/10 text-deepblue dark:text-gold group-hover:bg-deepblue group-hover:text-white'
                  }`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5 flex-wrap sm:flex-nowrap">
                      <span className="text-2xl sm:text-3xl font-heading font-bold text-charcoal dark:text-white leading-none">{stat.value}</span>
                      <span className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-tighter whitespace-nowrap">{stat.unit}</span>
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-[0.1em] sm:tracking-[0.15em] break-words">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              <div className="p-1 rounded-full bg-silver/10 dark:bg-white/5 inline-flex gap-4 items-center pr-6 border border-border/50">
                <div className="w-12 h-12 bg-deepblue dark:bg-gold rounded-full flex items-center justify-center text-white dark:text-charcoal">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-sm font-bold text-charcoal dark:text-white">
                  Live Production Monitoring Enabled
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left opacity-[0.02] pointer-events-none hidden xl:block">
        <span className="text-[12rem] font-black tracking-tighter text-charcoal dark:text-white select-none">
          PRECISION • SCALE
        </span>
      </div>
    </section>
  );
}
