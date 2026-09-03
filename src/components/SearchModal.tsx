import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowRight, FileText, Briefcase, Sparkles } from 'lucide-react';
import { insightsData } from '../data/insights';
import { clientCaseStudies } from '../data/clients';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectInsight: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectInsight }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter items
  const cleanQuery = query.toLowerCase().trim();

  const filteredInsights = cleanQuery
    ? insightsData.filter(
        (item) =>
          item.title.toLowerCase().includes(cleanQuery) ||
          item.summary.toLowerCase().includes(cleanQuery) ||
          item.topic.toLowerCase().includes(cleanQuery)
      )
    : insightsData.slice(0, 3);

  const filteredClients = cleanQuery
    ? clientCaseStudies.filter(
        (c) =>
          c.clientName.toLowerCase().includes(cleanQuery) ||
          c.title.toLowerCase().includes(cleanQuery) ||
          c.industry.toLowerCase().includes(cleanQuery) ||
          c.tag.toLowerCase().includes(cleanQuery)
      )
    : clientCaseStudies.slice(0, 2);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="searchModalTitle"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-3xl bg-[#08130B] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
      >
        {/* Search header bar */}
        <div className="flex items-center px-6 py-4 border-b border-white/10 bg-[#0B1A10]">
          <Search className="w-5 h-5 text-emerald-400 mr-3 shrink-0" aria-hidden="true" />
          <h2 id="searchModalTitle" className="sr-only">Pencarian Wawasan, Regulasi, dan Studi Kasus Dekarbonisasi</h2>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari wawasan dekarbonisasi, pasar karbon, taksonomi hijau, studi kasus..."
            className="w-full bg-transparent text-white placeholder-neutral-400 text-lg focus:outline-none"
            aria-label="Pencarian platform NusaDecarb"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white mr-2 transition-colors"
              aria-label="Hapus kata kunci"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs uppercase tracking-wider text-neutral-400 hover:text-white border border-white/10 rounded-md transition-colors"
            aria-label="Tutup pencarian"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Pills in Emerald & White */}
        <div className="px-6 py-3 border-b border-white/5 bg-black/40 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-neutral-400 shrink-0 font-medium">Populer:</span>
          {['Taksonomi Hijau', 'IDX Carbon', 'Dekarbonisasi Smelter', 'PLTS Industri', 'Efisiensi Termal', 'CBAM Eropa'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-400 text-neutral-300 border border-white/10 transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Insights Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                Wawasan &amp; Riset Kebijakan ({filteredInsights.length})
              </span>
              {cleanQuery && <span className="text-emerald-400 font-medium">Kecocokan kata kunci</span>}
            </div>

            {filteredInsights.length === 0 ? (
              <p className="text-sm text-neutral-400 py-3">Tidak ditemukan riset untuk kata kunci &quot;{query}&quot;.</p>
            ) : (
              <ul className="space-y-2">
                {filteredInsights.map((insight) => (
                  <li key={insight.id}>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectInsight(insight.id);
                      }}
                      className="w-full text-left p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-emerald-500/50 transition-all flex items-start justify-between group"
                    >
                      <div className="pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                            {insight.category}
                          </span>
                          <span className="text-neutral-600">•</span>
                          <span className="text-xs text-neutral-400">{insight.topic}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {insight.title}
                        </h3>
                        <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                          {insight.summary}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Client Cases */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Studi Kasus Industri Riil ({filteredClients.length})
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredClients.map((client) => (
                <li key={client.id}>
                  <a
                    href="#client-spotlight"
                    onClick={onClose}
                    className="block p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-emerald-500/40 transition-all group"
                  >
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      {client.industry}
                    </span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {client.clientName}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                      {client.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer shortcuts info */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#0B1A10] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">↵</kbd> Pilih
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> Tutup
            </span>
          </div>
          <span className="flex items-center gap-1 text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            NusaDecarb Intelligence Search
          </span>
        </div>
      </div>
    </div>
  );
};
