"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="py-20 bg-deepblue relative overflow-hidden">
      {/* Background Industrial Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-overlay pointer-events-none">
        <Image 
          src="/images/cta-bg.png" 
          alt="Industrial Texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Looking for a Reliable <br />
              <span className="text-gold">Manufacturing Partner?</span>
            </h2>
            <p className="text-white/70 text-lg">
              Let's discuss how our precision engineering solutions can help scale 
              your production and improve component quality.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact#enquiry-form"
              className="px-10 py-5 bg-gold text-charcoal font-bold rounded-sm flex items-center gap-3 transition-all shadow-2xl hover:-translate-y-1 btn-slide-white group"
            >
              Get Expert Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="px-10 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-sm flex items-center gap-3 transition-all backdrop-blur-sm btn-slide-gold group"
            >
              General Enquiry
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
