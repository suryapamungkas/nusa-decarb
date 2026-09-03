import React from 'react';
import { ChevronRight } from 'lucide-react';
import { clientCaseStudies } from '../data/clients';

export const ClientSpotlight: React.FC = () => {
  return (
    <section
      id="client-spotlight"
      className="py-24 bg-white text-neutral-900 relative"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-emerald-500" />
            <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
              STUDI KASUS EFISIENSI ENERGI
            </span>
          </div>
          <h2
            id="clients-heading"
            className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight"
          >
            Dampak Terverifikasi di Industri Riil
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Hasil nyata implementasi efisiensi energi dan dekarbonisasi operasional mitra korporasi.
          </p>
        </div>

        {/* Accenture-Style Interactive Case Study Cards (Image switches to Explanation on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {clientCaseStudies.map((client) => (
            <article
              key={client.id}
              tabIndex={0}
              role="button"
              onClick={() => {
                const el = document.getElementById('cta-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const el = document.getElementById('cta-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label={`Studi Kasus: ${client.clientName}. ${client.title}`}
              className="group cursor-pointer rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-card-elevated hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 h-[490px] sm:h-[510px]"
            >
              {/* Top Static Area: Industry & Client Title (Always Visible) */}
              <div className="p-5 pb-3 flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 mb-1.5 block">
                  {client.industry}
                </span>
                <h3 className="font-display font-bold text-neutral-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {client.clientName}
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-1 mt-1 font-medium">
                  {client.title}
                </p>
              </div>

              {/* Bottom Interactive Swap Container (Image switches to Explanation on Hover) */}
              <div className="relative flex-1 w-full overflow-hidden bg-neutral-100 border-t border-neutral-100">
                {/* State 1: The Image (Default State) */}
                <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105 group-focus-within:opacity-0 group-focus-within:scale-105 pointer-events-none">
                  <img
                    src={client.imageUrl}
                    alt={`${client.clientName} implementasi dekarbonisasi`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Tag badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {client.tag}
                    </span>
                  </div>

                  {/* Impact preview pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-display font-black text-emerald-400 block leading-tight">
                        {client.impactStat}
                      </span>
                      <span className="text-[10px] text-neutral-200 line-clamp-1 font-medium">
                        {client.impactLabel}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-0.5 shrink-0">
                      Hover <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* State 2: The Explanation / Dampak Riil (Hover Switch State) */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-b from-white via-slate-50 to-emerald-50/40 transition-all duration-500 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded inline-block">
                      Dampak Riil Operasional
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal line-clamp-4">
                      {client.description}
                    </p>

                    {/* Prominent Impact Metric Callout */}
                    <div className="p-3 rounded-xl bg-white border border-emerald-200/90 shadow-sm">
                      <div className="text-2xl font-display font-black text-emerald-600 leading-none mb-1">
                        {client.impactStat}
                      </div>
                      <div className="text-[11px] font-semibold text-neutral-600 leading-tight">
                        {client.impactLabel}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Strip with Chevron */}
                  <div className="pt-3 flex items-center justify-between border-t border-neutral-200/80 mt-auto text-xs">
                    <span className="text-[11px] text-neutral-500 font-medium">
                      Verifikasi Independen
                    </span>
                    <div className="inline-flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-600 uppercase tracking-wider">
                      <span>Telaah Kasus</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
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
