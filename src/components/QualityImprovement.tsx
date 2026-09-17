"use client";

import React, { useRef, useState } from "react";
import { GraduationCap, Lightbulb, TrendingUp, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const initiatives = [
  {
    title: "Skilled Workforce",
    desc: "Continuous training programs for our engineering and quality teams to stay ahead of technical trends.",
    icon: GraduationCap
  },
  {
    title: "R&D Innovation",
    desc: "Investing in new alloy testing and product design to meet the evolving needs of the thermal industry.",
    icon: Lightbulb
  },
  {
    title: "Process Automation",
    desc: "Constant upgrades to our CNC and brazing lines for higher consistency and lower defect rates.",
    icon: Cpu
  },
  {
    title: "Performance Analytics",
    desc: "Data-driven approach to monitoring production quality and identifying areas for improvement.",
    icon: TrendingUp
  }
];

export function QualityImprovement() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < initiatives.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/10 dark:bg-black/20 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Future Focus</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6">
            The Path of <span className="text-deepblue dark:text-gold">Continuous Growth</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Quality is not a destination but a continuous journey of 
            improvement, innovation, and technical evolution.
          </p>
        </div>

        {/* Initiative Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= lg) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {initiatives.map((item, idx) => (
              <div key={idx} className="group bg-white dark:bg-charcoal p-6 sm:p-10 border border-border rounded-2xl hover:shadow-2xl transition-all duration-500 relative w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center flex flex-col justify-between shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500 rounded-l-2xl" />
                
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-xl mb-6 sm:mb-8 group-hover:bg-gold transition-colors shrink-0">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-deepblue dark:text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {initiatives.map((_, i) => (
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
                aria-label={`Go to initiative card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
