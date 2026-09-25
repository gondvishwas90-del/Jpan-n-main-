"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCard {
  type: "review";
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  award?: string;
}

interface PhotoCard {
  type: "photo";
  id: string;
  image: string;
  title: string;
}

type StreamItem = TestimonialCard | PhotoCard;

// Column 1: Review, Review, Photo
const column1Items: StreamItem[] = [
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
];

// Column 2: Review, Photo, Review
const column2Items: StreamItem[] = [
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
];

// Column 3: Photo, Review, Review
const column3Items: StreamItem[] = [
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
];

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the pinned runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy, quick-responsive spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
    restDelta: 0.0001,
  });

  // Quick, responsive fan-out (completes within early 22% of scroll)
  const x1 = useTransform(smoothProgress, [0, 0.22], [90, 0]);
  const x3 = useTransform(smoothProgress, [0, 0.22], [-90, 0]);

  const rotate1 = useTransform(smoothProgress, [0, 0.2], [-3, 0]);
  const rotate3 = useTransform(smoothProgress, [0, 0.2], [3, 0]);

  const scale = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.1], [0.75, 1]);

  return (
    <section
      ref={containerRef}
      id="awards-recognition"
      className="relative h-[165vh] bg-[#EAF2F8] dark:bg-[#071321] text-[#0D2440] dark:text-white transition-colors duration-300"
    >
      {/* PINNED STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 md:py-12">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(46,94,153,0.06),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(13,36,64,0.05),transparent_50%)]" />

        <div className="container-custom relative z-10 w-full flex flex-col h-full justify-between">
          {/* HEADER */}
          <div className="shrink-0 mb-4 md:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-tight">
              What partners <span className="text-[#2E5E99] dark:text-[#7BA4D0]">are saying</span>
            </h2>
          </div>

          {/* 3-COLUMN MARQUEE STAGE WITH RESPONSIVE FAN-OUT */}
          <motion.div
            style={{ scale, opacity }}
            className="relative flex-1 overflow-hidden py-2 px-2 sm:px-4"
          >
            {/* Desktop 3-Column Marquee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 h-full items-start">
              {/* COLUMN 1: Fans out to left, marquees upward */}
              <motion.div
                style={{ x: x1, rotate: rotate1 }}
                className="h-full overflow-hidden transform-gpu will-change-transform origin-bottom-right"
              >
                <MarqueeColumn items={column1Items} direction="up" />
              </motion.div>

              {/* COLUMN 2: Center lane, marquees downward */}
              <div className="h-full overflow-hidden transform-gpu will-change-transform">
                <MarqueeColumn items={column2Items} direction="down" />
              </div>

              {/* COLUMN 3: Fans out to right, marquees upward */}
              <motion.div
                style={{ x: x3, rotate: rotate3 }}
                className="h-full overflow-hidden transform-gpu will-change-transform origin-bottom-left hidden md:block"
              >
                <MarqueeColumn items={column3Items} direction="up" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Vertical Marquee Column with seamless duplicated loop and pause-on-hover
function MarqueeColumn({
  items,
  direction = "up",
}: {
  items: StreamItem[];
  direction?: "up" | "down";
}) {
  return (
    <div
      className={cn(
        "flex flex-col select-none transform-gpu will-change-transform",
        direction === "up"
          ? "animate-marquee-vertical-up hover:[animation-play-state:paused]"
          : "animate-marquee-vertical-down hover:[animation-play-state:paused]"
      )}
    >
      {/* Primary Set */}
      <div className="flex flex-col gap-5 lg:gap-6 shrink-0 pb-5 lg:pb-6">
        {items.map((item) => (
          <CardRenderer key={`primary-${item.id}`} item={item} />
        ))}
      </div>

      {/* Duplicate Set for Seamless Loop */}
      <div
        className="flex flex-col gap-5 lg:gap-6 shrink-0 pb-5 lg:pb-6"
        aria-hidden="true"
      >
        {items.map((item) => (
          <CardRenderer key={`dup-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}

// Card Renderer for Review Card or Photo Card
function CardRenderer({ item }: { item: StreamItem }) {
  if (item.type === "photo") {
    return (
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/10] border border-[#7BA4D0]/30 group shrink-0 bg-[#0D2440] transition-transform duration-300 hover:scale-[1.02]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/90 via-[#0D2440]/30 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-xs sm:text-sm font-heading font-bold text-white leading-snug">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl md:rounded-3xl bg-white dark:bg-[#102744] p-6 sm:p-7 border border-[#7BA4D0]/30 dark:border-white/10 flex flex-col justify-between shrink-0 text-[#0D2440] dark:text-white transition-all duration-300 hover:border-[#2E5E99] dark:hover:border-[#7BA4D0] hover:scale-[1.01]">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
        ))}
      </div>

      <p className="text-xs sm:text-sm text-[#0D2440]/85 dark:text-white/85 leading-relaxed mb-6 font-normal">
        “{item.quote}”
      </p>

      <div className="pt-4 border-t border-[#7BA4D0]/20 dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#2E5E99] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0">
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
          <div className="text-[10px] font-mono font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase tracking-tight text-right shrink-0">
            {item.award}
          </div>
        )}
      </div>
    </div>
  );
}
