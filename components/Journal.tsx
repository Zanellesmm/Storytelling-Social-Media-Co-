
import React from 'react';
import { JournalPost } from '../types';

interface JournalProps {
  posts: JournalPost[];
}

const Journal: React.FC<JournalProps> = ({ posts }) => {
  return (
    <section id="journal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Journal</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Insights & <span className="text-pink-400 italic serif">Narratives</span></h2>
            <p className="text-gray-600 text-lg">Exploring the intersection of storytelling and social growth in the SA landscape.</p>
          </div>
          <a href="#booking" className="text-gray-900 font-bold border-b-2 border-pink-200 pb-1 hover:border-pink-500 transition-all">
            Follow our story
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] mb-6 bg-gray-100 relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-pink-500 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-400 font-medium">{post.date}</span>
                <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-pink-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-pink-500 font-bold">
                  Read Article <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
