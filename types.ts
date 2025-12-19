
export interface WPPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  status: 'publish' | 'draft';
  type: 'post' | 'service' | 'portfolio';
  featured_image: string;
  categories: string[];
}

export interface WPOptions {
  site_title: string;
  site_description: string;
  contact_email: string;
  contact_phone: string;
  location_hq: string;
  social_links: {
    instagram: string;
    linkedin: string;
    tiktok: string;
    whatsapp: string;
  };
  theme_colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export interface StoryResult {
  headline: string;
  body: string;
  hashtags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// Added missing Service interface for ServiceCard
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Added missing JournalPost interface for Journal
export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

// Added missing PortfolioItem interface for Portfolio
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

// Removed price property to satisfy user request
export interface PricingPackage {
  id: string;
  name: string;
  features: string[];
  popular?: boolean;
}
