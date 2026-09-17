"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight, Download, User, Receipt, ExternalLink, ShieldAlert } from "lucide-react";

const unclaimedData = [
  {
    id: 1,
    name: "Rajesh Kumar Mehta",
    folio: "JPN004523",
    amount: "₹ 12,450.00",
    year: "2023-24",
    status: "Unclaimed",
    type: "Final Dividend"
  },
  {
    id: 2,
    name: "Sunita Devi Sharma",
    folio: "JPN009112",
    amount: "₹ 8,120.00",
    year: "2023-24",
    status: "Unpaid",
    type: "Interim Dividend"
  },
  {
    id: 3,
    name: "Amitabh Vishwakarma",
    folio: "JPN002234",
    amount: "₹ 24,900.00",
    year: "2022-23",
    status: "Unclaimed",
    type: "Final Dividend"
  },
  {
    id: 4,
    name: "Priya Malhotra",
    folio: "JPN005567",
    amount: "₹ 5,600.00",
    year: "2022-23",
    status: "Unclaimed",
    type: "Final Dividend"
  },
  {
    id: 5,
    name: "Vikram Singh Rathore",
    folio: "JPN007788",
    amount: "₹ 18,340.00",
    year: "2021-22",
    status: "IEPF Pending",
    type: "Unclaimed Shares"
  },
  {
    id: 6,
    name: "Ananya Iyer",
    folio: "JPN001122",
    amount: "₹ 2,450.00",
    year: "2023-24",
    status: "Unpaid",
    type: "Final Dividend"
  }
];

export function UnclaimedTable() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="py-28 bg-silver/5 dark:bg-black/10 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-deepblue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />

      <div className="container-custom relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Record Registry</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal dark:text-white leading-[1.1] tracking-tight">
              Shareholder <br />
              <span className="text-deepblue dark:text-gold italic font-light">Entitlement Data</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center"
          >
             <a 
                href="/documents/j-pan-unclaimed-database.pdf" 
                download="J_Pan_Tubular_Unclaimed_Database.pdf"
                className="px-8 py-5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm flex items-center gap-4 dark: dark: transition-all duration-500 shadow-2xl hover:shadow-gold/20 active:scale-[0.98] group btn-slide-gold group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download Full Database (PDF)
             </a>
          </motion.div>
        </div>

        {/* Technical Table Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl border border-border/60 rounded-sm overflow-hidden shadow-2xl shadow-deepblue/5"
        >
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-silver/10 [&::-webkit-scrollbar-thumb]:bg-gold/50 hover:[&::-webkit-scrollbar-thumb]:bg-gold/80 [&::-webkit-scrollbar-thumb]:rounded-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-silver/10 dark:bg-white/5 border-b border-border/60">
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap">Shareholder Details</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap">Folio / Client ID</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap">Entitlement Type</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap text-right">Amount</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap">Period</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap">Status</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-charcoal dark:text-white uppercase tracking-widest whitespace-nowrap text-center">Action</th>
                </tr>
              </thead>
              <motion.tbody 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="divide-y divide-border/50"
              >
                {unclaimedData.map((row) => (
                  <motion.tr 
                    variants={rowVariants}
                    key={row.id} 
                    className="hover:bg-silver/10 dark:hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-silver/20 dark:bg-white/10 flex items-center justify-center rounded-full group-hover:bg-gold/20 group-hover:text-gold transition-colors duration-300 shrink-0">
                             <User className="w-4 h-4 text-charcoal dark:text-silver group-hover:text-gold transition-colors duration-300" />
                          </div>
                          <span className="text-[12px] font-bold text-charcoal dark:text-white tracking-wide group-hover:text-gold transition-colors duration-300 whitespace-nowrap">{row.name}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6 text-[11px] font-mono text-charcoal dark:text-silver tracking-widest whitespace-nowrap">{row.folio}</td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-3">
                          <Receipt className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors duration-300" />
                          <span className="text-[10px] text-charcoal dark:text-silver uppercase tracking-widest whitespace-nowrap">{row.type}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6 text-[12px] font-bold text-charcoal dark:text-white tracking-tight text-right whitespace-nowrap">{row.amount}</td>
                    <td className="px-8 py-6 text-[10px] text-charcoal dark:text-silver tracking-widest whitespace-nowrap">{row.year}</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                       <span className={`px-4 py-1.5 rounded-sm text-[9px] font-bold uppercase tracking-[0.2em] border flex items-center gap-2 w-max ${
                          row.status === 'Unclaimed' 
                          ? 'border-gold/30 text-gold bg-gold/5' 
                          : row.status === 'IEPF Pending'
                          ? 'border-red-500/30 text-red-500 bg-red-500/5'
                          : 'border-deepblue/30 text-deepblue dark:text-blue-400 bg-deepblue/5'
                       }`}>
                          {row.status === 'IEPF Pending' && <ShieldAlert className="w-3 h-3" />}
                          {row.status}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                       <button className="p-3 bg-silver/10 dark:bg-white/5 border border-transparent group-hover:border-gold/30 hover:!bg-gold hover:!text-charcoal text-charcoal dark:text-silver transition-all duration-300 rounded-sm inline-flex items-center justify-center">
                          <ExternalLink className="w-4 h-4" />
                       </button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>

        {/* Pagination / Archive Access */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
           <button className="inline-flex items-center gap-4 text-[10px] font-bold text-charcoal dark:text-silver uppercase tracking-[0.4em] hover:text-gold dark:hover:text-gold transition-colors duration-300 group">
             Access Historical Unclaimed Dividends Archive
             <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
           </button>
        </motion.div>
      </div>
    </section>
  );
}
