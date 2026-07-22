import React from 'react';
import { REVIEWS } from '../data/menuData';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#2D2A26] text-[#FDFBF7] border-t border-[#8B4513]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-200 bg-[#8B4513] px-3.5 py-1 rounded-full border border-[#A0522D]">
            Local Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7]">
            What Prince Albert Locals Say
          </h2>
          <p className="text-[#E9E4DB] text-sm">
            Freshly prepared family recipes that bring authentic Middle Eastern &amp; Afghan flavors to Saskatchewan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#23201D] border border-[#8B4513]/60 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#8B4513]/60" />
                <p className="text-[#E9E4DB] text-sm leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#8B4513]/40 pt-3 flex justify-between items-center text-xs">
                <span className="font-bold text-amber-300">{rev.author}</span>
                <span className="bg-[#8B4513] text-[#FDFBF7] px-2 py-0.5 rounded border border-[#A0522D] font-mono">
                  {rev.dish}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
