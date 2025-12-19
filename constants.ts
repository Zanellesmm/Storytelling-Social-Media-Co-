
import { WPPost, PortfolioItem, ProcessStep, PricingPackage } from './types';

export const INITIAL_WP_POSTS: WPPost[] = [
  {
    id: '1',
    title: 'The Power of Video in South Africa',
    content: 'Long form content about video strategy...',
    excerpt: 'Why Reels and TikTok are the current kings of the SA market.',
    date: '2024-10-12',
    status: 'publish',
    type: 'post',
    featured_image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800',
    categories: ['Strategy']
  },
  {
    id: 's1',
    title: 'Full Social Management',
    content: 'Full management details...',
    excerpt: 'The "Done-For-You" solution for busy SA entrepreneurs.',
    date: '2024-10-12',
    status: 'publish',
    type: 'service',
    featured_image: '✨',
    categories: ['Management']
  },
  {
    id: 's2',
    title: 'Content Production',
    content: 'Photography and video details...',
    excerpt: 'Aesthetic photography that stops the scroll.',
    date: '2024-10-12',
    status: 'publish',
    type: 'service',
    featured_image: '📸',
    categories: ['Creative']
  }
];

export const SA_CITIES = ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'Sandton', 'Stellenbosch'];

// Prices removed as per user request
export const PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Essential Growth',
    features: ['3 Posts per week', 'Basic Engagement', 'Monthly Report', '1 Content Shoot'],
  },
  {
    id: 'pro',
    name: 'Empire Builder',
    features: ['Daily Posting', 'Full Community Management', 'Bi-weekly Strategy Calls', '2 Content Shoots', 'Ad Management'],
    popular: true
  },
  {
    id: 'elite',
    name: 'Bespoke Narrative',
    features: ['Custom Content Strategy', 'High-end Production', 'PR Integration', 'Influencer Management'],
  }
];

// Missing PORTFOLIO constant for Portfolio component
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Aura Skincare',
    description: 'Elevating local organic beauty through aesthetic storytelling.',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Vanguard Fintech',
    description: 'Humanizing complex financial tools for the SA market.',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

// Missing PROCESS constant for ProcessTimeline component
export const PROCESS: ProcessStep[] = [
  { number: '01', title: 'Audit', description: 'We analyze your current digital presence and competitors.' },
  { number: '02', title: 'Strategy', description: 'Crafting a unique narrative that resonates with your SA audience.' },
  { number: '03', title: 'Produce', description: 'High-end content creation: photography, video, and copy.' },
  { number: '04', title: 'Launch', description: 'Deploying campaigns and managing community for maximum ROI.' }
];
