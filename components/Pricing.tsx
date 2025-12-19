
import React from 'react';
import { PACKAGES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4 block">Bespoke Solutions</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Management <span className="text-pink-400 italic serif">Packages</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our pricing is tailored to your specific brand goals and complexity. Email us for a customized proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 ${
                pkg.popular 
                ? 'bg-cream border-pink-300 shadow-2xl scale-105 z-10' 
                : 'bg-white border-pink-50 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Custom Quotation</p>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-pink-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#booking" 
                className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                  pkg.popular 
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Inquire for Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
