"use client";

import React from "react";
import { SEBIDisclosureHero } from "@/components/SEBIDisclosureHero";
import { SEBIDisclosureIntro } from "@/components/SEBIDisclosureIntro";
import { SEBIDisclosureListing } from "@/components/SEBIDisclosureListing";
import { SEBIDisclosureFilter } from "@/components/SEBIDisclosureFilter";
import { SEBIDisclosureComplianceStatement } from "@/components/SEBIDisclosureComplianceStatement";

import { SEBIDisclosureCTA } from "@/components/SEBIDisclosureCTA";

export default function SEBIDisclosuresPage() {
  return (
    <main className="overflow-hidden">
      <div className="animate-in fade-in duration-1000">
        <SEBIDisclosureHero />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <SEBIDisclosureIntro />
      </div>

      <SEBIDisclosureFilter />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <SEBIDisclosureListing />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <SEBIDisclosureComplianceStatement />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <SEBIDisclosureCTA />
      </div>
    </main>
  );
}
