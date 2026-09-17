"use client";

import React, { useRef, useState } from "react";
import { Wallet, GraduationCap, Heart, Clock, ShieldPlus } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Wallet,
    title: "Competitive Incentives",
    description: "Merit-based compensation packages with performance bonuses and corporate incentives."
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Paid access to specialized industrial certifications and technical workshops."
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    description: "Health insurance and wellness programs for employees and their families."
  },
  {
    icon: Clock,
    title: "Flexible Frameworks",
    description: "Adaptive work schedules and work-life balance initiatives for sustained productivity."
  }
];

export function CareersBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.clientWidth > 0) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-12 md:py-32 bg-silver/5 dark:bg-black/10 border-b border-border relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Employee Care</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] mb-8">
              Institutional <br />
              <span className="text-gold italic font-light">Support Ecosystem</span>
            </h2>
            
            <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-xl">
              We invest in our people by providing a comprehensive ecosystem 
              of benefits that support professional excellence and personal 
              well-being.
            </p>
          </motion.div>
        </div>

        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 no-scrollbar pb-6 sm:pb-0"
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-charcoal border border-border/60 hover:border-gold/40 p-6 lg:p-8 rounded-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gold/5 w-full shrink-0 snap-center sm:w-auto sm:shrink"
            >
              {/* Internal Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-gold/10 -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-bl-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-silver/5 dark:bg-black/20 flex items-center justify-center rounded-sm border border-border mb-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                  <benefit.icon className="w-5 h-5 text-charcoal/50 dark:text-white/50 transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {benefit.title}
                </h4>
                
                <p className="text-xs text-muted-foreground font-light leading-relaxed flex-grow">
                  {benefit.description}
                </p>
                
                <div className="mt-6 pt-5 border-t border-border/50 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                   <ShieldPlus className="w-4 h-4 text-charcoal/30 dark:text-white/30 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                   <span className="text-[9px] font-bold text-charcoal/50 dark:text-white/40 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-300">Verified Benefit</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dot Indicators for Mobile Scroll */}
        {benefits.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {benefits.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-gold w-6" : "bg-charcoal/20 dark:bg-silver/20"
                )}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollContainerRef.current.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
