import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MapPin, Calendar, DollarSign, MessageCircle, Menu as MenuIcon, X, ShieldCheck } from 'lucide-react';
import { FB_MARKETPLACE_URL, LOGO_URL } from '../data/menuData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2D2A26] text-[#FDFBF7] backdrop-blur-md border-b border-[#8B4513]/40 shadow-lg">
      <div className="bg-[#8B4513] text-[#FDFBF7] px-4 py-1.5 text-xs sm:text-sm font-medium text-center border-b border-[#A0522D] flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
        <span className="inline-flex items-center gap-1.5 text-amber-200 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          100% Halal &amp; Family-Owned
        </span>
        <span className="hidden md:inline text-amber-300/50">•</span>
        <span className="inline-flex items-center gap-1 text-amber-100">
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          Sunday Deliveries Only (Prince Albert, SK)
        </span>
        <span className="hidden md:inline text-amber-300/50">•</span>
        <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          Cash Accepted Only
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Prince Albert Halal Kitchen Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-[#8B4513] shadow-md shrink-0"
            referrerPolicy="no-referrer"
          />
          <div>
            <h1 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#FDFBF7] flex items-center gap-2">
              Prince Albert Halal Kitchen
            </h1>
            <p className="text-xs text-[#D9D0C1] font-sans tracking-wide">
              Authentic Kabuli Pulao &amp; Arabian Mandi
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#E9E4DB]">
          <button onClick={() => scrollTo('menu')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Menu &amp; Pricing
          </button>
          <button onClick={() => scrollTo('sides')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Sides &amp; Sauces
          </button>
          <button onClick={() => scrollTo('delivery')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Sunday Delivery
          </button>
          <button onClick={() => scrollTo('faq')} className="hover:text-amber-400 transition-colors cursor-pointer">
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={onOpenCart}
            id="cart-toggle-btn"
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-[#8B4513]/90 hover:bg-[#8B4513] text-[#FDFBF7] px-3.5 py-2 rounded-lg font-medium text-sm flex items-center gap-2 border border-[#A0522D] transition-all cursor-pointer shadow-sm"
            aria-label="Open Order Cart"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">Order Cart</span>
            <AnimatePresence mode="popLayout">
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [1.35, 1], opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  className="bg-[#C2410C] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>


          <a
            href={FB_MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg active:scale-95 border border-[#D9D0C1]/30"
          >
            <MessageCircle className="w-4 h-4 fill-current text-amber-300" />
            <span>FB Marketplace</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E9E4DB] hover:text-white rounded-lg bg-[#8B4513]/50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2D2A26] border-t border-[#8B4513]/60 px-4 py-4 space-y-3">
          <button
            onClick={() => scrollTo('menu')}
            className="block w-full text-left py-2 px-3 rounded-md text-[#E9E4DB] hover:bg-[#8B4513]/60 font-medium"
          >
            Menu &amp; Pricing
          </button>
          <button
            onClick={() => scrollTo('sides')}
            className="block w-full text-left py-2 px-3 rounded-md text-[#E9E4DB] hover:bg-[#8B4513]/60 font-medium"
          >
            Sides &amp; Sauces
          </button>
          <button
            onClick={() => scrollTo('order-builder')}
            className="block w-full text-left py-2 px-3 rounded-md text-[#E9E4DB] hover:bg-[#8B4513]/60 font-medium"
          >
            Order Calculator
          </button>
          <button
            onClick={() => scrollTo('delivery')}
            className="block w-full text-left py-2 px-3 rounded-md text-[#E9E4DB] hover:bg-[#8B4513]/60 font-medium"
          >
            Sunday Delivery Rules
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2 px-3 rounded-md text-[#E9E4DB] hover:bg-[#8B4513]/60 font-medium"
          >
            FAQ
          </button>
          <a
            href={FB_MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#8B4513] text-white font-semibold py-2.5 px-4 rounded-lg w-full text-center"
          >
            <MessageCircle className="w-5 h-5 fill-current text-amber-300" />
            <span>Order via Facebook DM</span>
          </a>
        </div>
      )}
    </header>
  );
};
