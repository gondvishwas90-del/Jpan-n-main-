"use client";

import React, { useRef, useState } from "react";
import { Building2, Globe, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const agencies = [
  {
    name: "ICRA Limited",
    type: "Primary Agency",
    description: "An independent and professional investment information and credit rating agency, a subsidiary of Moody's Investors Service."
  },
  {
    name: "CRISIL",
    type: "Secondary Agency",
    description: "An agile and innovative, global analytical company providing ratings, data, and research."
  },
  {
    name: "CARE Ratings",
    type: "Institutional Partner",
    description: "One of the leading credit rating agencies in India, providing credit rating and advisory services."
  }
];

export function RatingAgencies() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < agencies.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="h-0.5 w-10 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-widest text-xs">Evaluation Partners</span>
        </div>

        {/* Agency Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {agencies.map((agency, idx) => (
              <div 
                key={idx}
                className="group p-6 sm:p-10 bg-silver/5 dark:bg-black/10 border border-border rounded-2xl hover:border-gold transition-all duration-500 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="w-12 h-12 bg-white dark:bg-charcoal flex items-center justify-center rounded-xl border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)] shrink-0">
                      <Building2 className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                    </div>
                    <Globe className="w-5 h-5 text-silver/20 group-hover:text-gold/50 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">
                    {agency.name}
                  </h4>
                  <p className="text-[9px] font-bold text-gold uppercase tracking-[0.2em] mb-4 sm:mb-6">
                    {agency.type}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed italic mb-8">
                    "{agency.description}"
                  </p>
                </div>
                <button className="flex items-center gap-2 text-[9px] font-bold text-charcoal dark:text-white uppercase tracking-widest group/btn pt-4 border-t border-border/40">
                  Institutional Profile
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-gold" />
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {agencies.map((_, i) => (
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
                aria-label={`Go to agency card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
