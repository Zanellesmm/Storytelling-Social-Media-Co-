
import React from 'react';
import { SA_CITIES } from '../constants';

const StrategyHub: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Advanced <span className="text-pink-400 italic serif">Narrative SEO</span> Strategy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just optimize for algorithms; we optimize for people. Our <strong>South African social media marketing</strong> approach combines data-driven insights with the art of storytelling to ensure your brand ranks where it matters.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Local Intent Optimization</h4>
                  <p className="text-gray-500">Tailoring content for <strong>Cape Town, Johannesburg, and Durban</strong> audiences to capture high-value local search traffic.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Semantic Storytelling</h4>
                  <p className="text-gray-500">Using LSI keywords and natural language patterns that search engines favor for high-authority brands.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 font-bold">03</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Social-to-Web Conversion</h4>
                  <p className="text-gray-500">Leveraging social signals to boost your website's domain authority and organic visibility in the SA market.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-10 rounded-[3rem] border border-pink-100 relative shadow-inner">
            <h3 className="text-2xl font-bold mb-6">Regional Impact Zones</h3>
            <div className="grid grid-cols-2 gap-4">
              {SA_CITIES.map(city => (
                <div key={city} className="bg-white p-4 rounded-2xl border border-pink-50 hover:border-pink-300 transition-all cursor-default group">
                  <span className="block text-xs font-bold text-pink-400 mb-1 tracking-widest uppercase">Active Zone</span>
                  <span className="text-gray-900 font-bold group-hover:text-pink-600 transition-colors">{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl shadow-xl">
              <p className="text-sm italic opacity-80 mb-4">"Their strategy doubled our organic leads in Sandton within 3 months."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-wider">Lifestyle Brand, SA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyHub;
