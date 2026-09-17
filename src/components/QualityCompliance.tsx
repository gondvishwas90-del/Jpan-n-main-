"use client";

import React, { useRef, useState } from "react";
import { ShieldAlert, Leaf, CheckCircle, Scale, Sun } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const standards = [
  {
    title: "Safety Compliance",
    desc: "Adherence to OHSAS standards, ensuring a zero-incident manufacturing environment across all plants.",
    icon: ShieldAlert
  },
  {
    title: "Environmental Responsibility",
    desc: "Strict monitoring of carbon footprint and sustainable waste management as per global norms.",
    pointer: "Solar power plant installed in A2 manufacturing facility for clean, green energy operations.",
    icon: Leaf
  },
  {
    title: "Regulatory Adherence",
    desc: "Full compliance with local and international manufacturing, environmental, and export laws.",
    icon: Scale
  },
  {
    title: "Ethical Sourcing",
    desc: "Partnering only with raw material suppliers who meet our rigid quality and ethics criteria.",
    icon: CheckCircle
  }
];

export function QualityCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < standards.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-silver/10 dark:bg-white/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Header Side (Sticky) */}
          <motion.div 
            className="w-full lg:w-1/3 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Governance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-[1.1]">
              Compliance & <br/>
              <span className="text-gold italic font-light">Industry Standards</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
              We operate at the intersection of technical excellence and 
              regulatory responsibility, ensuring that our products and 
              processes respect global safety and environmental protocols.
            </p>
          </motion.div>

          {/* Compliance Cards: Single visible card at a time with horizontal scroll on mobile (< sm), 2-column grid on desktop (>= sm) */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between">
            <motion.div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row sm:grid sm:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 sm:pt-4 sm:pb-4 px-1 sm:px-0 gap-4 sm:gap-6 lg:gap-8 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {standards.map((s, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 sm:p-8 md:p-10 bg-white dark:bg-charcoal border border-border hover:border-gold/30 rounded-2xl transition-all duration-500 overflow-hidden w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gold/10 -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-bl-2xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/30 dark:bg-black/30 border border-border rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-500 shrink-0">
                      <s.icon className="w-6 h-6 text-charcoal/50 dark:text-white/50 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-3 sm:mb-4 group-hover:text-gold transition-colors duration-300">
                      {s.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light flex-grow mb-2">
                      {s.desc}
                    </p>

                    {s.pointer && (
                      <div className="mt-4 pt-3.5 border-t border-border/50 flex items-start gap-2.5 text-xs font-semibold text-gold">
                        <Sun className="w-4 h-4 text-gold shrink-0 mt-0.5 animate-pulse" />
                        <span className="leading-snug">{s.pointer}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex sm:hidden items-center justify-center gap-2 mt-4 z-10">
              {standards.map((_, i) => (
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
                  aria-label={`Go to compliance card ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
