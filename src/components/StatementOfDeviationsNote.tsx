"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Scale, FileText, CheckCircle2, AlertCircle, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatementOfDeviationsNote() {
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
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal border-t border-border overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Header Side */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Disclosure Framework</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-tight">
              Regulatory <br />
              <span className="text-deepblue dark:text-gold">Adherence Note</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 md:mb-10 leading-relaxed">
              J Pan Tubular Components Limited maintains absolute transparency in fund utilization. 
              Our Statement of Deviations is prepared in accordance with 
              Regulation 32 of SEBI (LODR) Regulations, 2015, ensuring 
              that any variance from planned expenditure is disclosed with 
              technical precision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-silver/5 border border-border rounded-xl shadow-sm group hover:border-gold transition-colors">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Certified Fund Utilization</span>
              </div>
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-silver/5 border border-border rounded-xl shadow-sm group hover:border-gold transition-colors">
                <AlertCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Materiality Disclosure Protocol</span>
              </div>
            </div>
          </div>

          {/* Cards Side: Single visible card at a time with horizontal scroll on mobile (< md), 2-column grid on desktop (>= md) */}
          <div className="lg:col-span-7 relative animate-in fade-in slide-in-from-right duration-700 delay-200 w-full">
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
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Statutory Basis</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Reporting based on SEBI Circulars for monitoring fund utilization and providing explanations for any deviations.
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group md:translate-y-8 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <ScrollText className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Verification Loop</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Statements are reviewed by the Audit Committee and subsequently filed with Stock Exchanges (NSE/BSE).
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Disclosure Frequency</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Quarterly disclosures maintained until funds are fully utilized for the objects stated in the offer document.
                  </p>
                </div>

                <div className="p-6 sm:p-10 bg-white dark:bg-charcoal border border-border rounded-2xl hover:shadow-2xl transition-all group md:translate-y-8 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm">
                  <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3">Ethical Governance</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Upholding fiduciary duties to shareholders through accurate and timely financial resource disclosures.
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
                    aria-label={`Go to note card ${i + 1}`}
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
