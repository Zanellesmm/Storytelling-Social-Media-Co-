
import React, { useState } from 'react';
import { WPPost, WPOptions } from '../types';
import { wpBridge } from '../services/wpBridge';

interface AdminCMSProps {
  options: WPOptions;
  posts: WPPost[];
  onRefresh: () => void;
}

const AdminCMS: React.FC<AdminCMSProps> = ({ options, posts, onRefresh }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'Settings' | 'Posts' | 'Services'>('Settings');

  const handleUpdateOptions = (updates: Partial<WPOptions>) => {
    wpBridge.updateOptions({ ...options, ...updates });
    onRefresh();
  };

  const handleCreatePost = (type: 'post' | 'service') => {
    const newPost: WPPost = {
      id: Date.now().toString(),
      title: 'New Entry',
      content: '',
      excerpt: 'Short description here...',
      date: new Date().toISOString().split('T')[0],
      status: 'publish',
      type: type,
      featured_image: type === 'service' ? '✨' : 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      categories: ['General']
    };
    wpBridge.savePost(newPost);
    onRefresh();
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-[100] bg-white/20 hover:bg-white/80 backdrop-blur-md p-2 rounded-full border border-pink-100 opacity-0 hover:opacity-100 transition-all text-gray-400"
        title="WordPress Dashboard"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-gray-900/60 backdrop-blur-md flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-fade-in border border-pink-100">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center font-bold text-xl">W</div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">WP-Narrative Admin</h2>
              <p className="text-xs opacity-60">Connected to Storytelling Media.Co</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-all">✕</button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-cream border-r border-pink-50 flex flex-col p-4">
            {(['Settings', 'Posts', 'Services'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all mb-2 ${
                  activeTab === tab ? 'bg-pink-400 text-white shadow-lg shadow-pink-200' : 'text-gray-500 hover:bg-white hover:text-pink-500'
                }`}
              >
                {tab === 'Settings' && '⚙️'}
                {tab === 'Posts' && '📝'}
                {tab === 'Services' && '✨'}
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-10 bg-white">
            {activeTab === 'Settings' && (
              <div className="max-w-2xl space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">General Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Site Title</label>
                    <input 
                      value={options.site_title}
                      onChange={e => handleUpdateOptions({ site_title: e.target.value })}
                      className="w-full border-b border-pink-100 py-2 text-xl font-bold focus:border-pink-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Tagline</label>
                    <textarea 
                      value={options.site_description}
                      onChange={e => handleUpdateOptions({ site_description: e.target.value })}
                      className="w-full border-b border-pink-100 py-2 text-gray-600 focus:border-pink-500 outline-none resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Contact Email</label>
                      <input 
                        value={options.contact_email}
                        onChange={e => handleUpdateOptions({ contact_email: e.target.value })}
                        className="w-full border-b border-pink-100 py-2 text-sm focus:border-pink-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Location</label>
                      <input 
                        value={options.location_hq}
                        onChange={e => handleUpdateOptions({ location_hq: e.target.value })}
                        className="w-full border-b border-pink-100 py-2 text-sm focus:border-pink-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'Posts' || activeTab === 'Services') && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Manage {activeTab}</h3>
                  <button 
                    onClick={() => handleCreatePost(activeTab === 'Posts' ? 'post' : 'service')}
                    className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-pink-500 transition-all"
                  >
                    + Add New
                  </button>
                </div>
                <div className="grid gap-4">
                  {posts.filter(p => p.type === (activeTab === 'Posts' ? 'post' : 'service')).map(post => (
                    <div key={post.id} className="group flex items-center gap-6 bg-cream/50 p-4 rounded-3xl border border-pink-50 hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-pink-100 flex items-center justify-center text-2xl overflow-hidden">
                        {post.featured_image.startsWith('http') ? (
                          <img src={post.featured_image} className="w-full h-full object-cover" />
                        ) : post.featured_image}
                      </div>
                      <div className="flex-1">
                        <input 
                          value={post.title}
                          onChange={e => {
                            wpBridge.savePost({ ...post, title: e.target.value });
                            onRefresh();
                          }}
                          className="w-full bg-transparent font-bold text-gray-900 outline-none focus:text-pink-500"
                        />
                        <p className="text-xs text-gray-400">Published on {post.date}</p>
                      </div>
                      <button 
                        onClick={() => { wpBridge.deletePost(post.id); onRefresh(); }}
                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-red-500 transition-all"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-cream p-6 border-t border-pink-50 flex justify-between items-center px-10">
          <p className="text-xs text-gray-400 italic">This dashboard simulates the WordPress Gutenberg / REST API environment.</p>
          <button onClick={() => setIsOpen(false)} className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-500 transition-all shadow-lg">
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCMS;
