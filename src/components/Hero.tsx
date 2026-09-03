import React from 'react';
import { ArrowRight, Leaf, Compass, ShieldCheck } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroProps {
  onExploreInsights: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreInsights }) => {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050A07] text-white"
      aria-labelledby="hero-title"
    >
      {/* Interactive Emerald & White Particle Network Background */}
      <ParticleCanvas />

      {/* Atmospheric gradient glow & decorative grid */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" aria-hidden="true" />
      
      {/* Ambient glowing orbs: Emerald and Mint */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/18 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-teal-400/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Label Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09150E]/90 border border-emerald-500/50 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
            INDONESIA DECARBONIZATION OUTLOOK 2026
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-xs text-neutral-200 font-medium">Towards Net Zero Emission</span>
        </div>

        {/* Massive Typographic Headline */}
        <div className="max-w-5xl">
          <h1
            id="hero-title"
            className="text-display-hero font-display font-extrabold uppercase text-white tracking-tight leading-[0.92] select-none"
          >
            Catalyzing net{' '}
            <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-green-300">
              zero
            </span>
            <span
              className="inline-block text-emerald-400 text-glow-emerald ml-2 sm:ml-4 transform hover:scale-125 hover:translate-x-2 transition-transform duration-300 cursor-default font-black"
              aria-hidden="true"
            >
              &gt;
            </span>
          </h1>
        </div>

        {/* Secondary Headline & Mission Statement Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Akselerasi Dekarbonisasi Industri Berkelanjutan</span>
              <span className="text-emerald-400 font-bold">_</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed font-normal">
              Menjembatani kepatuhan regulasi iklim, perdagangan kredit karbon, dan implementasi teknologi hijau terapan. Kami menyediakan analisis komprehensif bagi BUMN dan manufaktur nasional dalam memimpin transisi energi rendah karbon.
            </p>

            {/* Action CTAs in Emerald & White */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#client-spotlight"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-black uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-neutral-950 shadow-[0_0_35px_rgba(34,197,94,0.65)] hover:shadow-[0_0_45px_rgba(34,197,94,0.85)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>LIHAT STUDI KASUS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <button
                onClick={onExploreInsights}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white hover:text-emerald-400 bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 hover:border-emerald-400 backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>TELAAH TAKSONOMI HIJAU</span>
              </button>
            </div>
          </div>

          {/* Quick Pillars Widget */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl bg-[#09150E]/90 border border-white/15 backdrop-blur-md hover:border-emerald-400 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Leaf className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-wider">Pilar 01</span>
              </div>
              <h3 className="text-sm font-bold text-white">Transisi &amp; Efisiensi Energi</h3>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Integrasi PLTS atap industri, audit efisiensi energi termal, dan elektrifikasi armada operasional.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#09150E]/90 border border-white/15 backdrop-blur-md hover:border-teal-400 transition-colors">
              <div className="flex items-center gap-2 text-teal-300 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-wider">Pilar 02</span>
              </div>
              <h3 className="text-sm font-bold text-white">Regulasi &amp; Kredit Karbon</h3>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Kepatuhan Taksonomi Hijau Indonesia 2.0, MRV tersertifikasi, dan integrasi IDX Carbon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
