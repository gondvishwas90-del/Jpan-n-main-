"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface StatItem {
  id: string;
  eyebrow: string;
  eyebrowState: "active" | "scaling" | "online" | "certified" | "verified";
  value: string;
  unit: string;
  title: string;
  description: string;
  isImageCard?: boolean;
  image?: string;
  imageTopBadge?: string;
  imageBottomBadge?: string;
}

const stats: StatItem[] = [
  {
    id: "capacity",
    eyebrow: "annual capacity",
    eyebrowState: "scaling",
    value: "65,000",
    unit: "MT",
    title: "Volume manufacturing output",
    description: "High-throughput processing capacity across precision copper, brass, and stainless-steel components."
  },
  {
    id: "yield",
    eyebrow: "cnc tolerance",
    eyebrowState: "online",
    value: "99.98",
    unit: "%",
    title: "First-pass precision yield",
    description: "Rigorous dimensional tolerance control achieved through multi-axis automated CNC tooling."
  },
  {
    id: "heritage",
    eyebrow: "established",
    eyebrowState: "active",
    value: "1998",
    unit: "EST.",
    title: "Decades of engineering mastery",
    description: "Over 25 years of continuous operational excellence in specialized tubular components for global OEMs."
  },
  {
    id: "plants",
    eyebrow: "footprint",
    eyebrowState: "online",
    value: "6",
    unit: "PLANTS",
    title: "Dedicated manufacturing facilities",
    description: "Integrated production plants with state-of-the-art extrusion, CNC bending, and brazing lines."
  },
  {
    id: "leak-testing",
    eyebrow: "leak integrity",
    eyebrowState: "verified",
    value: "< 10⁻⁸",
    unit: "mbar·l/s",
    title: "Helium mass spectrometry testing",
    description: "100% leak verification ensuring zero-defect thermal integrity for critical HVAC and cooling circuits."
  },
  {
    id: "oem-delivery",
    eyebrow: "global reach",
    eyebrowState: "active",
    value: "OEM",
    unit: "GLOBAL",
    title: "Tier-1 OEM certified partner",
    description: "Engineered supply continuity serving automotive, refrigeration, and industrial leaders worldwide.",
    isImageCard: true,
    image: "/manufacturing_floor.png",
    imageTopBadge: "6 Plants · Global Supply",
    imageBottomBadge: "Zero-Defect · JIT Delivery"
  }
];

export function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us"
      className="relative py-20 md:py-28 bg-[#E7F0FA] text-[#0D2440] overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#2E5E99] inline-block shadow-[0_0_6px_#2E5E99]" />
              <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#2E5E99] uppercase">
                WHY J PAN
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0D2440] tracking-tight leading-[1.1]">
              Built to be trusted. <br />
              <span className="text-[#2E5E99] font-normal">Engineered to endure.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[#0D2440]/75 text-sm sm:text-base leading-relaxed mb-4">
              Six core manufacturing commitments we uphold on every component, from raw extrusion to final OEM dispatch.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#2E5E99] hover:text-[#0D2440] font-semibold transition-colors group"
            >
              <span>Explore Our Infrastructure</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6-Card High-Impact Stat Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            if (stat.isImageCard) {
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative min-h-[360px] sm:min-h-[380px] rounded-3xl overflow-hidden border border-[#7BA4D0]/40 shadow-lg shadow-[#0D2440]/5 group flex flex-col justify-between p-7 sm:p-8"
                >
                  {/* Background Image with Ambient Overlay */}
                  <Image
                    src={stat.image || "/manufacturing_floor.png"}
                    alt={stat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440] via-[#0D2440]/75 to-[#0D2440]/40" />
                  <div className="absolute inset-0 border border-[#7BA4D0]/20 rounded-3xl pointer-events-none" />

                  {/* Top Readout */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-3.5 py-1.5 rounded-full bg-[#0D2440]/80 backdrop-blur-md border border-[#7BA4D0]/30 text-[10px] sm:text-xs font-mono tracking-[0.16em] uppercase text-[#E7F0FA]">
                      {stat.imageTopBadge}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 pt-16">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-[#7BA4D0] mb-2 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7BA4D0] animate-pulse" />
                      <span>{stat.imageBottomBadge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#E7F0FA] tracking-tight mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-[#E7F0FA]/75 text-xs sm:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative min-h-[360px] sm:min-h-[380px] rounded-3xl bg-white border border-[#7BA4D0]/40 p-7 sm:p-8 flex flex-col justify-between shadow-lg shadow-[#0D2440]/5 hover:border-[#2E5E99] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Top Section: Eyebrow + Huge Number */}
                <div>
                  {/* Status Eyebrow */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#2E5E99] inline-block animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2E5E99] font-semibold">
                      {stat.eyebrow}
                    </span>
                  </div>

                  {/* Huge Display Number & Unit */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-[#0D2440] tracking-tight leading-none group-hover:text-[#2E5E99] transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-semibold text-[#2E5E99] uppercase tracking-wider">
                      {stat.unit}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Title + Descriptive Narrative */}
                <div className="pt-6 border-t border-[#7BA4D0]/25">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0D2440] tracking-tight mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-[#0D2440]/70 text-xs sm:text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
