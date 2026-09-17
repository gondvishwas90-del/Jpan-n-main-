"use client";

import React, { useRef, useState } from "react";
import { Mail, ArrowRight, UserPlus, FileSearch, HelpCircle, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ShareholdingCTA() {
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
        <div className="bg-charcoal dark:bg-black/40 border border-white/5 p-8 sm:p-12 md:p-24 rounded-3xl relative group overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
          {/* Institutional Design Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] group-hover:bg-gold/10 transition-colors" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deepblue/5 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700 delay-200">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="h-0.5 w-10 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Investor Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-6 md:mb-10 leading-tight">
                Ownership <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">Inquiries</span>
              </h2>
              <p className="text-silver/70 text-base sm:text-xl mb-8 md:mb-12 leading-relaxed max-w-xl">
                For detailed queries regarding our shareholding structure, 
                investor disclosures, or capital allocation strategy, 
                please reach out to our dedicated Investor Relations desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="px-8 sm:px-12 py-5 sm:py-6 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all flex items-center justify-center gap-4 shadow-2xl btn-slide-white group whitespace-nowrap">
                  Connect With IR Desk
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-5 px-6 sm:px-8 py-5 sm:py-6 bg-white/5 border border-white/10 rounded-xl text-white">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Access</span>
                </div>
              </div>
            </div>

            {/* Support Cards: Single visible card at a time with horizontal scroll on mobile (< sm), 2-column grid on desktop (>= sm) */}
            <div className="flex flex-col justify-between w-full animate-in fade-in slide-in-from-right duration-700 delay-400">
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row sm:grid sm:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 sm:py-0 px-1 sm:px-0 gap-4 sm:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                <div className="p-6 sm:p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/50 transition-all group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">Email Desk</h4>
                  <p className="text-silver/60 text-xs font-medium">enquiry@jpantubular.com</p>
                </div>

                <div className="p-6 sm:p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/50 transition-all group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <UserPlus className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-6 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">Shareholder Hub</h4>
                  <p className="text-silver/60 text-xs font-medium">Request for Information</p>
                </div>

                <div className="sm:col-span-2 p-6 sm:p-10 bg-white/2 border border-white/5 rounded-2xl flex items-center justify-between w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 flex items-center justify-center rounded-xl shrink-0">
                      <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Investor FAQ</h4>
                      <p className="text-silver/60 text-xs leading-relaxed">Access comprehensive responses to common ownership and dividend queries.</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <FileSearch className="w-6 h-6 text-gold/20" />
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
