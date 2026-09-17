"use client";

import React, { useRef, useState } from "react";
import { Thermometer, Car, Home, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const usageSectors = [
  { name: "HVAC & R", icon: Thermometer, desc: "Heat exchangers and oil cooling systems." },
  { name: "Automotive", icon: Car, desc: "Fuel lines and hydraulic fluid systems." },
  { name: "Home Appliances", icon: Home, desc: "Refrigeration and washing machine components." },
  { name: "Industrial", icon: Factory, desc: "Bespoke assemblies for plant machinery." }
];

export function ProductIndustries() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < usageSectors.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Sector Applications</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 md:mb-6">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold">We Serve</span>
          </h2>
        </div>

        {/* Sectors Grid: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {usageSectors.map((sector, idx) => (
              <div 
                key={idx}
                className="group p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-center w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gold/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold transition-colors">
                  <sector.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold group-hover:text-charcoal transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{sector.name}</h3>
                <p className="text-sm text-silver/60 leading-relaxed group-hover:text-silver/90 transition-colors">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {usageSectors.map((_, i) => (
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
                  activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                )}
                aria-label={`Go to sector card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
