import React from 'react';
import { MenuItem, PortionSizeId } from '../types';
import { PORTION_PRICINGS } from '../data/menuData';
import { X, ShieldCheck, AlertTriangle, Plus, Flame } from 'lucide-react';

interface PhotoModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dishId: 'mandi' | 'pulao', sizeId: PortionSizeId, isNutless: boolean) => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ dish, onClose, onAddToCart }) => {
  if (!dish) return null;

  const isMandi = dish.id === 'mandi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FDFBF7] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#8B4513]/30 max-h-[90vh] flex flex-col text-[#2D2A26]">
        <div className="bg-[#2D2A26] text-[#FDFBF7] px-6 py-4 flex items-center justify-between border-b border-[#8B4513]">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-xl font-bold">{dish.name} Photos</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-amber-300 hover:text-white hover:bg-[#8B4513] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="rounded-xl overflow-hidden shadow-md max-h-96 relative bg-[#23201D]">
            <img
              src={dish.photoUrl}
              alt={dish.photoAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#23201D]/90 p-4 text-white">
              <p className="text-xs sm:text-sm font-medium italic">{dish.photoCaption}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-2xl font-bold text-[#2D2A26]">{dish.name}</h4>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F5EFE6] text-[#8B4513] border border-[#D9D0C1]">
                {dish.origin} • Meat: {dish.meat}
              </span>
            </div>
            <p className="text-[#5A554E] text-sm leading-relaxed">{dish.description}</p>
          </div>

          <div className={`p-4 rounded-xl border text-xs ${isMandi ? 'bg-[#F5EFE6] border-[#D9D0C1] text-[#8B4513]' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
            <div className="flex items-center gap-2 font-bold mb-1">
              {isMandi ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-[#8B4513] shrink-0" />
                  <span>Nut Allergen Notice for Arabian Mandi</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nut Allergen Safe for Kabuli Pulao</span>
                </>
              )}
            </div>
            <p>
              {isMandi
                ? 'Arabian Mandi traditionally includes roasted cashews and aromatic nuts. If you have a nut allergy, please check "Nutless Mandi" when ordering.'
                : 'Kabuli Pulao is naturally 100% nut-free and prepared safely with caramelized carrots and raisins.'}
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#8B4513]">
              Quick Add Portion to Order:
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PORTION_PRICINGS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onAddToCart(dish.id, p.id, isMandi ? false : true);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white hover:bg-[#8B4513] hover:text-white border border-[#E9E4DB] transition-all text-left group cursor-pointer"
                >
                  <p className="font-bold text-xs text-[#2D2A26] group-hover:text-amber-200">{p.name}</p>
                  <p className="font-extrabold text-sm text-[#8B4513] group-hover:text-white">${p.price} CAD</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F5EFE6] p-4 border-t border-[#E9E4DB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2D2A26] hover:bg-[#23201D] text-[#FDFBF7] rounded-xl text-xs font-bold cursor-pointer transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
