import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { RegionOption } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenLanguage: () => void;
  selectedRegion: RegionOption;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenLanguage,
  selectedRegion,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for navbar background intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const activeItem = navigationItems.find((item) => item.id === activeDropdown);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050A07]/75 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-3.5'
          : 'bg-transparent backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Brandmark / Logo */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
              aria-label="NusaDecarb Home"
            >
              <Logo variant="dark" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary Navigation">
              {navigationItems.map((item) => {
                const isOpen = activeDropdown === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`mega-menu-${item.id}`}
                      onClick={() => setActiveDropdown(isOpen ? null : item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isOpen
                          ? 'text-emerald-400 bg-white/10 ring-1 ring-emerald-500/30'
                          : 'text-white hover:text-emerald-400 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-400' : 'text-neutral-400'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button - Only Search Icon and Search Text as explicitly requested */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Search platform"
            >
              <Search className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span className="text-xs font-semibold">Search</span>
            </button>

            {/* Region / Language Trigger */}
            <button
              onClick={onOpenLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-white hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={`Wilayah saat ini: ${selectedRegion.name}. Klik untuk mengubah.`}
            >
              <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span className="hidden sm:inline text-xs font-semibold truncate max-w-[110px]">
                {selectedRegion.code}
              </span>
            </button>

            {/* Contact CTA in High-Contrast Emerald Green */}
            <a
              href="#cta-section"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-neutral-950 transition-all shadow-[0_0_20px_rgba(34,197,94,0.55)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              KONSULTASI NZE
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:text-emerald-400 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka menu navigasi seluler"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Centered Mega-menu dropdown panel - Appears precisely centered in the container, never cropped on left or right */}
        {activeItem && (
          <div
            id={`mega-menu-${activeItem.id}`}
            role="region"
            aria-label={`${activeItem.label} sub-menu`}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[880px] max-w-[calc(100vw-3rem)] z-50 animate-in fade-in zoom-in-95 duration-150"
            onMouseEnter={() => handleMouseEnter(activeItem.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-[#07120A] border border-emerald-500/25 rounded-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10">
              {/* Category Breadcrumb Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Navigasi: <span className="text-emerald-400">{activeItem.label}</span>
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-medium">
                  NusaDecarb Intelligence &amp; Solutions
                </span>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Main columns */}
                <div className="col-span-8 grid grid-cols-2 gap-6">
                  {activeItem.sections.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((sub) => (
                          <li key={sub.title}>
                            <a
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group block p-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <span className="text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded bg-emerald-400 text-neutral-950 shadow-sm">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-neutral-300 line-clamp-2 mt-0.5 leading-relaxed">
                                {sub.description}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured spotlight card */}
                {activeItem.featured && (
                  <div className="col-span-4 bg-gradient-to-br from-[#0B1A10] via-[#08140C] to-black rounded-xl p-5 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-400/40 inline-block mb-3">
                        {activeItem.featured.tag}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                        {activeItem.featured.title}
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {activeItem.featured.description}
                      </p>
                    </div>
                    <a
                      href={activeItem.featured.href}
                      onClick={() => setActiveDropdown(null)}
                      className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white transition-colors group"
                    >
                      <span>{activeItem.featured.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07120A] border-b border-emerald-500/20 px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.id} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between py-2 text-base font-bold text-white text-left"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 transition-transform ${
                      activeDropdown === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === item.id && (
                  <div className="mt-3 pl-3 space-y-4">
                    {item.sections.map((sec) => (
                      <div key={sec.title} className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          {sec.title}
                        </span>
                        <ul className="space-y-2 pl-2">
                          {sec.items.map((sub) => (
                            <li key={sub.title}>
                              <a
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-neutral-200 hover:text-emerald-400 block py-1 font-medium"
                              >
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLanguage();
              }}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Wilayah: {selectedRegion.name}</span>
            </button>
            <a
              href="#cta-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-lg text-sm font-black uppercase tracking-wider bg-emerald-400 text-neutral-950 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              KONSULTASI NZE
            </a>
          </div>
        </div>
      )}

      {/* Dimming backdrop overlay when any mega-menu dropdown is open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 top-[72px] bg-black/65 backdrop-blur-[2px] -z-10 transition-opacity duration-200"
          onClick={() => setActiveDropdown(null)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
