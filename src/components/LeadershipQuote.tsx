import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export const LeadershipQuote: React.FC = () => {
  return (
    <section
      id="quote-section"
      className="py-20 sm:py-28 bg-white border-y border-neutral-200 relative overflow-hidden"
      aria-label="Perspektif Kepemimpinan Transisi Energi"
    >
      {/* Decorative large background quote symbol with subtle emerald tint */}
      <div
        className="absolute -top-10 right-10 text-emerald-50 pointer-events-none select-none font-serif text-[260px] leading-none z-0"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Leadership Badge in Emerald */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
          <Quote className="w-3.5 h-3.5 text-emerald-600" />
          <span>Perspektif Kepemimpinan Transisi Energi</span>
        </div>

        {/* The Quote */}
        <blockquote className="text-2xl sm:text-4xl lg:text-4xl font-display font-semibold text-neutral-900 tracking-tight leading-snug">
          &ldquo;Transisi menuju emisi nol bersih bukan lagi sekadar pemenuhan kepatuhan etis, melainkan fondasi daya saing ekonomi dan ketahanan modal industri Indonesia ke depan.&rdquo;
        </blockquote>

        {/* Executive Attribution */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 p-0.5 shadow-md">
            <img
              src="/images/esg_director_portrait.jpg"
              alt="Dewi Sartika Handayani, Direktur Eksekutif / Advisory Partner Transisi Energi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold text-neutral-950">
              Dewi Sartika Handayani
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Direktur Eksekutif / Advisory Partner Transisi Energi
            </div>
          </div>
        </div>

        {/* Secondary Report Link with Emerald Underline Accent */}
        <div className="mt-10">
          <a
            href="#insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-emerald-700 group border-b-2 border-emerald-500 hover:border-emerald-700 pb-1 transition-colors"
          >
            <span>Telaah Kerangka Dekarbonisasi Industri Indonesia 2026</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700 transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
