"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, Award, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const awards = [
  {
    title: "Best Exhibition Booth",
    event: "ACREX India 2023",
    icon: Trophy
  },
  {
    title: "Excellence in Precision",
    event: "Automotive Expo 2022",
    icon: Award
  },
  {
    title: "Innovation in Cooling",
    event: "Global HVAC Awards",
    icon: Star
  }
];

export function EventAwards() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < awards.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-[#05080f] border-b border-border/40 relative overflow-hidden transition-colors duration-500">
      {/* Premium Ambient Radial Lighting */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header - Exact Text Preserved */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold font-extrabold uppercase tracking-[0.35em] text-xs">
              EXCELLENCE RECOGNIZED
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black text-charcoal dark:text-white tracking-tight leading-[1.08]"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-deepblue italic font-medium">Achievements</span>
          </motion.h2>
        </div>

        {/* Award Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <motion.div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-4 md:py-6 px-1.5 md:px-1 gap-4 md:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {awards.map((award, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group relative bg-silver/10 dark:bg-white/[0.03] border border-border/60 p-6 sm:p-8 md:p-10 rounded-3xl overflow-hidden hover:border-gold/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Internal Radial Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold/10 rounded-full blur-[40px] group-hover:bg-gold/20 transition-colors pointer-events-none" />
                <div className="absolute left-0 top-0 w-1 h-0 bg-gold transition-all duration-500 group-hover:h-full" />

                {/* Header Badge */}
                <div className="w-full flex items-center justify-between mb-6 sm:mb-8">
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[9px] font-extrabold uppercase tracking-widest rounded-full">
                    OFFICIAL HONOR
                  </span>
                  <ShieldCheck className="w-4 h-4 text-gold/60" />
                </div>

                {/* 3D Layered Glowing Icon Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/40 rounded-2xl flex items-center justify-center text-gold shadow-xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:border-gold transition-all duration-500 shrink-0">
                  <award.icon className="w-8 h-8 sm:w-9 sm:h-9 text-gold" />
                </div>
                
                {/* Exact Text Kept Unchanged */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-black text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-gold font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                    {award.event}
                  </p>
                </div>

                {/* Card Footer Divider */}
                <div className="w-full pt-4 sm:pt-6 border-t border-border/40 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-24 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {awards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (cardsRef.current && cardsRef.current.children[i]) {
                    cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                )}
                aria-label={`Go to award card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
