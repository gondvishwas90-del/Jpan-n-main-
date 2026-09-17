"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Shield, UserCheck, Gavel } from "lucide-react";
import { PoliciesDetailModal } from "./PoliciesDetailModal";
import { cn } from "@/lib/utils";

const keyPolicies = [
  {
    title: "Code of Conduct",
    category: "Governance",
    desc: "The fundamental framework defining our ethical standards and business behavior expectations for all stakeholders.",
    icon: Gavel,
    color: "gold",
    description: "The fundamental framework defining our ethical standards and business behavior expectations for all stakeholders."
  },
  {
    title: "Whistleblower Policy",
    category: "Compliance",
    desc: "A safe and confidential mechanism for reporting unethical practices, ensuring protection for those who speak up.",
    icon: Shield,
    color: "deepblue",
    description: "A safe and confidential mechanism for reporting unethical practices, ensuring protection for those who speak up."
  },
  {
    title: "Equal Opportunity",
    category: "HR Policies",
    desc: "Our commitment to a diverse, inclusive, and equitable workplace free from discrimination and harassment.",
    icon: UserCheck,
    color: "gold",
    description: "Our commitment to a diverse, inclusive, and equitable workplace free from discrimination and harassment."
  }
];

export function PoliciesHighlights() {
  const [selectedPolicy, setSelectedPolicy] = useState<null | any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleExplore = (policy: any) => {
    setSelectedPolicy(policy);
    setIsModalOpen(true);
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < keyPolicies.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-charcoal dark:bg-black/40 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Priority Documents</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Key Governance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">Highlights</span>
            </h2>
          </div>

          {/* Policy Cards: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
          <div className="flex flex-col justify-between w-full">
            <div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {keyPolicies.map((policy) => {
                const Icon = policy.icon;
                return (
                  <div 
                    key={policy.title}
                    className="group p-6 sm:p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-gold transition-all duration-500 hover:shadow-2xl w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 flex items-center justify-center rounded-xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                      </div>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-3 block">
                        {policy.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {policy.title}
                      </h3>
                      <p className="text-silver/60 text-xs leading-relaxed mb-6">
                        {policy.desc}
                      </p>
                    </div>
                    <button 
                      onClick={() => handleExplore(policy)}
                      className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest group/btn pt-4 border-t border-white/5"
                    >
                      Explore Policy
                      <ArrowRight className="w-4 h-4 text-gold group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {keyPolicies.map((_, i) => (
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
                  aria-label={`Go to policy highlight card ${i + 1}`}
                />
              ))}
            </div>
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
