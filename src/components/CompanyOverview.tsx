"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Award, Target, TrendingUp, Factory } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CompanyOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Award,
      label: "28+ Years",
      value: "Engineering Excellence",
      description: "Founded in 1998, evolving from a specialized unit to a global industry leader.",
      color: "gold",
    },
    {
      icon: Target,
      label: "Precision",
      value: "Micron-Level Tolerance",
      description: "Uncompromising quality standards for HVAC, automotive, and industrial cooling.",
      color: "deepblue",
    },
    {
      icon: TrendingUp,
      label: "Global Reach",
      value: "Worldwide Supply",
      description: "Powering systems for industry giants across Europe, Asia, and North America.",
      color: "gold",
    },
  ];

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < stats.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-32 overflow-hidden bg-white dark:bg-charcoal transition-colors duration-500"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-deepblue/10 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            className="lg:col-span-5 relative p-2 md:p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group w-full">
              <Image
                src="/industrial_precision_tubing_1778827579055.png"
                alt="Precision Engineering"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <motion.div 
                className="group absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 bg-white/95 dark:bg-charcoal/95 shadow-2xl shadow-black/20 dark:shadow-black/60 backdrop-blur-xl rounded-xl border border-white/40 dark:border-white/10"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/20 flex items-center justify-center border border-gold/30 shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Factory className="w-5 h-5 md:w-6 md:h-6 text-gold animate-pulse-gold group-hover:text-charcoal transition-all duration-500 transform group-hover:scale-110" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-charcoal dark:text-white font-bold text-base md:text-lg truncate">Next-Gen Facility</p>
                    <p className="text-charcoal/70 dark:text-white/70 text-[10px] md:text-xs uppercase tracking-wider truncate">Automated Precision Manufacturing</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Grid Pattern */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-[2rem] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-b-2 border-r-2 border-deepblue/30 rounded-br-[2rem] pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="h-px w-12 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">Our Heritage</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                A Legacy Built on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue to-gold dark:from-gold dark:to-white/80">
                  Precision Engineering
                </span>
              </motion.h2>

              <motion.div 
                className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <p>
                  Founded in 1998, J Pan Tubular Components Limited has evolved from a specialized manufacturing unit into a global 
                  leader in precision-engineered tubular components. For over two decades, we have been at 
                  the forefront of industrial innovation.
                </p>
                <p>
                  We combine traditional craftsmanship with state-of-the-art automated technology to deliver 
                  components that meet the highest international standards, ensuring reliability in every 
                  system our components power.
                </p>
              </motion.div>
            </div>

            {/* Stats Grid: Single visible card at a time with horizontal scroll on mobile (< md), 3-column grid on desktop (>= md) */}
            <div className="flex flex-col justify-between">
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:pt-4 md:pb-4 px-1 md:px-0 gap-4 md:gap-6 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative p-6 bg-silver/5 dark:bg-white/5 border border-border/50 rounded-2xl hover:border-gold/30 hover:bg-gold/[0.02] transition-all duration-300 w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm hover:shadow-xl"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                      stat.color === 'gold' ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white' : 'bg-deepblue/10 text-deepblue dark:text-gold group-hover:bg-deepblue group-hover:text-white'
                    }`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-gold uppercase tracking-wider">{stat.label}</h3>
                      <p className="text-lg font-heading font-bold text-charcoal dark:text-white leading-tight">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed opacity-90">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Subtle hover line */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
                {stats.map((_, i) => (
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
                    aria-label={`Go to stat ${i + 1}`}
                  />
                ))}
              </div>
            </div>


          </div>

        </div>
      </div>

      {/* Side Decorative Numbers or Text */}
      <div className="absolute right-0 bottom-0 rotate-90 origin-bottom-right translate-y-full opacity-5 pointer-events-none hidden xl:block">
        <span className="text-[12rem] font-black tracking-tighter text-charcoal dark:text-white select-none">
          EST. 1998
        </span>
      </div>
    </section>
  );
}
