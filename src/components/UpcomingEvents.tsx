"use client";

import React, { useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const upcomingEvents = [
  {
    title: "ACREX India 2026",
    date: "Feb 15 - 17, 2026",
    location: "BIEC, Bengaluru",
    desc: "South Asia's largest exhibition on Air Conditioning, Heating, Ventilation and Intelligent Buildings.",
    booth: "Hall 2, Booth A-45"
  },
  {
    title: "Auto Expo - Components 2026",
    date: "Jan 12 - 15, 2026",
    location: "Pragati Maidan, New Delhi",
    desc: "The primary event for the automotive component industry, showcasing the latest in precision engineering.",
    booth: "Hall 5, Stall 12"
  }
];

export function UpcomingEvents() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < upcomingEvents.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Mark Your Calendar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal dark:text-white">
              Upcoming <span className="text-deepblue dark:text-gold">Engagements</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-deepblue dark:text-gold font-bold text-xs sm:text-sm uppercase tracking-widest hover:translate-x-2 transition-transform self-start md:self-auto">
            Schedule a Meeting
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Upcoming Event Cards: Single visible card at a time with horizontal scroll on mobile (< lg), 2-column grid on desktop (>= lg) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory py-4 lg:py-6 px-1.5 lg:px-1 gap-4 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row bg-white dark:bg-charcoal border border-border rounded-2xl overflow-hidden hover:border-gold transition-all duration-300 w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center shadow-sm">
                {/* Date Box */}
                <div className="md:w-32 bg-deepblue p-6 sm:p-8 flex flex-col items-center justify-center text-white shrink-0">
                  <Calendar className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-silver/60">Starts</span>
                  <span className="text-xl sm:text-2xl font-heading font-bold">{event.date.split(' ')[1]}</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{event.date.split(' ')[0]}</span>
                </div>

                {/* Info */}
                <div className="flex-grow p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">{event.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-3 sm:mb-4">{event.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-6 leading-relaxed">
                    {event.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-border">
                    <span className="text-[10px] sm:text-xs font-bold text-deepblue dark:text-gold uppercase tracking-[0.2em]">{event.booth}</span>
                    <button className="text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                      Know More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-4 z-10">
            {upcomingEvents.map((_, i) => (
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
                aria-label={`Go to event card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
