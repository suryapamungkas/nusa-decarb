import React, { useEffect, useRef } from 'react';
import { Globe, Check, X } from 'lucide-react';
import { regionOptions } from '../data/navigation';
import { RegionOption } from '../types';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: RegionOption;
  onSelectRegion: (region: RegionOption) => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
  selectedRegion,
  onSelectRegion,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="regionModalTitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-[#08130B] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B1A10]">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-emerald-400" />
            <h2 id="regionModalTitle" className="text-base font-semibold text-white">
              Pilih Wilayah &amp; Bahasa Pelaporan
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <p className="text-xs text-neutral-400 mb-4">
            Penyesuaian wilayah akan mengonfigurasi standar taksonomi emisi, regulasi pasar karbon (NEK), dan bahasa laporan yang ditampilkan.
          </p>

          <ul className="grid grid-cols-1 gap-2" role="list">
            {regionOptions.map((region) => {
              const isSelected = selectedRegion.code === region.code;
              return (
                <li key={region.code}>
                  <button
                    onClick={() => {
                      onSelectRegion(region);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-emerald-subtle'
                        : 'bg-white/[0.02] border-white/5 text-neutral-300 hover:bg-white/[0.06] hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl" role="img" aria-label={region.name}>
                        {region.flag}
                      </span>
                      <div>
                        <div className="text-sm font-medium">{region.name}</div>
                        <div className="text-xs text-neutral-500 font-mono">{region.locale}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-[#0B1A10] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
