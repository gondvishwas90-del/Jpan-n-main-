"use client";

import React from "react";
import { TrendingUp, Target, Zap } from "lucide-react";

export function InvestorPresentationIntro() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Operational Narrative</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-tight">
              Visualizing our <br />
              <span className="text-deepblue dark:text-gold">Future Trajectory</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              Our investor presentations provide a high-fidelity window into 
              J Pan Tubular Components Limited's strategic decision-making. We combine rigorous financial 
              analytics with a clear vision for industrial innovation, 
              ensuring our growth narrative is both data-driven and forward-looking.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-heading font-bold text-charcoal dark:text-white">85%</div>
                <div className="w-px h-10 bg-border" />
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-[120px]">
                  Institutional Confidence Index
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-4xl font-heading font-bold text-charcoal dark:text-white">12+</div>
                <div className="w-px h-10 bg-border" />
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-[120px]">
                  Global Manufacturing Verticals
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-10 bg-silver/5 dark:bg-white/2 border border-border rounded-sm hover:border-gold transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white dark:bg-charcoal flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <TrendingUp className="w-7 h-7 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">Strategic Alignment</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">Synchronizing quarterly performance with long-term industrial market leadership.</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-silver/5 dark:bg-white/2 border border-border rounded-sm hover:border-gold transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white dark:bg-charcoal flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <Target className="w-7 h-7 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">Value Creation</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">Detailed breakdowns of capital allocation and operational efficiency benchmarks.</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-silver/5 dark:bg-white/2 border border-border rounded-sm hover:border-gold transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white dark:bg-charcoal flex items-center justify-center rounded-sm shrink-0 border border-border transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                  <Zap className="w-7 h-7 text-gold transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-gold">Future Readiness</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">Providing clarity on R&D roadmaps and sustainable manufacturing expansion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
