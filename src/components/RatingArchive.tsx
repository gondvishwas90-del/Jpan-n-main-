"use client";

import React, { useRef, useState } from "react";
import { Download, BarChart3, Clock, ExternalLink } from "lucide-react";
import { RatingDetailModal } from "./RatingDetailModal";
import { cn } from "@/lib/utils";

const ratingHistory = [
  {
    rating: "A+ / Stable",
    agency: "ICRA Limited",
    date: "Jan 12, 2025",
    outlook: "Stable",
    ref: "JP_RT_2025_01"
  },
  {
    rating: "A / Positive",
    agency: "ICRA Limited",
    date: "Feb 15, 2024",
    outlook: "Positive",
    ref: "JP_RT_2024_02"
  },
  {
    rating: "A / Stable",
    agency: "CARE Ratings",
    date: "Oct 10, 2023",
    outlook: "Stable",
    ref: "JP_RT_2023_10"
  },
  {
    rating: "A- / Stable",
    agency: "CRISIL",
    date: "May 22, 2022",
    outlook: "Stable",
    ref: "JP_RT_2022_05"
  }
];

export function RatingArchive() {
  const [selectedRating, setSelectedRating] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < ratingHistory.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10 border-b border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Fiscal Archive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white leading-tight">
              Rating <br />
              <span className="text-muted-foreground">Historical Repository</span>
            </h2>
          </div>
        </div>

        {/* Rating History Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:space-y-6 md:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {ratingHistory.map((row, idx) => (
              <div
                key={idx}
                className="group cursor-pointer bg-white dark:bg-charcoal border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 hover:shadow-2xl hover:shadow-deepblue/5 transition-all duration-500 hover:border-gold/30 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-silver/5 dark:bg-white/5 border border-border rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2 text-center md:text-left w-full md:w-auto">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-2.5 sm:gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    <span>{row.ref}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{row.date}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="text-primary">{row.agency}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-deepblue dark:group-hover:text-gold transition-colors">
                    {row.rating}
                  </h3>
                </div>

                {/* Meta Info & Actions */}
                <div className="flex items-center gap-6 sm:gap-8 shrink-0 flex-col sm:flex-row w-full sm:w-auto justify-between">
                  <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-charcoal/70 dark:text-silver/90">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>Processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${row.outlook === 'Positive' ? 'bg-green-500' : 'bg-gold'}`} />
                      <span className={row.outlook === 'Positive' ? 'text-green-600 dark:text-green-400' : 'text-gold'}>
                        {row.outlook}
                      </span>
                    </div>
                  </div>

                  <div className="h-10 w-px bg-border hidden lg:block" />

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a 
                      href="/sample-report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-border rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-silver/10 transition-all active:scale-95 text-charcoal dark:text-white"
                    >
                      <ExternalLink className="w-4 h-4 opacity-60" /> View
                    </a>
                    <a 
                      href="/sample-report.pdf"
                      download
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-deepblue dark:hover:bg-gold transition-all shadow-lg active:scale-95 group/btn"
                    >
                      <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {ratingHistory.map((_, i) => (
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
                aria-label={`Go to rating card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-12 animate-in fade-in duration-1000 delay-700">
           <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold/30" />
              <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.3em]">Historical Archive 2018-2025</span>
           </div>
        </div>
      </div>

      <RatingDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        ratingData={selectedRating} 
      />
    </section>
  );
}
