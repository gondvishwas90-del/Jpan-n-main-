"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Mail, Phone, MessageSquare, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";

const subjectOptions = [
  { value: "dividend", label: "Dividend Inquiry" },
  { value: "shareholding", label: "Shareholding Pattern" },
  { value: "annual-report", label: "Annual Report Request" },
  { value: "others", label: "Others" }
];

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ContactForm({
  title = "Investor Inquiry Engine",
  subtitle = "Direct Inquiry",
  description = "Have specific questions regarding shareholder services, dividends, or financial reporting? Use our secure portal for structured communication."
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === "#enquiry-form" || hash === "#digital-inquiry") {
        const timer = setTimeout(() => {
          const element = document.getElementById("enquiry-form");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 200); // 200ms delay to allow hydration and layout to settle
        return () => clearTimeout(timer);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const successVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    }
  };

  return (
    <section id="enquiry-form" ref={containerRef} className="relative py-12 md:py-32 bg-white dark:bg-charcoal overflow-hidden border-b border-border scroll-mt-24">
      {/* Anchor for Digital Inquiry scrolling */}
      <div id="digital-inquiry" className="absolute -top-24" />
      <div className="container-custom">
        
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gold/10 flex items-center justify-center rounded-full mx-auto mb-10 border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.1)] relative">
                  <div className="absolute inset-0 border border-gold/40 rounded-full animate-ping opacity-20" />
                  <CheckCircle2 className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-6 leading-tight">
                  Inquiry <br />
                  <span className="text-gold italic font-light">Received</span>
                </h2>
                <p className="text-muted-foreground font-light text-base mb-10 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been routed to our 
                  relevant desk. You will receive a response within 
                  24–48 working hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-10 py-5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-gold hover:text-charcoal transition-all shadow-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              variants={formVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 lg:gap-24"
            >
              <div className="lg:col-span-5">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-12 bg-gold" />
                    <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs">{subtitle}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-10 leading-[1.1]">
                   {title.split(' ').slice(0, -2).join(' ')} <br />
                   <span className="text-gold font-light italic">{title.split(' ').slice(-2).join(' ')}</span>
                 </h2>
                 <p className="text-muted-foreground font-light text-lg mb-12 leading-relaxed">
                   {description}
                 </p>
                 
                 <div className="p-8 bg-silver/5 dark:bg-black/20 border border-border rounded-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                       <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                       <h4 className="text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-[0.2em]">Privacy Assured</h4>
                    </div>
                    <p className="text-[11px] font-light text-muted-foreground leading-relaxed relative z-10">
                       Your contact information is handled in accordance with our 
                       Privacy Policy and used solely for addressing your 
                       investor-related queries.
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-7">
                 <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-black/40 p-10 md:p-14 border border-border rounded-sm shadow-2xl relative overflow-hidden">
                    {/* Decorative Map Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid-pattern.svg')] bg-repeat pointer-events-none" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                             <User className="w-4 h-4 text-gold" strokeWidth={2.5} />
                             Full Name
                          </label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe"
                            className="w-full bg-silver/5 dark:bg-white/5 border border-border rounded-sm py-4 px-6 text-xs text-charcoal dark:text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:bg-white dark:focus:bg-black transition-all"
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                             <Mail className="w-4 h-4 text-gold" strokeWidth={2.5} />
                             Email Address
                          </label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@example.com"
                            className="w-full bg-silver/5 dark:bg-white/5 border border-border rounded-sm py-4 px-6 text-xs text-charcoal dark:text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:bg-white dark:focus:bg-black transition-all"
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                             <Phone className="w-4 h-4 text-gold" strokeWidth={2.5} />
                             Contact Number
                          </label>
                          <input 
                            type="tel" 
                            placeholder="+91 00000 00000"
                            className="w-full bg-silver/5 dark:bg-white/5 border border-border rounded-sm py-4 px-6 text-xs text-charcoal dark:text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:bg-white dark:focus:bg-black transition-all"
                          />
                       </div>
                        <div className="space-y-3 relative">
                           <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-gold" strokeWidth={2.5} />
                              Subject
                           </label>
                           <div className="relative">
                              <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full flex items-center justify-between bg-silver/5 dark:bg-white/5 border rounded-sm py-4 px-6 text-xs text-left text-charcoal dark:text-white transition-all cursor-pointer ${
                                  isDropdownOpen 
                                    ? "border-gold/50 bg-white dark:bg-black" 
                                    : "border-border hover:border-gold/30"
                                }`}
                              >
                                <span className={selectedSubject ? "text-charcoal dark:text-white" : "text-muted-foreground/50"}>
                                  {selectedSubject 
                                    ? subjectOptions.find(opt => opt.value === selectedSubject)?.label 
                                    : "Select query type"}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-muted-foreground/60 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-gold" : ""}`} />
                              </button>
                              
                              <input type="hidden" name="subject" value={selectedSubject} required />

                              {isDropdownOpen && (
                                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                              )}

                              <AnimatePresence>
                                {isDropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                    className="absolute left-0 right-0 mt-2 bg-white dark:bg-[#0b101c] border border-border rounded-xl shadow-2xl overflow-hidden z-50 py-1.5"
                                  >
                                    {subjectOptions.map(opt => (
                                      <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => {
                                          setSelectedSubject(opt.value);
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-6 py-3.5 text-xs transition-colors flex items-center justify-between ${
                                          selectedSubject === opt.value
                                            ? "bg-gold/[0.08] text-gold font-bold"
                                            : "text-charcoal dark:text-silver/80 hover:bg-silver/5 dark:hover:bg-white/[0.03]"
                                        }`}
                                      >
                                        <span>{opt.label}</span>
                                        {selectedSubject === opt.value && (
                                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                                        )}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                           </div>
                        </div>
                    </div>

                    <div className="space-y-3 relative z-10">
                       <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Detailed Message</label>
                       <textarea 
                         rows={5}
                         required
                         placeholder="Please provide details of your inquiry..."
                         className="w-full bg-silver/5 dark:bg-white/5 border border-border rounded-sm py-4 px-6 text-xs text-charcoal dark:text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:bg-white dark:focus:bg-black transition-all resize-none"
                       />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 mt-4 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold text-[10px] uppercase tracking-[0.4em] rounded-sm hover:bg-gold hover:text-charcoal transition-all shadow-xl flex items-center justify-center gap-4 group/btn relative overflow-hidden z-10"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        Send Inquiry
                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                      
                    </button>
                 </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
