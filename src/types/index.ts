export interface NavSubItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  featured?: {
    title: string;
    description: string;
    cta: string;
    href: string;
    tag: string;
  };
  sections: NavSection[];
}

export interface InsightItem {
  id: string;
  category: string;
  topic: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  fullDetails: {
    heroQuote: string;
    keyTakeaways: string[];
    deepDive: string;
    impactMetric: {
      value: string;
      label: string;
    };
  };
}

export interface ClientCaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  description: string;
  impactStat: string;
  impactLabel: string;
  tag: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
}

export interface RegionOption {
  code: string;
  name: string;
  locale: string;
  flag: string;
}
