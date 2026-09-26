"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  // Directly track scroll position as the footer scrolls into the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Slow, weighted cinematic spring with high inertia for a slow camera glide feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 22,
    mass: 1.2,
    restDelta: 0.001,
  });

  // Cinematic Zoom In: expands slowly from 0.86 scale and rises gently into place
  const scale = useTransform(smoothProgress, [0, 1], [0.86, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0.3, 0.85, 1]);
  const y = useTransform(smoothProgress, [0, 1], [70, 0]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Infrastructure", href: "/about#infrastructure" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      ref={containerRef}
      className="relative z-30 bg-white dark:bg-[#070b14] font-sans transition-colors duration-500 overflow-hidden"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          transformOrigin: "center bottom",
        }}
        className="w-full relative z-10 will-change-transform"
      >
        <div className="container-custom relative z-10 pt-10 sm:pt-12 pb-4 sm:pb-6">
          {/* Compact, Highly-Efficient 2-Column Upper Section with comfortable breathing room */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-4 sm:pb-6">
            {/* Left Column: Sleek Editorial Headline */}
            <div className="lg:col-span-7 space-y-3.5">
              <h2 className="text-xl sm:text-2xl lg:text-[30px] font-heading font-black text-[#0D2440] dark:text-white leading-snug tracking-tight max-w-2xl">
                Interested in working together,{" "}
                <span className="font-medium text-[#0D2440]/70 dark:text-slate-300">
                  exploring precision manufacturing
                </span>{" "}
                or simply learning more?
              </h2>
            </div>

            {/* Right Column: Direct Contact & Horizontal Navigation stacked compactly */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-4">
              {/* Direct Email Callout */}
              <div className="space-y-0.5 text-left lg:text-right">
                <span className="block text-[11px] font-sans tracking-wider text-[#0D2440]/60 dark:text-slate-400 uppercase font-semibold">
                  Contact our team at:
                </span>
                <a
                  href="mailto:sales@jpantubular.com"
                  className="group inline-flex items-center gap-1.5 text-base sm:text-lg lg:text-xl font-heading font-bold text-[#0D2440] dark:text-white hover:text-[#2E5E99] dark:hover:text-[#7BA4D0] transition-colors"
                >
                  <span className="underline decoration-[#7BA4D0]/60 dark:decoration-slate-700 underline-offset-4 group-hover:decoration-[#2E5E99] dark:group-hover:decoration-[#7BA4D0]">
                    sales@jpantubular.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2E5E99] dark:text-[#7BA4D0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Clean Horizontal Links */}
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs sm:text-[13px] font-semibold text-[#0D2440]/80 dark:text-slate-200 hover:text-[#2E5E99] dark:hover:text-[#7BA4D0] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Official Brand Logo Mark + JPan Tubular Components LTD Lockup */}
          <div className="py-6 sm:py-8 md:py-10 select-none flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center w-full">
            {/* Properly Proportioned Logo Container */}
            <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 w-auto aspect-[1024/440] shrink-0">
              <Image
                src="/images/jpan-logo-transparent.png"
                alt="J Pan Tubular Components Ltd"
                fill
                className="object-contain object-center dark:brightness-0 dark:invert dark:opacity-95"
                priority
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block h-10 sm:h-12 md:h-14 lg:h-16 w-px bg-[#0D2440]/15 dark:bg-white/20 shrink-0" />

            {/* JPan Tubular Components LTD - Fully Visible, No Cutoff */}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.2rem] font-heading font-black tracking-[0.04em] sm:tracking-[0.06em] md:tracking-[0.08em] uppercase text-[#0D2440] dark:text-white whitespace-nowrap leading-none shrink-0">
              JPan Tubular Components LTD
            </span>
          </div>
        </div>

        {/* Full-Width Base Strip: Edge-to-Edge PRECISION ENGINEERED in Short Vertical Length */}
        <div className="w-full pt-1 pb-4 sm:pb-6 px-2 sm:px-4 overflow-hidden select-none flex items-center justify-center">
          <span className="w-full text-center font-heading font-black uppercase text-[#0D2440] dark:text-white text-[clamp(0.95rem,3.1vw,2.5rem)] tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.42em] lg:tracking-[0.56em] leading-none whitespace-nowrap">
            Precision Engineered
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
