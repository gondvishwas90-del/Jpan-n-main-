"use client";

import React, { useRef, useState } from "react";
import { Search, Cog, Gauge, ClipboardCheck, Truck } from "lucide-react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Material Validation",
    desc: "Incoming copper, brass, and stainless steel materials undergo strict dimensional, chemical, and surface quality verification before production approval.",
    icon: Search
  },
  {
    title: "Process Intelligence",
    desc: "Real-time monitoring and precision-controlled manufacturing processes ensure consistency throughout bending, machining, brazing, and forming operations.",
    icon: Cog
  },
  {
    title: "Performance Testing",
    desc: "Advanced leak testing, pressure validation, and structural analysis ensure performance under demanding operating conditions.",
    icon: Gauge
  },
  {
    title: "Precision Verification",
    desc: "Comprehensive dimensional inspection and visual validation conducted through calibrated quality systems and inspection protocols.",
    icon: ClipboardCheck
  },
  {
    title: "Certified Dispatch",
    desc: "Every production batch is documented, validated, and dispatched with complete traceability and material compliance reporting.",
    icon: Truck
  }
];

export function QualityProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animated line width based on scroll
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < steps.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

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

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 bg-silver/10 dark:bg-black/20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[1000px] bg-gold/5 blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Operational Transparency</span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight"
          >
            The Quality Control <br/>
            <span className="text-gold italic font-light">Lifecycle</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Our multi-stage quality control process ensures that every component 
            undergoes rigorous scrutiny at every phase of manufacturing.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line Base (Desktop) */}
          <div className="absolute top-[3rem] left-[10%] w-[80%] h-px bg-border hidden lg:block" />
          
          {/* Connecting Line Active (Desktop) */}
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute top-[3rem] left-[10%] h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold hidden lg:block origin-left"
          />

          {/* Process Cards: Single visible card at a time with horizontal scroll on mobile (< md), 5-column grid on desktop (>= lg) */}
          <div className="flex flex-col justify-between w-full">
            <motion.div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-row md:grid md:grid-cols-3 lg:grid-cols-5 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-x-8 md:gap-y-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full relative z-10"
            >
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center p-6 sm:p-8 bg-white/60 dark:bg-charcoal/60 md:bg-transparent md:dark:bg-transparent border border-border/40 md:border-none rounded-2xl md:rounded-none w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm md:shadow-none"
                >
                  {/* Node */}
                  <div className="relative mb-6 md:mb-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-charcoal border border-border group-hover:border-gold/40 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-sm group-hover:shadow-2xl rotate-45 group-hover:rotate-0 overflow-hidden relative z-10 shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal/40 dark:text-white/40 group-hover:text-gold -rotate-45 group-hover:rotate-0 transition-all duration-700" strokeWidth={1.5} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold text-xs flex items-center justify-center rounded-full border-4 border-silver/10 dark:border-black/20 group-hover:bg-gold group-hover:text-charcoal transition-colors duration-500 z-20">
                      0{idx + 1}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {steps.map((_, i) => (
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
                  aria-label={`Go to lifecycle step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
