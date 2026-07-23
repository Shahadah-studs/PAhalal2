import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SIDES_ITEMS, ASSET_IMAGES } from '../data/menuData';
import { SideItem } from '../types';
import { Plus, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface SidesSectionProps {
  onAddSide: (side: SideItem, quantity: number) => void;
}

export const SidesSection: React.FC<SidesSectionProps> = ({ onAddSide }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    raita: 1,
    mandhi_sauce: 1,
  });

  const handleQtyChange = (sideId: string, delta: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[sideId] || 1) + delta);
      return { ...prev, [sideId]: newQty };
    });
  };

  const handleAdd = (side: SideItem) => {
    const qty = quantities[side.id] || 1;
    onAddSide(side, qty);
  };

  return (
    <section id="sides" className="py-16 bg-[#F5EFE6]/60 border-b border-[#E9E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">

          <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513] bg-[#FDFBF7] px-3.5 py-1 rounded-full border border-[#D9D0C1]">
            Nut-Free Companions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
            Delicious Sides &amp; Sauces
          </h2>
          <p className="text-[#5A554E] text-sm sm:text-base">
            These authentic herbal sauces elevate the flavor of Mandi and Kabuli Pulao. Both are 100% Nut-Free!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E9E4DB]">
          <div className="md:col-span-1 rounded-xl overflow-hidden shadow-sm h-52 relative group">
            <img
              src={ASSET_IMAGES.sides}
              alt="Raita Sauce and Mandhi Sauce"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#2D2A26]/90 text-[#FDFBF7] text-xs font-bold px-2.5 py-1 rounded-md border border-[#8B4513]/50 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Nut-Free
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SIDES_ITEMS.map((side) => {
              const qty = quantities[side.id] || 1;
              return (
                <div
                  key={side.id}
                  className="bg-[#FDFBF7] rounded-xl p-5 border border-[#E9E4DB] flex flex-col justify-between space-y-4 hover:border-[#8B4513] transition-all shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg font-bold text-[#2D2A26] flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#8B4513]" />
                        {side.name}
                      </h3>
                      <span className="bg-[#F5EFE6] text-[#8B4513] font-extrabold text-sm px-2.5 py-1 rounded-lg border border-[#D9D0C1]">
                        ${side.price}
                      </span>
                    </div>
                    <p className="text-[#5A554E] text-xs leading-relaxed">{side.description}</p>
                    <p className="text-[11px] font-mono text-emerald-900 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 inline-block">
                      {side.ingredients}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#E9E4DB]">
                    <div className="flex items-center bg-white rounded-lg border border-[#D9D0C1] overflow-hidden">
                      <button
                        onClick={() => handleQtyChange(side.id, -1)}
                        className="px-2.5 py-1 text-[#2D2A26] hover:bg-[#F5EFE6] font-bold text-sm cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2D2A26]">{qty}</span>
                      <button
                        onClick={() => handleQtyChange(side.id, 1)}
                        className="px-2.5 py-1 text-[#2D2A26] hover:bg-[#F5EFE6] font-bold text-sm cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => handleAdd(side)}
                      className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4 text-amber-300" />
                      <span>Add (${side.price * qty})</span>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
