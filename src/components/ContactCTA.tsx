"use client";

import React, { useRef, useState } from "react";
import { Headphones, ArrowRight, MessageSquare, ShieldCheck, Mail } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ContactCTA({
  title = "Direct Reach Desk",
  subtitle = "Communication Support",
  description = "Ready to address your queries. Connect with our dedicated team for immediate institutional support."
}: ContactCTAProps) {
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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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
    <section ref={containerRef} className="py-12 md:py-24 bg-white dark:bg-black overflow-hidden relative">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-charcoal dark:bg-charcoal/80 backdrop-blur-md border border-white/5 p-10 lg:p-20 rounded-sm relative group overflow-hidden shadow-2xl"
        >
          {/* Institutional Design Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[100px] group-hover:bg-gold/20 transition-colors duration-1000 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid-pattern.svg')] bg-repeat pointer-events-none" />
 
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          >
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">{subtitle}</span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
                {title.split(' ').slice(0, -2).join(' ')} <br />
                <span className="text-gold italic font-light">{title.split(' ').slice(-2).join(' ')}</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-silver/60 font-light text-lg mb-10 leading-relaxed max-w-xl">
                {description}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => {
                    const formElement = document.getElementById("enquiry-form");
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = "/contact#enquiry-form";
                    }
                  }}
                  className="px-10 py-5 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.3em] rounded-sm transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-4 group-hover/btn:text-charcoal transition-colors duration-500">
                    Contact Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  
                </button>
                <div className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-sm text-white hover:border-gold/30 transition-colors cursor-default">
                  <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Authorized Hub</span>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col">
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none grid-cols-1 sm:grid-cols-2 gap-6 no-scrollbar pb-4 sm:pb-0"
              >
                <motion.div variants={itemVariants} className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-gold/30 hover:bg-white/10 transition-all duration-500 group/card relative overflow-hidden w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Mail className="w-8 h-8 text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2 relative z-10">Email Desk</h4>
                  <p className="text-silver/50 font-light text-[11px] relative z-10">enquiry@jpantubular.com</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-gold/30 hover:bg-white/10 transition-all duration-500 group/card relative overflow-hidden w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Headphones className="w-8 h-8 text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2 relative z-10">Direct Support</h4>
                  <p className="text-silver/50 font-light text-[11px] relative z-10">+91-120-2560586</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="sm:col-span-2 p-8 bg-white/2 border border-white/5 rounded-sm flex items-center justify-between group hover:border-white/10 transition-colors w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-gold/5 border border-gold/10 flex items-center justify-center rounded-sm group-hover:bg-gold/10 transition-colors">
                      <MessageSquare className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-1.5">Official Disclosure</h4>
                      <p className="text-silver/40 font-light text-[11px] leading-relaxed">Access our primary contact channels for official stakeholder engagement.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Dot Indicators for Mobile Scroll */}
              <div className="flex justify-center gap-2 mt-4 sm:hidden">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeIndex === index ? "bg-gold w-6" : "bg-white/20"
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
