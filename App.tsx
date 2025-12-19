
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Journal from './components/Journal';
import ProcessTimeline from './components/ProcessTimeline';
import StoryGenerator from './components/StoryGenerator';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import StrategyHub from './components/StrategyHub';
import AIChatConsultant from './components/AIChatConsultant';
import Pricing from './components/Pricing';
import AdminCMS from './components/AdminCMS';
import { wpBridge } from './services/wpBridge';
import { INITIAL_WP_POSTS } from './constants';
import { WPPost, WPOptions } from './types';

const App: React.FC = () => {
  const [options, setOptions] = useState<WPOptions>(wpBridge.getOptions());
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  // Initialize and Sync with WP Bridge
  useEffect(() => {
    let currentPosts = wpBridge.getPosts();
    if (currentPosts.length === 0) {
      INITIAL_WP_POSTS.forEach(p => wpBridge.savePost(p));
      currentPosts = wpBridge.getPosts();
    }
    setPosts(currentPosts);
    setOptions(wpBridge.getOptions());
  }, [refreshKey]);

  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  const services = posts.filter(p => p.type === 'service');
  const journalPosts = posts.filter(p => p.type === 'post');

  return (
    <div className="min-h-screen selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden relative bg-cream">
      <Navbar />
      
      <main>
        {/* Dynamic Hero using WP Options */}
        <Hero 
          customTitle={options.site_title} 
          customSubtitle={options.site_description} 
        />
        
        {/* Trusted By / Stats */}
        <section className="bg-white border-y border-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-16 lg:gap-32 opacity-40">
            {['CAPE TOWN', 'JOHANNESBURG', 'SANDTON', 'DURBAN'].map(city => (
              <div key={city} className="flex flex-col items-center">
                <span className="text-xl font-bold tracking-widest text-gray-900">{city}</span>
                <span className="text-[9px] font-bold text-pink-500 mt-1">EST. 2024</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Journal from WP Posts */}
        <Journal posts={journalPosts.map(p => ({
          id: p.id,
          title: p.title,
          category: p.categories[0] || 'Uncategorized',
          date: p.date,
          excerpt: p.excerpt,
          imageUrl: p.featured_image
        }))} />

        {/* Pricing & Packages */}
        <Pricing />

        {/* Dynamic Services from WP "Service" Post Type */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 serif italic">Management Services</h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
                Premium social media management and high-end content production tailored for the South African market.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map(s => (
                <ServiceCard 
                  key={s.id} 
                  service={{
                    id: s.id,
                    title: s.title,
                    description: s.excerpt,
                    icon: s.featured_image
                  }} 
                />
              ))}
            </div>
          </div>
        </section>

        <StrategyHub />
        <ProcessTimeline />
        <StoryGenerator />
        <BookingForm />
      </main>

      <Footer options={options} />

      {/* WordPress-style Admin CMS */}
      <AdminCMS 
        options={options} 
        posts={posts} 
        onRefresh={handleRefresh} 
      />

      <AIChatConsultant />

      {/* Floating WhatsApp Action */}
      <a 
        href={options.social_links.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-soft"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
