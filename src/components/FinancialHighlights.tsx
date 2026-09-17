"use client";

import React, { useRef, useState } from "react";
import { TrendingUp, ArrowUpRight, DollarSign, Activity, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    id: 1,
    label: "Annual Revenue",
    value: "$428M",
    growth: "+14.2%",
    icon: DollarSign,
    desc: "Steady expansion in industrial cooling sectors."
  },
  {
    id: 2,
    label: "Net Profit Margin",
    value: "18.5%",
    growth: "+2.1%",
    icon: Activity,
    desc: "Operational efficiency through automation."
  },
  {
    id: 3,
    label: "Market Share",
    value: "32%",
    growth: "+5.4%",
    icon: PieChart,
    desc: "Tier-1 automotive component dominance."
  },
  {
    id: 4,
    label: "R&D Investment",
    value: "$24M",
    growth: "+22.8%",
    icon: TrendingUp,
    desc: "Accelerated development of EV cooling lines."
  }
];

export function FinancialHighlights() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < highlights.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-8 md:mb-12">
          <div className="h-0.5 w-8 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-widest text-xs">Performance Snapshot</span>
        </div>

        {/* Highlights Grid: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {highlights.map((item) => (
              <div 
                key={item.id}
                className="group bg-white dark:bg-charcoal border border-border p-6 sm:p-8 rounded-2xl hover:shadow-2xl hover:border-gold transition-all duration-500 relative overflow-hidden w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -mr-12 -mt-12 rounded-full group-hover:bg-gold/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-silver/5 dark:bg-white/5 flex items-center justify-center rounded-xl">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-green-500 uppercase tracking-widest">
                      <ArrowUpRight className="w-4 h-4" />
                      {item.growth}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal dark:text-white">
                      {item.value}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {highlights.map((_, i) => (
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
                aria-label={`Go to highlight ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 p-6 bg-deepblue/5 dark:bg-white/2 border border-dashed border-border rounded-xl text-center">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            *Data reflective of FY 2024-25 audit report. 
            <span className="text-gold ml-2 cursor-pointer hover:underline">Download full reconciliation report.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
