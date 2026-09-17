"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Globe, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const exhibitions = [
  {
    title: "Global HVAC Fairs",
    desc: "A consistent presence at ACREX, Chillventa, and AHR Expo, demonstrating our leadership in thermal component precision.",
    icon: Globe,
    image: "/images/industry-hvac.png"
  },
  {
    title: "Automotive Expos",
    desc: "Showcasing our IATF-certified fuel and hydraulic lines at major auto component fairs across Asia and Europe.",
    icon: Target,
    image: "/images/industry-auto.png"
  },
  {
    title: "Industry Networking",
    desc: "Engaging with global engineering communities to co-create the next generation of tubular solutions.",
    icon: Users,
    image: "/images/about-hero.png"
  }
];

export function ExhibitionHighlights() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < exhibitions.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Industry Authority</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal dark:text-white mb-6">
            Global Trade <span className="text-deepblue dark:text-gold">Show Presence</span>
          </h2>
        </div>

        {/* Exhibition Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-4 md:py-6 px-1.5 md:px-1 gap-4 md:gap-8 lg:gap-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {exhibitions.map((ex, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-silver/5 dark:bg-white/2 border border-border hover:border-gold transition-all duration-500 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between">
                <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                  <Image
                    src={ex.image}
                    alt={ex.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gold flex items-center justify-center rounded-xl shadow-xl">
                    <ex.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 flex-grow flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-3 sm:mb-4">{ex.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {ex.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {exhibitions.map((_, i) => (
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
                aria-label={`Go to exhibition card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
