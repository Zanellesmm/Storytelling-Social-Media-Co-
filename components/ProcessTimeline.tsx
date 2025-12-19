
import React from 'react';
import { PROCESS } from '../constants';

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How We Build Your <span className="italic serif text-pink-400">Empire</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">A systematic approach to organic growth and authority.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-px bg-pink-100 -z-10"></div>
          
          {PROCESS.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="w-16 h-16 bg-white border border-pink-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-gray-900 mb-8 shadow-sm group-hover:bg-pink-400 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
