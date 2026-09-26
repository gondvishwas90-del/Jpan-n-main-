"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, useInView } from "framer-motion";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Zap, Gauge, Activity } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
};

// Crisp, high-efficiency fan-in: snappy 0.5s duration with energetic easing
const fanTopLeft: Variants = {
  hidden: { opacity: 0, x: 35, y: 28, rotate: -3, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fanTopRight: Variants = {
  hidden: { opacity: 0, x: -35, y: 28, rotate: 3, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fanBottomLeft: Variants = {
  hidden: { opacity: 0, x: 28, y: 32, rotate: -2, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fanBottomRight: Variants = {
  hidden: { opacity: 0, x: -28, y: 32, rotate: 2, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedCounter({
  value,
  decimals = 0,
  duration = 1.1,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * value;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(current).toLocaleString());
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 md:py-36 bg-transparent text-[#0D2440] dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        {/* ========================================================
            TOP: Editorial Corporate Headline & Statement
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Technical Eyebrow Pill */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2E5E99] dark:bg-[#7BA4D0] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                BENCHMARK TELEMETRY // 01
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.04] text-[#0D2440] dark:text-white">
              Performance <br />
              <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-light italic">
                proven at scale.
              </span>
            </h2>
          </motion.div>

          {/* Understated Narrative Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md space-y-6"
          >
            <p className="text-[#0D2440]/75 dark:text-white/75 text-sm sm:text-base leading-relaxed font-light">
              Engineered for mission-critical operating environments where zero-defect reliability
              is non-negotiable. Continuously audited under ISO 9001 and IATF 16949 standards across six automated facilities.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/quality"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#2E5E99] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#0D2440] dark:hover:bg-[#1E3E66] transition-all active:scale-95 shrink-0"
              >
                <span>Audit Specifications</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-[#7BA4D0]/30 dark:border-white/10 text-[11px] font-mono font-semibold text-[#0D2440]/70 dark:text-white/70">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E5E99] dark:text-[#7BA4D0]" />
                <span>Zero Tolerance Standard</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            CENTER: Corporate Bento Architectural Grid
           ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* ----------------------------------------------------
              BENTO 1: Flagship Scale (7 cols / Hero Card)
             ---------------------------------------------------- */}
          <motion.div
            variants={fanTopLeft}
            whileHover={{ y: -4, transition: { duration: 0.16 } }}
            className="lg:col-span-7 relative rounded-3xl bg-gradient-to-b from-white/[0.18] via-white/[0.04] to-white/[0.08] dark:from-white/[0.08] dark:via-white/[0.02] dark:to-white/[0.04] border border-white/60 dark:border-white/20 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/90 dark:hover:border-white/40 shadow-[inset_0_2px_1.5px_0_rgba(255,255,255,0.8),inset_0_-1.5px_1px_0_rgba(255,255,255,0.2),0_16px_40px_rgba(13,36,64,0.08)] backdrop-blur-[2px] transition-all duration-300 transform-gpu overflow-hidden origin-bottom-right"
          >
            {/* Top Specular Rim */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

            {/* Top Row: Eyebrow Tag */}
            <div className="flex items-center justify-between gap-4 mb-8 z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 flex items-center justify-center text-[#2E5E99] dark:text-[#7BA4D0] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading text-[11px] uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                    CAPACITY METRICS
                  </span>
                  <span className="font-sans text-xs text-[#0D2440]/60 dark:text-white/60">
                    P95 CONTINUOUS OUTPUT
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Massive Stat Display with Simple Countup */}
            <div className="space-y-4 my-auto py-6 z-10">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl md:text-8xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-none group-hover:text-[#2E5E99] dark:group-hover:text-[#7BA4D0] transition-colors duration-300">
                  <AnimatedCounter value={65000} duration={1.0} />
                </span>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase tracking-wider">
                  MT
                </span>
              </div>

              {/* Visual Telemetry Bar with Smooth Fill Animation */}
              <div className="w-full bg-[#E7F0FA] dark:bg-white/10 h-2.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0] rounded-full group-hover:from-[#2E5E99] group-hover:to-[#5E8FC2] transition-colors"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#0D2440]/50 dark:text-white/50 uppercase tracking-wider">
                <span>Annual Output Capacity</span>
                <span className="font-bold text-[#2E5E99] dark:text-[#7BA4D0]">88% Sustained Load</span>
              </div>
            </div>

            {/* Bottom Row: Detailed Editorial Content */}
            <div className="pt-6 border-t border-[#7BA4D0]/20 dark:border-white/10 z-10">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0D2440] dark:text-white tracking-tight mb-2">
                High-Volume Precision Tube Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-[#0D2440]/75 dark:text-white/75 font-light leading-relaxed max-w-xl">
                Multi-alloy conversion across medical-grade copper, precision brass alloys, and high-tensile stainless steel.
                Full traceability from raw billet inspection to certified container dispatch.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------
              BENTO 2: Cinematic Global OEM Footprint (5 cols)
             ---------------------------------------------------- */}
          <motion.div
            variants={fanTopRight}
            whileHover={{ y: -4, transition: { duration: 0.16 } }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#0D2440]/90 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[460px] group border border-white/60 dark:border-white/20 shadow-[inset_0_2px_1.5px_0_rgba(255,255,255,0.7),inset_0_-1.5px_1px_0_rgba(255,255,255,0.2),0_16px_40px_rgba(13,36,64,0.12)] backdrop-blur-[2px] transform-gpu origin-bottom-left hover:border-white/90"
          >
            {/* Top Specular Rim */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

            {/* Photographic Background with Subtle Zoom */}
            <Image
              src="/manufacturing_floor.png"
              alt="Automated Robotics Manufacturing Line"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Cinematic Multilayer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/75 to-[#071321]/30" />

            {/* Top Coordinate Telemetry */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#7BA4D0] uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA4D0]" />
                <span>TIER-1 OEM AUDITED</span>
              </div>
              <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
                12+ MARKETS
              </span>
            </div>

            {/* Bottom Content Card Overlay */}
            <div className="relative z-10 pt-16">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7BA4D0] font-bold mb-2">
                GLOBAL SUPPLY CONTINUITY
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight leading-snug mb-3">
                Global OEM Supply Footprint
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-4">
                Serving primary automotive, HVAC, and locomotive OEMs across India, North America, and Europe with zero field-failure tolerance.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#7BA4D0] font-bold">
                <span>0.00% FIELD RECALLS</span>
                <span>•</span>
                <span>JIT DISPATCH ASSURED</span>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------------------------------
              BENTO 3: Precision Dimensional Yield (6 cols)
             ---------------------------------------------------- */}
          <motion.div
            variants={fanBottomLeft}
            whileHover={{ y: -4, transition: { duration: 0.16 } }}
            className="lg:col-span-6 relative rounded-3xl bg-gradient-to-b from-white/[0.18] via-white/[0.04] to-white/[0.08] dark:from-white/[0.08] dark:via-white/[0.02] dark:to-white/[0.04] border border-white/60 dark:border-white/20 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/90 dark:hover:border-white/40 shadow-[inset_0_2px_1.5px_0_rgba(255,255,255,0.8),inset_0_-1.5px_1px_0_rgba(255,255,255,0.2),0_16px_40px_rgba(13,36,64,0.08)] backdrop-blur-[2px] transition-all duration-300 transform-gpu origin-top-right overflow-hidden"
          >
            {/* Top Specular Rim */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

            {/* Top Row: Eyebrow + Spec Tag with Simple Countup */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 flex items-center justify-center text-[#2E5E99] dark:text-[#7BA4D0] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading text-[11px] uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                    DIMENSIONAL CONTROL
                  </span>
                  <span className="font-sans text-xs text-[#0D2440]/60 dark:text-white/60">
                    CLOSED-LOOP LASER BENDING
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-none group-hover:text-[#2E5E99] dark:group-hover:text-[#7BA4D0] transition-colors duration-300">
                  <AnimatedCounter value={99.98} decimals={2} duration={1.0} />
                </span>
                <span className="text-xl sm:text-2xl font-heading font-bold text-[#2E5E99] dark:text-[#7BA4D0] ml-1">
                  %
                </span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 border-t border-[#7BA4D0]/20 dark:border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/15 text-[10px] font-heading text-[#2E5E99] dark:text-[#7BA4D0] font-bold uppercase tracking-wider">
                  ±0.01 MM TOLERANCE
                </span>
                <span className="text-[11px] font-sans text-[#0D2440]/50 dark:text-white/50 uppercase font-medium">
                  First-Pass Yield
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0D2440] dark:text-white tracking-tight mb-2">
                Zero-Defect CNC Cold Forming
              </h3>
              <p className="text-xs sm:text-sm text-[#0D2440]/75 dark:text-white/75 font-light leading-relaxed">
                60+ multi-axis CNC bending lines paired with real-time laser wall-thickness measurement
                ensure zero tube wall thinning across complex 3D manifolds.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------
              BENTO 4: Molecular Helium Integrity (6 cols)
             ---------------------------------------------------- */}
          <motion.div
            variants={fanBottomRight}
            whileHover={{ y: -4, transition: { duration: 0.16 } }}
            className="lg:col-span-6 relative rounded-3xl bg-gradient-to-b from-white/[0.18] via-white/[0.04] to-white/[0.08] dark:from-white/[0.08] dark:via-white/[0.02] dark:to-white/[0.04] border border-white/60 dark:border-white/20 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/90 dark:hover:border-white/40 shadow-[inset_0_2px_1.5px_0_rgba(255,255,255,0.8),inset_0_-1.5px_1px_0_rgba(255,255,255,0.2),0_16px_40px_rgba(13,36,64,0.08)] backdrop-blur-[2px] transition-all duration-300 transform-gpu origin-top-left overflow-hidden"
          >
            {/* Top Specular Rim */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

            {/* Top Row: Eyebrow + Leak Value */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 flex items-center justify-center text-[#2E5E99] dark:text-[#7BA4D0] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading text-[11px] uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold">
                    MASS SPECTROMETRY
                  </span>
                  <span className="font-sans text-xs text-[#0D2440]/60 dark:text-white/60">
                    VACUUM CHAMBER TESTED
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-none group-hover:text-[#2E5E99] dark:group-hover:text-[#7BA4D0] transition-colors duration-300">
                  &lt; 10⁻⁸
                </span>
                <span className="block text-xs sm:text-sm font-heading font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase tracking-wider mt-0.5">
                  mbar·l/s
                </span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 border-t border-[#7BA4D0]/20 dark:border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/15 text-[10px] font-heading text-[#2E5E99] dark:text-[#7BA4D0] font-bold uppercase tracking-wider">
                  100% PRODUCTION VERIFIED
                </span>
                <span className="text-[11px] font-sans text-[#0D2440]/50 dark:text-white/50 uppercase font-medium">
                  Hermetic Integrity
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0D2440] dark:text-white tracking-tight mb-2">
                Molecular Helium Vacuum Seal Testing
              </h3>
              <p className="text-xs sm:text-sm text-[#0D2440]/75 dark:text-white/75 font-light leading-relaxed">
                Every high-pressure refrigeration, HVAC loop, and automotive connection passes through
                vacuum chambers to guarantee hermetic seals exceeding international OEM specifications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
