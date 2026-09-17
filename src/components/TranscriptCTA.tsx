"use client";

import React from "react";
import { Mail, ArrowRight, MessageSquare, BookOpen, ShieldCheck } from "lucide-react";

export function TranscriptCTA() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="bg-charcoal dark:bg-black/40 border border-white/5 p-12 md:p-24 rounded-sm relative group overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
          {/* Institutional Design Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] group-hover:bg-gold/10 transition-colors" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deepblue/5 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/blueprint.png')] bg-repeat" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700 delay-200">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-0.5 w-10 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Statutory Documentation</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10 leading-tight">
                Documentary <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gold italic font-medium">Assistance</span>
              </h2>
              <p className="text-silver/50 text-xl mb-12 leading-relaxed max-w-xl">
                Require historical transcripts or assistance with verbatim 
                records? Connect with our secretarial desk for comprehensive 
                investor communication support.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-12 py-6 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.3em] rounded-sm transition-all flex items-center justify-center gap-4 shadow-2xl btn-slide-white group">
                  Contact IR Desk
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-5 px-8 py-6 bg-white/5 border border-white/10 rounded-sm text-white">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Authorized Hub</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right duration-700 delay-400">
              <div className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-gold/50 transition-all group/card">
                <Mail className="w-10 h-10 text-gold mb-8 group-hover/card:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Document Requests</h4>
                <p className="text-silver/40 text-[11px]">enquiry@jpantubular.com</p>
              </div>
              <div className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-gold/50 transition-all group/card">
                <BookOpen className="w-10 h-10 text-gold mb-8 group-hover/card:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Archive Support</h4>
                <p className="text-silver/40 text-[11px]">+91-120-2560586</p>
              </div>
              <div className="sm:col-span-2 p-10 bg-white/2 border border-white/5 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center rounded-sm">
                    <MessageSquare className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1.5">Direct Disclosure</h4>
                    <p className="text-silver/30 text-[10px]">Access our primary nodal officer for official transcript clarification.</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-gold/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
