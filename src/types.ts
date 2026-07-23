export type PortionSizeId = 'single' | 'double' | 'triple' | 'family4' | 'family8';

export interface PortionPricing {
  id: PortionSizeId;
  name: string;
  servings: string;
  price: number;
  description: string;
}

export interface MenuItem {
  id: 'mandi' | 'pulao';
  name: string;
  origin: string;
  meat: string;
  description: string;
  containsNuts: boolean;
  nutFreeOptionAvailable: boolean;
  photoUrl: string;
  photoAlt: string;
  photoCaption: string;
  pricings: PortionPricing[];
}

export interface SideItem {
  id: 'raita' | 'mandhi_sauce';
  name: string;
  price: number;
  description: string;
  ingredients: string;
  containsNuts: boolean;
}

export interface OrderCartItem {
  dishId: 'mandi' | 'pulao';
  dishName: string;
  sizeId: PortionSizeId;
  sizeName: string;
  price: number;
  isNutless: boolean;
  quantity: number;
}

export interface SideCartItem {
  sideId: 'raita' | 'mandhi_sauce';
  sideName: string;
  price: number;
  quantity: number;
}

export interface OrderState {
  items: OrderCartItem[];
  sides: SideCartItem[];
  fulfillmentType: 'pickup' | 'delivery';
  deliveryAddress: string;
  customerNotes: string;
  preferredSundayTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  dish: string;
}

export interface ToastNotification {
  id: string;
  title: string;
  subtitle: string;
  price?: number;
  imageUrl?: string;
  quantity?: number;
}
