"use client";

import React, { useRef, useState } from "react";
import { Download, Eye, ChevronRight, Lock, Globe, Clock } from "lucide-react";
import { PoliciesDetailModal } from "./PoliciesDetailModal";
import { cn } from "@/lib/utils";

const policies = [
  {
    id: 1,
    title: "Anti-Corruption Policy",
    category: "Compliance",
    description: "Guidelines on preventing bribery and corruption in all business dealings and interactions.",
    lastUpdated: "March 2025",
    access: "Public"
  },
  {
    id: 2,
    title: "Data Privacy Policy",
    category: "Compliance",
    description: "Framework for the collection, processing, and protection of personal and sensitive data.",
    lastUpdated: "Jan 2025",
    access: "Public"
  },
  {
    id: 3,
    title: "Insider Trading Code",
    category: "Governance",
    description: "Provisions for the prevention of insider trading and ensuring transparency in security dealings.",
    lastUpdated: "Feb 2025",
    access: "Statutory"
  },
  {
    id: 4,
    title: "Health & Safety Policy",
    category: "HR Policies",
    description: "Comprehensive guidelines ensuring a safe and secure working environment for all employees.",
    lastUpdated: "Dec 2024",
    access: "Internal"
  },
  {
    id: 5,
    title: "CSR Policy",
    category: "Governance",
    description: "Our approach to Corporate Social Responsibility and sustainable community development.",
    lastUpdated: "Nov 2024",
    access: "Public"
  },
  {
    id: 6,
    title: "Environmental Policy",
    category: "Compliance",
    description: "Commitment to minimizing our ecological footprint and promoting sustainable manufacturing.",
    lastUpdated: "Oct 2024",
    access: "Public"
  }
];

export function PoliciesListing() {
  const [selectedPolicy, setSelectedPolicy] = useState<null | typeof policies[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleView = (policy: typeof policies[0]) => {
    setSelectedPolicy(policy);
    setIsModalOpen(true);
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < policies.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-silver/5 dark:bg-black/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Document Repository</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white leading-tight">
                Policy Archive <br />
                <span className="text-muted-foreground">& Guidelines</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-6 py-2.5 bg-white dark:bg-charcoal border border-border rounded-xl flex items-center gap-3 shadow-sm">
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {policies.length} Documents Active
                </span>
              </div>
            </div>
          </div>

          {/* Policy Archive Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
          <div className="flex flex-col justify-between w-full">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {policies.map((policy) => (
                <div 
                  key={policy.id}
                  className="group bg-white dark:bg-charcoal border border-border p-6 sm:p-8 rounded-2xl hover:border-gold transition-all duration-500 hover:shadow-2xl relative overflow-hidden flex flex-col w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
                >
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="text-[9px] font-bold text-gold uppercase tracking-[0.2em] px-3 py-1 bg-gold/5 border border-gold/10 rounded-sm">
                      {policy.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground/40">
                      {policy.access === 'Public' ? <Globe className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                      <span className="text-[9px] font-bold uppercase tracking-widest">{policy.access}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors mb-3 line-clamp-1">
                    {policy.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {policy.description}
                  </p>

                  <div className="pt-6 border-t border-border mt-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground/50">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Updated {policy.lastUpdated}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <button 
                        onClick={() => handleView(policy)}
                        className="flex items-center justify-center gap-2 py-3.5 bg-silver/10 dark:bg-white/5 hover:bg-gold hover:text-charcoal border border-transparent rounded-xl transition-all group/btn"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground group-hover/btn:text-charcoal" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">View</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3.5 bg-charcoal dark:bg-white/10 hover:bg-deepblue text-white rounded-xl transition-all shadow-lg">
                        <Download className="w-4 h-4" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {policies.map((_, i) => (
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

          {/* Load More Utility */}
          <div className="mt-12 md:mt-16 text-center animate-in fade-in duration-1000 delay-500">
             <button className="inline-flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] hover:text-gold transition-colors group">
               Explore Historical Policy Archives
               <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      <PoliciesDetailModal 
        policy={selectedPolicy}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
