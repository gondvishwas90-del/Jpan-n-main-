"use client";

import React, { useRef } from "react";
import { MessageSquare, ShieldCheck, Users, Globe } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

interface ContactIntroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ContactIntro({
  title = "Institutional Support Hub",
  subtitle = "Direct Engagement",
  description = "We believe in open and transparent dialogue with our investors. Our dedicated Investor Relations team and Registrar are available to address your queries regarding shareholding, dividends, and statutory disclosures."
}: ContactIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">{subtitle}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-[1.1]">
              {title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="text-gold italic font-light">{title.split(' ').slice(-2).join(' ')}</span>
            </h2>
            
            <p className="text-muted-foreground font-light text-lg mb-12 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-silver/5 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border">
                    <Users className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-2">Stakeholder Voice</h4>
                    <p className="text-[11px] font-light text-muted-foreground leading-relaxed">Prioritizing every shareholder inquiry with professional rigor.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-silver/5 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border">
                    <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-2">Verified Compliance</h4>
                    <p className="text-[11px] font-light text-muted-foreground leading-relaxed">Information provided through official and authorized channels.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Card Column */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="p-12 md:p-16 bg-charcoal dark:bg-charcoal/80 backdrop-blur-md border border-white/5 rounded-sm relative overflow-hidden group shadow-2xl transition-all duration-700 hover:border-gold/30 hover:shadow-gold/5">
               {/* Ambient Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat" />
               
               <div className="relative z-10">
                  <Globe className="w-16 h-16 text-gold/20 mb-8 group-hover:scale-110 group-hover:text-gold/40 transition-all duration-700" strokeWidth={1} />
                  <h3 className="text-3xl font-heading font-bold text-white mb-10 leading-[1.1]">
                    Corporate <br/><span className="text-gold italic font-light">Connectivity</span>
                  </h3>
                  <div className="space-y-10">
                    <div className="flex gap-6 group/quote">
                       <span className="text-gold font-bold text-lg mt-0.5 opacity-50 group-hover/quote:opacity-100 transition-opacity">/01</span>
                       <p className="text-sm font-light text-silver/60 leading-relaxed italic group-hover/quote:text-white transition-colors duration-500">
                         "Seamless communication is the bedrock of institutional 
                         trust and long-term shareholder value."
                       </p>
                    </div>
                    <div className="flex gap-6 group/quote">
                       <span className="text-gold font-bold text-lg mt-0.5 opacity-50 group-hover/quote:opacity-100 transition-opacity">/02</span>
                       <p className="text-sm font-light text-silver/60 leading-relaxed italic group-hover/quote:text-white transition-colors duration-500">
                         "Our Investor Relations desk ensures that every query 
                         finds a timely and authoritative response."
                       </p>
                    </div>
                  </div>
               </div>
            </div>
            {/* Geometric Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-gold/20 rounded-sm -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-gold/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
