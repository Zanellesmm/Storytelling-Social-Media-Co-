
import React from 'react';

interface HeroProps {
  customTitle?: string;
  customSubtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ customTitle, customSubtitle }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-baby-pink rounded-full blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-pink-500 uppercase bg-pink-50 rounded-full">
            Top-Rated Social Media Management in South Africa
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 animate-fade-in">
            {customTitle || "The #1 Storytelling Agency for South African Brands."}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {customSubtitle || "Scale your reach with expert social media strategy and premium content creation. We transform your digital presence into a compelling brand narrative that drives ROI."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#booking" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1">
              Book Your Free Consult
            </a>
            <a href="#services" className="px-8 py-4 bg-white border border-pink-200 text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-all">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex flex-col items-center justify-center font-bold text-lg">
          <span>CAPE TOWN</span>
          <span className="text-[10px] tracking-widest text-pink-500">HEAD OFFICE</span>
        </div>
        <div className="flex flex-col items-center justify-center font-bold text-lg">
          <span>JOHANNESBURG</span>
          <span className="text-[10px] tracking-widest text-pink-500">HUB</span>
        </div>
        <div className="flex flex-col items-center justify-center font-bold text-lg">
          <span>DURBAN</span>
          <span className="text-[10px] tracking-widest text-pink-500">REGIONAL</span>
        </div>
        <div className="flex flex-col items-center justify-center font-bold text-lg">
          <span>SANDTON</span>
          <span className="text-[10px] tracking-widest text-pink-500">BOUTIQUE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
