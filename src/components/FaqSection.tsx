import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/menuData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#FDFBF7] border-t border-[#E9E4DB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513] bg-[#F5EFE6] px-3.5 py-1 rounded-full border border-[#D9D0C1]">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5A554E] text-sm">
            Everything about our authentic Halal dishes, delivery schedules, and nut allergen options.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E9E4DB] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-base text-[#2D2A26] hover:text-[#8B4513] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#8B4513] shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5A554E] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#8B4513]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5A554E] leading-relaxed border-t border-[#E9E4DB] bg-[#FDFBF7]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
