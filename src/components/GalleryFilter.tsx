"use client";

import React from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "Manufacturing", "Machinery", "Products", "Facilities"];

interface GalleryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="relative z-20 bg-white/80 dark:bg-charcoal/80 border-b border-border">
      <div className="container-custom py-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center gap-4 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "px-8 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300",
                activeCategory === cat
                  ? "bg-deepblue text-white shadow-xl translate-y-[-2px]"
                  : "text-muted-foreground hover:text-charcoal dark:hover:text-white hover:bg-silver/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
