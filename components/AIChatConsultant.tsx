
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm Storyteller AI. Want a quick 1-minute strategy for your brand? Tell me what you do!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      // Initialize Gemini with direct process.env.API_KEY usage
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are the Lead Brand Strategist at Storytelling Social Media.Co in South Africa. A user says: "${userMsg}". Give a brief, professional, 2-sentence marketing tip specifically for a South African brand. Keep it warm, premium, and concise.`,
      });
      
      // Access text directly from the response
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "That's a great niche! We should definitely discuss a content pillars strategy for it." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm currently recalibrating my storytelling lens. Please try again in a moment!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] rounded-[2rem] shadow-2xl border border-pink-100 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-pink-400 p-6 text-white flex justify-between items-center">
            <div>
              <h4 className="font-bold">Brand Strategist</h4>
              <p className="text-xs opacity-80">Online | AI Powered</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-all">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-pink-100 text-gray-800 rounded-tr-none' : 'bg-white border border-pink-50 text-gray-700 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-pink-50 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-pink-50 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your brand niche..."
              className="flex-1 px-4 py-2 text-sm bg-gray-50 rounded-full outline-none focus:ring-1 focus:ring-pink-300"
            />
            <button onClick={handleSend} className="bg-gray-900 text-white p-2 rounded-full hover:bg-pink-500 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:bg-pink-500 hover:scale-110 transition-all flex items-center gap-2"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Ask an Expert</span>
          <div className="w-8 h-8 flex items-center justify-center text-xl">✨</div>
        </button>
      )}
    </div>
  );
};

export default AIChatConsultant;