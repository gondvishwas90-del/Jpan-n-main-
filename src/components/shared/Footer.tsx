"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Infrastructure", href: "/about#infrastructure" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative z-30 bg-[#E8F1FA] dark:bg-[#071420] font-sans border-t border-[#7BA4D0]/30 dark:border-[#1C3742] transition-colors duration-500 overflow-hidden">


      <div className="container-custom relative z-10 pt-12 sm:pt-14 pb-6 sm:pb-7">
        {/* Compact, Highly-Efficient 2-Column Upper Section with comfortable breathing room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-7 sm:pb-8 border-b border-[#7BA4D0]/25 dark:border-white/10">
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

        {/* Official Brand Logo Mark + Precision Engineered Lockup */}
        <div className="py-6 sm:py-8 md:py-10 select-none flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-7 md:gap-9 lg:gap-11 text-center w-full overflow-hidden">
          <div className="relative h-14 sm:h-16 md:h-18 lg:h-22 w-auto aspect-[1024/440] shrink-0">
            <Image
              src="/images/jpan-logo-transparent.png"
              alt="J Pan Tubular Components Ltd"
              fill
              className="object-contain object-center dark:brightness-0 dark:invert dark:opacity-95"
              priority
            />
          </div>
          <div className="hidden md:block h-10 sm:h-12 md:h-14 w-px bg-[#7BA4D0]/40 dark:bg-white/20 shrink-0" />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.35rem] font-heading font-black tracking-[0.16em] sm:tracking-[0.22em] md:tracking-[0.26em] uppercase text-[#0D2440] dark:text-white whitespace-nowrap leading-none shrink-0">
            Precision Engineered
          </span>
        </div>

        {/* Compact Bottom Sub-Bar */}
        <div className="pt-4 sm:pt-5 border-t border-[#7BA4D0]/25 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-sans text-[#0D2440]/65 dark:text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} J Pan Tubular Components Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2E5E99] dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2E5E99] dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
            <Link
              href="/policies"
              className="hover:text-[#2E5E99] dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/policies"
              className="hover:text-[#2E5E99] dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
