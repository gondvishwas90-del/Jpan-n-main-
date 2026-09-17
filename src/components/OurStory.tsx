"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Target, ShieldCheck, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const storyCards = [
  {
    icon: Target,
    title: "Core Mission",
    description: "To be competitive in cost, quality and delivery while staying highly responsive to customers in the HVAC, Refrigeration and Transportation sectors, through innovation and empowering people"
  },
  {
    icon: ShieldCheck,
    title: "Trusted Components",
    description: "From brass flare nuts and copper tubular assemblies to advanced machined components, our products are trusted by leading Data centre, air conditioning and refrigeration brands."
  },
  {
    icon: Cpu,
    title: "Evolving Capabilities",
    description: "Driven by advanced technology, robust quality systems, and customer-centric manufacturing, we continue to expand our capabilities to meet the evolving demands of global OEM industries."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < storyCards.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      id="our-story" 
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden scroll-mt-20 bg-white dark:bg-charcoal transition-colors duration-500"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-deepblue/5 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">Our Story</span>
            <span className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-charcoal dark:text-white leading-[1.1] md:leading-[1.1] tracking-tight"
          >
            Precision That Builds <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue via-charcoal to-gold dark:from-silver dark:via-white dark:to-gold italic font-medium">
              Long-Term Partnerships
            </span>
          </motion.h2>
        </div>

        {/* Content Cards Grid: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
        <motion.div 
          ref={cardsRef}
          onScroll={handleMobileScroll}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:pt-12 md:pb-0 px-1 md:px-0 gap-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
        >
          {storyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx}
                variants={cardVariants} 
                className={cn(
                  "group relative p-8 sm:p-10 bg-silver/5 dark:bg-white/[0.02] border border-charcoal/15 dark:border-white/20 shadow-xl shadow-charcoal/5 dark:shadow-none rounded-[2rem] hover:border-gold/40 hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 overflow-hidden w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center flex flex-col justify-between",
                  idx === 1 ? "md:-translate-y-12" : ""
                )}
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <Icon className="w-32 h-32 text-charcoal dark:text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white dark:bg-charcoal rounded-2xl flex items-center justify-center border border-charcoal/15 dark:border-white/20 mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-md group-hover:-translate-y-1 group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Icon className="w-5 h-5 text-deepblue dark:text-gold group-hover:text-charcoal transition-all duration-500 transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-4">{card.title}</h3>
                  <p className="text-base text-charcoal/70 dark:text-silver/70 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
          {storyCards.map((_, i) => (
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
              aria-label={`Go to story card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
