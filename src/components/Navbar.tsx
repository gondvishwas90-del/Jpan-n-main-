"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
  submenu?: NavItem[];
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    submenu: [
      { name: "All Products", href: "/products" },
      { name: "Copper Components", href: "/products?category=Copper%20Components" },
      { name: "Brass Components", href: "/products?category=Brass%20Components" },
      { name: "Steel Components", href: "/products?category=Steel%20Components" },
    ],
  },
  {
    name: "Investor Relation",
    submenu: [
      {
        name: "Annual Reports",
        submenu: [
          { name: "Annual Reports", href: "/annual-reports" },
          { name: "Annual Return", href: "/annual-return" },
          { name: "Notice Of Board Meeting", href: "/board-meeting-notices" },
          { name: "General Meeting Notices", href: "/general-meeting" },
          { name: "Secretarial Compliance Report", href: "/secretarial-compliance" },
        ],
      },
      {
        name: "Financial Information",
        submenu: [
          { name: "Financial Results", href: "/financial-results" },
          { name: "Investor Meet Intimation", href: "/investor-meet-intimation" },
          { name: "Investor Presentation", href: "/investor-presentation" },
          { name: "Press Release", href: "/press-releases" },
          { name: "Call Audio Recordings", href: "/call-audio-recordings" },
          { name: "Call Transcripts", href: "/call-transcripts" },
          { name: "Newspaper Publication", href: "/newspaper-publication" },
          { name: "Shareholding Pattern", href: "/shareholding-pattern" },
          { name: "Unclaimed And Unpaid Amounts", href: "/unclaimed-unpaid" },
          { name: "Statement Of Deviations Or Variations", href: "/statement-of-deviations" },
        ],
      },
      { name: "Investor Grievance", href: "/investor-grievance" },
      {
        name: "Corporate Governance",
        submenu: [
          { name: "Policies", href: "/policies" },
          { name: "Disclosures under Regulation 46 and 62 of SEBI LODR Regulations 2015", href: "/sebi-disclosures" },
        ],
      },
      {
        name: "Other Information",
        submenu: [
          { name: "Material Contracts and Documents", href: "/material-documents-contracts" },
          { name: "Credit Rating", href: "/credit-rating" },
        ],
      },
    ],
  },
  { name: "Quality", href: "/quality" },
  {
    name: "Media",
    submenu: [
      { name: "Press Release", href: "/press-releases" },
      { name: "Events & Exhibitions", href: "/events" },
      { name: "Industrial Blog", href: "/blog" },
      { name: "Media Gallery", href: "/gallery" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact#digital-inquiry" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "glass-navbar transition-all duration-300 fixed top-0 left-0 w-full z-50",
        "py-2 shadow-lg border-b border-white/10 bg-white/95 dark:bg-charcoal/95 backdrop-blur-md"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-[57px] w-[166px] md:w-[187px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Event images/LOGO_ (1) 1.png"
              alt="J Pan Tubular Components Limited"
              fill
              sizes="(max-width: 768px) 166px, 187px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              {link.submenu ? (
                <button
                  className={cn(
                    "text-sm font-medium text-muted-foreground hover:text-deepblue transition-colors flex items-center gap-1 py-2",
                    activeDropdown === link.name && "text-deepblue"
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === link.name && "rotate-180")} />
                </button>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="text-sm font-medium text-muted-foreground hover:text-deepblue transition-colors relative block py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-deepblue transition-all group-hover:w-full" />
                </Link>
              )}

              {/* First Level Dropdown */}
              {link.submenu && activeDropdown === link.name && (
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-charcoal shadow-2xl border border-border/50 rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                  {link.submenu.map((subItem) => (
                    <div
                      key={subItem.name}
                      className="relative group/sub"
                      onMouseEnter={() => setActiveSubDropdown(subItem.name)}
                    >
                      {subItem.submenu ? (
                        <button
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-deepblue hover:bg-muted/50 transition-all flex items-center justify-between",
                            activeSubDropdown === subItem.name && "text-deepblue bg-muted/50"
                          )}
                        >
                          {subItem.name}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <Link
                          href={subItem.href || "#"}
                          className="block px-4 py-2 text-sm text-muted-foreground transition-all btn-slide-gold group"
                        >
                          {subItem.name}
                        </Link>
                      )}

                      {/* Second Level Dropdown (Flyout) */}
                      {subItem.submenu && activeSubDropdown === subItem.name && (
                        <div className="absolute top-0 left-full w-72 bg-white dark:bg-charcoal shadow-2xl border border-border/50 rounded-sm py-2 animate-in fade-in slide-in-from-left-2 duration-200 z-[70]">
                          {subItem.submenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href || "#"}
                              className="block px-4 py-2 text-sm text-muted-foreground transition-all btn-slide-gold group"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact#digital-inquiry"
            className="group flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-sm font-medium text-sm transition-all btn-slide-gold"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal dark:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-charcoal border-b border-border p-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-300 shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.submenu ? (
                <>
                  <button
                    className="flex items-center justify-between py-3 text-lg font-medium text-charcoal dark:text-white border-b border-border/30"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name && "rotate-180")} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="pl-4 flex flex-col gap-1 mt-2 bg-muted/20 rounded-sm py-2">
                      {link.submenu.map((subItem) => (
                        <div key={subItem.name} className="flex flex-col">
                          {subItem.submenu ? (
                            <>
                              <button
                                className="flex items-center justify-between py-2 text-base font-medium text-muted-foreground"
                                onClick={() => setActiveSubDropdown(activeSubDropdown === subItem.name ? null : subItem.name)}
                              >
                                {subItem.name}
                                <ChevronDown className={cn("w-4 h-4 transition-transform", activeSubDropdown === subItem.name && "rotate-180")} />
                              </button>
                              {activeSubDropdown === subItem.name && (
                                <div className="pl-4 flex flex-col gap-1 mb-2">
                                  {subItem.submenu.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href || "#"}
                                      className="py-1.5 text-sm text-muted-foreground/80"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href || "#"}
                              className="py-2 text-base font-medium text-muted-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="py-3 text-lg font-medium text-charcoal dark:text-white border-b border-border/30"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact#digital-inquiry"
            className="mt-6 flex items-center justify-center gap-2 bg-deepblue text-white px-5 py-3 rounded-sm font-medium btn-slide-gold group"
            onClick={() => setIsOpen(false)}
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}
