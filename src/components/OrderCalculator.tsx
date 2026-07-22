import React, { useState } from 'react';
import { OrderCartItem, SideCartItem, PortionSizeId } from '../types';
import { PORTION_PRICINGS, SIDES_ITEMS, MENU_ITEMS, FB_MARKETPLACE_URL } from '../data/menuData';
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle, Copy, Check, MapPin, DollarSign, Calendar, AlertCircle } from 'lucide-react';

interface OrderCalculatorProps {
  cartDishes: OrderCartItem[];
  cartSides: SideCartItem[];
  onUpdateDishQuantity: (index: number, delta: number) => void;
  onRemoveDish: (index: number) => void;
  onUpdateSideQuantity: (sideId: string, delta: number) => void;
  onRemoveSide: (sideId: string) => void;
  onClearCart: () => void;
}

export const OrderCalculator: React.FC<OrderCalculatorProps> = ({
  cartDishes,
  cartSides,
  onUpdateDishQuantity,
  onRemoveDish,
  onUpdateSideQuantity,
  onRemoveSide,
  onClearCart,
}) => {
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('delivery');
  const [address, setAddress] = useState('');
  const [timeWindow, setTimeWindow] = useState('12:00 PM - 3:00 PM');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Quick add selectors inside cart
  const [quickDish, setQuickDish] = useState<'mandi' | 'pulao'>('mandi');
  const [quickSize, setQuickSize] = useState<PortionSizeId>('single');
  const [quickNutless, setQuickNutless] = useState(false);

  const subtotalDishes = cartDishes.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotalSides = cartSides.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = subtotalDishes + subtotalSides;

  // Generate clean message for Facebook Marketplace DM
  const generateOrderMessage = (): string => {
    let msg = `Hello Prince Albert Halal Kitchen! 👋\n`;
    msg += `I would like to place an order:\n\n`;

    if (cartDishes.length > 0) {
      msg += `🍽️ DISHES:\n`;
      cartDishes.forEach((item) => {
        const nutTag = item.dishId === 'mandi' && item.isNutless ? ' [NUTLESS / NUT-FREE REQUESTED]' : '';
        msg += `• ${item.quantity}x ${item.dishName} (${item.sizeName})${nutTag} - $${item.price * item.quantity}\n`;
      });
      msg += `\n`;
    }

    if (cartSides.length > 0) {
      msg += `🥣 SIDES & SAUCES:\n`;
      cartSides.forEach((item) => {
        msg += `• ${item.quantity}x ${item.sideName} - $${item.price * item.quantity}\n`;
      });
      msg += `\n`;
    }

    msg += `💵 TOTAL: $${grandTotal} CAD (Cash Payment)\n\n`;

    if (fulfillment === 'delivery') {
      msg += `🚚 FULFILLMENT: Sunday Delivery (Prince Albert Only)\n`;
      msg += `🏠 HOUSE ADDRESS: ${address ? address : '[Please type your address here]'}\n`;
      msg += `⏰ PREFERRED TIME: ${timeWindow}\n`;
    } else {
      msg += `🛍️ FULFILLMENT: Pick Up (Cash on Pick up)\n`;
    }

    if (notes.trim()) {
      msg += `📝 NOTES: ${notes}\n`;
    }

    msg += `\nThank you!`;
    return msg;
  };

  const handleCopyAndRedirect = async () => {
    const text = generateOrderMessage();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
    window.open(FB_MARKETPLACE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="order-builder" className="py-16 bg-[#2D2A26] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-200 bg-[#8B4513] px-3.5 py-1 rounded-full border border-[#A0522D]">
            Interactive Calculator
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7]">
            Build Your Order &amp; Total Estimator
          </h2>
          <p className="text-[#E9E4DB] text-sm sm:text-base">
            Select your items below to calculate your total and automatically format your Facebook Marketplace message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart Items & Customization */}
          <div className="lg:col-span-7 bg-[#23201D] rounded-2xl p-6 sm:p-8 border border-[#8B4513]/40 shadow-xl space-y-8">
            <div className="flex items-center justify-between border-b border-[#8B4513]/30 pb-4">
              <h3 className="font-serif text-xl font-bold text-amber-300 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                Your Selected Items
              </h3>
              {cartDishes.length + cartSides.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-rose-400 hover:text-rose-300 underline font-medium cursor-pointer"
                >
                  Clear Order
                </button>
              )}
            </div>

            {/* Empty State */}
            {cartDishes.length === 0 && cartSides.length === 0 ? (
              <div className="text-center py-10 px-4 bg-[#2D2A26]/50 rounded-xl border border-dashed border-[#8B4513]/40 space-y-3">
                <p className="text-[#D9D0C1] text-sm">Your order cart is currently empty.</p>
                <p className="text-xs text-amber-300/80">
                  Select portion sizes from the menu above, or use the quick buttons below.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Dish Items List */}
                {cartDishes.map((item, idx) => (
                  <div
                    key={`dish-${idx}`}
                    className="bg-[#2D2A26] p-4 rounded-xl border border-[#8B4513]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#FDFBF7] text-base">{item.dishName}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#8B4513] text-amber-200 border border-[#A0522D]">
                          {item.sizeName}
                        </span>
                      </div>
                      {item.dishId === 'mandi' && (
                        <p className={`text-xs ${item.isNutless ? 'text-emerald-400 font-semibold' : 'text-amber-300/80'}`}>
                          {item.isNutless ? '✓ Nutless / Nut-Free requested' : 'Includes authentic cashews & nuts'}
                        </p>
                      )}
                      <p className="text-xs text-[#D9D0C1] font-mono">${item.price} CAD each</p>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-[#8B4513]/30 pt-2 sm:pt-0">
                      <div className="flex items-center bg-[#23201D] rounded-lg border border-[#8B4513]/60">
                        <button
                          onClick={() => onUpdateDishQuantity(idx, -1)}
                          className="p-1.5 text-[#E9E4DB] hover:text-white cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 font-bold text-sm text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateDishQuantity(idx, 1)}
                          className="p-1.5 text-[#E9E4DB] hover:text-white cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="font-extrabold text-amber-300 text-lg sm:w-20 sm:text-right">
                        ${item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => onRemoveDish(idx)}
                        className="text-[#D9D0C1]/60 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Side Items List */}
                {cartSides.map((item) => (
                  <div
                    key={`side-${item.sideId}`}
                    className="bg-[#2D2A26] p-4 rounded-xl border border-[#8B4513]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <span className="font-bold text-emerald-300 text-base">{item.sideName}</span>
                      <span className="ml-2 text-xs text-[#D9D0C1] font-mono">${item.price} CAD each (Nut-Free)</span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-[#8B4513]/30 pt-2 sm:pt-0">
                      <div className="flex items-center bg-[#23201D] rounded-lg border border-[#8B4513]/60">
                        <button
                          onClick={() => onUpdateSideQuantity(item.sideId, -1)}
                          className="p-1.5 text-[#E9E4DB] hover:text-white cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 font-bold text-sm text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateSideQuantity(item.sideId, 1)}
                          className="p-1.5 text-[#E9E4DB] hover:text-white cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="font-extrabold text-amber-300 text-lg sm:w-20 sm:text-right">
                        ${item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => onRemoveSide(item.sideId)}
                        className="text-[#D9D0C1]/60 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        aria-label="Remove side"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Fulfillment Options */}
            <div className="space-y-4 pt-4 border-t border-[#8B4513]/40">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                Choose Fulfillment Method:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFulfillment('delivery')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    fulfillment === 'delivery'
                      ? 'bg-[#8B4513] border-amber-500 text-white shadow-md ring-2 ring-amber-500'
                      : 'bg-[#2D2A26] border-[#8B4513]/40 text-[#D9D0C1] hover:border-[#8B4513]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-300" />
                      Sunday Delivery
                    </span>
                    <span className="text-xs bg-[#23201D] text-amber-300 px-2 py-0.5 rounded border border-[#8B4513]">
                      PA Only
                    </span>
                  </div>
                  <p className="text-xs text-[#E9E4DB]">Deliveries on Sundays only in Prince Albert.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillment('pickup')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    fulfillment === 'pickup'
                      ? 'bg-[#8B4513] border-amber-500 text-white shadow-md ring-2 ring-amber-500'
                      : 'bg-[#2D2A26] border-[#8B4513]/40 text-[#D9D0C1] hover:border-[#8B4513]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      Pick Up
                    </span>
                    <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                      Cash
                    </span>
                  </div>
                  <p className="text-xs text-[#E9E4DB]">Pick up freshly made order at kitchen.</p>
                </button>
              </div>

              {/* Delivery Address Form */}
              {fulfillment === 'delivery' && (
                <div className="bg-[#2D2A26] p-4 rounded-xl border border-[#8B4513]/60 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      House Address in Prince Albert (Required for Sunday Delivery):
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 123 15th St W, Prince Albert, SK"
                      className="w-full bg-[#23201D] border border-[#8B4513]/70 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#D9D0C1]/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">
                      Preferred Sunday Time Window:
                    </label>
                    <select
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full bg-[#23201D] border border-[#8B4513]/70 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                      <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                      <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Special Instructions Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#D9D0C1] mb-1">
                  Special Instructions / DM Note (Optional):
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please leave sauce on side, extra spice, etc."
                  className="w-full bg-[#23201D] border border-[#8B4513]/50 rounded-lg px-3.5 py-2 text-sm text-white placeholder-[#D9D0C1]/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Message Generator */}
          <div className="lg:col-span-5 bg-[#23201D] rounded-2xl p-6 sm:p-8 border border-[#8B4513]/40 shadow-xl space-y-6 sticky top-24">
            <h3 className="font-serif text-xl font-bold text-amber-300 border-b border-[#8B4513]/30 pb-3 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-xs bg-[#8B4513] text-[#FDFBF7] px-2.5 py-1 rounded border border-[#A0522D] font-sans">
                Cash Only
              </span>
            </h3>

            {/* Price Calculations */}
            <div className="space-y-3 text-sm border-b border-[#8B4513]/30 pb-4">
              <div className="flex justify-between text-[#D9D0C1]">
                <span>Dishes Subtotal</span>
                <span className="font-mono font-bold">${subtotalDishes} CAD</span>
              </div>
              <div className="flex justify-between text-[#D9D0C1]">
                <span>Sides &amp; Sauces</span>
                <span className="font-mono font-bold">${subtotalSides} CAD</span>
              </div>
              <div className="flex justify-between text-[#D9D0C1]">
                <span>Fulfillment ({fulfillment === 'delivery' ? 'Sunday Delivery' : 'Pick Up'})</span>
                <span className="font-mono font-bold text-emerald-400">Included</span>
              </div>

              <div className="pt-3 border-t border-[#8B4513]/30 flex justify-between items-baseline">
                <span className="font-serif text-lg font-bold text-white">Grand Total</span>
                <span className="font-mono text-3xl font-black text-amber-300">${grandTotal} <span className="text-xs text-[#D9D0C1]">CAD</span></span>
              </div>
            </div>

            {/* Cash Only Policy Alert */}
            <div className="bg-[#8B4513]/30 border border-[#8B4513] p-4 rounded-xl flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-[#E9E4DB] leading-relaxed">
                <strong className="font-bold text-[#FDFBF7] block mb-0.5">Payment Notice:</strong>
                Cash accepted only upon pick up or Sunday delivery. Please have cash ready.
              </div>
            </div>

            {/* Formatted Message Preview Box */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                Formatted Message Preview for Facebook DM:
              </label>
              <textarea
                readOnly
                value={generateOrderMessage()}
                rows={7}
                className="w-full bg-[#2D2A26] border border-[#8B4513]/50 rounded-xl p-3 text-xs font-mono text-[#D9D0C1] focus:outline-none resize-none"
              />
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleCopyAndRedirect}
              disabled={cartDishes.length === 0 && cartSides.length === 0}
              className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2.5 shadow-lg transition-all cursor-pointer ${
                cartDishes.length === 0 && cartSides.length === 0
                  ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  : 'bg-[#8B4513] hover:bg-[#A0522D] text-white hover:scale-[1.02] active:scale-95 shadow-[#2D2A26]'
              }`}
            >
              {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <MessageCircle className="w-5 h-5 fill-current text-amber-300" />}
              <span>{copied ? 'Order Copied! Opening FB...' : 'Confirm & Order via Facebook DM'}</span>
            </button>

            <p className="text-[11px] text-center text-[#D9D0C1] italic">
              Clicking copies your formatted order text and opens Prince Albert Halal Kitchen on Facebook Marketplace!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
