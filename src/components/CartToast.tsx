import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { ToastNotification } from '../types';

interface CartToastProps {
  toasts: ToastNotification[];
  onDismiss: (id: string) => void;
  onViewCart: () => void;
}

export const CartToast: React.FC<CartToastProps> = ({ toasts, onDismiss, onViewCart }) => {
  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 max-w-sm sm:max-w-md w-full pointer-events-none px-2 sm:px-0"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={onDismiss}
            onViewCart={onViewCart}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ToastItemProps {
  toast: ToastNotification;
  onDismiss: (id: string) => void;
  onViewCart: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss, onViewCart }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35, scale: 0.88, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, scale: 0.9, filter: 'blur(4px)' }}
      transition={{ type: 'spring', damping: 24, stiffness: 320 }}
      className="pointer-events-auto bg-[#23201D] text-[#FDFBF7] rounded-2xl shadow-2xl border border-[#8B4513] overflow-hidden flex flex-col backdrop-blur-md relative group"
    >
      {/* Top Header Row */}
      <div className="px-4 pt-3.5 pb-2 flex items-center justify-between border-b border-[#8B4513]/30 bg-[#2D2A26]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 px-2.5 py-0.5 rounded-full shadow-inner">
            <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            Item Added To Cart
          </span>
        </div>

        <button
          onClick={() => onDismiss(toast.id)}
          className="text-[#D9D0C1] hover:text-white p-1 rounded-lg hover:bg-[#8B4513]/40 transition-colors cursor-pointer"
          aria-label="Dismiss Notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Toast Content Body */}
      <div className="p-4 flex items-center gap-3.5">
        {toast.imageUrl ? (
          <img
            src={toast.imageUrl}
            alt={toast.title}
            className="w-14 h-14 rounded-xl object-cover border-2 border-[#8B4513] shadow-md shrink-0 bg-[#1A1816]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-[#8B4513]/40 border-2 border-[#8B4513] flex items-center justify-center text-amber-300 shrink-0 shadow-md">
            <ShoppingBag className="w-6 h-6" />
          </div>
        )}

        <div className="flex-1 min-w-0 space-y-0.5">
          <h4 className="font-serif text-sm sm:text-base font-bold text-amber-200 truncate">
            {toast.quantity && toast.quantity > 1 ? `${toast.quantity}x ` : ''}{toast.title}
          </h4>
          <p className="text-xs text-[#E9E4DB] line-clamp-1">
            {toast.subtitle}
          </p>
          {toast.price !== undefined && (
            <p className="text-xs font-mono font-bold text-emerald-400">
              ${(toast.price * (toast.quantity || 1)).toFixed(2)} CAD
            </p>
          )}
        </div>

        {/* View Cart Quick Button */}
        <button
          onClick={() => {
            onViewCart();
            onDismiss(toast.id);
          }}
          className="bg-[#8B4513] hover:bg-[#A0522D] text-[#FDFBF7] text-xs font-bold px-3 py-2 rounded-xl border border-[#D9D0C1]/30 shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
        >
          <span>View Cart</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>

      {/* Animated Countdown Progress Bar */}
      <div className="w-full bg-[#1A1816] h-1 overflow-hidden">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-amber-400 to-emerald-400"
        />
      </div>
    </motion.div>
  );
};
