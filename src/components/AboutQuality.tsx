"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Award, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const certificationDetails = [
  {
    title: "ISO 9001:2015",
    org: "Quality Management",
    desc: "Global standard for quality management systems, ensuring consistent product quality and customer satisfaction.",
    icon: ShieldCheck
  },
  {
    title: "IATF 16949",
    org: "Upcoming",
    desc: "Rigorous automotive quality standard focusing on defect prevention and reduction of variation in the supply chain.",
    icon: Award
  },
  {
    title: "ISO 14001",
    org: "Environmental Mgmt",
    desc: "Commitment to minimizing environmental impact and improving resource efficiency in our production processes.",
    icon: FileText
  }
];

export function AboutQuality() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < certificationDetails.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Header Side */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Quality First</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Uncompromising <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold">Standards</span>
            </h2>
            <p className="text-silver/60 text-lg mb-10 leading-relaxed">
              At J Pan Tubular Components Limited, quality is not a department—it is a culture. Our 
              multi-stage testing protocols and automated visual inspection 
              systems ensure that every component leaving our facility is 
              nothing short of perfect.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span className="font-bold text-sm uppercase tracking-wider">Zero Defect Manufacturing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span className="font-bold text-sm uppercase tracking-wider">Raw Material Traceability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span className="font-bold text-sm uppercase tracking-wider">100% Dimensional Inspection</span>
              </div>
            </div>
          </div>

          {/* Cards Side: Single visible card at a time with horizontal scroll on mobile (< lg), vertical stack on desktop (>= lg) */}
          <div className="flex-1 w-full flex flex-col justify-between">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 lg:py-0 px-1 lg:px-0 gap-4 lg:space-y-6 lg:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {certificationDetails.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="group p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-gold transition-colors">
                      <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold group-hover:text-charcoal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <h3 className="text-lg sm:text-xl font-heading font-bold">{cert.title}</h3>
                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{cert.org}</span>
                      </div>
                      <p className="text-silver/60 text-xs sm:text-sm leading-relaxed group-hover:text-silver/90 transition-colors">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-4 z-10">
              {certificationDetails.map((_, i) => (
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
                  aria-label={`Go to certification card ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
