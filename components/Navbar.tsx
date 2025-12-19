
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Storytelling <span className="text-pink-400">Media.Co</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors uppercase tracking-widest">Services</a>
            <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors uppercase tracking-widest">Pricing</a>
            <a href="#journal" className="text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors uppercase tracking-widest">Journal</a>
            <a href="#booking" className="bg-gray-900 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-pink-500 transition-all shadow-lg">
              Hire Us
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-50 p-6 space-y-4 shadow-2xl animate-fade-in">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-600 font-bold">Services</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-gray-600 font-bold">Pricing</a>
          <a href="#journal" onClick={() => setIsOpen(false)} className="block text-gray-600 font-bold">Journal</a>
          <a href="#booking" onClick={() => setIsOpen(false)} className="block bg-pink-500 text-white px-6 py-3 rounded-xl text-center font-bold">Hire Us Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
