"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe, Trophy } from "lucide-react";
import { Instagram, Linkedin, Facebook, Twitter } from "./BrandIcons";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    corporate: [
      { name: "Our Heritage", href: "/about" },
      { name: "Precision Products", href: "/products" },
      { name: "Quality Assurance", href: "/quality" },
      { name: "Industrial Solutions", href: "/industries" },
      { name: "Global Presence", href: "/presence" },
    ],
    investors: [
      { name: "Annual Reports", href: "/annual-reports" },
      { name: "Financial Results", href: "/financial-results" },
      { name: "Shareholding Pattern", href: "/shareholding-pattern" },
      { name: "Policies & Governance", href: "/policies" },
    ],
    support: [
      { name: "Contact Support", href: "/contact" },
    ]
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-16 md:pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Cinematic Blueprint Background */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none">
        <Image
          src="/images/footer_blueprint_bg.png"
          alt="Technical Blueprint"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-deepblue/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24"
        >
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-6 md:space-y-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <Link href="/" className="flex items-center group">
                <div className="relative h-14 w-40 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Event images/LOGO_ (1) 1.png"
                    alt="J Pan Tubular Components Limited"
                    fill
                    sizes="160px"
                    className="object-contain object-left brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </Link>
              <p className="text-silver/50 text-base md:text-lg leading-relaxed max-w-sm">
                Setting the global standard for industrial precision and engineering 
                excellence since 1998. Quality you can trust.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 sm:gap-8 pt-6 md:pt-8 border-t border-white/5">
               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Quality</span>
                    <span className="text-xs font-bold">ISO 9001:2015</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <Trophy className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Excellence</span>
                    <span className="text-xs font-bold">A+ Certified</span>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-8">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 md:mb-8">Corporate</h4>
                <ul className="space-y-4">
                  {footerLinks.corporate.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-silver/40 hover:text-white transition-all duration-300 block text-sm group flex items-center gap-2">
                        <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 md:mb-8">Support</h4>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-silver/40 hover:text-white transition-all duration-300 block text-sm group flex items-center gap-2">
                        <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 md:mb-8">Investors</h4>
                <ul className="space-y-4">
                  {footerLinks.investors.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-silver/40 hover:text-white transition-all duration-300 block text-sm group flex items-center gap-2">
                        <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-3 space-y-8 md:space-y-12">
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Stay Updated</h4>
              <p className="text-silver/40 text-sm">Join our industrial newsletter for the latest updates.</p>
              <div className="flex bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden focus-within:border-gold/50 transition-all p-1.5 backdrop-blur-xl">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-silver/20 focus:outline-none"
                />
                <button className="bg-gold p-3 rounded-lg text-charcoal font-bold hover:bg-white transition-all group">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact Desk</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-sm text-silver/40 leading-relaxed pt-1">
                    B-2/31, 32 & 42, Surajpur Site B Industrial Block C Road,<br />Greater Noida, UP 201306
                  </p>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-sm text-silver/40">+91-120-2560586</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <p className="text-silver/20 hover:text-gold transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-[0.3em] relative group w-fit text-center md:text-left">
               © {currentYear} J Pan Tubular Components Limited
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all" />
             </p>
             <div className="hidden md:block h-4 w-px bg-white/5" />
             <p className="text-silver/20 hover:text-gold transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 relative group w-fit">
               <Globe className="w-3 h-3 group-hover:text-gold transition-colors" /> Legacy of Precision
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all" />
             </p>
          </div>
          
          <div className="flex items-center gap-6 sm:gap-10">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-silver/20 hover:text-gold text-[10px] font-bold uppercase tracking-[0.3em] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.02] select-none hidden md:block">
        <span className="text-[25rem] font-black leading-none tracking-tighter">PRECISION</span>
      </div>
    </footer>
  );
}
