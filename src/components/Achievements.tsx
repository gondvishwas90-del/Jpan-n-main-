"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "National Excellence Award",
    organization: "MSME India",
    year: "2022",
    description: "Recognized for outstanding contribution to the manufacturing sector and exceptional sustainable practices.",
    icon: Trophy,
  },
  {
    title: "Best Supplier Award",
    organization: "Daikin Global",
    year: "2021",
    description: "Awarded for maintaining a 99.98% quality pass rate and consistent on-time delivery across all international shipments.",
    icon: Award,
  },
  {
    title: "Zero Defect Partner",
    organization: "Johnson Controls",
    year: "2023",
    description: "Honored with the highest quality rating for precision copper and brass assemblies in commercial HVAC systems.",
    icon: Star,
  },
  {
    title: "Export Excellence",
    organization: "Engineering Export Council",
    year: "2024",
    description: "Commended for scaling global outreach to 20+ countries and elevating Indian engineering on the world stage.",
    icon: Medal,
  }
];

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < achievements.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-12 md:py-20 bg-white dark:bg-black overflow-hidden relative"
    >
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Achievements</span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-deepblue dark:text-gold italic font-light">Achievements</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our relentless pursuit of quality has earned us recognition from industry leaders and global councils alike.
          </motion.p>
        </div>

        {/* Achievement Cards: Single visible card at a time with horizontal scroll on mobile (< md), 2-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            className="flex flex-row md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:pt-4 md:pb-4 px-1 md:px-0 gap-4 md:gap-8 lg:gap-12 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="group relative bg-white dark:bg-charcoal border border-border/50 rounded-[2rem] p-6 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col sm:flex-row gap-6 md:gap-8 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center justify-between"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-silver/10 dark:bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="relative z-10 flex-1">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3 gap-2 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-bold text-gold bg-gold/10 px-3 py-1 rounded-full w-max whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 sm:mb-4">
                    {item.organization}
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-charcoal/70 dark:text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
            {achievements.map((_, i) => (
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
                aria-label={`Go to achievement card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
