"use client";

import React, { useRef } from "react";
import { Send, Users, CheckCircle, ChevronRight, UserPlus, Search, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discovery & Apply",
    description: "Explore our open segments and submit your digital portfolio for evaluation."
  },
  {
    icon: Users,
    title: "Institutional Interview",
    description: "Engage with our technical and operations teams for core-competency assessment."
  },
  {
    icon: CheckCircle,
    title: "Final Selection",
    description: "Authoritative verification of credentials and professional onboarding alignment."
  }
];

export function CareersRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stepVariants: Variants = {
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
      className="py-24 md:py-32 bg-white dark:bg-black border-b border-border relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Onboarding Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] mb-8">
            Your Journey to <br />
            <span className="text-gold italic font-light">Professional Legacy</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Our high-precision hiring process ensures that we identify and 
            onboard individuals who resonate with J Pan Tubular's core 
            competencies and institutional values.
          </p>
        </motion.div>

        <div className="relative mb-32">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-px bg-border hidden lg:block" />
          <motion.div 
            className="absolute top-12 left-0 h-px bg-gold hidden lg:block origin-left" 
            style={{ width: lineWidth }}
          />
          
          {/* Connecting Line (Mobile) */}
          <div className="absolute top-0 left-12 w-px h-full bg-border lg:hidden" />
          <motion.div 
            className="absolute top-0 left-12 w-px bg-gold lg:hidden origin-top" 
            style={{ height: lineHeight }}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-row lg:flex-col items-center lg:items-center gap-8 lg:gap-0 lg:text-center group"
              >
                {/* Step Circle */}
                <div className="w-24 h-24 shrink-0 bg-white dark:bg-charcoal border border-border rounded-full flex items-center justify-center relative mb-0 lg:mb-10 transition-all duration-500 z-10 shadow-xl group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)] cursor-pointer">
                   <div className="absolute top-0 right-0 w-8 h-8 bg-charcoal dark:bg-white text-white dark:text-charcoal flex items-center justify-center rounded-full font-heading font-bold text-sm shadow-xl group-hover:bg-white group-hover:text-charcoal transition-colors duration-500 transform translate-x-2 -translate-y-2 lg:translate-x-0 lg:-translate-y-0 lg:-top-3 lg:-right-3">
                      0{idx + 1}
                   </div>
                   <step.icon className="w-8 h-8 text-charcoal/50 dark:text-white/50 transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" strokeWidth={1.5} />
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-3 group-hover:text-gold transition-colors duration-300">
                     {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed lg:max-w-[280px] lg:mx-auto">
                     {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 lg:p-12 bg-charcoal dark:bg-charcoal/80 backdrop-blur-md border border-border/50 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl group"
        >
           {/* Internal Banner Glow */}
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
           
           <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0">
                 <UserPlus className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                 <h5 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-2">Onboarding Support</h5>
                 <p className="text-xs text-silver/60 font-light leading-relaxed">Dedicated assistance for international candidates.</p>
              </div>
           </div>
           
           <button className="relative z-10 group/btn flex items-center gap-4 bg-white/5 border border-white/10 hover:border-gold px-8 py-4 rounded-sm transition-all duration-500 overflow-hidden shrink-0 btn-slide-gold group">
             <span className="text-xs font-bold text-white group-hover/btn:text-charcoal uppercase tracking-[0.2em] transition-colors duration-500 relative z-10">
               Career FAQs
             </span>
             <ArrowRight className="w-4 h-4 text-gold group-hover/btn:text-charcoal transition-all duration-500 group-hover/btn:translate-x-1 relative z-10" />
           </button>
        </motion.div>
      </div>
    </section>
  );
}
