"use client";

import React from "react";
import { Search, X } from "lucide-react";

const categories = ["All Insights", "Technical", "Technology", "Company", "Engineering", "Innovation", "Quality"];

interface BlogFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: BlogFilterProps) {
  return (
    <section className="relative z-20 bg-white/80 dark:bg-charcoal/80 border-b border-border backdrop-blur-md">
      <div className="container-custom py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-deepblue text-white shadow-lg"
                    : "bg-silver/10 text-muted-foreground hover:bg-silver/20 dark:hover:bg-white/10"
                } ${index === categories.length - 1 ? 'mr-4' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-silver/10 dark:bg-white/5 border border-border rounded-sm py-2 pl-10 pr-10 text-sm focus:outline-none focus:border-gold transition-colors text-charcoal dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal dark:hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
