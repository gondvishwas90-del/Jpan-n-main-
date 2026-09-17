"use client";

import React, { useRef, useState } from "react";
import { Shield, FileCheck, Globe, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    name: "ISO 9001:2015",
    desc: "The gold standard for Quality Management Systems across the globe.",
    icon: Shield,
    accent: "border-gold"
  },
  {
    name: "IATF 16949",
    desc: "Stringent quality requirements for the international automotive industry.",
    icon: FileCheck,
    accent: "border-gold"
  },
  {
    name: "ISO 14001",
    desc: "Recognized international standard for environmental management systems.",
    icon: Globe,
    accent: "border-gold"
  },
  {
    name: "MSME ZED Gold",
    desc: "Zero Defect Zero Effect certification for sustainable manufacturing.",
    icon: Award,
    accent: "border-gold"
  }
];

export function QualityCertifications() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < certifications.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="certifications" className="py-12 md:py-24 bg-silver/10 dark:bg-black/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Global Standards</span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6">
            Recognized <span className="text-deepblue dark:text-gold">Quality</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Our facilities and processes are certified by leading international 
            bodies, ensuring that your products meet the highest regulatory standards.
          </p>
        </div>

        {/* Certification Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:pt-4 md:pb-4 px-1 md:px-0 gap-4 md:gap-6 lg:gap-8 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className={`group bg-white dark:bg-charcoal p-6 sm:p-10 border-t-4 ${cert.accent} rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-500 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center flex flex-col justify-between`}
              >
                <div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-full mb-6 sm:mb-8 group-hover:bg-gold transition-colors duration-500 shrink-0">
                    <cert.icon className="w-7 h-7 sm:w-8 sm:h-8 text-deepblue dark:text-gold group-hover:text-charcoal transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {certifications.map((_, i) => (
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
                aria-label={`Go to certification card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
