
import { WPPost, WPOptions } from '../types';

const STORAGE_KEY_POSTS = 'wp_mimic_posts';
const STORAGE_KEY_OPTIONS = 'wp_mimic_options';

// This service mimics the WordPress REST API structure
export const wpBridge = {
  // Equivalent to WP_Query or /wp-json/wp/v2/posts
  // Modified: If no type is provided, return all posts. Defaulting to 'post' was breaking App.tsx.
  getPosts: (type?: 'post' | 'service' | 'portfolio'): WPPost[] => {
    const saved = localStorage.getItem(STORAGE_KEY_POSTS);
    const allPosts: WPPost[] = saved ? JSON.parse(saved) : [];
    if (!type) return allPosts;
    return allPosts.filter(p => p.type === type);
  },

  savePost: (post: WPPost) => {
    const saved = localStorage.getItem(STORAGE_KEY_POSTS);
    let allPosts: WPPost[] = saved ? JSON.parse(saved) : [];
    const index = allPosts.findIndex(p => p.id === post.id);
    
    if (index > -1) {
      allPosts[index] = post;
    } else {
      allPosts.push(post);
    }
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(allPosts));
  },

  deletePost: (id: string) => {
    const saved = localStorage.getItem(STORAGE_KEY_POSTS);
    if (!saved) return;
    const allPosts: WPPost[] = JSON.parse(saved);
    const filtered = allPosts.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(filtered));
  },

  // Equivalent to get_option() in WordPress
  getOptions: (): WPOptions => {
    const saved = localStorage.getItem(STORAGE_KEY_OPTIONS);
    return saved ? JSON.parse(saved) : {
      site_title: "Storytelling Social Media.Co",
      site_description: "The #1 Storytelling Agency for South African Brands.",
      contact_email: "storytellingphotography1@gmail.com",
      contact_phone: "+27 76 112 1780",
      location_hq: "Cape Town, South Africa",
      social_links: {
        instagram: "#",
        linkedin: "#",
        tiktok: "#",
        whatsapp: "https://wa.me/27761121780"
      },
      theme_colors: {
        primary: "#F06292",
        secondary: "#FCE4EC",
        background: "#FCFCFA"
      }
    };
  },

  updateOptions: (options: WPOptions) => {
    localStorage.setItem(STORAGE_KEY_OPTIONS, JSON.stringify(options));
  }
};
