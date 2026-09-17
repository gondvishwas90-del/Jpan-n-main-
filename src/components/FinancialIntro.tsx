"use client";

import React from "react";
import { ShieldCheck, BarChart3, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FinancialIntro() {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-silver/5 dark:bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">
                Our Commitment
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6 md:mb-8 leading-[1.1]">
              Transparency as a <br />
              <span className="text-deepblue dark:text-gold italic font-light">Cornerstone of Growth</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 md:mb-10 leading-relaxed font-light max-w-lg">
              At J Pan Tubular Components Limited, we believe that sustainable industrial leadership is built 
              on a foundation of financial integrity. Our periodic results provide 
              stakeholders with a clear view of our operational efficiency, market 
              resilience, and technical expansion.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="group cursor-pointer">
                <div className="w-12 h-12 bg-silver/10 dark:bg-white/5 border border-border flex items-center justify-center rounded-sm mb-6 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <ShieldCheck className="w-5 h-5 text-charcoal dark:text-white transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-xs text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">Governance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">Adhering to the highest standards of regulatory compliance.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-12 h-12 bg-silver/10 dark:bg-white/5 border border-border flex items-center justify-center rounded-sm mb-6 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <BarChart3 className="w-5 h-5 text-charcoal dark:text-white transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-xs text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">Insight</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">Data-driven reporting for professional investor review.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/5] rounded-sm overflow-hidden border border-border group shadow-2xl"
          >
            {/* The Image */}
            <Image 
              src="/images/annual_reports_hero.png"
              alt="Financial Data"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Gradient Overlays for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-deepblue/20 mix-blend-multiply z-10" />

            {/* Glassmorphic Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 p-8 rounded-sm transform group-hover:-translate-y-2 transition-transform duration-500">
                <Globe className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Official Disclosures</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8 font-light">
                  Access our full repository of quarterly results, annual reports, 
                  and mandatory regulatory filings.
                </p>
                <button className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:text-gold transition-colors">
                  Scroll to Archive
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
