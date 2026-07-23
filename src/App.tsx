import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MenuSection } from './components/MenuSection';
import { SidesSection } from './components/SidesSection';
import { OrderCalculator } from './components/OrderCalculator';
import { DeliveryInfoCard } from './components/DeliveryInfoCard';
import { FaqSection } from './components/FaqSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { PhotoModal } from './components/PhotoModal';
import { CartToast } from './components/CartToast';

import { MenuItem, SideItem, PortionSizeId, OrderCartItem, SideCartItem, ToastNotification } from './types';
import { PORTION_PRICINGS, MENU_ITEMS, ASSET_IMAGES } from './data/menuData';

export default function App() {
  const [cartDishes, setCartDishes] = useState<OrderCartItem[]>([]);
  const [cartSides, setCartSides] = useState<SideCartItem[]>([]);
  const [activePhotoDish, setActivePhotoDish] = useState<MenuItem | null>(null);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const cartCount =
    cartDishes.reduce((sum, d) => sum + d.quantity, 0) +
    cartSides.reduce((sum, s) => sum + s.quantity, 0);

  const addToast = (toast: Omit<ToastNotification, 'id'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev.slice(-2), { ...toast, id }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (dishId: 'mandi' | 'pulao', sizeId: PortionSizeId, isNutless: boolean) => {
    const dishObj = MENU_ITEMS.find((m) => m.id === dishId);
    const sizeObj = PORTION_PRICINGS.find((p) => p.id === sizeId);
    if (!dishObj || !sizeObj) return;

    setCartDishes((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.dishId === dishId && item.sizeId === sizeId && item.isNutless === isNutless
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            dishId,
            dishName: dishObj.name,
            sizeId,
            sizeName: sizeObj.name,
            price: sizeObj.price,
            isNutless,
            quantity: 1,
          },
        ];
      }
    });

    const nutTag = dishId === 'mandi' ? (isNutless ? 'Nutless Option' : 'Authentic Nuts') : 'Nut-Free';
    addToast({
      title: dishObj.name,
      subtitle: `${sizeObj.name} (${sizeObj.servings}) • ${nutTag}`,
      price: sizeObj.price,
      imageUrl: dishObj.photoUrl,
    });
  };

  const handleAddSide = (side: SideItem, quantity: number) => {
    setCartSides((prev) => {
      const existingIdx = prev.findIndex((s) => s.sideId === side.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            sideId: side.id,
            sideName: side.name,
            price: side.price,
            quantity,
          },
        ];
      }
    });

    addToast({
      title: side.name,
      subtitle: `Nut-Free Side Sauce`,
      price: side.price,
      quantity,
      imageUrl: ASSET_IMAGES.sides,
    });
  };


  const handleUpdateDishQuantity = (index: number, delta: number) => {
    setCartDishes((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveDish = (index: number) => {
    setCartDishes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateSideQuantity = (sideId: string, delta: number) => {
    setCartSides((prev) => {
      return prev
        .map((side) => {
          if (side.sideId === sideId) {
            const newQty = side.quantity + delta;
            return newQty > 0 ? { ...side, quantity: newQty } : null;
          }
          return side;
        })
        .filter(Boolean) as SideCartItem[];
    });
  };

  const handleRemoveSide = (sideId: string) => {
    setCartSides((prev) => prev.filter((s) => s.sideId !== sideId));
  };

  const handleClearCart = () => {
    setCartDishes([]);
    setCartSides([]);
  };

  const scrollToOrderBuilder = () => {
    const el = document.getElementById('order-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans flex flex-col antialiased selection:bg-amber-200 selection:text-amber-950">
      <Header cartCount={cartCount} onOpenCart={scrollToOrderBuilder} />

      <main className="flex-1">
        <HeroBanner onStartOrder={scrollToOrderBuilder} />

        <MenuSection
          onSelectPhoto={(dish) => setActivePhotoDish(dish)}
          onAddToCart={handleAddToCart}
        />

        <SidesSection onAddSide={handleAddSide} />

        <OrderCalculator
          cartDishes={cartDishes}
          cartSides={cartSides}
          onUpdateDishQuantity={handleUpdateDishQuantity}
          onRemoveDish={handleRemoveDish}
          onUpdateSideQuantity={handleUpdateSideQuantity}
          onRemoveSide={handleRemoveSide}
          onClearCart={handleClearCart}
        />

        <DeliveryInfoCard />

        <ReviewsSection />

        <FaqSection />
      </main>

      <Footer />

      <PhotoModal
        dish={activePhotoDish}
        onClose={() => setActivePhotoDish(null)}
        onAddToCart={handleAddToCart}
      />

      <CartToast
        toasts={toasts}
        onDismiss={handleDismissToast}
        onViewCart={scrollToOrderBuilder}
      />
    </div>
  );
}

