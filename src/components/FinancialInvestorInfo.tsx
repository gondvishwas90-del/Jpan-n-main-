"use client";

import React, { useRef, useState } from "react";
import { Shield, Lock, Info, ScrollText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const infoCards = [
  {
    id: 1,
    title: "Dividend Policy",
    desc: "Our framework for sustainable capital allocation and shareholder returns.",
    icon: Shield,
    link: "View Policy"
  },
  {
    id: 2,
    title: "Insider Trading Code",
    desc: "Rigorous standards for the prevention of insider trading and price manipulation.",
    icon: Lock,
    link: "Read Guidelines"
  },
  {
    id: 3,
    title: "Familiarization Programs",
    desc: "Official orientation and training initiatives for independent directors.",
    icon: Info,
    link: "Explore Details"
  },
  {
    id: 4,
    title: "Terms of Appointment",
    desc: "Formal documentation outlining the roles and duties of independent directors.",
    icon: ScrollText,
    link: "Download Terms"
  }
];

export function FinancialInvestorInfo() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < infoCards.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal border-t border-border">
      <div className="container-custom">
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-widest text-xs">Governance Framework</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-4 md:mb-6 leading-tight">
            Policies & <span className="text-deepblue dark:text-gold">Regulatory Disclosures</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Maintaining institutional trust through rigorous compliance and clear 
            operational policies. Explore our foundational governance documents below.
          </p>
        </div>

        {/* Info Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {infoCards.map((card) => (
              <div 
                key={card.id}
                className="bg-silver/5 dark:bg-white/2 border border-border p-6 rounded-2xl hover:border-gold transition-all duration-300 group flex flex-col justify-between h-full w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 bg-white dark:bg-charcoal border border-border flex items-center justify-center rounded-xl mb-4 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <card.icon className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-2 uppercase tracking-tight transition-colors duration-500 group-hover:text-gold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-[0.2em] group-hover:gap-4 transition-all pt-2">
                  {card.link}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {infoCards.map((_, i) => (
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

        {/* Technical Note */}
        <div className="mt-12 md:mt-16 p-6 sm:p-8 bg-black/5 dark:bg-white/5 border-l-4 border-gold rounded-r-xl">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-charcoal dark:text-white uppercase tracking-widest mr-2">Technical Note:</span>
            All disclosures are filed in compliance with SEBI and other relevant industrial 
            regulatory bodies. For technical clarification on specific filings, please 
            connect with our Compliance Officer via the Investor Relations desk.
          </p>
        </div>
      </div>
    </section>
  );
}
