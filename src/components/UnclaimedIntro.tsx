"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Info, ShieldCheck, Scale, Quote } from "lucide-react";

export function UnclaimedIntro() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-28 lg:py-32 bg-white dark:bg-background border-b border-border/50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-silver/5 dark:bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-deepblue/5 dark:bg-black/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Shareholder Awareness</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-10 leading-[1.1] tracking-tight">
              Facilitating Your <br />
              <span className="text-deepblue dark:text-gold italic font-light">Claim Recovery</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-charcoal/70 dark:text-silver/90 text-lg mb-12 leading-relaxed max-w-xl font-light">
              Unclaimed dividends and unpaid amounts represent your rightful 
              earnings as a shareholder. J Pan Tubular Components Limited is dedicated to maintaining 
              absolute transparency and assisting our investors in navigating 
              the recovery process efficiently.
            </motion.p>
            
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
               <motion.div variants={itemVariants} className="group cursor-pointer">
                  <div className="w-14 h-14 bg-silver/10 dark:bg-white/5 border border-border/80 flex items-center justify-center rounded-sm shrink-0 transition-all duration-500 mb-6 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <Info className="w-6 h-6 text-charcoal/50 dark:text-silver/50 transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-gold transition-colors duration-500">Entitlement</h4>
                    <p className="text-sm text-charcoal/70 dark:text-silver/90 font-light leading-relaxed">Regular verification of unpaid dividend history.</p>
                  </div>
               </motion.div>
               <motion.div variants={itemVariants} className="group cursor-pointer">
                  <div className="w-14 h-14 bg-silver/10 dark:bg-white/5 border border-border/80 flex items-center justify-center rounded-sm shrink-0 transition-all duration-500 mb-6 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <Scale className="w-6 h-6 text-charcoal/50 dark:text-silver/50 transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-gold transition-colors duration-500">Statutory Norms</h4>
                    <p className="text-sm text-charcoal/70 dark:text-silver/90 font-light leading-relaxed">Full compliance with IEPF transfer regulations.</p>
                  </div>
               </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual / Quote Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full group"
          >
            <div className="p-12 lg:p-16 bg-silver/5 dark:bg-white/2 border border-border/60 group-hover:border-gold/30 rounded-sm relative overflow-hidden shadow-2xl group-hover:shadow-deepblue/5 transition-all duration-700 z-10 bg-clip-padding backdrop-filter backdrop-blur-sm">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat mix-blend-overlay" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 bg-white/50 dark:bg-black/20 border border-border/50 rounded-sm flex items-center justify-center backdrop-blur-sm group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                      <ShieldCheck className="w-8 h-8 text-gold" />
                    </div>
                    <Quote className="w-12 h-12 text-black/5 dark:text-white/5" />
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-charcoal dark:text-white mb-10 tracking-tight">
                    Our Commitment
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l border-gold/50 group-hover:border-gold transition-colors duration-500">
                      <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white dark:bg-charcoal border-2 border-gold rounded-full" />
                      <p className="text-sm md:text-base text-charcoal/70 dark:text-silver/90 leading-relaxed italic font-light">
                        "We ensure that every eligible shareholder is informed 
                        regarding their unclaimed amounts, upholding the highest 
                        standards of corporate fiduciary responsibility."
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l border-gold/50 group-hover:border-gold transition-colors duration-500">
                      <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white dark:bg-charcoal border-2 border-gold rounded-full" />
                      <p className="text-sm md:text-base text-charcoal/70 dark:text-silver/90 leading-relaxed italic font-light">
                        "Our team provides end-to-end guidance for claims 
                        verification and fund recovery from the IEPF Authority."
                      </p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Cinematic Corner Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/30 rounded-bl-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
