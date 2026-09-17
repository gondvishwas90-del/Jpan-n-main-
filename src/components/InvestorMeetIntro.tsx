"use client";

import React from "react";
import { MessageCircle, BarChart3, TrendingUp } from "lucide-react";

export function InvestorMeetIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Market Engagement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight">
              Transparency as a <br />
              <span className="text-deepblue dark:text-gold">Strategic Asset</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At J Pan Tubular Components Limited, we view consistent investor dialogue as fundamental 
              to our corporate identity. Our meeting intimations provide the 
              market with timely, verified information regarding executive 
              engagements, ensuring all stakeholders have equitable access 
              to our strategic trajectory.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <span className="block text-2xl font-heading font-bold text-charcoal dark:text-white">Active</span>
                <span className="text-[9px] font-bold text-gold uppercase tracking-widest">Dialogue</span>
              </div>
              <div>
                <span className="block text-2xl font-heading font-bold text-charcoal dark:text-white">Global</span>
                <span className="text-[9px] font-bold text-gold uppercase tracking-widest">Reach</span>
              </div>
              <div>
                <span className="block text-2xl font-heading font-bold text-charcoal dark:text-white">24h</span>
                <span className="text-[9px] font-bold text-gold uppercase tracking-widest">Response</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-10 bg-silver/5 dark:bg-white/2 border border-border rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/blueprint.png')] bg-repeat group-hover:scale-105 transition-transform duration-1000" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 bg-white dark:bg-charcoal border border-border flex items-center justify-center rounded-sm shrink-0 transition-all duration-500 group-hover/item:bg-gold group-hover/item:border-gold group-hover/item:-translate-y-1 group-hover/item:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <BarChart3 className="w-6 h-6 text-gold transition-all duration-500 group-hover/item:text-white group-hover/item:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-1 transition-colors duration-500 group-hover/item:text-gold">Equitable Access</h4>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">Simultaneous disclosure of all investor interactions to institutional and retail partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 bg-white dark:bg-charcoal border border-border flex items-center justify-center rounded-sm shrink-0 transition-all duration-500 group-hover/item:bg-gold group-hover/item:border-gold group-hover/item:-translate-y-1 group-hover/item:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <MessageCircle className="w-6 h-6 text-gold transition-all duration-500 group-hover/item:text-white group-hover/item:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-1 transition-colors duration-500 group-hover/item:text-gold">Direct Interaction</h4>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">Coordinating earnings calls and analyst meets with precision-timed intimations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group/item cursor-pointer">
                  <div className="w-12 h-12 bg-white dark:bg-charcoal border border-border flex items-center justify-center rounded-sm shrink-0 transition-all duration-500 group-hover/item:bg-gold group-hover/item:border-gold group-hover/item:-translate-y-1 group-hover/item:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                    <TrendingUp className="w-6 h-6 text-gold transition-all duration-500 group-hover/item:text-white group-hover/item:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal dark:text-white uppercase tracking-widest text-xs mb-1 transition-colors duration-500 group-hover/item:text-gold">Strategic Updates</h4>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">Providing a transparent record of all market-moving presentations and interactions.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-deepblue/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
