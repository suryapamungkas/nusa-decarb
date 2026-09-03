import { useState } from 'react';
import { SkipLink } from './components/SkipLink';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { InsightsGrid } from './components/InsightsGrid';
import { InsightDrawer } from './components/InsightDrawer';
import { LeadershipQuote } from './components/LeadershipQuote';
import { ClientSpotlight } from './components/ClientSpotlight';
import { NewsSlider } from './components/NewsSlider';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { LanguageModal } from './components/LanguageModal';
import { regionOptions } from './data/navigation';
import { insightsData } from './data/insights';
import { InsightItem, RegionOption } from './types';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<RegionOption>(regionOptions[0]);
  const [activeInsight, setActiveInsight] = useState<InsightItem | null>(null);

  const handleSelectInsightById = (id: string) => {
    const found = insightsData.find((item) => item.id === id);
    if (found) {
      setActiveInsight(found);
    }
  };

  const scrollToInsights = () => {
    const element = document.getElementById('insights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-light flex flex-col font-sans">
      {/* Accessible skip link for keyboard navigation */}
      <SkipLink />

      {/* Global Navigation Bar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLanguage={() => setLanguageOpen(true)}
        selectedRegion={selectedRegion}
      />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Hero Section with Interactive Particle Canvas */}
        <Hero onExploreInsights={scrollToInsights} />

        {/* Global Scale Metrics Counter Bar */}
        <MetricsBar />

        {/* Insights Bento Grid */}
        <InsightsGrid onSelectInsight={(insight) => setActiveInsight(insight)} />

        {/* Leadership & Executive Quote Spotlight */}
        <LeadershipQuote />

        {/* Enterprise Client Case Studies */}
        <ClientSpotlight />

        {/* Accessible News Slider & Ticker */}
        <NewsSlider />

        {/* Enterprise Call To Action */}
        <EnterpriseCTA />
      </main>

      {/* Enterprise Multi-level Footer */}
      <Footer
        onOpenLanguage={() => setLanguageOpen(true)}
        selectedRegion={selectedRegion}
      />

      {/* Global Search Dialog Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectInsight={handleSelectInsightById}
      />

      {/* Region & Language Selector Modal */}
      <LanguageModal
        isOpen={languageOpen}
        onClose={() => setLanguageOpen(false)}
        selectedRegion={selectedRegion}
        onSelectRegion={(region) => setSelectedRegion(region)}
      />

      {/* In-depth Insight Reading Drawer */}
      <InsightDrawer
        insight={activeInsight}
        onClose={() => setActiveInsight(null)}
      />
    </div>
  );
}

export default App;
