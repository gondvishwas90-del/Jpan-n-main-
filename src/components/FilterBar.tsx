"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All Products", "Chiller", "Copper Components", "Brass Components", "Steel Components"];

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({ 
  activeCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}: FilterBarProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <div className="relative z-20 bg-white/80 dark:bg-charcoal/80 border-y border-border backdrop-blur-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-3 md:gap-8">
          {/* Categories Navigation */}
          <div className="relative flex-1 min-w-0">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={cn(
                    "px-3 md:px-4 py-2 rounded-sm text-xs md:text-sm lg:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 tracking-wide",
                    activeCategory === cat
                      ? "bg-deepblue text-white shadow-lg"
                      : "text-muted-foreground hover:text-charcoal dark:hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Scroll fade hint */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-charcoal pointer-events-none md:hidden" />
          </div>

          {/* Desktop Search & Industry Filter */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="bg-silver/10 dark:bg-white/5 border border-border px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gold transition-all w-64 rounded-sm text-charcoal dark:text-white placeholder:text-muted-foreground"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold pointer-events-none" />
              )}
            </div>
            
            <Link 
              href="/industries"
              className="flex items-center gap-2 px-4 py-2 border border-border text-sm font-bold transition-all rounded-sm btn-slide-gold group relative overflow-hidden"
            >
              <Filter className="w-4 h-4 relative z-10 group-hover:text-black transition-colors duration-500" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Industry</span>
            </Link>
          </div>

          {/* Mobile Search Toggle */}
          <button 
            className="lg:hidden text-charcoal dark:text-white"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            aria-label="Toggle search"
          >
            {isMobileSearchOpen ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search Bar Expansion */}
        {isMobileSearchOpen && (
          <div className="lg:hidden mt-4 animate-in slide-in-from-top-2">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-silver/10 dark:bg-white/5 border border-border px-4 py-3 pr-12 text-sm focus:outline-none focus:border-gold rounded-sm text-charcoal dark:text-white"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              ) : (
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
