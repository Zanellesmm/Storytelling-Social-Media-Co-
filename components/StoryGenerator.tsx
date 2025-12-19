
import React, { useState } from 'react';
import { generateBrandStory } from '../services/geminiService';
import { StoryResult } from '../types';

const StoryGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StoryResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !audience) return;
    setLoading(true);
    try {
      const data = await generateBrandStory(niche, audience);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-baby-pink/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-pink-100">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Story Weaver</h2>
            <p className="text-gray-600">Experience our AI-powered storytelling engine. See how we'd hook your audience in seconds.</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Niche</label>
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Organic Skincare, Fintech, Luxury Coffee"
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <input 
                  type="text" 
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g. Young Professionals in Sandton"
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-200'}`}
            >
              {loading ? 'Crafting your narrative...' : 'Generate Brand Hook ✨'}
            </button>
          </form>

          {result && (
            <div className="mt-12 p-8 bg-cream rounded-2xl border-l-4 border-pink-400 animate-fade-in">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{result.headline}</h4>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">{result.body}</p>
              <div className="flex flex-wrap gap-2">
                {result.hashtags.map((tag, i) => (
                  <span key={i} className="text-sm font-medium text-pink-500">#{tag.replace('#', '')}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryGenerator;
