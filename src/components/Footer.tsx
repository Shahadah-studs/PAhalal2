import React from 'react';
import { FB_MARKETPLACE_URL, LOGO_URL } from '../data/menuData';
import { MessageCircle, Heart, ShieldCheck, MapPin, DollarSign, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2A26] text-[#FDFBF7] border-t border-[#8B4513]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Prince Albert Halal Kitchen Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#8B4513] shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">
                Prince Albert Halal Kitchen
              </h3>
            </div>
            <p className="text-[#E9E4DB] text-sm leading-relaxed max-w-md">
              Your local destination for delicious Middle Eastern and Afghan Rice Dishes freshly made in Prince Albert, SK. 100% Halal &amp; Family-Owned.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-[#8B4513] text-[#FDFBF7] text-xs px-2.5 py-1 rounded-md border border-[#A0522D] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Halal
              </span>
              <span className="bg-[#8B4513] text-[#FDFBF7] text-xs px-2.5 py-1 rounded-md border border-[#A0522D] font-semibold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                Family-Owned
              </span>
              <span className="bg-[#8B4513] text-[#FDFBF7] text-xs px-2.5 py-1 rounded-md border border-[#A0522D] font-semibold flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                Cash Only
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-200 uppercase tracking-wider">
              Delivery &amp; Pickup
            </h4>
            <ul className="space-y-2 text-xs text-[#E9E4DB]">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Deliveries on <strong>Sundays Only</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Prince Albert limits only</span>
              </li>
              <li className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cash accepted upon arrival</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-200 uppercase tracking-wider">
              How to Order
            </h4>
            <p className="text-xs text-[#E9E4DB]">
              To confirm your order, send us a direct message on Facebook Marketplace with your menu selection and house address.
            </p>
            <a
              href={FB_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-all border border-[#A0522D]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-amber-300" />
              <span>Facebook Marketplace Profile</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#8B4513]/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9D0C1]/80 gap-3">
          <p>© {new Date().getFullYear()} Prince Albert Halal Kitchen. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Made with passion in Prince Albert, Saskatchewan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
