"use client";

import React, { useRef } from "react";
import { Award, Briefcase, Zap } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

export function CareersIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-white dark:bg-black border-b border-border relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Content Side */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl"
          >
            <motion.div variants={textVariants} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">Employer Branding</span>
            </motion.div>
            
            <motion.h2 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-[1.1]"
            >
              A Preferred <br />
              <span className="text-gold italic font-light">Professional Habitat</span>
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              className="text-muted-foreground font-light text-lg mb-12 leading-relaxed"
            >
              At J Pan Tubular Components Limited, we believe our people are the precision behind 
              our products. We foster an environment of continuous learning, 
              where engineers, innovators, and operations experts collaborate 
              to redefine industrial excellence.
            </motion.p>
            
            <motion.div variants={textVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
               <div className="group flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Award className="w-5 h-5 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-gold transition-colors duration-300">Meritocracy</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">Performance-driven culture where excellence is always recognized.</p>
                  </div>
               </div>
               <div className="group flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 bg-silver/5 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                    <Zap className="w-5 h-5 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-gold transition-colors duration-300">Innovation Lab</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">Direct exposure to cutting-edge manufacturing technologies.</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Card Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-10"
          >
            <div className="p-10 lg:p-14 bg-charcoal dark:bg-charcoal/80 backdrop-blur-md border border-white/10 rounded-sm relative overflow-hidden group shadow-2xl hover:shadow-gold/5 hover:border-white/20 transition-all duration-700">
               {/* Internal Card Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-gold/10 transition-colors duration-700" />
               
               <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <Briefcase className="w-8 h-8 text-gold" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-heading font-bold text-white mb-10">
                    Growth Pathways
                  </h3>
                  
                  <div className="space-y-10">
                    <div className="flex gap-6 items-start group/item cursor-default">
                       <span className="text-gold font-bold text-xl font-heading mt-1 group-hover/item:text-white transition-colors duration-300">/01</span>
                       <p className="text-sm text-silver/60 font-light leading-relaxed italic border-l border-white/10 pl-6 group-hover/item:border-gold transition-colors duration-300">
                         "Joining J Pan Tubular Components Limited was the catalyst for my technical growth. 
                         The mentorship here is truly institutional."
                       </p>
                    </div>
                    <div className="flex gap-6 items-start group/item cursor-default">
                       <span className="text-gold font-bold text-xl font-heading mt-1 group-hover/item:text-white transition-colors duration-300">/02</span>
                       <p className="text-sm text-silver/60 font-light leading-relaxed italic border-l border-white/10 pl-6 group-hover/item:border-gold transition-colors duration-300">
                         "We don't just build pipes; we build careers that 
                         stand the test of time and market cycles."
                       </p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Geometric Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/20 rounded-tr-lg -z-10 translate-x-6 -translate-y-6 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/20 rounded-bl-lg -z-10 -translate-x-6 translate-y-6 hidden lg:block lg:ml-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
