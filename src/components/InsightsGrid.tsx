import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { insightsData } from '../data/insights';
import { InsightItem } from '../types';

interface InsightsGridProps {
  onSelectInsight: (insight: InsightItem) => void;
}

const topics = [
  'Semua',
  'Taksonomi & Regulasi',
  'Pasar Karbon (NEK)',
  'Energi Terbarukan',
  'Rantai Pasok Baterai & Nikel',
];

export const InsightsGrid: React.FC<InsightsGridProps> = ({ onSelectInsight }) => {
  const [selectedTopic, setSelectedTopic] = useState('Semua');

  const filteredInsights = selectedTopic === 'Semua'
    ? insightsData
    : insightsData.filter((item) => item.topic === selectedTopic);

  return (
    <section
      id="insights"
      className="py-24 bg-slate-50 text-neutral-900 relative"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-emerald-500" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                PUSAT RISET &amp; KEBIJAKAN IKLIM
              </span>
            </div>
            <h2
              id="insights-heading"
              className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight"
            >
              Wawasan Strategis Dekarbonisasi
            </h2>
            <p className="mt-3 text-base text-neutral-600 max-w-2xl">
              Analisis regulasi emisi, taksonomi hijau nasional, dan dinamika pasar karbon untuk eksekutif industri.
            </p>
          </div>

          {/* Filter Tabs in Green & White */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Topik Wawasan">
            {topics.map((topic) => {
              const isActive = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 shadow-sm'
                      : 'bg-white text-neutral-600 hover:bg-emerald-50 hover:text-emerald-800 border border-neutral-200'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accenture-Style Interactive Card Grid (Image switches to Explanation on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredInsights.map((insight) => (
            <article
              key={insight.id}
              onClick={() => onSelectInsight(insight)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectInsight(insight);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${insight.category}: ${insight.title}. Klik untuk membaca analisis lengkap.`}
              className="group cursor-pointer rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-card-elevated hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 h-[480px] sm:h-[500px]"
            >
              {/* Top Static Area: Category Tag & Title (Always Visible) */}
              <div className="p-6 pb-4 flex flex-col">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 mb-2 block">
                  {insight.category}
                </span>
                <h3 className="font-display font-bold text-neutral-900 text-lg sm:text-xl leading-snug group-hover:text-emerald-700 transition-colors line-clamp-3">
                  {insight.title}
                </h3>
              </div>

              {/* Bottom Interactive Swap Container (Image switches to Explanation on Hover) */}
              <div className="relative flex-1 w-full overflow-hidden bg-neutral-100 border-t border-neutral-100">
                {/* State 1: The Image (Default: visible, on hover: smooth fade out & zoom) */}
                <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105 group-focus-within:opacity-0 group-focus-within:scale-105 pointer-events-none">
                  <img
                    src={insight.imageUrl}
                    alt={insight.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                    {insight.readTime}
                  </div>
                </div>

                {/* State 2: The Explanation / Penjelasan (On hover: smooth fade in & slide up) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-white via-slate-50 to-emerald-50/30 transition-all duration-500 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded inline-block">
                      Ringkasan Eksekutif
                    </span>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                      {insight.summary}
                    </p>
                  </div>

                  {/* Bottom Action Strip with Expand > */}
                  <div className="pt-4 flex items-center justify-between border-t border-neutral-200/80 mt-auto text-xs">
                    <span className="text-neutral-500 font-medium">
                      {insight.date} • {insight.readTime}
                    </span>
                    <div className="inline-flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-600 uppercase tracking-wider">
                      <span>Expand</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
