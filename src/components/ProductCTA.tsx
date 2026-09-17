"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function ProductCTA() {
  return (
    <section className="py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/50 dark:from-blue-900/20 via-transparent to-transparent" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-[#0f0f0f] dark:bg-[#020202] border border-white/10 p-12 md:p-20 rounded-sm text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Looking for the Right <br />
            <span className="text-gold">Product Solution?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Our technical team is ready to help you select or design the 
            perfect component for your specific industrial application.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <Link
              href="/contact#enquiry-form"
              className="px-10 py-5 bg-gold text-charcoal font-bold rounded-sm flex items-center gap-3 transition-all shadow-xl hover:-translate-y-1 btn-slide-white group"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <a href="tel:+911202560586" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors font-bold tracking-widest text-xs uppercase">
                <Phone className="w-4 h-4 text-gold" />
                Technical Support
              </a>
              <a href="mailto:sales@J Pan.in" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors font-bold tracking-widest text-xs uppercase">
                <Mail className="w-4 h-4 text-gold" />
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
