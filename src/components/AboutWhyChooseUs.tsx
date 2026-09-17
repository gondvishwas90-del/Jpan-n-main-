"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Shield, Zap, Clock, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  { 
    title: "Uncompromising Quality", 
    desc: "Every component we manufacture undergoes rigorous testing to meet global standards, ensuring flawless precision and long-term durability.", 
    icon: Shield,
    stats: "100% Tested"
  },
  { 
    title: "Accelerated Delivery", 
    desc: "Optimized production flows and an agile supply chain allow us to drastically reduce lead times without sacrificing engineering integrity.", 
    icon: Zap,
    stats: "2x Faster"
  },
  { 
    title: "Decades of Expertise", 
    desc: "With over 28 years of specialized experience in thermal management, we bring unmatched insight to the most complex industrial challenges.", 
    icon: Clock,
    stats: "28+ Years"
  },
  { 
    title: "Strategic Partnership", 
    desc: "We don't just supply products; we build collaborative relationships, offering dedicated support and tailored solutions for your specific needs.", 
    icon: Users,
    stats: "24/7 Support"
  },
];

export function AboutWhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < reasons.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-12 md:py-32 overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Details */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-charcoal/5 dark:bg-white/5 blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Section */}
          <motion.div 
            className="lg:w-1/3 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-widest text-xs uppercase">The J Pan Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-[1.1]">
              Why Global Leaders <br/>
              <span className="text-gold italic font-light">Choose Us</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed">
              We merge cutting-edge technology with decades of industrial expertise to deliver tubular solutions that redefine performance and reliability.
            </p>
            
            <motion.button 
              className="group flex items-center gap-3 text-charcoal dark:text-white font-medium pb-2 border-b border-border hover:border-gold transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="tracking-wide uppercase text-sm">Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Section - Grid: Single visible card at a time with horizontal scroll on mobile (< sm), 2-column grid on desktop (>= sm) */}
          <div className="lg:w-2/3 w-full flex flex-col justify-between">
            <motion.div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              className="flex flex-row sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pt-2 pb-3 sm:pt-4 sm:pb-4 px-1 sm:px-0 gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {reasons.map((r, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-charcoal border border-border rounded-2xl hover:border-gold/30 p-6 sm:p-8 transition-all duration-500 overflow-hidden w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-bl-3xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-silver/30 dark:bg-black/30 border border-border rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-gold/40 group-hover:-translate-y-1">
                      <r.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {r.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {r.desc}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/50 group-hover:border-gold/20 transition-colors duration-500">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      <span className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-widest">
                        {r.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex sm:hidden items-center justify-center gap-2 mt-4 z-10">
              {reasons.map((_, i) => (
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
                  aria-label={`Go to reason card ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
