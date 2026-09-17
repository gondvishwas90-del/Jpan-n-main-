"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Target, Users, CheckCircle2 } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function QualityCommitment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < features.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const features = [
    {
      icon: Target,
      title: "Precision Oriented",
      desc: "Focusing on micron-level accuracy across all copper and steel tubular parts.",
    },
    {
      icon: ShieldCheck,
      title: "Consistency Guaranteed",
      desc: "Maintaining identical quality standards across high-volume production batches.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      desc: "Building trust through reliable performance and transparent quality reporting.",
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-silver/10 dark:bg-white/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Our Mandate</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-[1.1]">
              A Culture of <br/>
              <span className="text-gold italic font-light">Zero-Defect</span> Manufacturing
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-light mb-8 md:mb-10">
              <p>
                At J Pan Tubular Components Limited, quality is not just a final check—it's the foundational principle of 
                our entire manufacturing lifecycle. From raw material sourcing to final component 
                dispatch, our &quot;Quality First&quot; mandate ensures uncompromising precision.
              </p>
              <p>
                We believe that consistency is the hallmark of a great manufacturer. By integrating 
                advanced automated inspection systems and rigorous manual verification, we maintain 
                tolerance levels that exceed industry expectations.
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 border-l-2 border-gold bg-silver/10 dark:bg-white/5 rounded-r-xl">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-gold shrink-0" strokeWidth={1.5} />
              <p className="text-xs sm:text-sm font-medium text-charcoal dark:text-white leading-relaxed">
                Continuously upgrading testing protocols to ensure every part delivered contributes to long-term reliability.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards: Single visible card at a time with horizontal scroll on mobile (< md), vertical stack on desktop (>= md) */}
          <div className="flex flex-col justify-between w-full">
            <motion.div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:pt-2 md:pb-2 px-1 md:px-2 gap-4 md:space-y-6 md:gap-0 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 bg-white dark:bg-charcoal border border-border hover:border-gold/30 rounded-2xl transition-all duration-500 overflow-hidden w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-silver/30 dark:bg-black/30 border border-border rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {features.map((_, i) => (
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
                  aria-label={`Go to feature card ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
