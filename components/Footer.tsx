
import React from 'react';
import { WPOptions } from '../types';
import { SA_CITIES } from '../constants';

interface FooterProps {
  options: WPOptions;
}

const Footer: React.FC<FooterProps> = ({ options }) => {
  return (
    <footer className="bg-white border-t border-pink-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-gray-900 mb-6 block uppercase">
              Storytelling <span className="text-pink-400">Media</span>
            </span>
            <p className="text-gray-500 leading-relaxed text-sm">
              Premium digital strategy for the modern South African landscape. We build empires, one story at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Direct Line</h4>
            <div className="space-y-3">
              <a href={`mailto:${options.contact_email}`} className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">
                {options.contact_email}
              </a>
              <p className="text-sm text-gray-600">{options.contact_phone}</p>
              <p className="text-xs text-pink-400 font-bold uppercase">{options.location_hq}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Our Presence</h4>
            <ul className="grid grid-cols-2 gap-3 text-xs text-gray-500 font-medium">
              {SA_CITIES.map(city => (
                <li key={city} className="hover:text-pink-400 cursor-default transition-colors">{city}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {Object.entries(options.social_links).map(([key, value]) => (
                key !== 'whatsapp' && (
                  <a key={key} href={value} className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition-all capitalize text-[10px] font-bold">
                    {key[0]}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-gray-400">
          <p>© 2024 {options.site_title}. Proudly South African.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
