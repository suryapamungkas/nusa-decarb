import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { RegionOption } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLanguage: () => void;
  selectedRegion: RegionOption;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLanguage, selectedRegion }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSitemap = [
    {
      category: 'Layanan',
      links: [
        { label: 'Audit Emisi GHG', href: '#what-we-do' },
        { label: 'Integrasi PLTS Industri', href: '#what-we-do' },
        { label: 'Sertifikasi Kredit Karbon', href: '#what-we-do' },
        { label: 'Pelaporan Kepatuhan ESG', href: '#what-we-do' },
        { label: 'Penasihat Finansial Hijau', href: '#what-we-do' },
      ],
    },
    {
      category: 'Riset',
      links: [
        { label: 'Tracker Nilai Ekonomi Karbon', href: '#insights' },
        { label: 'Laporan Taksonomi Hijau', href: '#insights' },
        { label: 'Peta Jalan Transisi BUMN', href: '#insights' },
        { label: 'Outlook Rantai Baterai EV', href: '#insights' },
        { label: 'Kesiapan Mekanisme CBAM', href: '#insights' },
      ],
    },
    {
      category: 'Kelembagaan',
      links: [
        { label: 'Komite Penasihat', href: '#quote-section' },
        { label: 'Metodologi Ilmiah', href: '#quote-section' },
        { label: 'Standar Verifikasi Independen', href: '#quote-section' },
        { label: 'Kontak Sekretariat', href: '#cta-section' },
        { label: 'Pusat Riset Emisi Nasional', href: '#client-spotlight' },
      ],
    },
    {
      category: 'Karier & Jejaring',
      links: [
        { label: 'Peluang Spesialis MRV Karbon', href: '#careers' },
        { label: 'Insinyur Sistem EBT & Microgrid', href: '#careers' },
        { label: 'Konsultan Pembiayaan Hijau', href: '#careers' },
        { label: 'Akademi Transisi Energi', href: '#careers' },
        { label: 'Forum Eksekutif Keberlanjutan', href: '#careers' },
      ],
    },
  ];

  return (
    <footer
      className="bg-[#050A07] text-white border-t border-emerald-500/20 relative z-20"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center group" aria-label="NusaDecarb home">
              <Logo variant="dark" />
            </a>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-bold hidden sm:inline">
              Katalisator Transisi Energi &amp; Nol Bersih Indonesia
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Region picker trigger */}
            <button
              onClick={onOpenLanguage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/20 hover:border-emerald-400 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Wilayah: {selectedRegion.name}</span>
            </button>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-neutral-900 hover:bg-emerald-400 hover:text-neutral-950 text-white border border-white/20 transition-all"
              aria-label="Kembali ke atas halaman"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sitemap Multi-columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10">
          {footerSitemap.map((col) => (
            <div key={col.category} className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
                {col.category}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-neutral-200 hover:text-emerald-400 transition-colors block py-0.5 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: Legal links & Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-300">
            <button
              onClick={() => alert('Pengaturan Cookie diaktifkan.')}
              className="hover:text-emerald-400 underline transition-colors"
            >
              Pengaturan Cookie
            </button>
            <a href="#privacy" className="hover:text-emerald-400 transition-colors">
              Pernyataan Privasi
            </a>
            <a href="#terms" className="hover:text-emerald-400 transition-colors">
              Syarat &amp; Ketentuan
            </a>
            <a href="#accessibility" className="hover:text-emerald-400 transition-colors">
              Pernyataan Aksesibilitas (WCAG AAA)
            </a>
            <a href="#sitemap" className="hover:text-emerald-400 transition-colors">
              Peta Situs
            </a>
            <span className="text-neutral-400">
              © {new Date().getFullYear()} NusaDecarb Indonesia. Dikembangkan oleh{' '}
              <a
                href="https://github.com/suryapamungkas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-bold hover:underline transition-colors"
              >
                suryapamungkas
              </a>
              . Hak cipta dilindungi undang-undang.
            </span>
          </div>

          {/* Social icons with Emerald hover highlight */}
          <div className="flex items-center gap-3" aria-label="Kanal Media Sosial NusaDecarb">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NusaDecarb di LinkedIn"
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-emerald-400 hover:text-neutral-950 text-white flex items-center justify-center transition-colors border border-white/20 hover:border-emerald-400"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.88a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NusaDecarb di X"
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-emerald-400 hover:text-neutral-950 text-white flex items-center justify-center transition-colors border border-white/20 hover:border-emerald-400"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NusaDecarb di YouTube"
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-emerald-400 hover:text-neutral-950 text-white flex items-center justify-center transition-colors border border-white/20 hover:border-emerald-400"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NusaDecarb Open Source di GitHub"
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-emerald-400 hover:text-neutral-950 text-white flex items-center justify-center transition-colors border border-white/20 hover:border-emerald-400"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
