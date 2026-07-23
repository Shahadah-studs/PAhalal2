import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, PORTION_PRICINGS } from '../data/menuData';
import { MenuItem, PortionSizeId } from '../types';
import { Camera, Plus, Check, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';

interface MenuSectionProps {
  onSelectPhoto: (item: MenuItem) => void;
  onAddToCart: (dishId: 'mandi' | 'pulao', sizeId: PortionSizeId, isNutless: boolean) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectPhoto, onAddToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, PortionSizeId>>({
    mandi: 'single',
    pulao: 'single',
  });

  const [nutlessSelections, setNutlessSelections] = useState<Record<string, boolean>>({
    mandi: false,
    pulao: true,
  });

  const handleSizeChange = (dishId: string, sizeId: PortionSizeId) => {
    setSelectedSizes((prev) => ({ ...prev, [dishId]: sizeId }));
  };

  const handleNutlessToggle = (dishId: string, checked: boolean) => {
    setNutlessSelections((prev) => ({ ...prev, [dishId]: checked }));
  };

  const handleAdd = (dish: MenuItem) => {
    const sizeId = selectedSizes[dish.id];
    const isNutless = dish.id === 'mandi' ? nutlessSelections.mandi : true;
    onAddToCart(dish.id, sizeId, isNutless);
  };


  return (
    <section id="menu" className="py-16 bg-[#FDFBF7] border-y border-[#E9E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513] bg-[#F5EFE6] px-3.5 py-1 rounded-full border border-[#D9D0C1]">
            Our Specialty Rice Dishes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
            Authentic Middle Eastern &amp; Afghan Menu
          </h2>
          <p className="text-[#5A554E] text-sm sm:text-base">
            Slow-cooked with premium Halal Lamb shank, fragrant basmati rice, and traditional spice blends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {MENU_ITEMS.map((dish) => {
            const currentSizeId = selectedSizes[dish.id];
            const currentPricing = PORTION_PRICINGS.find((p) => p.id === currentSizeId) || PORTION_PRICINGS[0];
            const isMandi = dish.id === 'mandi';

            return (
              <div
                key={dish.id}
                className="bg-white rounded-2xl shadow-sm border border-[#E9E4DB] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden group">
                    <img
                      src={dish.photoUrl}
                      alt={dish.photoAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-[#2D2A26]/80 backdrop-blur-md text-[#FDFBF7] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#8B4513]/50 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{dish.origin}</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-emerald-900/80 backdrop-blur-md text-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-700/50">
                      Meat: {dish.meat}
                    </div>

                    <button
                      onClick={() => onSelectPhoto(dish)}
                      className="absolute bottom-4 right-4 bg-[#FDFBF7]/95 hover:bg-white text-[#2D2A26] text-xs font-bold px-3.5 py-2 rounded-lg shadow-md border border-[#D9D0C1] flex items-center gap-2 transition-all cursor-pointer hover:scale-105"
                    >
                      <Camera className="w-4 h-4 text-[#8B4513]" />
                      <span>See {dish.name} Photos 👇</span>
                    </button>
                  </div>

                  <div className="p-6 sm:p-7 space-y-5">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">{dish.name}</h3>
                      </div>
                      <p className="text-[#5A554E] text-sm mt-2 leading-relaxed">{dish.description}</p>
                    </div>

                    <div className="bg-[#F5EFE6] rounded-xl p-4 border border-[#E9E4DB] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#2D2A26]">
                        {isMandi ? (
                          <>
                            <AlertTriangle className="w-4 h-4 text-[#C2410C] shrink-0" />
                            <span>Nut Info: Contains cashews and nuts by default.</span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="text-emerald-900">100% Nut Allergen Friendly naturally!</span>
                          </>
                        )}
                      </div>

                      {isMandi && (
                        <label className="flex items-center gap-2.5 pt-1 cursor-pointer text-xs font-semibold text-[#2D2A26]">
                          <input
                            type="checkbox"
                            checked={nutlessSelections.mandi}
                            onChange={(e) => handleNutlessToggle('mandi', e.target.checked)}
                            className="w-4 h-4 rounded text-[#8B4513] focus:ring-[#8B4513] border-[#D9D0C1] cursor-pointer"
                          />
                          <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold">
                            Request Nutless Mandi (Nut-Free for Allergies)
                          </span>
                        </label>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8B4513]">
                        Select Portion Size &amp; Pricing:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PORTION_PRICINGS.map((p) => {
                          const isSelected = p.id === currentSizeId;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => handleSizeChange(dish.id, p.id)}
                              className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-[#8B4513] text-[#FDFBF7] border-[#8B4513] shadow-md ring-2 ring-[#8B4513]/40'
                                  : 'bg-[#FDFBF7] hover:bg-[#F5EFE6] text-[#2D2A26] border-[#E9E4DB]'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-sm">{p.name}</span>
                                <span className={`text-base font-extrabold ${isSelected ? 'text-amber-200' : 'text-[#8B4513]'}`}>
                                  ${p.price}
                                </span>
                              </div>
                              <span className={`text-[11px] mt-1 ${isSelected ? 'text-amber-100/90' : 'text-[#5A554E]'}`}>
                                {p.servings}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#F5EFE6] border-t border-[#E9E4DB] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#5A554E] uppercase font-semibold block">Total for {currentPricing.name}</span>
                    <span className="text-2xl font-black text-[#2D2A26]">${currentPricing.price} <span className="text-xs font-normal text-[#5A554E]">CAD</span></span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => handleAdd(dish)}
                    className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold px-5 py-3 rounded-xl shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-5 h-5 text-amber-300" />
                    <span>Add to Order Builder</span>
                  </motion.button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#2D2A26] text-[#FDFBF7] rounded-2xl p-6 sm:p-8 shadow-lg border border-[#8B4513]/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
                Pricings Overview for Mandi &amp; Kabuli Pulao
              </h3>
              <p className="text-[#D9D0C1] text-sm">
                Single: <strong className="text-[#FDFBF7]">$25</strong> | Double: <strong className="text-[#FDFBF7]">$50</strong> | Triple: <strong className="text-[#FDFBF7]">$75</strong> | Family Platter (4 Persons): <strong className="text-[#FDFBF7]">$90</strong> | Family Platter (8 Persons): <strong className="text-[#FDFBF7]">$180</strong>
              </p>
            </div>
            <div className="bg-[#8B4513] border border-[#A0522D] px-5 py-3 rounded-xl text-[#FDFBF7] text-xs font-semibold text-center whitespace-nowrap">
              💵 Note: Cash Accepted Only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
