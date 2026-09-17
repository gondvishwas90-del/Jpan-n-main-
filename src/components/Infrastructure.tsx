"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SpecRow {
  label: string;
  value: string;
}

const specs: SpecRow[] = [
  { label: "FACILITIES", value: "6 Integrated Manufacturing Plants" },
  { label: "ANNUAL OUTPUT", value: "65,000 Metric Tonnes" },
  { label: "TOLERANCE", value: "± 0.02 mm CNC Precision" },
  { label: "LEAK TESTING", value: "Helium Mass Spectrometry (< 10⁻⁸ mbar·l/s)" },
  { label: "MATERIALS", value: "Copper (99.9%), Brass, Stainless Steel" },
  { label: "STANDARDS", value: "ISO 9001 / Tier-1 OEM Certified" }
];

export function Infrastructure() {
  return (
    <section 
      id="infrastructure"
      className="relative py-20 md:py-28 lg:py-32 bg-white text-[#0D2440] overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        
        {/* Top Eyebrow & Main Section Headline */}
        <div className="max-w-4xl mb-14 md:mb-20">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-1.5 bg-[#2E5E99] inline-block shadow-[0_0_8px_rgba(46,94,153,0.6)]" />
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#2E5E99] uppercase">
              MANUFACTURING INFRASTRUCTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-[#0D2440] tracking-tight leading-[1.1]">
            Engineering, infrastructure, and the <br />
            <span className="text-[#2E5E99] font-normal">precision behind them.</span>
          </h2>
        </div>

        {/* Split-Layout: Module Specs (Left) & Pure Blueprint Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Overview & Specifications Table */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Module Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0D2440] tracking-tight leading-snug mb-5">
                Precision automated manufacturing, built on Tier-1 infrastructure.
              </h3>

              {/* Narrative Copy */}
              <p className="text-[#0D2440]/75 text-sm sm:text-base leading-relaxed mb-8">
                Integrated production facilities with over 65,000 MT annual output capacity across copper, brass, and stainless steel. Automated multi-axis CNC bending, robotic induction brazing, and 100% helium leak detection ensure supply is an engineered certainty.
              </p>
            </div>

            {/* Structured Specifications Table (Hairline Dividers) */}
            <div className="border-t border-[#7BA4D0]/30 w-full mb-8">
              {specs.map((spec, i) => (
                <div 
                  key={i}
                  className="py-3 sm:py-3.5 border-b border-[#7BA4D0]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 group hover:bg-white/40 px-1 rounded-sm transition-colors"
                >
                  <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#2E5E99] font-semibold">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#0D2440] font-medium text-left sm:text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div>
              <Link
                href="/about"
                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#2E5E99] hover:bg-[#0D2440] text-[#E7F0FA] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Explore Plant Infrastructure</span>
                <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Pure Image Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#7BA4D0]/40 bg-[#061221] shadow-2xl shadow-[#0D2440]/12 aspect-[4/3] sm:aspect-[16/11] group">
              <Image
                src="/images/infrastructure.png"
                alt="Advanced Automated CNC & Robotic Manufacturing Infrastructure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
