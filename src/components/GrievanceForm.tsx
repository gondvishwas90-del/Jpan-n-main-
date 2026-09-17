"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Upload, ShieldCheck, AlertCircle, CheckCircle2, ChevronDown, User, Mail, Phone, Hash, FileText } from "lucide-react";

const grievanceCategories = [
  "Dividend Issue",
  "Share Transfer / Transmission",
  "Unclaimed Amount / IEPF",
  "Annual Report Non-receipt",
  "Demat / Remat Request",
  "Others"
];

export function GrievanceForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  if (isSubmitted) {
    return (
      <section className="py-32 lg:py-40 bg-white dark:bg-charcoal flex items-center justify-center min-h-[600px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="container-custom text-center relative z-10"
        >
          <div className="w-28 h-28 bg-gold/10 flex items-center justify-center rounded-full mx-auto mb-10 border border-gold/20 shadow-2xl relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-14 h-14 text-gold" />
            </motion.div>
            <div className="absolute inset-0 border-2 border-gold/30 rounded-full animate-ping opacity-20" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-6 tracking-tight">
            Grievance <br />
            <span className="text-gold italic font-light">Submitted Successfully</span>
          </h2>
          <p className="text-charcoal/70 dark:text-silver/90 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Your concern has been registered in our institutional redressal system. 
            A reference ID has been sent to your registered email. Our compliance 
            team will review and respond within 7–15 working days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <div className="px-8 py-5 bg-silver/10 dark:bg-black/20 border border-border/50 rounded-sm flex items-center gap-4">
                <span className="text-[10px] font-bold text-charcoal/50 dark:text-silver/50 uppercase tracking-[0.2em]">Ref ID:</span>
                <span className="text-sm font-bold text-charcoal dark:text-white tracking-widest">JP_GRV_2025_4821</span>
             </div>
             <button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-gold dark:hover:bg-gold hover:text-charcoal dark:hover:text-charcoal transition-all duration-300 shadow-xl"
             >
               Submit Another Concern
             </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-28 lg:py-32 bg-white dark:bg-charcoal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-silver/5 dark:bg-black/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form Context */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-40"
            >
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Submission Engine</span>
               </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal dark:text-white mb-8 leading-[1.1] tracking-tight">
                 Institutional <br />
                 <span className="text-deepblue dark:text-gold italic font-light">Concern Registration</span>
               </h2>
               <p className="text-charcoal/70 dark:text-silver/80 text-lg mb-12 leading-relaxed font-light">
                 Please provide precise details regarding your concern. 
                 Accurate documentation ensures a swifter resolution 
                 through our verified compliance protocols.
               </p>
               
               <div className="space-y-8">
                  <div className="flex items-start gap-6 group cursor-pointer">
                     <div className="w-14 h-14 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                        <ShieldCheck className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors duration-300">Secure Transmission</h4>
                        <p className="text-sm text-charcoal/60 dark:text-silver/60 font-light leading-relaxed">All submissions are encrypted and handled with absolute confidentiality.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group cursor-pointer">
                     <div className="w-14 h-14 bg-silver/10 dark:bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-border/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_8px_16px_-6px_rgba(212,175,55,0.4)]">
                        <AlertCircle className="w-6 h-6 text-gold transition-all duration-500 group-hover:text-charcoal group-hover:scale-110" />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold text-charcoal dark:text-white uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors duration-300">Statutory Guidelines</h4>
                        <p className="text-sm text-charcoal/60 dark:text-silver/60 font-light leading-relaxed">Submissions must adhere to SEBI and Companies Act disclosure mandates.</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Actual Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-border/60 p-8 md:p-14 lg:p-16 rounded-sm relative shadow-2xl shadow-deepblue/5"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
               <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {/* Name */}
                  <motion.div variants={itemVariants} className="space-y-3 group">
                     <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] flex items-center gap-2 group-focus-within:text-gold transition-colors">
                        <User className="w-3.5 h-3.5 text-gold/60 group-focus-within:text-gold group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                        Full Name
                     </label>
                     <input 
                      type="text" 
                      placeholder="Enter shareholder name"
                      className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                     />
                  </motion.div>
                  {/* Email */}
                  <motion.div variants={itemVariants} className="space-y-3 group">
                     <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] flex items-center gap-2 group-focus-within:text-gold transition-colors">
                        <Mail className="w-3.5 h-3.5 text-gold/60 group-focus-within:text-gold group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                        Email Address
                     </label>
                     <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                     />
                  </motion.div>
                  {/* Phone */}
                  <motion.div variants={itemVariants} className="space-y-3 group">
                     <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] flex items-center gap-2 group-focus-within:text-gold transition-colors">
                        <Phone className="w-3.5 h-3.5 text-gold/60 group-focus-within:text-gold group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                        Contact Number
                     </label>
                     <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                     />
                  </motion.div>
                  {/* Folio / Client ID */}
                  <motion.div variants={itemVariants} className="space-y-3 group">
                     <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] flex items-center gap-2 group-focus-within:text-gold transition-colors">
                        <Hash className="w-3.5 h-3.5 text-gold/60 group-focus-within:text-gold group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                        Folio / Client ID (Optional)
                     </label>
                     <input 
                      type="text" 
                      placeholder="Enter reference number"
                      className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                     />
                  </motion.div>
               </motion.div>

               {/* Category Selection */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="space-y-3 group"
               >
                  <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] flex items-center gap-2 group-focus-within:text-gold transition-colors">
                     <FileText className="w-3.5 h-3.5 text-gold/60 group-focus-within:text-gold group-hover:text-charcoal dark:group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                     Grievance Category
                  </label>
                  <div className="relative">
                     <select className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white appearance-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 cursor-pointer">
                        <option value="" className="text-charcoal/50">Select a category</option>
                        {grievanceCategories.map(cat => (
                           <option key={cat} value={cat} className="text-charcoal">{cat}</option>
                        ))}
                     </select>
                     <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/50 dark:text-silver/50 pointer-events-none group-focus-within:text-gold transition-colors" />
                  </div>
               </motion.div>

               {/* Subject */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="space-y-3 group"
               >
                  <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Brief summary of your concern"
                    className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                  />
               </motion.div>

               {/* Description */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="space-y-3 group"
               >
                  <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Detailed Description</label>
                  <textarea 
                    rows={6}
                    placeholder="Describe your concern in detail for faster processing..."
                    className="w-full bg-silver/10 dark:bg-white/5 border border-border/50 rounded-sm py-4 px-6 text-sm text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-silver/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 resize-none"
                  />
               </motion.div>

               {/* File Upload Zone */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.7 }}
                 className="space-y-3 group"
               >
                  <label className="text-[10px] font-bold text-charcoal/60 dark:text-silver/60 uppercase tracking-[0.2em]">Supporting Documents (Optional)</label>
                  <div 
                    className={`border-2 border-dashed rounded-sm p-12 text-center transition-all duration-300 cursor-pointer ${
                      dragActive ? "border-gold bg-gold/5 scale-[1.01]" : "border-border/60 hover:border-gold/40 bg-silver/5 dark:bg-white/5"
                    }`}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
                  >
                     <div className="flex flex-col items-center gap-5">
                        <Upload className={`w-10 h-10 transition-colors duration-300 ${dragActive ? 'text-gold' : 'text-charcoal/30 dark:text-silver/30 group-hover:text-gold/60'}`} />
                        <div className="space-y-2">
                           <p className="text-[12px] font-bold text-charcoal dark:text-white uppercase tracking-[0.2em]">Click to upload or drag & drop</p>
                           <p className="text-[10px] text-charcoal/50 dark:text-silver/50 uppercase tracking-[0.2em] font-light">PDF, JPG, PNG (Max 5MB)</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                type="submit"
                className="w-full py-6 bg-charcoal dark:bg-white text-white dark:text-charcoal font-bold text-[10px] uppercase tracking-[0.4em] rounded-sm hover:bg-gold dark:hover:bg-gold hover:text-charcoal dark:hover:text-charcoal transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-gold/20 flex items-center justify-center gap-6 group/submit"
               >
                 Submit Official Grievance
                 <Send className="w-4 h-4 group-hover/submit:translate-x-2 group-hover/submit:-translate-y-1 transition-transform duration-300" />
               </motion.button>

               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 1 }}
                 className="flex items-center justify-center gap-3 opacity-30"
               >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Official Redressal Portal</span>
               </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
