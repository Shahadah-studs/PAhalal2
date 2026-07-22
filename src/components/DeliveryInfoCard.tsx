import React from 'react';
import { Calendar, MapPin, DollarSign, MessageCircle, ShieldCheck, Clock, Truck } from 'lucide-react';
import { FB_MARKETPLACE_URL } from '../data/menuData';

export const DeliveryInfoCard: React.FC = () => {
  return (
    <section id="delivery" className="py-16 bg-[#FDFBF7] border-b border-[#E9E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B4513] bg-[#F5EFE6] px-3.5 py-1 rounded-full border border-[#D9D0C1]">
            Fulfillment Details
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
            Pick Up &amp; Sunday Delivery Guidelines
          </h2>
          <p className="text-[#5A554E] text-sm sm:text-base">
            Everything you need to know about getting your fresh hot Kabuli Pulao and Mandi in Prince Albert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Sunday Delivery */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E4DB] space-y-4 hover:border-[#8B4513] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8B4513] flex items-center justify-center font-bold">
              <Truck className="w-6 h-6 text-[#8B4513]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D2A26]">Sunday Deliveries Only</h3>
            <ul className="space-y-2 text-xs text-[#5A554E]">
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
                <span><strong>Sunday Only:</strong> Delivery services run exclusively every Sunday.</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
                <span><strong>Prince Albert Area:</strong> Deliveries are strictly within Prince Albert limits.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
                <span><strong>House Address Required:</strong> Please provide your full house address when DMing us.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Pickup Option */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E4DB] space-y-4 hover:border-[#8B4513] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8B4513] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6 text-[#8B4513]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D2A26]">Pick Up Option</h3>
            <ul className="space-y-2 text-xs text-[#5A554E]">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Freshly Cooked:</strong> Pick up directly from our local Prince Albert kitchen.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling:</strong> Arrange your pick up time when DMing on Facebook.</span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Fee:</strong> Zero delivery charge on all pick up orders.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Cash Payment */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E4DB] space-y-4 hover:border-[#8B4513] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#2D2A26] text-[#FDFBF7] flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D2A26]">Cash Accepted Only</h3>
            <ul className="space-y-2 text-xs text-[#5A554E]">
              <li className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Cash Only:</strong> Payment is collected in cash upon receiving your order.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Simple &amp; Direct:</strong> Pay exact or appropriate cash directly to our driver or at pickup.</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Confirm via DM:</strong> Send your order on FB Marketplace to lock in your Sunday slot.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Facebook Marketplace CTA Banner */}
        <div className="bg-[#2D2A26] border border-[#8B4513]/60 rounded-2xl p-6 sm:p-8 text-[#FDFBF7] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-amber-200">
              Ready to Order for This Weekend?
            </h3>
            <p className="text-[#E9E4DB] text-sm max-w-xl">
              Confirm your order by messaging us on Facebook Marketplace. Remember to include your house address for Sunday deliveries!
            </p>
          </div>

          <a
            href={FB_MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0 border border-[#A0522D]"
          >
            <MessageCircle className="w-5 h-5 fill-current text-amber-300" />
            <span>Open Facebook Marketplace</span>
          </a>
        </div>
      </div>
    </section>
  );
};
