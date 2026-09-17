"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Microscope, Zap, FileText, CheckCircle } from "lucide-react";

const facilities = [
  {
    name: "Spectrometry Lab",
    desc: "Chemical analysis for raw material grade verification and alloy consistency.",
    icon: Microscope
  },
  {
    name: "Hydro-Testing Rig",
    desc: "Simulating extreme pressure environments to ensure zero leakage in assemblies.",
    icon: Zap
  },
  {
    name: "Metrology Division",
    desc: "Micron-level dimensional inspection using digital profile projectors.",
    icon: FileText
  }
];

export function TestingFacilities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < facilities.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 bg-silver/10 dark:bg-black/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Technical Capability</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              In-House <span className="text-deepblue dark:text-gold">Testing Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Our advanced laboratory is equipped with state-of-the-art instruments 
              to perform a wide array of destructive and non-destructive tests, 
              ensuring 100% compliance with client specifications.
            </p>

            <div className="relative">
              <div 
                ref={scrollRef}
                onScroll={handleMobileScroll}
                className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                {facilities.map((f, idx) => (
                  <div key={idx} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-white dark:bg-charcoal border border-border rounded-sm hover:border-gold transition-all w-full min-w-full md:min-w-0 shrink-0 snap-center">
                    <div className="w-12 h-12 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold transition-colors">
                      <f.icon className="w-6 h-6 text-deepblue dark:text-gold group-hover:text-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-1">{f.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile Pagination Indicator Dots */}
              <div className="flex md:hidden items-center justify-center gap-2 mt-2">
                {facilities.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      if (scrollRef.current && scrollRef.current.children[i]) {
                        scrollRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                    }`}
                    aria-label={`Go to facility ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/about-manufacturing.png" 
                alt="Industrial Quality Testing Lab"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-deepblue/20 mix-blend-overlay" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
