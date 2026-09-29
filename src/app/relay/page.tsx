import { Metadata } from 'next';
import { BrandNewDayFilm } from '@/components/brand-new-day/BrandNewDayFilm';

export const metadata: Metadata = {
  title: 'BRAND NEW DAY — Metrology Scroll Film | JPAN Tubular',
  description: 'A 2200vh continuous cinematic scroll film through 6 metrology acts featuring the precision engineered copper S-bend fitting.',
};

export default function RelayPage() {
  return (
    <main className="w-full min-h-screen bg-[#150406] text-[#f2f3f5] overflow-x-hidden">
      {/* 1 Canvas, 0 Sections, 2200vh Pure Scroll Film */}
      <BrandNewDayFilm />
    </main>
  );
}
