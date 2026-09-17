"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Search, CheckCircle2, Clock, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Submission",
    description: "Submit your concern via our digital portal or physical desk.",
    icon: Send,
    duration: "Day 0"
  },
  {
    id: "02",
    title: "Verification",
    description: "Our compliance team validates the concern against statutory records.",
    icon: Search,
    duration: "Day 1-3"
  },
  {
    id: "03",
    title: "Evaluation",
    description: "Impartial review of the grievance substance for resolution.",
    icon: Activity,
    duration: "Day 4-10"
  },
  {
    id: "04",
    title: "Resolution",
    description: "Official response and closure of the grievance in the IR registry.",
    icon: CheckCircle2,
    duration: "Day 11-15"
  }
];

export function GrievanceRoadmap() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.2 } }
  };

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

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-charcoal border-b border-border/50 overflow-hidden relative">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-silver/5 dark:bg-black/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Transparency Protocol</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] tracking-tight">
              Resolution <br />
              <span className="text-deepblue dark:text-gold italic font-light">Framework Timeline</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
             <div className="px-6 py-3 bg-white/80 dark:bg-black/20 backdrop-blur-md border border-border/60 rounded-xl flex items-center gap-4 shadow-xl">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-[10px] font-bold text-charcoal/70 dark:text-silver/90 uppercase tracking-[0.2em]">7-15 Working Days</span>
             </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Connector Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/80 dark:via-border to-transparent -translate-y-1/2 origin-left hidden lg:block" 
          />
          
          {/* Roadmap Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
          <div className="flex flex-col justify-between w-full">
            <motion.div 
              ref={cardsRef}
              onScroll={handleMobileScroll}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-4 lg:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              {steps.map((step) => (
                <motion.div 
                  variants={cardVariants}
                  key={step.id}
                  className="relative group w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center shadow-sm"
                >
                  <div className="bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-border/60 p-6 lg:p-8 rounded-2xl relative z-10 hover:border-gold/50 transition-all duration-500 shadow-lg hover:shadow-2xl shadow-deepblue/5 h-full flex flex-col justify-between overflow-hidden">
                     
                     <div className="flex items-center justify-between mb-6 relative z-10">
                        <span className="text-3xl font-heading font-bold text-charcoal/80 dark:text-silver/90 group-hover:text-gold transition-colors duration-500 tracking-tighter">{step.id}</span>
                        <div className="w-12 h-12 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-xl border border-border/50 group-hover:bg-gold group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-gold/30 shrink-0">
                           <step.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors duration-500" />
                        </div>
                     </div>
                     
                     <div>
                       <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                          {step.title}
                       </h3>
                       <p className="text-xs text-charcoal/60 dark:text-silver/60 leading-relaxed mb-6 font-light">
                          {step.description}
                       </p>
                     </div>
                     
                     <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-gold/20 transition-colors duration-500">
                        <span className="text-[10px] font-bold text-charcoal/40 dark:text-silver/40 uppercase tracking-[0.2em] group-hover:text-charcoal/60 dark:group-hover:text-silver/60 transition-colors">Target</span>
                        <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] bg-gold/10 px-3 py-1 rounded-sm">{step.duration}</span>
                     </div>
                  </div>
                  
                  {/* Floating Timeline Dot Overlay (Desktop Only) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-charcoal border border-gold/50 rounded-full z-20 hidden lg:flex items-center justify-center -mt-[200px] opacity-0 group-hover:opacity-100 group-hover:-mt-[180px] transition-all duration-500 shadow-xl shadow-gold/20 pointer-events-none">
                     <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-4 z-10">
              {[0, 1, 2, 3].map((i) => (
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
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Verification Marker */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 lg:mt-16 flex flex-col items-center gap-4"
        >
           <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
           <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-[0.4em]">Verified Statutory Process</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
