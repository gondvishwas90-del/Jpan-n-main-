"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Headphones, ArrowRight, MessageSquare, ShieldCheck, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function GrievanceCTA() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < 3 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-charcoal overflow-hidden relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="bg-charcoal dark:bg-black/60 border border-white/10 p-8 sm:p-10 lg:p-16 rounded-3xl relative group overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Institutional Design Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] group-hover:bg-gold/10 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deepblue/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat mix-blend-overlay" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="h-[1px] w-10 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Investor Support Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Responsive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">Assistance</span>
              </h2>
              <p className="text-silver/70 text-base lg:text-lg mb-8 leading-relaxed max-w-xl font-light">
                We are committed to providing a fair and efficient resolution 
                to all investor concerns. For urgent clarifications, reach 
                out to our dedicated support hub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-8 py-4.5 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all duration-300 flex items-center justify-center gap-4 shadow-xl hover:shadow-gold/20 hover:bg-white group/btn whitespace-nowrap"
                >
                  Submit Grievance
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Portal</span>
                </div>
              </div>
            </motion.div>

            {/* Support Cards: Single visible card at a time with horizontal scroll on mobile (< sm), 2-column grid on desktop (>= sm) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-between w-full"
            >
              <div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                className="flex flex-row sm:grid sm:grid-cols-2 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 sm:py-0 px-1 sm:px-0 gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
              >
                <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-gold/40 transition-all duration-300 shadow-xl group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center">
                  <Headphones className="w-8 h-8 text-gold mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-500" />
                  <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-2">Live Support</h4>
                  <p className="text-silver/60 text-xs font-medium">enquiry@jpantubular.com</p>
                </div>

                <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-gold/40 transition-all duration-300 shadow-xl group/card w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center">
                  <Scale className="w-8 h-8 text-gold mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-500" />
                  <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-2">Fair Resolution</h4>
                  <p className="text-silver/60 text-xs font-medium">+91-120-2560586</p>
                </div>

                <div className="sm:col-span-2 p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between shadow-xl w-full min-w-full sm:min-w-0 sm:w-full shrink-0 snap-center">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center rounded-xl shrink-0">
                      <MessageSquare className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Direct Disclosure</h4>
                      <p className="text-silver/60 text-xs leading-relaxed font-light">Access our primary nodal officer for official grievance clarification.</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold/30" />
                  </div>
                </div>
              </div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex sm:hidden items-center justify-center gap-2 mt-4 z-10">
                {[0, 1, 2].map((i) => (
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
                      activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                    )}
                    aria-label={`Go to card ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
