"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileCheck, PhoneCall } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="relative py-14 md:py-20 bg-transparent transition-colors duration-300">
      <div className="container-custom relative z-10 w-full">
        {/* Pure Architectural Solid Card Container */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0c1a2e] text-[#0D2440] dark:text-white p-8 sm:p-12 md:p-14 lg:p-16 overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-xl">
          {/* Grid Content inside the Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Authoritative Editorial Heading & Subtext */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-black tracking-tight leading-[1.08] text-[#0D2440] dark:text-white mb-4">
                Ready to scale <br />
                <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-light italic">
                  precision manufacturing?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#0D2440]/75 dark:text-white/80 font-light leading-relaxed max-w-xl">
                Connect directly with our manufacturing engineering team for CAD reviews, tooling feasibility,
                alloy specifications, and high-throughput production delivery schedules.
              </p>
            </div>

            {/* Right Column: Clean Pill Actions Suite */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch gap-4 justify-center">
              {/* Primary Action Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-4 px-8 py-4 bg-[#2E5E99] hover:bg-[#0D2440] text-white font-medium text-sm rounded-full transition-all duration-300 active:scale-95 shadow-[0_8px_20px_rgba(46,94,153,0.25)]"
              >
                <div className="flex items-center gap-2.5">
                  <FileCheck className="w-4 h-4 text-[#7BA4D0]" />
                  <span>Submit Engineering RFQ</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>

              {/* Secondary Direct Phone Call Button */}
              <Link
                href="tel:+911202560586"
                className="group inline-flex items-center justify-between gap-4 px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 text-[#0D2440] dark:text-white font-medium text-sm rounded-full transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#2E5E99] dark:text-[#7BA4D0]" />
                  <span>+91 120 2560586</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
