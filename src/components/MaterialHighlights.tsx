"use client";

import React, { useRef, useState } from "react";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const highlightedDocs = [
  {
    title: "Shareholders Agreement (SHA)",
    type: "Agreement",
    date: "Aug 15, 2024",
    description: "Primary governance framework defining the relationship, board representation, and voting rights between key institutional stakeholders."
  },
  {
    title: "Technology Transfer Contract",
    type: "Contract",
    date: "Nov 02, 2024",
    description: "Strategic material contract regarding precision tubing manufacturing IP, CNC automation systems, and technical collaboration."
  }
];

export function MaterialHighlights() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < highlightedDocs.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#05080f] border-b border-border/40 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />

      <div className="container-custom relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold font-extrabold uppercase tracking-[0.3em] text-xs">
                FEATURED STATUTORY DISCLOSURES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-charcoal dark:text-white leading-tight">
              Key Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-deepblue italic font-medium">Contracts</span>
            </h2>
          </div>

          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            SEBI LODR Regulation 30 Mandate
          </div>
        </div>

        {/* 2 Cards: Single visible card at a time with horizontal scroll on mobile (< md), 2-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {highlightedDocs.map((doc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-silver/10 dark:bg-white/[0.03] border border-border/60 p-6 md:p-8 rounded-3xl overflow-hidden hover:border-gold/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Side Hover Accent */}
                <div className="absolute left-0 top-0 w-1 h-0 bg-gold transition-all duration-500 group-hover:h-full" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[50px] group-hover:bg-gold/10 transition-colors pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white dark:bg-charcoal flex items-center justify-center rounded-2xl border border-border/60 text-gold shadow-md group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold transition-all duration-500 shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                      Material {doc.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal dark:text-white leading-snug group-hover:text-gold transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                    {doc.description}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="relative z-10 flex items-center justify-between pt-6 mt-6 border-t border-border/40 text-xs font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Dated: {doc.date}</span>
                  </div>
                  <a 
                    href="/sample-report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-extrabold text-charcoal dark:text-white uppercase tracking-widest hover:text-gold dark:hover:text-gold transition-colors group/btn"
                  >
                    <span>Inspect Document</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-gold" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {highlightedDocs.map((_, i) => (
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
                aria-label={`Go to contract card ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
