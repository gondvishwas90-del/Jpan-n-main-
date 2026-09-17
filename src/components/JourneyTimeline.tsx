"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Factory, MapPin, Sparkles, Building2, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const units = [
  {
    id: 1,
    title: "Unit-1 (Greater Noida, Uttar Pradesh)",
    year: "1998",
    details: [
      "Founded in 1998 in a 400 sq. ft. shed.",
      "Expanded to 2,020 sq. meters by 2002.",
      "Currently operating in an expanded 4,170 sq. meters facility.",
      "Registered as J Pan Tubular Component Pvt Ltd in 2007.",
      "Extrusion plant started in 2023 for Brass."
    ],
    icon: Building2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50/50",
    borderColor: "border-indigo-100",
    hoverBg: "group-hover:bg-indigo-600",
    offset: "translate-x-0"
  },
  {
    id: 2,
    title: "Unit-2 (Pune, Maharashtra)",
    year: "2009",
    details: [
      "Commenced operations in 2009.",
      "Started manufacturing copper parts for the HVAC industry.",
      "Currently operating in a 5,500 sq. meters facility."
    ],
    icon: Factory,
    color: "text-blue-600",
    bgColor: "bg-blue-50/50",
    borderColor: "border-blue-100",
    hoverBg: "group-hover:bg-blue-600",
    offset: "-translate-x-5 md:-translate-x-10"
  },
  {
    id: 3,
    title: "Unit-3 (Bengaluru, Karnataka)",
    year: "2012",
    details: [
      "Founded as a specialized distributor for data centers.",
      "Supplying copper tubes and brass parts for industrial and electrical applications.",
      "Manufacturing chiller sets and cooling assemblies for thermal management solutions.",
      "Producing busbar systems with aluminium and copper solid rods for power distribution infrastructure.",
      "Currently operating in a 3,047 sq. meters facility.",
      "This plant is an EOU (Export Oriented Unit)."
    ],
    icon: Workflow,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50/50",
    borderColor: "border-emerald-100",
    hoverBg: "group-hover:bg-emerald-600",
    offset: "-translate-x-8 md:-translate-x-16"
  },
  {
    id: 4,
    title: "Unit-4 (Greater Noida, Uttar Pradesh)",
    year: "2015",
    details: [
      "Started operations for HVAC units and commercial refrigerators.",
      "Manufacturing stainless steel cluster assemblies for industrial refrigeration.",
      "Currently operating in a 5,767 sq. meters facility.",
      "Pioneer in sustainable energy—first unit to launch solar panel-based energy production for self-consumption."
    ],
    icon: Building2,
    color: "text-rose-600",
    bgColor: "bg-rose-50/50",
    borderColor: "border-rose-100",
    hoverBg: "group-hover:bg-rose-600",
    offset: "translate-x-0"
  },
  {
    id: 5,
    title: "Unit-5 (Neemrana, Rajasthan)",
    year: "2016",
    details: [
      "Initiated operations primarily for VRV and HVAC components.",
      "Currently operating in a 4,024 sq. meters facility."
    ],
    icon: Factory,
    color: "text-orange-600",
    bgColor: "bg-orange-50/50",
    borderColor: "border-orange-100",
    hoverBg: "group-hover:bg-orange-600",
    offset: "translate-x-8 md:translate-x-16"
  },
  {
    id: 6,
    title: "Unit-6 (Sanand, Gujarat)",
    year: "2023",
    details: [
      "Started manufacturing HVAC and copper components.",
      "Distribution hub for brass components.",
      "Currently operating in a 9,982 sq. meters facility."
    ],
    icon: Building2,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50/50",
    borderColor: "border-cyan-100",
    hoverBg: "group-hover:bg-cyan-600",
    offset: "translate-x-5 md:translate-x-10"
  },
  {
    id: 7,
    title: "Unit-7 (Sri City, Andhra Pradesh)",
    year: "2027",
    details: [
      "Upcoming landmark manufacturing unit.",
      "Will specialize in manufacturing HVAC and VRV components."
    ],
    icon: MapPin,
    color: "text-violet-600",
    bgColor: "bg-violet-50/50",
    borderColor: "border-violet-100",
    hoverBg: "group-hover:bg-violet-600",
    offset: "translate-x-0"
  }
];

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-32 bg-white overflow-hidden relative"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-charcoal/5 rounded-full mb-8 border border-charcoal/5"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-charcoal font-black uppercase tracking-[0.3em] text-[10px]">Institutional Growth</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-charcoal mb-10 tracking-tight leading-[1.1]">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepblue to-gold">Road Map</span>
          </h2>
          <p className="text-black/60 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            From a modest inception to a nationwide manufacturing powerhouse. 
            Our timeline is a testament to persistent innovation and scale.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="relative">
          {/* Animated SVG Path (Winding Road) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[120px] md:w-[200px] pointer-events-none opacity-20 dark:opacity-10">
            <svg viewBox="0 0 100 800" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <path 
                d="M50 0 C50 100, 20 150, 20 250 C20 350, 80 450, 80 550 C80 650, 50 700, 50 800" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="15" 
                className="text-charcoal/10"
              />
              <motion.path 
                d="M50 0 C50 100, 20 150, 20 250 C20 350, 80 450, 80 550 C80 650, 50 700, 50 800" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="15" 
                strokeDasharray="1 0"
                style={{ pathLength }}
                className="text-gold"
              />
            </svg>
          </div>

          {/* Unit Milestone List */}
          <div className="space-y-20 md:space-y-24 relative">
            {units.map((unit, idx) => (
              <div 
                key={unit.id}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-12 md:gap-0",
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className="flex-1 w-full flex justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "p-6 sm:p-8 rounded-[2.5rem] border shadow-2xl transition-all duration-500 hover:-translate-y-2 group w-full max-w-[480px]",
                      unit.bgColor,
                      unit.borderColor,
                      "hover:border-gold/50"
                    )}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className={cn(
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border border-current/10 shadow-lg group-hover:-translate-y-1 transition-all duration-500 group-hover:shadow-xl",
                        unit.color,
                        unit.hoverBg,
                        "bg-white"
                      )}>
                        <unit.icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className={cn("text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-1 sm:mb-2", unit.color)}>
                          Established {unit.year}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-3">
                          {unit.title}
                        </h3>
                        
                        <ul className="space-y-3">
                          {unit.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-3 text-sm text-black/70 leading-relaxed font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Road Connector (Center) */}
                <div className={cn("relative z-20 flex justify-center w-12 md:w-32 shrink-0", unit.offset)}>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 bg-white border-4 border-gold rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-charcoal rounded-full" />
                  </motion.div>
                </div>

                {/* Empty Side for balancing */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Subtle Text */}
      <div className="absolute right-0 top-1/4 opacity-[0.02] rotate-90 origin-right select-none pointer-events-none">
        <span className="text-[15rem] font-black tracking-tighter text-charcoal uppercase">
          Legacy
        </span>
      </div>
    </section>
  );
}
