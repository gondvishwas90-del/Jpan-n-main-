"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const steps = [
  { step: "01", title: "Raw Material Inspection", image: "/images/industry-industrial.png" },
  { step: "02", title: "Precision Bending", image: "/images/industry-hvac.png" },
  { step: "03", title: "Automated Assembly", image: "/images/about-manufacturing.png" },
  { step: "04", title: "Final Quality Check", image: "/images/quality-hero.png" },
];

export function GalleryProcessStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="lg:max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">How We Work</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-charcoal dark:text-white">
              Behind the <span className="text-deepblue dark:text-gold">Process</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:max-w-md">
            Transparency in every step. See how our components evolve from 
            raw materials to finished precision engineering parts.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 no-scrollbar pb-4 sm:pb-0"
        >
          {steps.map((s, idx) => (
            <div key={idx} className="group relative w-full sm:w-auto shrink-0 sm:shrink snap-center">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden mb-6">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors" />
                
                {/* Step Number Overlay */}
                <div className="absolute top-0 left-0 p-6 z-10">
                  <span className="text-5xl md:text-6xl font-heading font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:text-gold transition-all duration-300">
                    {s.step}
                  </span>
                </div>
              </div>
              
              <h4 className="text-xl font-heading font-bold text-charcoal dark:text-white group-hover:text-deepblue dark:group-hover:text-gold transition-colors">
                {s.title}
              </h4>
              
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Dot Indicators for Mobile Scroll */}
        {steps.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {steps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-gold w-6" : "bg-charcoal/20 dark:bg-silver/20"
                )}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollContainerRef.current.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
