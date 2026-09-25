"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "cnc",
    num: "01",
    title: "Multi-Axis CNC Cold Bending",
    badge: "±0.01 MM TOLERANCE",
    desc: "Over 60 high-speed automated CNC bending lines with closed-loop laser feedback, delivering zero tube wall thinning across complex 3D routing.",
    image: "/images/infrastructure.png",
    facility: "PLANT VI // AUTOMATED BENDING LINE 04",
    stat: "60+ Automated CNC Units",
  },
  {
    id: "brazing",
    num: "02",
    title: "Robotic Induction Brazing",
    badge: "CONTROLLED INERT PURGE",
    desc: "Multi-station continuous induction cells providing uniform thermal penetration and zero internal oxidation for high-pressure refrigeration circuits.",
    image: "/manufacturing_floor.png",
    facility: "PLANT II // ROBOTIC BRAZING CELL",
    stat: "100% Joint Penetration",
  },
  {
    id: "helium",
    num: "03",
    title: "Helium Mass Spectrometry",
    badge: "< 10⁻⁸ MBAR·L/S INTEGRITY",
    desc: "100% production vacuum chamber testing. Molecular helium mass spectrometry certifies hermetic seal integrity exceeding international OEM standards.",
    image: "/engineering_precision_facility_1778657209621.png",
    facility: "PLANT IV // MASS SPECTROMETRY CHAMBER",
    stat: "Zero-Leak Guaranteed",
  },
  {
    id: "plants",
    num: "04",
    title: "Pan-India Tier-1 Footprint",
    badge: "50,000+ M² CAPACITY",
    desc: "6 integrated manufacturing plants across Greater Noida, Pune, Sanand, Neemrana, and Bengaluru, supporting JIT deliveries along primary industrial corridors.",
    image: "/quality_precision.png",
    facility: "PAN-INDIA CLUSTER // 6 FACILITIES",
    stat: "65,000 MT Annual Output",
  },
];

const highlights = [
  { value: "65,000", unit: "MT", label: "Annual Output", sub: "Copper, brass & stainless steel volume" },
  { value: "±0.01", unit: "mm", label: "CNC Tolerance", sub: "Laser-guided closed-loop bending" },
  { value: "< 10⁻⁸", unit: "mbar·l/s", label: "Leak Integrity", sub: "100% helium mass-spec verification" },
  { value: "6", unit: "Plants", label: "Integrated Hubs", sub: "Pan-India strategic corridor presence" },
];

export function Infrastructure() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const runwayRef = useRef<HTMLDivElement>(null);

  const activePillar = pillars[activeIdx];

  // Track scroll progress along the pinned runway
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  // Zero re-render transform for the progress fill directly on the GPU layer
  const stepProgress = useTransform(scrollYProgress, (latest) => {
    const segment = 1 / pillars.length;
    const currentStep = Math.min(pillars.length - 1, Math.max(0, Math.floor(latest * pillars.length)));
    return Math.min(1, Math.max(0, (latest - currentStep * segment) / segment));
  });

  // Only trigger a React re-render when the active step ACTUALLY changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(pillars.length - 1, Math.max(0, Math.floor(latest * pillars.length)));
    if (step !== activeIdxRef.current) {
      activeIdxRef.current = step;
      setActiveIdx(step);
    }
  });

  // Smooth click navigation to corresponding scroll segment
  const handlePillarClick = (idx: number) => {
    activeIdxRef.current = idx;
    setActiveIdx(idx);
    if (runwayRef.current) {
      const rect = runwayRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const runwayTop = rect.top + scrollTop;
      const runwayHeight = rect.height - window.innerHeight;
      if (runwayHeight > 0) {
        const segment = 1 / pillars.length;
        const targetRatio = (idx + 0.5) * segment;
        window.scrollTo({
          top: runwayTop + targetRatio * runwayHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="infrastructure"
      className="relative py-20 md:py-28 bg-white dark:bg-[#071321] text-[#0D2440] dark:text-white transition-colors duration-500"
    >
      <div className="container-custom relative z-10 w-full">
        {/* ========================================================
            TOP: Minimalist Iconic Statement
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            {/* Technical Header Stamp */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2E5E99] dark:bg-[#7BA4D0]" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                INFRASTRUCTURE &amp; SCALE
              </span>
            </div>

            {/* Clean Monolithic Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.04] text-[#0D2440] dark:text-white">
              Industrial scale. <br />
              <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-light italic">
                Surgical precision.
              </span>
            </h2>
          </div>

          {/* Understated Narrative Copy */}
          <div className="max-w-md">
            <p className="text-[#0D2440]/75 dark:text-white/75 text-sm sm:text-base leading-relaxed font-light mb-6">
              Six automated production facilities operating under ISO 9001 and IATF 16949 certifications.
              Engineering high-volume precision components where zero-leak integrity is an absolute requirement.
            </p>
            <Link
              href="/about#infrastructure"
              className="group inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] hover:text-[#0D2440] dark:hover:text-white transition-colors"
            >
              <span>Explore Full Technical Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================
          CENTER: Sticky Scroll-Driven Sequential Stage
          (Pins in viewport as user scrolls through points one by one)
         ======================================================== */}
      <div ref={runwayRef} className="relative h-[260vh] md:h-[290vh]">
        <div className="sticky top-20 sm:top-24 h-[calc(100vh-5.5rem)] max-h-[820px] flex items-center justify-center">
          <div className="container-custom w-full">

            {/* Desktop View: Interactive Split Stage */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column: 4 Selectors with active scroll state */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {/* Scroll Indicator Badge */}
                <div className="flex items-center justify-between px-1 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2E5E99] dark:bg-[#7BA4D0] animate-pulse" />
                    <span className="font-heading text-xs uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                      CAPABILITY {pillars[activeIdx].num} OF 04
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-[#0D2440]/60 dark:text-white/60 tracking-wider font-medium">
                    SCROLL DOWN TO PROGRESS
                  </span>
                </div>

                {pillars.map((pillar, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => handlePillarClick(idx)}
                      className={cn(
                        "relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer group select-none overflow-hidden",
                        isActive
                          ? "bg-[#E7F0FA] dark:bg-white/10 text-[#0D2440] dark:text-white border border-[#2E5E99]/30 dark:border-white/20"
                          : "opacity-55 hover:opacity-90 text-[#0D2440]/70 dark:text-white/70 hover:bg-[#E7F0FA]/30 dark:hover:bg-white/5 border border-transparent"
                      )}
                      aria-label={`View ${pillar.title}`}
                    >
                      {/* Left Active Accent Pill */}
                      {isActive && (
                        <motion.span
                          layoutId="activePillarIndicator"
                          className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-[#2E5E99] dark:bg-[#7BA4D0]"
                          transition={{ type: "spring", stiffness: 350, damping: 32 }}
                        />
                      )}

                      {/* Active Progress Fill Line (GPU Composited) */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2E5E99]/15 dark:bg-[#7BA4D0]/15 overflow-hidden">
                          <motion.div
                            className="h-full bg-[#2E5E99] dark:bg-[#7BA4D0] w-full"
                            style={{ scaleX: stepProgress, transformOrigin: "left" }}
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-heading text-sm font-black text-[#2E5E99] dark:text-[#7BA4D0] tracking-wider">
                          {pillar.num}
                        </span>
                        <span className="font-sans text-[11px] uppercase tracking-wider text-[#0D2440]/60 dark:text-white/60 font-semibold">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-heading font-bold tracking-tight mb-1 text-[#0D2440] dark:text-white">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-[#0D2440]/75 dark:text-white/75 font-light leading-relaxed line-clamp-2">
                        {pillar.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Cinematic Viewport with Smooth Image Transitions */}
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/10.5] rounded-3xl overflow-hidden bg-[#0D2440] border border-[#7BA4D0]/30 dark:border-white/15 group">
                  {pillars.map((pillar, idx) => {
                    const isSelected = activeIdx === idx;
                    return (
                      <motion.div
                        key={pillar.id}
                        initial={false}
                        animate={{
                          opacity: isSelected ? 1 : 0,
                          scale: isSelected ? 1 : 1.01,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={cn(
                          "absolute inset-0 pointer-events-none transform-gpu will-change-transform",
                          isSelected ? "z-10" : "z-0"
                        )}
                      >
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover object-center"
                          priority
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        {/* Subtle darkening gradient for text clarity */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/85 via-transparent to-[#0D2440]/25" />
                      </motion.div>
                    );
                  })}

                  {/* Bottom Operational Readout Pill */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 p-4 sm:p-5 rounded-2xl bg-[#0D2440]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-heading font-bold text-[#7BA4D0] uppercase tracking-wider mb-0.5">
                        KEY CAPABILITY
                      </div>
                      <div className="text-sm sm:text-base font-heading font-bold text-white">
                        {activePillar.title}
                      </div>
                    </div>
                    <div className="text-right pl-4 border-l border-white/20 shrink-0">
                      <div className="font-heading text-sm sm:text-base font-black text-[#7BA4D0]">
                        {activePillar.stat}
                      </div>
                      <div className="text-[10px] font-sans font-medium text-white/70 uppercase">
                        CERTIFIED
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View: Sequential Stage */}
            <div className="lg:hidden flex flex-col gap-3.5 w-full">
              {/* Stepper Tabs */}
              <div className="grid grid-cols-4 gap-2">
                {pillars.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    onClick={() => handlePillarClick(idx)}
                    className={cn(
                      "py-2 px-1 text-center rounded-xl text-xs font-heading font-bold transition-all border",
                      activeIdx === idx
                        ? "bg-[#2E5E99] dark:bg-[#7BA4D0] text-white dark:text-[#071321] border-transparent"
                        : "bg-black/5 dark:bg-white/5 text-[#0D2440]/60 dark:text-white/60 border-black/5 dark:border-white/10"
                    )}
                  >
                    {pillar.num}
                  </button>
                ))}
              </div>

              {/* Viewport Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0D2440] border border-[#7BA4D0]/30 dark:border-white/15">
                {pillars.map((pillar, idx) => {
                  const isSelected = activeIdx === idx;
                  return (
                    <motion.div
                      key={pillar.id}
                      initial={false}
                      animate={{
                        opacity: isSelected ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={cn(
                        "absolute inset-0 pointer-events-none",
                        isSelected ? "z-10" : "z-0"
                      )}
                    >
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/80 via-transparent to-[#0D2440]/20" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Active Pillar Card */}
              <div className="p-4 rounded-2xl bg-[#E7F0FA]/80 dark:bg-white/10 border border-[#2E5E99]/25 dark:border-white/15">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-heading text-xs font-bold text-[#2E5E99] dark:text-[#7BA4D0] tracking-wider">
                    {activePillar.num} // STEP {activeIdx + 1} OF 4
                  </span>
                  <span className="font-sans text-[10px] uppercase font-semibold text-[#0D2440]/60 dark:text-white/60">
                    {activePillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-[#0D2440] dark:text-white mb-1.5">
                  {activePillar.title}
                </h3>
                <p className="text-xs text-[#0D2440]/75 dark:text-white/75 font-light leading-relaxed mb-3">
                  {activePillar.desc}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-black/10 dark:border-white/10">
                  <span className="text-[10px] font-sans font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase">
                    KEY METRIC
                  </span>
                  <span className="font-heading text-xs font-bold text-[#0D2440] dark:text-white">
                    {activePillar.stat}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-custom relative z-10 w-full mt-16 md:mt-24">
        {/* ========================================================
            BOTTOM: Monolithic Minimalist Statistics (Completely Open)
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#7BA4D0]/25 dark:border-white/10">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              className="space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E5E99] dark:bg-[#7BA4D0]" />
                <span className="font-heading text-xs uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                  {item.label}
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-[#0D2440] dark:text-white">
                <span>{item.value}</span>
                <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-sans text-base sm:text-lg font-semibold ml-1.5">
                  {item.unit}
                </span>
              </div>

              <p className="text-xs text-[#0D2440]/65 dark:text-white/65 font-light leading-relaxed">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



