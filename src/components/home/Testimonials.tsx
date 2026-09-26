"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, animate, type Variants } from "framer-motion";
import { Award, Compass, Factory, ShieldCheck, Quote } from "lucide-react";

function AnimatedCounter({ to }: { to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const node = nodeRef.current;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });
    return () => controls.stop();
  }, [isInView, to]);

  return <span ref={nodeRef} suppressHydrationWarning>0</span>;
}

const pillarContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const pillarItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 bg-transparent text-[#0D2440] dark:text-[#E7F0FA] transition-colors duration-300 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ========================================================
              LEFT: EDITORIAL PORTRAIT
             ======================================================== */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2E5E99]/15 via-transparent to-[#7BA4D0]/15 rounded-[2.5rem] blur-2xl -z-10 opacity-70 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#7BA4D0]/30 dark:border-white/10 group bg-[#E7F0FA] dark:bg-[#102744] shadow-2xl"
            >
              {/* Portrait Image */}
              <motion.div
                className="absolute w-full h-[112%] -top-[6%] left-0"
                style={{ y: imageY }}
              >
                <Image
                  src="/images/jignesh-panchal.png"
                  alt="Jignesh Panchal - Founder & Managing Director"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Minimal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Bottom Credential Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D2440]/90 backdrop-blur-md text-white flex items-center justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#7BA4D0] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7BA4D0] animate-pulse" />
                    ACADEMIC PEDIGREE
                  </div>
                  <div className="text-sm font-heading font-bold text-white">
                    M.Tech Industrial Engineering
                  </div>
                </div>
                <div className="text-right border-l border-white/20 pl-4">
                  <div className="text-[10px] font-sans font-medium text-white/70 uppercase">ALUMNI</div>
                  <div className="text-xs font-heading font-bold text-[#7BA4D0]">SOUTH KOREA</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Experience Ticker with Animated Counter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="text-4xl font-heading font-black text-[#0D2440] dark:text-white tabular-nums flex items-center">
                <AnimatedCounter to={28} />
                <span>+</span>
              </div>
              <div className="border-l border-[#7BA4D0]/40 dark:border-white/15 pl-4">
                <div className="text-xs font-heading font-bold text-[#2E5E99] dark:text-[#7BA4D0] tracking-wider uppercase">
                  YEARS OF ENGINEERING TENURE
                </div>
                <div className="text-xs text-[#0D2440]/70 dark:text-white/70 font-light">
                  Pioneering tubular manufacturing systems since 1998.
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT: EDITORIAL PULL-QUOTE & PILLARS (Plain Flow)
             ======================================================== */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Leader Identification */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Quote className="w-5 h-5 text-[#2E5E99] dark:text-[#7BA4D0]" />
                  </motion.div>
                  <span className="font-heading text-xs font-bold text-[#2E5E99] dark:text-[#7BA4D0] tracking-wider uppercase">
                    EXECUTIVE PERSPECTIVE
                  </span>
                </div>
                <h2
                  suppressHydrationWarning
                  className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0D2440] dark:text-white tracking-tight leading-tight"
                >
                  {"“Every manufacturing process must begin and end with the customer's exacting standard.”"}
                </h2>
              </div>

              {/* Narrative Quote */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="pl-6 border-l-2 border-[#2E5E99] dark:border-[#7BA4D0] space-y-4"
              >
                <p className="text-[#0D2440]/80 dark:text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                  {"The evolution of global precision requirements has redefined what industrial partners demand. At J Pan, customer satisfaction is not a downstream checkpoint—it is the foundational constraint that governs our metallurgy, toolmaking, robotic bending, and zero-defect mass spectrometry testing."}
                </p>
                <p className="text-[#0D2440]/75 dark:text-white/75 text-sm sm:text-base leading-relaxed font-light">
                  {"From our beginnings as a precision startup to a pan-India network of 6 advanced facilities, our growth has been driven by a relentless focus on engineering integrity and exceeding OEM tolerances."}
                </p>
              </motion.div>

              {/* Three Executive Pillars with Staggered Entrance and Hover Micro-lift */}
              <motion.div
                variants={pillarContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#7BA4D0]/30 dark:border-white/10"
              >
                <motion.div
                  variants={pillarItem}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-2 -m-2 rounded-xl transition-colors hover:bg-[#7BA4D0]/10 dark:hover:bg-white/5 cursor-default group"
                >
                  <ShieldCheck className="w-5 h-5 text-[#2E5E99] dark:text-[#7BA4D0] mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-xs font-heading font-bold text-[#0D2440] dark:text-white uppercase tracking-wider mb-1">
                    Hitachi & LG Pedigree
                  </div>
                  <p className="text-xs text-[#0D2440]/70 dark:text-white/70 font-light leading-relaxed">
                    Multinational corporate discipline in lean process controls and automation.
                  </p>
                </motion.div>

                <motion.div
                  variants={pillarItem}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-2 -m-2 rounded-xl transition-colors hover:bg-[#7BA4D0]/10 dark:hover:bg-white/5 cursor-default group"
                >
                  <Compass className="w-5 h-5 text-[#2E5E99] dark:text-[#7BA4D0] mb-2 transition-transform duration-300 group-hover:rotate-45" />
                  <div className="text-xs font-heading font-bold text-[#0D2440] dark:text-white uppercase tracking-wider mb-1">
                    South Korea M.Tech
                  </div>
                  <p className="text-xs text-[#0D2440]/70 dark:text-white/70 font-light leading-relaxed">
                    Postgraduate industrial engineering background driving global perspective.
                  </p>
                </motion.div>

                <motion.div
                  variants={pillarItem}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-2 -m-2 rounded-xl transition-colors hover:bg-[#7BA4D0]/10 dark:hover:bg-white/5 cursor-default group"
                >
                  <Factory className="w-5 h-5 text-[#2E5E99] dark:text-[#7BA4D0] mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-xs font-heading font-bold text-[#0D2440] dark:text-white uppercase tracking-wider mb-1">
                    6 Scale Facilities
                  </div>
                  <p className="text-xs text-[#0D2440]/70 dark:text-white/70 font-light leading-relaxed">
                    65k MT capacity deployed across strategic OEM production hubs.
                  </p>
                </motion.div>
              </motion.div>

              {/* Signature Row with Floating Badge */}
              <div className="pt-6 border-t border-[#7BA4D0]/30 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xl font-heading font-black text-[#0D2440] dark:text-white">
                    Jignesh Panchal
                  </div>
                  <div className="text-xs font-sans font-medium text-[#0D2440]/60 dark:text-white/60 tracking-wider">
                    Founder & Managing Director • J Pan Tubular Components Limited
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 text-xs font-heading font-semibold text-[#2E5E99] dark:text-[#7BA4D0] bg-[#2E5E99]/5 dark:bg-[#7BA4D0]/10 px-3 py-1.5 rounded-full border border-[#2E5E99]/15 dark:border-[#7BA4D0]/20 transition-all cursor-default"
                >
                  <Award className="w-4 h-4 animate-pulse" />
                  <span>ISO 9001 & IATF 16949 LEADERSHIP</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
