"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import DriftWall from "@/components/ui/DriftWall";

export interface TestimonialCard {
  type: "review";
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  award?: string;
}

export interface PhotoCard {
  type: "photo";
  id: string;
  image: string;
  title: string;
}

export type StreamItem = TestimonialCard | PhotoCard;

export const allStreamItems: StreamItem[] = [
  {
    type: "review",
    id: "haier-2025",
    rating: 5,
    quote:
      "J Pan's zero-leak copper tubular assemblies have maintained 100% compliance across our high-efficiency refrigeration production cycles. Their micron CNC bending tolerance is best-in-class.",
    author: "Haier Quality Council",
    role: "OEM Evaluation Board",
    company: "Haier Appliances",
    award: "Best Quality Award · 2025",
  },
  {
    type: "review",
    id: "bluestar-2022",
    rating: 5,
    quote:
      "Exceptional consistency in CNC machined brass flare nuts and distribution manifolds. Zero defect deliveries over multiple fiscal quarters with dependable JIT delivery schedules.",
    author: "Procurement & Quality Head",
    role: "Central Sourcing",
    company: "Blue Star Limited",
    award: "Best Supplier Award · 2022",
  },
  {
    type: "photo",
    id: "photo-cnc",
    image: "/manufacturing_floor.png",
    title: "High-throughput Automated CNC Bending & Tooling",
  },
  {
    type: "review",
    id: "danfoss-2024",
    rating: 5,
    quote:
      "Outstanding adherence to strict delivery timelines for critical thermal loops. J Pan stands out for prompt engineering support and flawless helium leak integrity testing under 10⁻⁸ mbar·l/s.",
    author: "Supply Chain Operations",
    role: "Climate Solutions Division",
    company: "Danfoss",
    award: "On Time Delivery Award · 2024",
  },
  {
    type: "photo",
    id: "photo-testing",
    image: "/quality_precision.png",
    title: "100% Helium Mass Spectrometry & Metrology Lab",
  },
  {
    type: "review",
    id: "samsung-ehs",
    rating: 5,
    quote:
      "Commendable adherence to Environmental, Health, Safety (EHS) protocols and clean manufacturing standards. Their automated facility sets an industry benchmark for precision manufacturing.",
    author: "Vendor Quality Assurance",
    role: "Manufacturing Audit Team",
    company: "Samsung",
    award: "EHS Activities Appreciation",
  },
  {
    type: "photo",
    id: "photo-infra",
    image: "/images/infrastructure.png",
    title: "Robotic Induction Brazing & Automated Production Cell",
  },
  {
    type: "review",
    id: "lg-sps",
    rating: 5,
    quote:
      "Achieved Level 4 in Synchronized Production System audits. J Pan's disciplined manufacturing process and multi-axis CNC tooling guarantee consistent micron-level dimensional yields.",
    author: "Manufacturing Excellence Audit",
    role: "Global Production Strategy",
    company: "LG Electronics",
    award: "SPS Level 4 Certified",
  },
  {
    type: "review",
    id: "wabtec-2018",
    rating: 5,
    quote:
      "High-endurance stainless steel tubular components engineered for severe operating environments and extreme vibration transit lines with zero field failures.",
    author: "Locomotive Engineering Lead",
    role: "Strategic Component Sourcing",
    company: "Wabtec Corporation",
    award: "Supplier Excellence Award",
  },
  {
    type: "photo",
    id: "photo-neemrana",
    image: "/engineering_precision_facility_1778657209621.png",
    title: "Neemrana Precision Manufacturing Hub · DMIC Corridor",
  },
  {
    type: "review",
    id: "daikin-oem",
    rating: 5,
    quote:
      "Industry-leading helium mass spectrometry leak testing ensuring 100% reliability in our variable refrigerant volume applications. Unmatched engineering collaboration.",
    author: "Technical Operations Board",
    role: "HVAC Engineering Lead",
    company: "Daikin India",
    award: "Zero Defect Vendor 2024",
  },
  {
    type: "photo",
    id: "photo-sanand",
    image: "/premium_infrastructure_facility_1778674475991.png",
    title: "Sanand Unit · Tier-1 High-Volume Production Cell",
  },
];

export function Certifications() {
  return (
    <section
      id="awards-recognition"
      className="relative py-20 md:py-28 bg-transparent text-[#0D2440] dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Background Accents */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(46,94,153,0.06),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(13,36,64,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10 w-full flex flex-col justify-between">
        {/* HEADER */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-heading font-bold text-[#2E5E99] dark:text-[#7BA4D0] tracking-widest uppercase mb-2">
              ACCREDITATION & INDUSTRIAL RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-tight">
              What partners <span className="text-[#2E5E99] dark:text-[#7BA4D0]">are saying</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2440]/70 dark:text-white/70 max-w-md font-light">
            Interactive 3D showcase of audited partner evaluations, Tier-1 OEM recognitions, and certified production facilities.
          </p>
        </div>

        {/* DRIFTWALL WITH CRYSTAL CLEAR CARDS */}
        <div className="relative w-full h-[620px] md:h-[680px] lg:h-[720px] rounded-3xl overflow-hidden">
          <DriftWall
            items={allStreamItems}
            renderItem={(item: StreamItem) => <CardRenderer item={item} />}
            columns={3}
            tileWidth={380}
            tileHeight={255}
            gap={24}
            tilt={10}
            turn={-8}
            perspective={1400}
            depth={60}
            speed={28}
            direction="up"
            variance={0.35}
            parallax={0.5}
            pauseOnHover={true}
            lift={44}
            fade={0.2}
            dim={0.95}
            overlayColor="transparent"
          />
        </div>
      </div>
    </section>
  );
}

// Card Renderer for Review Card or Photo Card - Preserving Exact Crystal-Clear Design
function CardRenderer({ item }: { item: StreamItem }) {
  if (item.type === "photo") {
    return (
      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/60 dark:border-white/20 group shrink-0 bg-[#0D2440]/90 transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_2px_1.5px_0_rgba(255,255,255,0.7),inset_0_-1.5px_1px_0_rgba(255,255,255,0.2),0_14px_36px_rgba(13,36,64,0.14)] backdrop-blur-[2px]">
        {/* Top Specular Rim */}
        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/90 via-[#0D2440]/30 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-[#0D2440]/80 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3)]">
          <p className="text-xs sm:text-sm font-heading font-bold text-white leading-snug">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-b from-white/95 via-white/85 to-white/95 dark:from-[#0D2440]/95 dark:via-[#0D2440]/85 dark:to-[#0D2440]/95 p-6 sm:p-7 border border-white/80 dark:border-white/20 flex flex-col justify-between shrink-0 text-[#0D2440] dark:text-white transition-all duration-300 hover:border-white dark:hover:border-white/40 shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_0_rgba(255,255,255,0.25),0_14px_36px_rgba(13,36,64,0.09)] backdrop-blur-md overflow-hidden">
      {/* Top Specular Rim */}
      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

      <div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
          ))}
        </div>

        <p className="text-xs sm:text-[13px] text-[#0D2440]/90 dark:text-white/90 leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#7BA4D0]/20 dark:border-white/10 flex items-center justify-between gap-3 mt-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#2E5E99] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.5)]">
            {item.company.charAt(0)}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-heading font-bold text-[#0D2440] dark:text-white leading-none mb-1">
              {item.company}
            </div>
            <div className="text-[10px] font-sans text-[#0D2440]/60 dark:text-white/60 uppercase tracking-wider font-semibold">
              {item.role}
            </div>
          </div>
        </div>

        {item.award && (
          <div className="px-2.5 py-1 rounded-full border border-white/40 dark:border-white/15 bg-white/40 dark:bg-white/10 text-[10px] font-mono font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase tracking-tight text-right shrink-0 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4)]">
            {item.award}
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
