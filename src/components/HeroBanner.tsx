import React from 'react';
import { ASSET_IMAGES, FB_MARKETPLACE_URL } from '../data/menuData';
import { Sparkles, MessageCircle, ShoppingBag, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface HeroBannerProps {
  onStartOrder: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onStartOrder }) => {
  return (
    <div className="relative overflow-hidden bg-[#2D2A26] text-[#FDFBF7]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroBanner}
          alt="Prince Albert Halal Kitchen - Arabian Mandi & Kabuli Pulao"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/85 to-[#2D2A26]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-3xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B4513]/90 border border-[#A0522D] text-[#FDFBF7] text-xs sm:text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Prince Albert&apos;s Local Halal Destination</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-tight">
            Authentic <span className="text-amber-300 italic">Kabuli Pulao</span> &amp;{' '}
            <span className="text-amber-200 italic">Arabian Mandi</span>
          </h1>

          {/* Welcome Message */}
          <p className="text-[#E9E4DB] text-base sm:text-xl font-sans leading-relaxed">
            Welcome to <strong className="text-amber-200 font-semibold">Prince Albert Halal Kitchen</strong> — your local home for rich, delicious Middle Eastern and Afghan rice dishes. Freshly slow-cooked in Prince Albert with authentic spices and tender Halal lamb shank.
          </p>

          {/* Quick Info Grid Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#8B4513]/40 backdrop-blur-sm border border-[#8B4513]/60 p-3 rounded-xl flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#FDFBF7]">100% Halal</p>
                <p className="text-[10px] text-[#D9D0C1]">Family-Owned</p>
              </div>
            </div>

            <div className="bg-[#8B4513]/40 backdrop-blur-sm border border-[#8B4513]/60 p-3 rounded-xl flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#FDFBF7]">Nut-Free Options</p>
                <p className="text-[10px] text-[#D9D0C1]">Allergen Friendly</p>
              </div>
            </div>

            <div className="bg-[#8B4513]/40 backdrop-blur-sm border border-[#8B4513]/60 p-3 rounded-xl flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#FDFBF7]">Freshly Made</p>
                <p className="text-[10px] text-[#D9D0C1]">Weekly Specials</p>
              </div>
            </div>

            <div className="bg-[#8B4513]/40 backdrop-blur-sm border border-[#8B4513]/60 p-3 rounded-xl flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#FDFBF7]">Sunday Delivery</p>
                <p className="text-[10px] text-[#D9D0C1]">Prince Albert Only</p>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={onStartOrder}
              className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg border border-[#D9D0C1]/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <span>Customize Your Order</span>
            </button>

            <a
              href={FB_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C2410C] hover:bg-[#D97706] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order via FB Marketplace</span>
            </a>
          </div>

          {/* Cash Notice Footer Pill */}
          <p className="text-xs text-[#D9D0C1] italic font-mono flex items-center gap-1.5 pt-1">
            * Note: Cash accepted only upon pick up or Sunday delivery.
          </p>
        </div>
      </div>
    </div>
  );
};
