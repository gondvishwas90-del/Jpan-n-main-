"use client";

import React from "react";
import { TrendingUp, Globe, Building2, ArrowUpRight, Zap } from "lucide-react";

const metrics = [
  {
    id: 1,
    label: "Revenue Growth",
    value: "24.5%",
    trend: "YoY Increase",
    desc: "Robust expansion across high-precision automotive and HVAC segments.",
    icon: TrendingUp,
    color: "gold"
  },
  {
    id: 2,
    label: "Market Presence",
    value: "18+",
    trend: "Countries",
    desc: "Expanding our strategic footprint across EMEA and Southeast Asian markets.",
    icon: Globe,
    color: "deepblue"
  },
  {
    id: 3,
    label: "Expansion Index",
    value: "150K",
    trend: "Sq. Ft. Added",
    desc: "Commissioning new specialized tubing lines for sustainable energy verticals.",
    icon: Building2,
    color: "gold"
  }
];

export function InvestorPresentationHighlights() {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-charcoal border-t border-border overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Performance Metrics</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight">
              Strategic <br />
              <span className="text-deepblue dark:text-gold">Benchmarks</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Key performance indicators reflecting J Pan Tubular Components Limited's operational 
              resilience and market-leading expansion strategies.
            </p>
            <div className="p-6 bg-silver/5 border border-border rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm">
                <Zap className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest">Efficiency</p>
                <p className="text-[10px] text-muted-foreground">Certified Performance</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] -z-10" />

            {metrics.map((metric) => (
              <div 
                key={metric.id}
                className="bg-white dark:bg-charcoal border border-border p-6 md:p-10 rounded-sm hover:border-gold transition-all duration-500 hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 bg-silver/5 dark:bg-white/5 border border-border flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors`}>
                    <metric.icon className="w-7 h-7 text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-charcoal dark:text-white block mb-1">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">
                    {metric.trend}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-widest mb-4">
                  {metric.label}
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
