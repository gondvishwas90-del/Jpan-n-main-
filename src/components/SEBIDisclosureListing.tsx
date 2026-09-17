"use client";

import React, { useRef, useState } from "react";
import { Download, Eye, Calendar, ArrowRight, Bookmark } from "lucide-react";
import { SEBIDisclosureDetailModal } from "./SEBIDisclosureDetailModal";
import { cn } from "@/lib/utils";

const disclosures = [
  {
    id: 1,
    reg: "Regulation 30",
    title: "Disclosure of Material Event - New Production Line Commissioning",
    date: "Jan 24, 2025",
    desc: "Intimation regarding the successful commissioning of a high-precision automotive tubing facility.",
    status: "Verified"
  },
  {
    id: 2,
    reg: "Regulation 33",
    title: "Quarterly Audited Financial Results - Q3 FY 2024-25",
    date: "Jan 18, 2025",
    desc: "Statement of standalone and consolidated financial results for the quarter ended Dec 31, 2024.",
    status: "Official"
  },
  {
    id: 3,
    reg: "Regulation 46",
    title: "Website Disclosures - Updated Investor Information Portfolio",
    date: "Jan 10, 2025",
    desc: "Verification of all mandatory disclosures on the functional website as per SEBI (LODR) requirements.",
    status: "Verified"
  },
  {
    id: 4,
    reg: "Regulation 30",
    title: "Outcome of Board Meeting - Strategic Expansion Approval",
    date: "Oct 28, 2024",
    desc: "Intimation regarding board approval for strategic manufacturing expansion into Southeast Asian markets.",
    status: "Verified"
  },
  {
    id: 5,
    reg: "Regulation 44",
    title: "Voting Results - Annual General Meeting 2024",
    date: "Sept 12, 2024",
    desc: "Disclosure of voting results and Scrutinizer's report for the resolutions passed at the 2024 AGM.",
    status: "Verified"
  }
];

export function SEBIDisclosureListing() {
  const [selectedDisclosure, setSelectedDisclosure] = useState<null | typeof disclosures[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleView = (disclosure: typeof disclosures[0]) => {
    setSelectedDisclosure(disclosure);
    setIsModalOpen(true);
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < disclosures.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 lg:mb-16 gap-6 lg:gap-8 text-center lg:text-left">
            <div className="max-w-2xl flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 mb-4 lg:mb-6">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Statutory Filings</span>
                <div className="h-0.5 w-8 bg-gold lg:hidden" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white leading-tight">
                Disclosure <br className="hidden md:block" />
                <span className="text-muted-foreground">& Regulatory Records</span>
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-6 py-2.5 bg-silver/5 rounded-full border border-border shadow-sm">
                {disclosures.length} Active Filings
              </span>
            </div>
          </div>

          {/* Filing Cards: Single visible card at a time with horizontal scroll on mobile (< lg), vertical stack on desktop (>= lg) */}
          <div className="flex flex-col justify-between w-full">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 lg:py-0 px-1 lg:px-0 gap-4 lg:space-y-6 lg:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {disclosures.map((disclosure) => (
                <div 
                  key={disclosure.id}
                  className="group bg-silver/5 dark:bg-white/2 border border-border p-6 sm:p-8 lg:p-10 rounded-2xl hover:border-gold transition-all duration-500 hover:shadow-xl w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-2">
                          <Bookmark className="w-3 h-3" />
                          {disclosure.reg}
                        </span>
                        <div className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {disclosure.date}
                        </span>
                        <div className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-[9px] font-bold text-deepblue dark:text-gold uppercase tracking-widest px-2 py-0.5 bg-silver/10 rounded-sm border border-border">
                          {disclosure.status}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors mb-3">
                        {disclosure.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mb-6 lg:mb-0">
                        {disclosure.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 mt-auto lg:mt-0">
                      <button 
                        onClick={() => handleView(disclosure)}
                        className="flex-1 lg:flex-none p-3.5 sm:p-4 bg-white dark:bg-charcoal border border-border hover:border-gold rounded-xl transition-all group/btn flex items-center justify-center gap-2 sm:gap-3"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground group-hover/btn:text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">View Filing</span>
                      </button>
                      <button className="flex-1 lg:flex-none p-3.5 sm:p-4 bg-deepblue hover:bg-gold text-white hover:text-charcoal rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 sm:gap-3">
                        <Download className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Download PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-4 z-10">
              {disclosures.map((_, i) => (
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
                  aria-label={`Go to filing ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="mt-12 md:mt-16 text-center">
            <button className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-3 mx-auto hover:text-gold transition-colors py-4 group">
              Load Historical Regulatory Records
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <SEBIDisclosureDetailModal 
        disclosure={selectedDisclosure}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
