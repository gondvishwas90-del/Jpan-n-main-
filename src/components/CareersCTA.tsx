"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Mail, Headphones, UserPlus, ShieldCheck } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function CareersCTA() {
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
    <section ref={containerRef} className="py-16 md:py-24 bg-white dark:bg-black overflow-hidden relative border-t border-border/50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-charcoal dark:bg-charcoal/80 backdrop-blur-md border border-border/50 p-10 md:p-16 lg:p-20 rounded-sm relative group overflow-hidden shadow-2xl"
        >
          {/* Institutional Design Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[100px] transition-opacity duration-1000 group-hover:opacity-70 opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">Start Your Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-[1.1]">
                Shape Your <br />
                <span className="text-gold italic font-light">Future With Us</span>
              </h2>
              
              <p className="text-silver/60 text-sm md:text-base mb-10 leading-relaxed font-light max-w-lg">
                Ready to contribute to J Pan Tubular Components Limited's legacy of excellence? 
                Connect with our recruitment desk or apply for open roles 
                to begin your institutional career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group/btn relative px-8 py-4 bg-gold text-charcoal rounded-sm overflow-hidden flex items-center justify-center gap-4"
                >
                  
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                    View All Roles
                  </span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:text-black" strokeWidth={2} />
                </button>
                
                <div className="flex items-center justify-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-sm text-white hover:bg-white/10 transition-colors duration-300">
                  <UserPlus className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Institutional Onboarding</span>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Info */}
            <div className="lg:col-span-6 flex flex-col">
              <motion.div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                variants={itemVariants} 
                className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none grid-cols-1 sm:grid-cols-2 gap-5 no-scrollbar pb-4 sm:pb-0"
              >
                <div className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-gold/40 transition-all duration-500 group/card relative overflow-hidden w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Mail className="w-6 h-6 text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2 relative z-10">Talent Email</h4>
                  <p className="text-silver/60 text-xs font-light relative z-10">enquiry@jpantubular.com</p>
                </div>
                
                <div className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-gold/40 transition-all duration-500 group/card relative overflow-hidden w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Headphones className="w-6 h-6 text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2 relative z-10">Recruitment Desk</h4>
                  <p className="text-silver/60 text-xs font-light relative z-10">+91-120-2560586</p>
                </div>
                
                <div className="sm:col-span-2 p-6 bg-white/2 border border-white/5 rounded-sm flex items-center justify-between gap-6 hover:bg-white/5 transition-colors duration-500 w-full shrink-0 snap-center sm:w-auto sm:shrink">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm shrink-0">
                      <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-1.5">Employer Authority</h4>
                      <p className="text-silver/50 text-[11px] font-light">J Pan Tubular Components Limited is an equal opportunity employer committed to meritocracy.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

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
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
