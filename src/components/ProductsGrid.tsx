"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, SearchX, ChevronLeft, ChevronRight } from "lucide-react";
import { products, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductsGridProps {
  selectedCategory: string;
  searchQuery?: string;
}

function ProductCardItem({ product, idx }: { product: Product; idx: number }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSelectImage = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIdx(index);
  };

  const currentImage = images[activeImgIdx] || product.image;

  return (
    <motion.div 
      key={product.id}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        delay: idx * 0.03,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group w-full min-w-full md:min-w-0 md:w-full shrink-0 snap-center"
    >
      {/* Refined Product Card with Side Accents */}
      <div className="relative h-full bg-white dark:bg-[#080808] border border-border/40 rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] hover:border-gold/40 flex flex-col group/card">
        
        {/* Structural Side Accent */}
        <div className="absolute left-0 top-0 w-[2px] h-0 bg-gold transition-all duration-700 group-hover/card:h-full z-20" />
        <div className="absolute right-0 bottom-0 w-[1px] h-0 bg-border transition-all duration-700 group-hover/card:h-1/2 z-20" />
        
        {/* Visual Frame */}
        <div className="relative aspect-[4/3] overflow-hidden group/image-frame">
          <div className="absolute inset-3">
            <Image
              key={currentImage}
              src={currentImage}
              alt={product.name}
              fill
              className="object-contain transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Minimalist Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Multi-Image Switch Controls */}
          {hasMultipleImages && (
            <>
              {/* Prev / Next Buttons */}
              <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between z-30 opacity-90 sm:opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="w-8 h-8 rounded-full bg-white/90 dark:bg-[#151515]/90 text-charcoal dark:text-white hover:bg-gold hover:text-black border border-border/60 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Previous image view"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="w-8 h-8 rounded-full bg-white/90 dark:bg-[#151515]/90 text-charcoal dark:text-white hover:bg-gold hover:text-black border border-border/60 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Next image view"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Top Right Dots / Switcher Pill */}
              <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                {images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={(e) => handleSelectImage(e, dotIdx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                      dotIdx === activeImgIdx
                        ? "w-4 bg-gold"
                        : "w-1.5 bg-white/40 hover:bg-white/80"
                    )}
                    aria-label={`Switch to image view ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Technical Indicator */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1 bg-gold/90 rounded-full shadow-lg pointer-events-auto">
              <ShieldCheck className="w-3 h-3 text-charcoal" />
              <span className="text-[8px] font-bold text-charcoal uppercase tracking-wider">{product.specs}</span>
            </div>
            {hasMultipleImages && (
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/90 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/15">
                {activeImgIdx + 1} / {images.length}
              </span>
            )}
          </div>
        </div>

        {/* Curated Content */}
        <div className="p-6 lg:p-8 flex flex-col flex-grow">
          <div className="flex-grow space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">
                {Array.isArray(product.category) ? product.category.join(" & ") : product.category}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white leading-snug tracking-normal group-hover:text-deepblue dark:group-hover:text-gold transition-colors duration-500">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 font-medium">
              {product.description}
            </p>
          </div>

          {/* Sophisticated Action */}
          <div className="pt-6 mt-auto">
            <Link 
              href={`/products/${product.id}`}
              className="group/link flex items-center justify-between w-full p-1 border-b border-border hover:border-gold transition-colors duration-500"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/60 dark:text-white/60 group-hover/link:text-gold transition-colors">
                Technical Details
              </span>
              <div className="w-8 h-8 rounded-full border border-border group-hover/link:bg-gold group-hover/link:border-gold flex items-center justify-center transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-charcoal/60 dark:text-white/60 group-hover/link:text-charcoal transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsGrid({ selectedCategory, searchQuery = "" }: ProductsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = products.filter(p => {
    // 1. Category Filter
    const matchesCategory = selectedCategory === "All Products" 
      ? true 
      : Array.isArray(p.category) 
        ? p.category.includes(selectedCategory) 
        : p.category === selectedCategory;

    if (!matchesCategory) return false;

    // 2. Search Query Filter
    if (!normalizedQuery) return true;

    const nameMatch = p.name.toLowerCase().includes(normalizedQuery);
    const descMatch = p.description.toLowerCase().includes(normalizedQuery);
    const specsMatch = p.specs.toLowerCase().includes(normalizedQuery);
    const overviewMatch = p.overview ? p.overview.toLowerCase().includes(normalizedQuery) : false;
    const categoryMatch = Array.isArray(p.category) 
      ? p.category.some(c => c.toLowerCase().includes(normalizedQuery))
      : p.category.toLowerCase().includes(normalizedQuery);

    return nameMatch || descMatch || specsMatch || overviewMatch || categoryMatch;
  });

  const handleMobileScroll = () => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < filteredProducts.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!gridRef.current || index < 0 || index >= filteredProducts.length) return;
    const container = gridRef.current;
    if (container.children[index]) {
      container.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container-custom">
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 px-4 max-w-md mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-silver/10 dark:bg-white/5 border border-border flex items-center justify-center mx-auto mb-5 text-gold">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              We couldn't find any components matching "{searchQuery}". Try searching for another keyword or browse by category.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col justify-between">
            {/* Single visible card at a time with horizontal scroll on mobile (< md), multi-column grid on desktop (>= md) */}
            <motion.div 
              ref={gridRef}
              onScroll={handleMobileScroll}
              layout
              className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory pt-2 pb-3 md:py-0 px-1 md:px-0 gap-4 md:gap-8 lg:gap-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, idx) => (
                  <ProductCardItem key={product.id} product={product} idx={idx} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Touch Carousel Controls & Counter Badge */}
            {filteredProducts.length > 1 && (
              <div className="flex md:hidden items-center justify-between mt-4 px-2 z-10">
                <button
                  onClick={() => scrollToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal dark:text-white disabled:opacity-30 active:scale-95"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-[11px] font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/30">
                  {activeIndex + 1} / {filteredProducts.length} Products
                </div>

                <button
                  onClick={() => scrollToCard(activeIndex + 1)}
                  disabled={activeIndex === filteredProducts.length - 1}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal dark:text-white disabled:opacity-30 active:scale-95"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
