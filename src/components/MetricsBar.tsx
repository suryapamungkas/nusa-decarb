import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Building2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Zap,
      value: '4.2 GW',
      label: 'Potensi EBT Terpetakan',
      subtext: 'Kajian teknis surya, geotermal, dan biomassa industri',
      accent: 'emerald',
    },
    {
      icon: ShieldCheck,
      value: '12.8M+',
      label: 'Ton CO2e Target Reduksi',
      subtext: 'Portofolio dekarbonisasi sektor manufaktur & energi',
      accent: 'mint',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: 'Kepatuhan Regulasi Karbon',
      subtext: 'Penyelarasan Nilai Ekonomi Karbon (NEK) & SRN-PPI',
      accent: 'emerald',
    },
    {
      icon: Building2,
      value: '85+',
      label: 'Entitas BUMN & Swasta',
      subtext: 'Didampingi dalam peta jalan emisi nol bersih',
      accent: 'mint',
    },
  ];

  return (
    <section
      aria-label="Indikator dampak dekarbonisasi industri Indonesia"
      className="bg-[#07120A] border-y border-emerald-500/20 relative z-20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const isEmerald = metric.accent === 'emerald';
            return (
              <div
                key={idx}
                className={`flex flex-col space-y-2 border-l-4 pl-5 transition-all group ${
                  isEmerald
                    ? 'border-emerald-500 hover:border-emerald-400'
                    : 'border-teal-400 hover:border-teal-300'
                }`}
              >
                {/* Metric Category Tag */}
                <div className="flex items-center gap-2 mb-1">
                  <Icon
                    className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                      isEmerald ? 'text-emerald-400' : 'text-teal-300'
                    }`}
                  />
                  <span
                    className={`text-[11px] font-black uppercase tracking-widest ${
                      isEmerald ? 'text-emerald-400' : 'text-teal-300'
                    }`}
                  >
                    Indikator Dampak
                  </span>
                </div>

                {/* Big Metric Number */}
                <div
                  className={`text-4xl sm:text-5xl font-display font-black text-white tracking-tight transition-colors ${
                    isEmerald ? 'group-hover:text-emerald-400' : 'group-hover:text-teal-300'
                  }`}
                >
                  {metric.value}
                </div>

                {/* Metric Label */}
                <div className="text-base font-bold text-white leading-snug">
                  {metric.label}
                </div>

                {/* Metric Subtext */}
                <div className="text-xs text-neutral-300 font-medium">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
