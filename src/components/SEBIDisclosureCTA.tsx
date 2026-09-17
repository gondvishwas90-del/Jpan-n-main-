"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, ArrowRight, ShieldCheck, Scale, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function SEBIDisclosureCTA() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < 3 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="bg-deepblue dark:bg-black/40 border border-white/5 p-8 sm:p-12 md:p-20 rounded-3xl relative group overflow-hidden">
          {/* Institutional Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] group-hover:bg-gold/10 transition-colors" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] group-hover:bg-white/10 transition-colors" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Regulatory Engagement</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">
                Connect with our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">Compliance Desk</span>
              </h2>
              <p className="text-silver/70 text-base sm:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
                For specific queries regarding our statutory filings, 
                regulatory compliance framework, or SEBI (LODR) 
                adherence, please contact our dedicated compliance team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4.5 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3 shadow-2xl btn-slide-white group whitespace-nowrap">
                  Submit Regulatory Query
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4.5 bg-white/5 border border-white/10 rounded-xl text-white">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Verified Channel</span>
                </div>
              </div>
            </div>

            {/* Support Cards: Single visible card at a time with horizontal scroll on mobile (< sm), 2-column grid on desktop (>= sm) */}
            <div className="flex flex-col justify-between w-full">
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row sm:grid sm:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 sm:py-0 px-1 sm:px-0 gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/50 transition-all group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <Mail className="w-8 h-8 text-gold mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1 sm:mb-2">Compliance Email</h4>
                  <p className="text-silver/60 text-xs font-medium">enquiry@jpantubular.com</p>
                </div>

                <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/50 transition-all group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <Phone className="w-8 h-8 text-gold mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1 sm:mb-2">Regulatory Desk</h4>
                  <p className="text-silver/60 text-xs font-medium">+91-120-2560586</p>
                </div>

                <div className="sm:col-span-2 p-6 sm:p-8 bg-white/2 border border-white/5 rounded-2xl flex items-center justify-between w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl shrink-0">
                      <Scale className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Standardized Reporting</h4>
                      <p className="text-silver/60 text-xs leading-relaxed">Strict adherence to SEBI standardized reporting templates and timelines.</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-gold/40" />
                  </div>
                </div>
              </div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex sm:hidden items-center justify-center gap-2 mt-4 z-10">
                {[0, 1, 2].map((i) => (
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
                    aria-label={`Go to card ${i + 1}`}
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
