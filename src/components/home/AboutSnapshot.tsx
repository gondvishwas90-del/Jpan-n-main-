"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowUpRight, Award, Factory, Globe2, Users2, CheckCircle2, Cpu, ShieldCheck, Flame, ShieldAlert } from "lucide-react";

interface CapabilityModule {
  id: string;
  name: string;
  sublabel: string;
  image: string;
  badge: string;
  specValue: string;
  specLabel: string;
  headline: string;
  icon: React.ElementType;
}

const capabilityModules: CapabilityModule[] = [
  {
    id: "01",
    name: "Multi-Axis CNC Cold Bending",
    sublabel: "CLOSED-LOOP AUTOMATION",
    image: "/manufacturing_floor.png",
    badge: "PLANT VI • CNC FORMING",
    specValue: "±0.01 mm",
    specLabel: "TOLERANCE",
    headline: "Closed-Loop Robotic 3D Cold Bending",
    icon: Cpu,
  },
  {
    id: "02",
    name: "Mass-Spectrometry Helium Leak Testing",
    sublabel: "VACUUM CHAMBER VERIFIED",
    image: "/quality_precision.png",
    badge: "LABORATORY • VACUUM QA",
    specValue: "< 10⁻⁸ mbar·l/s",
    specLabel: "LEAK RATE",
    headline: "Molecular Helium Seal Integrity",
    icon: ShieldCheck,
  },
  {
    id: "03",
    name: "Induction & Controlled Atmosphere Brazing",
    sublabel: "INERT NITROGEN SHIELDING",
    image: "/industrial_precision_tubing_1778827579055.png",
    badge: "PLANT IV • BRAZING LINE",
    specValue: "ZERO OXIDATION",
    specLabel: "PURITY",
    headline: "High-Frequency Induction Brazing",
    icon: Flame,
  },
  {
    id: "04",
    name: "IATF 16949 & ISO 9001:2015 Certified",
    sublabel: "GLOBAL TIER-1 AUDIT",
    image: "/engineering_precision_facility_1778657209621.png",
    badge: "GLOBAL OEM VERIFIED",
    specValue: "ZERO-DEFECT",
    specLabel: "POLICY",
    headline: "Institutional Zero-Tolerance QA",
    icon: Award,
  },
];

const stats = [
  {
    label: "Years of Engineering Excellence",
    value: 28,
    suffix: "+",
    sublabel: "ESTABLISHED 1998",
    description: "Decades of continuous manufacturing innovation and institutional engineering memory.",
    icon: Award,
  },
  {
    label: "Specialized Manufacturing Plants",
    value: 6,
    suffix: "",
    sublabel: "PAN-INDIA FOOTPRINT",
    description: "Strategically situated near key automotive and HVAC industrial clusters.",
    icon: Factory,
  },
  {
    label: "Annual Tubular Capacity",
    value: 65,
    suffix: "k MT",
    sublabel: "HIGH-THROUGHPUT VOLUME",
    description: "High-speed cold drawing, multi-axis automated CNC bending, and induction brazing.",
    icon: Globe2,
  },
  {
    label: "Tier-1 & Global OEM Partners",
    value: 120,
    suffix: "+",
    sublabel: "VERIFIED SUPPLIER",
    description: "Long-standing trust with multinational leaders across 12+ international markets.",
    icon: Users2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1800;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-sans ml-0.5">{suffix}</span>
    </span>
  );
};

export function AboutSnapshot() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Active Capability Module State (Changes image every 3 seconds)
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Auto-cycle through modules every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModuleIndex((prev) => (prev + 1) % capabilityModules.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeModule = capabilityModules[activeModuleIndex];

  // 3D Perspective Tilt on Mouse Movement (Direct from Netlify reference)
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [ambientPos, setAmbientPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    setAmbientPos({ x: xRatio * 35, y: yRatio * 35 });
    setCardTilt({
      rotateY: xRatio * 10,
      rotateX: -yRatio * 8,
    });
  };

  const handleMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
    setAmbientPos({ x: 0, y: 0 });
  };

  // Magnetic Button Physics
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setBtnOffset({ x, y });
  };

  const handleBtnMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 md:py-36 bg-white dark:bg-[#071321] text-[#0D2440] dark:text-white transition-colors duration-500 overflow-hidden border-b border-[#7BA4D0]/20 dark:border-white/10"
    >
      <div className="container-custom relative z-10">
        {/* ========================================================
            TOP SECTION: Editorial Narrative & Interactive 3D Showcase
           ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28"
        >
          {/* Left Column: Narrative & Interactive Capability Selector Pills */}
          <div className="lg:col-span-6 space-y-6">

            {/* Display Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[58px] font-heading font-black text-[#0D2440] dark:text-white tracking-tight leading-[1.04] uppercase"
            >
              Precision engineered <br />
              <span className="italic font-light text-[#2E5E99] dark:text-[#7BA4D0]">
                for global industry.
              </span>
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[#0D2440]/75 dark:text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-light"
            >
              Founded in 1998, J Pan Tubular Components Limited has evolved into one of India&apos;s premier precision tubular manufacturing networks. Across 6 modern facilities, we engineer zero-tolerance copper, brass, and stainless-steel assemblies for the world&apos;s most exacting automotive, refrigeration, and HVAC leaders.
            </motion.p>

            {/* Interactive Capability Selector Pills */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilityModules.map((mod, idx) => {
                const isActive = activeModuleIndex === idx;
                const ModIcon = mod.icon;

                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`group text-left p-3 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center gap-3 ${isActive
                        ? "bg-[#E7F0FA] dark:bg-[#0D2440] border-[#2E5E99]/60 dark:border-[#7BA4D0]/60 scale-[1.02]"
                        : "bg-white/60 dark:bg-white/[0.03] border-[#7BA4D0]/20 dark:border-white/10 hover:border-[#2E5E99]/30 hover:bg-[#E7F0FA]/40 dark:hover:bg-white/[0.06]"
                      }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activePillGlow"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#2E5E99] dark:bg-[#7BA4D0]"
                      />
                    )}

                    {/* Active 3-Second Countdown Progress Bar */}
                    {isActive && (
                      <motion.div
                        key={`progress-${idx}-${activeModuleIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-[2px] bg-[#2E5E99]/80 dark:bg-[#7BA4D0]"
                      />
                    )}

                    {/* Icon Bubble */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive
                          ? "bg-[#2E5E99] text-white dark:bg-[#7BA4D0] dark:text-[#0D2440]"
                          : "bg-[#E7F0FA] dark:bg-white/10 text-[#2E5E99] dark:text-[#7BA4D0]"
                        }`}
                    >
                      <ModIcon className="w-4 h-4" />
                    </div>

                    {/* Label & Index */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-heading font-bold tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] uppercase">
                          0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E5E99] dark:bg-[#7BA4D0] animate-pulse" />
                        )}
                      </div>
                      <div
                        className={`text-xs sm:text-[13px] font-heading font-bold truncate transition-colors ${isActive
                            ? "text-[#0D2440] dark:text-white"
                            : "text-[#0D2440]/80 dark:text-white/75 group-hover:text-[#0D2440] dark:group-hover:text-white"
                          }`}
                      >
                        {mod.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </motion.div>

            {/* Magnetic CTA Button */}
            <motion.div variants={itemVariants} className="pt-3">
              <div
                ref={buttonRef}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                className="inline-block transition-transform duration-200 ease-out"
                style={{
                  transform: `translate3d(${btnOffset.x}px, ${btnOffset.y}px, 0)`,
                }}
              >
                <Link
                  href="/about#our-story"
                  className="group relative inline-flex items-center gap-3.5 px-8 sm:px-9 py-4 sm:py-4.5 bg-[#0D2440] hover:bg-[#2E5E99] dark:bg-[#7BA4D0] dark:hover:bg-[#2E5E99] text-white dark:text-[#0D2440] dark:hover:text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 active:scale-95"
                >
                  <div className="absolute inset-0 bg-[#2E5E99] dark:bg-[#2E5E99] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />

                  <span className="relative z-10">Read Our Full Story</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Tilt Showcase with Blur-Filter Crossfade (Exact Netlify Animation) */}
          <div className="lg:col-span-6 relative [perspective:1400px]">
            <motion.div
              ref={cardRef}
              variants={itemVariants}
              animate={{
                rotateX: cardTilt.rotateX,
                rotateY: cardTilt.rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-[#7BA4D0]/30 dark:border-white/15 group bg-[#E7F0FA] dark:bg-[#0D2440] transform-gpu"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cinematic Animated Crossfade on Active Module Change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeModule.image}
                    alt={activeModule.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/85 dark:from-[#071321]/95 via-[#0D2440]/25 dark:via-[#071321]/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Bottom Information Bar */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-[#0D2440]/90 dark:bg-[#071321]/95 border border-[#7BA4D0]/30 dark:border-white/15 backdrop-blur-md text-white flex items-center justify-between z-10">
                <div>
                  <div className="text-[11px] font-heading font-semibold tracking-wider text-[#7BA4D0] uppercase mb-1">
                    {activeModule.sublabel}
                  </div>
                  <div className="text-sm sm:text-base font-heading font-bold text-white">
                    {activeModule.headline}
                  </div>
                </div>
                <div className="text-right pl-4 border-l border-white/20 dark:border-white/15 shrink-0">
                  <span className="font-heading text-xs sm:text-sm font-bold text-[#7BA4D0]">
                    {activeModule.specValue}
                  </span>
                  <div className="text-[10px] font-sans font-medium text-white/60 uppercase">
                    {activeModule.specLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================
            4 MILESTONE STATS: Clean Staggered Counter Row
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#7BA4D0]/30 dark:border-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="space-y-3"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2E5E99] dark:bg-[#7BA4D0] rounded-full inline-block" />
                <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#2E5E99] dark:text-[#7BA4D0] uppercase">
                  {stat.sublabel}
                </span>
              </div>

              {/* Big Numerals */}
              <div className="text-4xl sm:text-5xl font-heading font-black text-[#0D2440] dark:text-white tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-sm font-heading font-bold text-[#0D2440] dark:text-white/80 uppercase tracking-wider">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#0D2440]/70 dark:text-white/60 leading-relaxed font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
