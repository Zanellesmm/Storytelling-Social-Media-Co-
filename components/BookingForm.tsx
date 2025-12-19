
import React, { useState } from 'react';
import { PACKAGES } from '../constants';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4 block">Take Action</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Apply to work <br />with our agency.</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We only take on 3 new management clients per month to ensure premium quality. Apply below to secure your spot for next month.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-500 shadow-sm border border-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-all">📍</div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">Headquarters</span>
                  <span className="text-gray-700 font-medium">Cape Town, South Africa</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <a href="mailto:storytellingphotography1@gmail.com" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-500 shadow-sm border border-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-all">📧</a>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">Direct Email</span>
                  <a href="mailto:storytellingphotography1@gmail.com" className="text-gray-700 font-medium hover:text-pink-500 transition-colors">storytellingphotography1@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <a href="https://wa.me/27761121780" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-500 shadow-sm border border-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-all">💬</a>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">WhatsApp Us</span>
                  <a href="https://wa.me/27761121780" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-pink-500 transition-colors">076 112 1780</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            {submitted ? (
              <div className="bg-white p-12 rounded-[3rem] border border-pink-100 text-center animate-fade-in shadow-2xl">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
                <p className="text-gray-600">Our management team will review your brand details and reach out within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-pink-500 font-semibold underline">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[3rem] border border-pink-100 shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Business Email</label>
                    <input required type="email" placeholder="email@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Social Handle (@)</label>
                  <input required type="text" placeholder="@yourbrand" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Target Management Package</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition-all">
                    {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    <option value="custom">I need a custom solution</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1">
                  Submit Management Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
