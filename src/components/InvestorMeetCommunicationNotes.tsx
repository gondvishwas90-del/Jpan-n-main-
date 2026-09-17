"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Globe, Zap, ArrowRight, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const communicationPolicies = [
  {
    id: 1,
    title: "Equitable Disclosure",
    desc: "Ensuring simultaneous release of price-sensitive information to all market participants.",
    icon: Globe
  },
  {
    id: 2,
    title: "Verification Standard",
    desc: "Every interaction record is verified by our corporate secretarial and IR technical desks.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Real-time Intimation",
    desc: "Statutory intimations are dispatched within the regulatory window of scheduled meetings.",
    icon: Zap
  }
];

export function InvestorMeetCommunicationNotes() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < 4 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          
          {/* Header Side */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Disclosure Policy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-4 md:mb-6 leading-tight">
              Investor <br />
              <span className="text-deepblue dark:text-gold">Communication Ethics</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 md:mb-8">
              J Pan Tubular Components Limited maintains a rigid framework for all investor 
              communications, adhering to global best practices and regional 
              regulatory mandates to ensure absolute market integrity.
            </p>
            <button className="flex items-center gap-3 text-gold font-bold text-[10px] uppercase tracking-[0.2em] group">
              Read Communication Charter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Cards Side: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
          <div className="lg:col-span-2 flex flex-col justify-between w-full">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {communicationPolicies.map((policy) => (
                <div 
                  key={policy.id}
                  className="bg-silver/5 dark:bg-white/2 border border-border p-6 sm:p-8 rounded-2xl hover:border-gold transition-all duration-300 group cursor-pointer w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-white dark:bg-charcoal flex items-center justify-center rounded-xl mb-6 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                      <policy.icon className="w-5 h-5 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                    </div>
                    <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">
                      {policy.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {policy.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Quick Share Card - 4th card */}
              <div className="w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center md:col-span-3 bg-deepblue p-6 sm:p-8 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-white/5 relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
                <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 flex items-center justify-center rounded-xl transition-all duration-500 group-hover:bg-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)] shrink-0">
                    <Share2 className="w-7 h-7 sm:w-8 sm:h-8 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Market Engagement</h4>
                    <p className="text-lg sm:text-xl font-heading font-bold">Synchronized Market Disclosure</p>
                  </div>
                </div>
                <button className="relative z-10 px-6 py-3.5 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-widest transition-all shadow-2xl btn-slide-white group whitespace-nowrap rounded-xl">
                  Download Disclosure Policy
                </button>
              </div>
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {[0, 1, 2, 3].map((i) => (
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
                  aria-label={`Go to policy card ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
