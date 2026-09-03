import React from 'react';
import { ArrowRight, Download, CalendarCheck } from 'lucide-react';

export const EnterpriseCTA: React.FC = () => {
  return (
    <section
      id="cta-section"
      className="py-24 bg-[#050A07] text-white relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dual glow gradient backdrops: Emerald and Mint */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[400px] bg-teal-400/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#08150D] via-[#060F09] to-[#040805] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Accent Line with Emerald & Mint Gradient */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-white rounded-full mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-black tracking-widest text-emerald-400">
                AKSELERASI EMISI NOL BERSIH NASIONAL
              </span>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
              >
                Siap Memulai Peta Jalan Nol Bersih Korporasi Anda?
              </h2>
              <p className="text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed">
                Konsultasikan audit baseline emisi, kelayakan sertifikasi kredit karbon, dan strategi efisiensi energi bersama spesialis ESG kami.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#what-we-do"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-black uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-neutral-950 transition-all shadow-[0_0_35px_rgba(34,197,94,0.65)] hover:shadow-[0_0_45px_rgba(34,197,94,0.85)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <CalendarCheck className="w-4 h-4 text-neutral-950" />
                <span>JADWALKAN AUDIT AWAL</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#insights"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400 bg-neutral-900 hover:bg-neutral-800 border border-white/20 hover:border-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>UNDUH LAPORAN OUTLOOK 2026</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
