
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Quote } from 'lucide-react';
import { getBaristaRecommendation } from '../services/geminiService';

const AIBarista: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    const result = await getBaristaRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai-barista" className="py-24 bg-[#7C5E4B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Sparkles className="h-48 w-48 text-[#7C5E4B]" />
          </div>

          <div className="relative z-10 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7C5E4B]/10 text-[#7C5E4B] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="h-3 w-3" /> AI Concierge
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#332D2D] mb-4">
              Find Your Perfect Brew
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              How are you feeling today? Tell our AI Barista your mood or cravings, and we'll suggest the perfect drink.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-10 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g., Tired but need to focus, or feeling sunny and sweet..."
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5E4B] focus:border-transparent pr-14"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !mood.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-[#7C5E4B] text-white rounded-full flex items-center justify-center hover:bg-[#634A3B] transition-colors disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </button>
            </div>
          </form>

          {recommendation && !loading && (
            <div className="animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto bg-white p-6 rounded-2xl border border-[#7C5E4B]/10 relative">
              <Quote className="h-8 w-8 text-[#7C5E4B]/20 absolute -top-4 -left-4" />
              <div className="space-y-4">
                <p className="text-lg text-[#332D2D] leading-relaxed italic">
                  "{recommendation}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="h-10 w-10 rounded-full bg-[#7C5E4B]/10 flex items-center justify-center text-[#7C5E4B] font-bold">
                    MB
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#332D2D]">Morning Brew Barista</p>
                    <p className="text-xs text-gray-400">Personalized for you</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIBarista;
