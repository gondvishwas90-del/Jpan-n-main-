"use client";

import React, { useState } from "react";
import { Search, Loader2, ChevronRight, Activity, ShieldCheck, FileText, AlertCircle } from "lucide-react";

export function GrievanceTracking() {
  const [refId, setRefId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [status, setStatus] = useState<null | 'valid' | 'invalid'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Simulate API delay
    setTimeout(() => {
      setIsTracking(false);
      setStatus(refId.length > 5 ? 'valid' : 'invalid');
    }, 1500);
  };

  return (
    <section className="py-24 bg-silver/5 dark:bg-black/10 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-0.5 w-10 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Tracking Portal</span>
                <div className="h-0.5 w-10 bg-gold" />
             </div>
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-8">
               Track Your <br />
               <span className="text-muted-foreground italic font-medium">Grievance Status</span>
             </h2>
             <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
               Input your unique Reference ID to monitor the real-time 
               progress of our internal compliance review.
             </p>
          </div>

          <div className="bg-white dark:bg-charcoal border border-border p-10 md:p-16 rounded-sm shadow-2xl relative group animate-in fade-in zoom-in-95 duration-700 delay-200">
             <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                <Activity className="w-full h-full text-gold" />
             </div>

             <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-grow group/input">
                   <input 
                    type="text" 
                    value={refId}
                    onChange={(e) => setRefId(e.target.value)}
                    placeholder="Enter Reference ID (e.g., JP_GRV_2025_...)"
                    className="w-full bg-silver/5 border border-border rounded-sm py-6 px-12 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-gold transition-all"
                   />
                   <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/input:text-gold transition-colors" />
                </div>
                <button 
                  type="submit"
                  disabled={isTracking}
                  className="px-12 py-6 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold text-[10px] uppercase tracking-[0.4em] rounded-sm transition-all shadow-xl flex items-center justify-center gap-4 min-w-[220px] btn-slide-gold group"
                >
                  {isTracking ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Tracking...
                    </>
                  ) : (
                    <>
                      Track Status
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
             </form>

             {/* Dynamic Status Display */}
             {status === 'valid' && (
                <div className="mt-12 p-8 bg-gold/5 border border-gold/20 rounded-sm flex items-start gap-6 animate-in slide-in-from-top-4 duration-500">
                   <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm shrink-0">
                      <ShieldCheck className="w-6 h-6 text-gold" />
                   </div>
                   <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-widest">Active Resolution Phase</h4>
                        <span className="text-[9px] font-bold text-gold uppercase tracking-widest animate-pulse">In Verification</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mb-6">
                         Your grievance (Ref: {refId}) has been successfully logged. Our compliance officer 
                         is currently verifying the documentation against our shareholding registry.
                      </p>
                      <div className="w-full h-1 bg-silver/20 rounded-full relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full bg-gold w-1/3" />
                      </div>
                   </div>
                </div>
             )}

             {status === 'invalid' && (
                <div className="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-sm flex items-start gap-6 animate-in slide-in-from-top-4 duration-500">
                   <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-sm shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                   </div>
                   <div>
                      <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-widest mb-2">Invalid Reference ID</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                         The Reference ID provided could not be found in our central redressal registry. 
                         Please verify the ID from your confirmation email or contact the IR desk.
                      </p>
                   </div>
                </div>
             )}
          </div>

          <div className="mt-16 text-center opacity-40">
             <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.4em]">
                Registry Last Updated: May 09, 2026 – 10:00 AM IST
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
