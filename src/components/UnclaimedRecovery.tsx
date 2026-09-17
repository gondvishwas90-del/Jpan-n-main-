"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ClipboardList, FileCheck, Send, CheckCircle, ArrowRight, Download, HelpCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Verify Entitlement",
    desc: "Search the digital repository to confirm your name and folio number appear in the official unclaimed list.",
    icon: ClipboardList,
    actionText: "Verify Entitlement"
  },
  {
    title: "Document Preparation",
    desc: "Assemble required KYC evidence, certified original share certificates, and standard verification affidavits.",
    icon: FileCheck,
    actionText: "Check Checklist"
  },
  {
    title: "Submit Claim Form",
    desc: "File the statutory IEPF-5 claim through the Ministry of Corporate Affairs portal for formal asset processing.",
    icon: Send,
    actionText: "MCA Portal Login"
  },
  {
    title: "Final Verification",
    desc: "Our internal compliance desk coordinates directly with registrar agents to accelerate your payout release.",
    icon: CheckCircle,
    actionText: "Contact Desk"
  }
];

export function UnclaimedRecovery() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleMobileScroll = () => {
    if (!cardsRef.current) return;
    const container = cardsRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < steps.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-28 bg-white dark:bg-background relative overflow-hidden">
      {/* Decorative premium vector circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-silver/5 dark:bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-deepblue/5 dark:bg-black/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Instructional Roadmap */}
          <div className="lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Recovery Journey</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white mb-12 md:mb-20 leading-[1.1] tracking-tight"
            >
              How to Claim <br />
              <span className="text-deepblue dark:text-gold italic font-light">Your Outstanding Assets</span>
            </motion.h2>

            {/* Steps Cards: Single visible card at a time with horizontal scroll on mobile (< lg), vertical stack on desktop (>= lg) */}
            <div className="flex flex-col justify-between">
              <motion.div 
                ref={cardsRef}
                onScroll={handleMobileScroll}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-mandatory pt-2 pb-3 lg:py-0 px-1 lg:px-0 gap-4 lg:space-y-6 lg:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full relative"
              >
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div 
                      key={step.title}
                      variants={itemVariants}
                      className="group cursor-pointer relative flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 bg-silver/5 dark:bg-white/2 border border-border/60 hover:border-gold/40 hover:bg-white dark:hover:bg-charcoal/40 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-deepblue/5 w-full min-w-full lg:min-w-0 lg:w-full shrink-0 snap-center shadow-sm"
                    >
                      {/* Connecting line */}
                      {idx !== steps.length - 1 && (
                        <div className="absolute left-[39px] top-[90px] bottom-[-24px] w-[1px] bg-border group-hover:bg-gold/30 transition-colors z-0 hidden lg:block" />
                      )}

                      <div className="flex flex-col items-center shrink-0 z-10">
                        <div className="w-12 h-12 bg-white dark:bg-charcoal flex items-center justify-center rounded-full border border-border/80 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.4)]">
                          <Icon className="w-5 h-5 text-charcoal dark:text-white transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                        </div>
                      </div>

                      <div className="pt-1 flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-bold text-gold uppercase tracking-[0.3em] bg-gold/10 px-2 py-0.5 rounded-sm">Step 0{idx + 1}</span>
                            <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-charcoal/70 dark:text-silver/90 leading-relaxed font-light mb-6 max-w-xl">
                          {step.desc}
                        </p>
                        <button className="flex items-center gap-2 text-[9px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-300">
                          {step.actionText} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex lg:hidden items-center justify-center gap-2 mt-4 z-10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      if (cardsRef.current && cardsRef.current.children[i]) {
                        cardsRef.current.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                      }
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-border dark:bg-white/20"
                    )}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
 
          {/* Right: Document Checklist Sidebar */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-8 sm:p-10 bg-charcoal dark:bg-black/30 border border-white/10 rounded-3xl relative overflow-hidden group shadow-2xl"
              >
                {/* Radial Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold/20 to-transparent blur-3xl rounded-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8 md:mb-10">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-gold animate-pulse" />
                    </div>
                    <h4 className="text-sm font-heading font-bold text-white uppercase tracking-widest leading-snug">
                      Essential <br /> Documents
                    </h4>
                  </div>

                  <ul className="space-y-6 mb-8 md:mb-12">
                    {[
                      "Client Master List (CML)",
                      "IEPF-5 Claim Form",
                      "Self-Attested PAN & Aadhar",
                      "Original Certificates"
                    ].map((doc, index) => (
                      <motion.li 
                        key={doc}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex items-center justify-between pb-4 border-b border-white/5 group/item cursor-pointer hover:border-gold/30 transition-all duration-300"
                      >
                        <span className="text-[10px] text-silver/60 group-hover/item:text-white uppercase tracking-widest transition-colors duration-300">{doc}</span>
                        <div className="w-7 h-7 bg-white/5 group-hover/item:bg-gold/10 flex items-center justify-center rounded-full border border-white/10 group-hover/item:border-gold/30 transition-all duration-300">
                          <Download className="w-3.5 h-3.5 text-gold/60 group-hover/item:text-gold transition-colors duration-300" />
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/20 transition-all duration-500"
                  >
                    <p className="text-[9px] text-silver/50 leading-relaxed uppercase tracking-[0.15em] mb-4">Need Help With Paperwork?</p>
                    <Link href="/contact" className="w-full py-4 bg-white dark:bg-charcoal text-charcoal dark:text-white font-bold text-[9px] uppercase tracking-[0.2em] rounded-xl hover:bg-gold hover:text-charcoal transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                      Request Support <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
