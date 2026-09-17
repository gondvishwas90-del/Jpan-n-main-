"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, User, ShieldCheck, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function GrievanceSupport() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < 4 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-28 lg:py-32 bg-silver/5 dark:bg-black/10 relative overflow-hidden">
      {/* Premium Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 dark:bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Support Channels</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] tracking-tight">
              Direct <br />
              <span className="text-deepblue dark:text-gold italic font-light">Investor Support</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
             <div className="px-6 md:px-8 py-4 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border border-border/60 rounded-xl flex items-center gap-4 shadow-xl group cursor-pointer transition-all hover:border-gold/40">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_4px_12px_-4px_rgba(212,175,55,0.5)] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-bold text-charcoal/70 dark:text-silver/90 uppercase tracking-[0.2em]">Nodal Officer Verified</span>
             </div>
          </motion.div>
        </div>

        {/* Support Cards: Single visible card at a time with horizontal scroll on mobile (< md), 4-column grid on desktop (>= md) */}
        <div className="flex flex-col justify-between w-full">
          <motion.div 
            ref={cardsRef}
            onScroll={handleMobileScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {/* Nodal Officer - Hero Card */}
            <motion.div variants={cardVariants} className="bg-charcoal dark:bg-black/60 border border-white/10 p-6 sm:p-8 lg:p-10 rounded-2xl group hover:border-gold/50 transition-all duration-500 relative overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 border border-gold/20 flex items-center justify-center rounded-xl mb-6 sm:mb-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                     <User className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                  </div>
                  <h4 className="text-[10px] font-bold text-silver/50 uppercase tracking-[0.25em] mb-2 sm:mb-3">Nodal Officer</h4>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">Sunil Mehra</h3>
                  <p className="text-xs text-silver/60 leading-relaxed mb-6 sm:mb-8 font-light">Chief Financial Officer & Nodal Officer for Grievances</p>
                </div>
                
                <div>
                  <div className="h-px w-full bg-white/10 mb-6 sm:mb-8 group-hover:bg-white/20 transition-colors" />
                  
                  <button className="flex items-center gap-3 text-[10px] font-bold text-gold uppercase tracking-[0.2em] group/btn">
                     View Certificate
                     <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Email Support */}
            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border border-border/60 p-6 sm:p-8 lg:p-10 rounded-2xl group hover:border-gold/40 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/10 dark:bg-white/5 border border-border/50 flex items-center justify-center rounded-xl mb-6 sm:mb-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                   <Mail className="w-6 h-6 text-charcoal/40 dark:text-silver/40 transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>
                <h4 className="text-[10px] font-bold text-charcoal/40 dark:text-silver/40 uppercase tracking-[0.25em] mb-2 sm:mb-3">Email Channel</h4>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-2">Grievance Desk</h3>
                <p className="text-xs text-charcoal/60 dark:text-silver/60 leading-relaxed mb-6 sm:mb-8 font-light">Dedicated digital channel for concern submission</p>
              </div>
              <div>
                <div className="h-px w-full bg-border/50 mb-6 sm:mb-8 group-hover:bg-gold/20 transition-colors" />
                <p className="text-xs sm:text-sm font-bold text-charcoal dark:text-white tracking-wide group-hover:text-gold transition-colors duration-300">enquiry@jpantubular.com</p>
              </div>
            </motion.div>

            {/* Phone Support */}
            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border border-border/60 p-6 sm:p-8 lg:p-10 rounded-2xl group hover:border-gold/40 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/10 dark:bg-white/5 border border-border/50 flex items-center justify-center rounded-xl mb-6 sm:mb-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                   <Phone className="w-6 h-6 text-charcoal/40 dark:text-silver/40 transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>
                <h4 className="text-[10px] font-bold text-charcoal/40 dark:text-silver/40 uppercase tracking-[0.25em] mb-2 sm:mb-3">Voice Channel</h4>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-2">Support Helpline</h3>
                <p className="text-xs text-charcoal/60 dark:text-silver/60 leading-relaxed mb-6 sm:mb-8 font-light">Monday to Friday (10:00 AM – 6:00 PM IST)</p>
              </div>
              <div>
                <div className="h-px w-full bg-border/50 mb-6 sm:mb-8 group-hover:bg-gold/20 transition-colors" />
                <p className="text-xs sm:text-sm font-bold text-charcoal dark:text-white tracking-wide group-hover:text-gold transition-colors duration-300">+91-120-2560586</p>
              </div>
            </motion.div>

            {/* Office Address */}
            <motion.div variants={cardVariants} className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border border-border/60 p-6 sm:p-8 lg:p-10 rounded-2xl group hover:border-gold/40 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-silver/10 dark:bg-white/5 border border-border/50 flex items-center justify-center rounded-xl mb-6 sm:mb-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                   <MapPin className="w-6 h-6 text-charcoal/40 dark:text-silver/40 transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                </div>
                <h4 className="text-[10px] font-bold text-charcoal/40 dark:text-silver/40 uppercase tracking-[0.25em] mb-2 sm:mb-3">Physical Desk</h4>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white mb-2">Registered Office</h3>
                <p className="text-xs text-charcoal/60 dark:text-silver/60 leading-relaxed mb-6 sm:mb-8 font-light">Nodal Officer Reception, Head Quarters, Greater Noida</p>
              </div>
              <div>
                <div className="h-px w-full bg-border/50 mb-6 sm:mb-8 group-hover:bg-gold/20 transition-colors" />
                <p className="text-xs sm:text-sm font-bold text-charcoal dark:text-white tracking-wide group-hover:text-gold transition-colors duration-300">Greater Noida, UP 201306, India</p>
              </div>
            </motion.div>
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
                aria-label={`Go to channel ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
