"use client";

import React, { useRef, useState } from "react";
import { UserCheck, Users, Landmark, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const shareholdingData = [
  {
    category: "Promoters & Promoter Group",
    percentage: "74.52%",
    description: "Core ownership providing strategic direction and stability.",
    icon: UserCheck,
    color: "gold"
  },
  {
    category: "Public Institutions",
    percentage: "12.18%",
    description: "Diverse participation from mutual funds, banks, and FIs.",
    icon: Landmark,
    color: "silver"
  },
  {
    category: "General Public & Others",
    percentage: "13.30%",
    description: "Individual retail investors and non-institutional bodies.",
    icon: Users,
    color: "deepblue"
  }
];

export function ShareholdingSummary() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < shareholdingData.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10 relative overflow-hidden">
      {/* Visual Design Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 md:gap-10">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">At A Glance</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-charcoal dark:text-white leading-tight">
              Distribution <br />
              <span className="text-muted-foreground">& Ownership</span>
            </h2>
          </div>
          <div className="lg:text-right animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-3">Latest Period</p>
             <div className="inline-flex items-center gap-4 px-6 md:px-8 py-3 bg-white dark:bg-charcoal border border-border rounded-xl shadow-xl">
                <span className="text-lg md:text-xl font-heading font-bold text-charcoal dark:text-white">Q3 FY25</span>
                <div className="w-px h-6 bg-border" />
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Audited</span>
             </div>
          </div>
        </div>

        {/* Shareholding Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {shareholdingData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.category}
                  className="group relative bg-white dark:bg-charcoal border border-border p-6 sm:p-10 rounded-2xl hover:border-gold transition-all duration-700 hover:shadow-2xl overflow-hidden w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
                >
                  {/* Decoration */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-silver/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/5 flex items-center justify-center rounded-xl mb-6 sm:mb-8 border border-border group-hover:bg-gold group-hover:border-transparent transition-all">
                      <Icon className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors" />
                    </div>
                    
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                        {item.category}
                      </h3>
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl sm:text-5xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors">
                          {item.percentage}
                        </span>
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gold/20 group-hover:text-gold transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[9px] font-bold text-gold uppercase tracking-widest">Detailed Analysis</span>
                      <div className="h-px w-12 bg-gold/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {shareholdingData.map((_, i) => (
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
                aria-label={`Go to shareholding card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-8 text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
           <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-gold rounded-full" /> Promoters
           </div>
           <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-silver rounded-full" /> Institutions
           </div>
           <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-deepblue rounded-full" /> Public
           </div>
        </div>
      </div>
    </section>
  );
}
