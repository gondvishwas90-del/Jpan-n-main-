"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, TrendingUp, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const stabilityMetrics = [
  {
    icon: ShieldCheck,
    title: "Capital Stability",
    description: "Robust capital structure with a focus on long-term debt sustainability and liquidity management."
  },
  {
    icon: TrendingUp,
    title: "Growth Performance",
    description: "Consistent revenue trajectories supported by precision tubing demand and operational excellence."
  },
  {
    icon: ShieldAlert,
    title: "Risk Mitigation",
    description: "Institutional framework for identifying and neutralizing fiscal and operational risks."
  }
];

export function RatingStability() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < stabilityMetrics.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10 border-b border-border">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Stability Framework</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white leading-tight mb-6 md:mb-8">
            Strength Through <br />
            <span className="text-muted-foreground">Strategic Discipline</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our creditworthiness is underpinned by a rigid commitment to 
            financial discipline, ensuring that J Pan Tubular Components Limited remains a 
            resilient and growth-oriented entity in the industrial sector.
          </p>
        </div>

        {/* Stability Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {stabilityMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className="group bg-white dark:bg-charcoal border border-border p-6 sm:p-10 rounded-2xl hover:border-gold transition-all duration-500 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/5 flex items-center justify-center rounded-xl border border-border mb-6 sm:mb-8 group-hover:bg-gold group-hover:border-transparent transition-all shrink-0">
                    <metric.icon className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors">
                    {metric.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                    {metric.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Verified Metric</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {stabilityMetrics.map((_, i) => (
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
                aria-label={`Go to metric card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
