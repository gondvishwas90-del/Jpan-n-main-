"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

interface ContactCard {
  id: string;
  status: string;
  displayValue: string;
  unit?: string;
  caption: string;
  href: string;
  icon: React.ElementType;
  isExternal?: boolean;
}

const contactCards: ContactCard[] = [
  {
    id: "phone",
    status: "DIRECT LINE",
    displayValue: "+91 120 2560586",
    caption: "Headquarters Desk · Mon - Sat 8:30 AM – 5:30 PM IST",
    href: "tel:+911202560586",
    icon: Phone
  },
  {
    id: "email",
    status: "ENGINEERING DESK",
    displayValue: "enquiry@jpantubular.com",
    caption: "Technical Inquiries, RFP Submissions & Turnaround",
    href: "mailto:enquiry@jpantubular.com",
    icon: Mail
  },
  {
    id: "location",
    status: "HEADQUARTERS",
    displayValue: "Greater Noida, U.P.",
    caption: "Surajpur Site B Industrial Area · Pin 201306",
    href: "https://maps.google.com/?q=B-2/31,+32+%26+42,+Surajpur+Site+B+Industrial+Block+C+Road,+Greater+Noida,+UP+201306",
    icon: MapPin,
    isExternal: true
  }
];

export function ContactPreview() {
  return (
    <section 
      id="contact-preview"
      className="relative py-20 md:py-28 bg-[#E7F0FA] text-[#0D2440] overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Direct Engagement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 bg-[#2E5E99] inline-block shadow-[0_0_8px_rgba(46,94,153,0.6)]" />
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#2E5E99] uppercase">
                  DIRECT CONTACT
                </span>
              </div>

              {/* Display Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-heading font-bold text-[#0D2440] tracking-tight leading-[1.1] mb-5">
                Talk to engineers, <br />
                <span className="text-[#2E5E99] font-normal">not a form queue.</span>
              </h2>

              {/* Narrative Copy */}
              <p className="text-[#0D2440]/75 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                Connect directly with our engineering and manufacturing teams. We review specifications, feasibility, and tooling schedules under a verified 24-hour turnaround.
              </p>

              {/* Technical Footnote */}
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#2E5E99] mb-8">
                GREATER NOIDA HQ · 6 MANUFACTURING PLANTS · EST. 1998
              </div>
            </div>

            {/* Action Link */}
            <div>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#2E5E99] hover:bg-[#0D2440] text-[#E7F0FA] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Full Contact Directory</span>
                <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 High-Impact Contact Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.id}
                  href={card.href}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className="relative rounded-2xl bg-white border border-[#7BA4D0]/40 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#2E5E99] transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Card Top Row: Eyebrow + Action Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2E5E99] inline-block animate-pulse" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2E5E99] font-semibold">
                        {card.status}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] border border-[#7BA4D0]/30 flex items-center justify-center text-[#2E5E99] group-hover:bg-[#2E5E99] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Card Main Typographic Display */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-[26px] font-heading font-bold text-[#0D2440] tracking-tight group-hover:text-[#2E5E99] transition-colors break-all sm:break-normal">
                      {card.displayValue}
                    </div>
                  </div>

                  {/* Card Caption / Operational Detail */}
                  <div className="text-xs sm:text-sm font-mono text-[#0D2440]/70 pl-12">
                    {card.caption}
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
