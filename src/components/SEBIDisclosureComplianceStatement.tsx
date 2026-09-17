"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Scale, FileText, CheckCircle2, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";

export function SEBIDisclosureComplianceStatement() {
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
    <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10 border-t border-border overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Header Side */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Compliance Ethics</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-tight">
              Verified <br />
              <span className="text-deepblue dark:text-gold">Regulatory Integrity</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 md:mb-10 leading-relaxed">
              Our disclosure policy is governed by strict adherence to the 
              SEBI (Listing Obligations and Disclosure Requirements) 
              Regulations, 2015. We maintain a systematic framework for 
              materiality assessment and timely statutory reporting.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-charcoal border border-border rounded-xl shadow-sm group hover:border-gold transition-colors">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Certified Materiality Policy</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-charcoal border border-border rounded-xl shadow-sm group hover:border-gold transition-colors">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Internal Statutory Audit Loop</span>
              </div>
            </div>
          </div>

          {/* Cards Side: Single visible card at a time with horizontal scroll on mobile (< md), 2-column grid on desktop (>= md) */}
          <div className="lg:col-span-7 relative w-full">
            {/* Technical Grid Accent */}
            <div className="absolute inset-0 bg-gold/5 blur-[120px] -z-10" />
            
            <div className="flex flex-col justify-between w-full">
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Disclosure Standard</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Adhering to Regulation 30 for the intimation of material events and information with zero latency.
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group md:translate-y-8 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <ScrollText className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Financial Transparency</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Full alignment with Regulation 33 for the publication of quarterly and annual audited results.
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Website Obligations</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Maintaining a functional, up-to-date investor relations portal as mandated by Regulation 46.
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group md:translate-y-8 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Ethical Conduct</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Upholding the Code of Fair Disclosure for Prevention of Insider Trading as per SEBI norms.
                  </p>
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
                    aria-label={`Go to compliance card ${i + 1}`}
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
