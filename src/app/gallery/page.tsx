"use client";

import React, { useState } from "react";
import { GalleryHero } from "@/components/GalleryHero";
import { GalleryFilter } from "@/components/GalleryFilter";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GalleryVideo } from "@/components/GalleryVideo";
import { GalleryFeatured } from "@/components/GalleryFeatured";
import { GalleryProcessStory } from "@/components/GalleryProcessStory";
import { GalleryCTA } from "@/components/GalleryCTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="overflow-hidden">
      <div className="animate-in fade-in duration-1000">
        <GalleryHero />
      </div>
      
      <GalleryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <GalleryGrid selectedCategory={activeCategory} />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <GalleryVideo />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
        <GalleryFeatured />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <GalleryProcessStory />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 fill-mode-both">
        <GalleryCTA />
      </div>
    </main>
  );
}
