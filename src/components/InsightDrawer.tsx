import { useEffect, useRef } from 'react';
import { X, CheckCircle2, Bookmark, Download, Sparkles } from 'lucide-react';
import { InsightItem } from '../types';

interface InsightDrawerProps {
  insight: InsightItem | null;
  onClose: () => void;
}

export const InsightDrawer: React.FC<InsightDrawerProps> = ({ insight, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && insight) {
        onClose();
      }
    };
    if (insight) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [insight, onClose]);

  if (!insight) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawerTitle"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={drawerRef}
        className="w-full max-w-2xl bg-white text-neutral-900 h-full shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 border-l border-neutral-200"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-600 text-white shadow-sm">
              {insight.category}
            </span>
            <span className="text-xs text-neutral-500 font-medium">
              {insight.topic} • {insight.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Tutup wawasan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Title */}
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-semibold">
              Dipublikasikan {insight.date}
            </div>
            <h2 id="drawerTitle" className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
              {insight.title}
            </h2>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-neutral-200 shadow-sm">
            <img
              src={insight.imageUrl}
              alt={insight.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Pusat Riset &amp; Kebijakan Dekarbonisasi NusaDecarb
            </div>
          </div>

          {/* Executive Quote Callout */}
          <div className="p-5 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 text-neutral-800">
            <p className="text-base font-semibold italic text-neutral-900 leading-snug">
              &ldquo;{insight.fullDetails.heroQuote}&rdquo;
            </p>
          </div>

          {/* Impact Metric Banner (Dark with Emerald Stat) */}
          <div className="p-5 rounded-xl bg-[#08130B] text-white flex items-center gap-5 border border-emerald-500/30">
            <div className="text-4xl font-display font-black text-emerald-400 shrink-0">
              {insight.fullDetails.impactMetric.value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
              {insight.fullDetails.impactMetric.label}
            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
              <span>Poin Strategis bagi Eksekutif</span>
              <span className="w-8 h-[2px] bg-emerald-500" />
            </h3>
            <ul className="space-y-3">
              {insight.fullDetails.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deep Dive Analysis */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-2">
              Analisis Sektoral Mendalam
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {insight.fullDetails.deepDive}
            </p>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-neutral-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Laporan riset eksekutif disiapkan untuk diunduh.')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg bg-emerald-400 hover:bg-emerald-300 text-neutral-950 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-neutral-950" />
              <span>Unduh Laporan PDF</span>
            </button>
            <button
              onClick={() => alert('Wawasan disimpan ke daftar bacaan Anda.')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-colors text-neutral-700"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Simpan</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 px-3 py-2"
          >
            Tutup Wawasan
          </button>
        </div>
      </div>
    </div>
  );
};
