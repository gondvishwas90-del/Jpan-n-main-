"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ContactCard {
  id: string;
  status: string;
  displayValue: string;
  caption: string;
  href: string;
  isExternal?: boolean;
}

const contactCards: ContactCard[] = [
  {
    id: "phone",
    status: "DIRECT LINE",
    displayValue: "+91 120 2560586",
    caption: "HEADQUARTERS CALL DESK",
    href: "tel:+911202560586",
  },
  {
    id: "email",
    status: "TECHNICAL DESK",
    displayValue: "enquiry@jpantubular.com",
    caption: "TECHNICAL RFQ & DRAWINGS",
    href: "mailto:enquiry@jpantubular.com",
  },
  {
    id: "turnaround",
    status: "RAPID TURNAROUND",
    displayValue: "< 24 HOURS",
    caption: "FEASIBILITY & TOOLING SCHEDULE",
    href: "/contact",
  },
  {
    id: "location",
    status: "HEADQUARTERS",
    displayValue: "Greater Noida, U.P.",
    caption: "SURAJPUR SITE B INDUSTRIAL AREA",
    href: "https://maps.google.com/?q=B-2/31,+32+%26+42,+Surajpur+Site+B+Industrial+Block+C+Road,+Greater+Noida,+UP+201306",
    isExternal: true,
  },
];

export function ContactPreview() {
  return (
    <section
      id="contact-preview"
      className="relative py-20 md:py-28 bg-[#E7F0FA] dark:bg-[#0B1E36] text-[#0D2440] dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Narrative & Direct Engagement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Display Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0D2440] dark:text-white tracking-tight leading-[1.08] mb-5">
                Talk to engineers, <br />
                <span className="text-[#2E5E99] dark:text-[#7BA4D0] font-normal">not a form queue.</span>
              </h2>

              {/* Narrative Copy */}
              <p className="text-[#0D2440]/75 dark:text-white/75 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                Connect directly with our engineering and manufacturing teams. We review specifications, feasibility, and tooling schedules under a verified 24-hour turnaround.
              </p>

              {/* Technical Footnote */}
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#2E5E99] dark:text-[#7BA4D0] mb-8 font-semibold">
                GREATER NOIDA HQ · 6 MANUFACTURING PLANTS · EST. 1998
              </div>
            </div>

            {/* Action Link */}
            <div>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#2E5E99] hover:bg-[#0D2440] dark:hover:bg-[#1B3B60] text-[#E7F0FA] text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95"
              >
                <span>Full Contact Directory</span>
                <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Grid of 4 Cards (Matching Axiom Reference) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {contactCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.isExternal ? "_blank" : undefined}
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className="relative rounded-2xl bg-gradient-to-b from-white/[0.22] via-white/[0.05] to-white/[0.10] dark:from-white/[0.09] dark:via-white/[0.02] dark:to-white/[0.05] border border-white/60 dark:border-white/20 p-5 sm:p-6 hover:border-white/90 dark:hover:border-white/40 shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.8),inset_0_-1px_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(13,36,64,0.06)] backdrop-blur-[2px] transition-all duration-300 group flex flex-col justify-between min-h-[160px] sm:min-h-[180px] overflow-hidden hover:-translate-y-1"
              >
                {/* Razor-sharp Specular Glass Top Sheen */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/50 to-transparent pointer-events-none z-20" />

                {/* Card Top Row: Eyebrow + Action Arrow */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2E5E99] dark:bg-[#7BA4D0] inline-block shrink-0" />
                    <span className="font-heading text-xs uppercase tracking-wider text-[#2E5E99] dark:text-[#7BA4D0] font-bold truncate">
                      {card.status}
                    </span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#7BA4D0] dark:text-white/40 group-hover:text-[#2E5E99] dark:group-hover:text-[#7BA4D0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                {/* Card Main Display Text (Guaranteed Single Line) */}
                <div
                  className="font-heading font-bold text-[#0D2440] dark:text-white tracking-tight group-hover:text-[#2E5E99] dark:group-hover:text-[#7BA4D0] transition-colors whitespace-nowrap overflow-hidden text-ellipsis my-2"
                  style={{ fontSize: card.id === "email" ? "clamp(13px, 1.25vw, 17px)" : "clamp(16px, 1.5vw, 22px)" }}
                  title={card.displayValue}
                >
                  {card.displayValue}
                </div>

                {/* Card Caption / Operational Detail */}
                <div className="text-[11px] font-sans tracking-wide uppercase text-[#0D2440]/60 dark:text-white/60 font-semibold whitespace-nowrap truncate">
                  {card.caption}
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

