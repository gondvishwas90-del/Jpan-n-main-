"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, ArrowRight, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinancialCTA() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < 2 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-deepblue relative overflow-hidden text-white">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/blueprint.png')] bg-repeat" />
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 sm:p-12 md:p-20 rounded-3xl backdrop-blur-sm max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Investor Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 md:mb-8 leading-tight">
                Dedicated <span className="text-gold">Investor Relations</span> Support
              </h2>
              <p className="text-silver/70 text-base sm:text-lg mb-8 md:mb-10 leading-relaxed">
                For deeper technical clarification, analyst queries, or specific 
                compliance information, our dedicated investor relations desk 
                is available for professional consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gold text-charcoal font-bold rounded-xl flex items-center justify-center gap-3 transition-all whitespace-nowrap shadow-xl btn-slide-white group">
                  Contact IR Desk
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-xl">
                  <UserCheck className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-widest">Compliance Verified</span>
                </div>
              </div>
            </div>

            {/* Support Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
            <div className="flex flex-col justify-between w-full">
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:space-y-6 md:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gold/20 flex items-center justify-center rounded-full shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">Shareholder Services</h4>
                  </div>
                  <p className="text-silver/60 text-xs font-medium">enquiry@jpantubular.com</p>
                </div>

                <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gold/20 flex items-center justify-center rounded-full shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">Global Hotline</h4>
                  </div>
                  <p className="text-silver/60 text-xs font-medium">+91-120-2560586</p>
                </div>
              </div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
                {[0, 1].map((i) => (
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
                    aria-label={`Go to contact card ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
