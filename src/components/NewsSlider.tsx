import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Calendar, Newspaper } from 'lucide-react';
import { newsItems } from '../data/news';

export const NewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = newsItems.length;

  // Auto-advance slider
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 5500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="news"
      aria-roledescription="carousel"
      aria-label="Warta Dekarbonisasi dan Regulasi NusaDecarb"
      className="py-20 bg-slate-50 border-t border-neutral-200 relative text-neutral-900"
      onMouseEnter={() => isPlaying && intervalRef.current && clearInterval(intervalRef.current)}
      onMouseLeave={() => {
        if (isPlaying) {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
          }, 5500);
        }
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                BERITA &amp; PERKEMBANGAN REGULASI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
              Warta Dekarbonisasi &amp; Pasar Karbon
            </h2>
          </div>

          {/* Accessible Carousel Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={isPlaying ? 'Jeda perputaran otomatis warta' : 'Mulai perputaran otomatis warta'}
              aria-pressed={!isPlaying}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-600" />}
            </button>

            {/* Previous Slide Button */}
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Warta sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Index Counter */}
            <span
              className="text-xs font-semibold text-neutral-500 px-2 min-w-[55px] text-center"
              aria-live="polite"
            >
              {currentIndex + 1} / {total}
            </span>

            {/* Next Slide Button */}
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Warta berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Card Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-card-elevated">
          {/* Animated gradient progress bar: Emerald to Teal */}
          <div className="h-1 bg-neutral-100 w-full overflow-hidden">
            <div
              key={currentIndex + (isPlaying ? '-play' : '-pause')}
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-green-300 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>

          <div
            className="p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} of ${total}: ${newsItems[currentIndex].title}`}
          >
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {newsItems[currentIndex].category}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {newsItems[currentIndex].date}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-neutral-500">
                  {newsItems[currentIndex].readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {newsItems[currentIndex].title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                {newsItems[currentIndex].summary}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={newsItems[currentIndex].href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-emerald-400 text-white hover:text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm group"
              >
                <span>Baca Siaran Pers</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6" role="tablist" aria-label="Navigasi slide warta">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={currentIndex === idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                currentIndex === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Buka slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
