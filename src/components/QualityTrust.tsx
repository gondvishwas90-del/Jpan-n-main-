"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap, History } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Reliable Products",
    desc: "Components that withstand extreme pressures and thermal cycles without failure.",
    icon: ShieldCheck,
  },
  {
    title: "Enduring Performance",
    desc: "Engineered for longevity, drastically reducing maintenance costs and downtime.",
    icon: History,
  },
  {
    title: "Absolute Precision",
    desc: "Meeting exact dimensional requirements for seamless system integration.",
    icon: Zap,
  },
  {
    title: "Customer Trust",
    desc: "A reputation built over 28 years of delivering uncompromising quality on time.",
    icon: Heart,
  }
];

export function QualityTrust() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < pillars.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-black overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/5 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">The Integrity Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1]">
              Why Our Standards <br />
              <span className="text-gold italic font-light">Impact Your Scale</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
              Beyond certifications, our commitment to quality translates into 
              tangible industrial stability for your operations.
            </p>
          </motion.div>
        </div>

        {/* Pillars Cards: Single visible card at a time with horizontal scroll on mobile (< sm), 4-column grid on desktop (>= lg) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 sm:pt-4 sm:pb-4 px-1 sm:px-0 gap-4 sm:gap-6 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm"
              >
                <div className="relative h-full bg-silver/5 dark:bg-charcoal/40 border border-border/50 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:bg-white dark:hover:bg-charcoal hover:shadow-2xl hover:border-gold/30 hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
                  
                  {/* Index Number */}
                  <div className="absolute top-6 right-6 text-4xl font-black text-silver/20 dark:text-white/5 group-hover:text-gold/50 transition-colors duration-500 italic font-heading">
                    0{idx + 1}
                  </div>

                  {/* Icon Box */}
                  <div className="w-12 h-12 mb-6 sm:mb-8 bg-white dark:bg-black/50 border border-border rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:scale-110 shadow-sm relative z-10 shrink-0">
                    <p.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors" strokeWidth={1.5} />
                  </div>

                  <div className="space-y-3 relative z-10 flex-grow">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white leading-tight group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-4 z-10">
            {pillars.map((_, i) => (
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
                aria-label={`Go to pillar card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Technical Validation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 p-px rounded-2xl bg-gradient-to-r from-border/40 via-gold/30 to-border/40"
        >
          <div className="bg-white dark:bg-charcoal backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <p className="text-xs sm:text-sm md:text-base font-light text-charcoal dark:text-white max-w-xl">
                Our quality management systems are independently audited and certified to <span className="text-gold font-bold">ISO 9001:2015</span> standards for global reliability.
              </p>
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('certifications');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shrink-0 px-8 py-3.5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-colors duration-300 shadow-md btn-slide-gold group whitespace-nowrap"
            >
              View Certifications
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
