import { MenuItem, SideItem, PortionPricing, FAQItem, ReviewItem } from '../types';

import heroBannerImg from '../assets/images/mandi_hero_banner_1784732302405.jpg';
import mandiImg from '../assets/images/arabian_mandi_lamb_1784732322191.jpg';
import pulaoImg from '../assets/images/kabuli_pulao_lamb_1784732340713.jpg';
import sidesImg from '../assets/images/side_sauces_1784732356569.jpg';

export const ASSET_IMAGES = {
  heroBanner: heroBannerImg,
  mandi: mandiImg,
  pulao: pulaoImg,
  sides: sidesImg,
};

export const FB_MARKETPLACE_URL = 'https://www.facebook.com/profile.php?id=61578219946307';

export const LOGO_URL = 'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/520242680_122113134626935012_7761778627953869721_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=p526x296&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=npEdlLpj82EQ7kNvwGtobFX&_nc_oc=AdpLOmgyf-d7F6O0IF-pN_W4dQ_6Qlen-th1i6MZ1up2Sj4HXRnSUHQmNDW_lFnHHz8&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=hqnmQ39IuG4M7klrSIxQEQ&_nc_ss=7a289&oh=00_AQD2aduXtRk3txawJzHfxNl_k69LxzjT_pwAI_J8T7NTpA&oe=6A66B190' ;
   

export const PORTION_PRICINGS: PortionPricing[] = [
  {
    id: 'single',
    name: 'Single Portion',
    servings: '1 Person',
    price: 25,
    description: 'Generous individual serving with slow-cooked succulent lamb and spiced aromatic rice.',
  },
  {
    id: 'double',
    name: 'Double Portion',
    servings: '2 Persons',
    price: 50,
    description: 'Hearty meal for two with extra portion of braised lamb shank and fragrant basmati.',
  },
  {
    id: 'triple',
    name: 'Triple Portion',
    servings: '3 Persons',
    price: 75,
    description: 'Substantial feast for three featuring tender lamb chunks and spiced rice platter.',
  },
  {
    id: 'family4',
    name: 'Family Platter (4 Persons)',
    servings: '4 Persons (Best Value)',
    price: 90,
    description: 'Large family platter for 4 people with abundant tender lamb shank portions.',
  },
  {
    id: 'family8',
    name: 'Family Platter (8 Persons)',
    servings: '8 Persons (Grand Feast)',
    price: 180,
    description: 'Grand celebration feast tray serving 8 people with rich garnishes and succulent lamb.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'mandi',
    name: 'Arabian Mandi',
    origin: 'Yemeni Authentic Dish',
    meat: 'Tender Lamb',
    description:
      'Mandi is a traditional Yemeni dish slow-cooked with authentic Middle Eastern spices. Topped with toasted cashews and aromatic nuts on fragrant rice.',
    containsNuts: true,
    nutFreeOptionAvailable: true,
    photoUrl: mandiImg,
    photoAlt: 'Authentic Yemeni Arabian Mandi with Lamb and toasted nuts',
    photoCaption: 'Arabian Mandi with tender slow-cooked Lamb shank, fragrant spices, and toasted cashew garnishes.',
    pricings: PORTION_PRICINGS,
  },
  {
    id: 'pulao',
    name: 'Kabuli Pulao',
    origin: 'Authentic Afghani Dish',
    meat: 'Tender Lamb',
    description:
      'Kabuli Pulao is the national dish of Afghanistan, made with authentic savory spices, slow-braised lamb shank, caramelized julienned carrots, and sweet raisins.',
    containsNuts: false,
    nutFreeOptionAvailable: false,
    photoUrl: pulaoImg,
    photoAlt: 'Authentic Afghan Kabuli Pulao with Lamb, carrots, and raisins',
    photoCaption: 'Kabuli Pulao topped with tender braised Lamb, sweet caramelized carrots, and plump raisins. 100% Nut Allergen Friendly!',
    pricings: PORTION_PRICINGS,
  },
];

export const SIDES_ITEMS: SideItem[] = [
  {
    id: 'raita',
    name: 'Raita Sauce',
    price: 1,
    description: 'A cooling, appetite-growing yogurt sauce infused with garlic and fresh green herbs.',
    ingredients: 'Fresh yogurt, garlic, mint, herbs (100% Nut-Free)',
    containsNuts: false,
  },
  {
    id: 'mandhi_sauce',
    name: 'Mandhi Sauce',
    price: 1,
    description: 'A tangy herbal tomato sauce crafted with authentic spices. Preferred companion for Arabian Mandi, but delicious with Kabuli Pulao!',
    ingredients: 'Tomatoes, mild green chilies, cilantro, herbal blend (100% Nut-Free)',
    containsNuts: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I place my order?',
    answer:
      'You can build your order using our interactive Order Builder on this page, then click "Order via Facebook Marketplace" to direct message us with your order details and delivery/pickup preferences.',
  },
  {
    question: 'What are the payment options?',
    answer: 'We accept CASH ONLY upon pick up or delivery. Please have exact or appropriate cash ready when receiving your meal.',
  },
  {
    question: 'When and where is delivery available?',
    answer:
      'Deliveries are available on SUNDAYS ONLY, exclusively within Prince Albert, SK. Please provide your exact house address when placing your Sunday order.',
  },
  {
    question: 'Can I order nut-free Arabian Mandi?',
    answer:
      'Yes! Traditional Mandi includes cashews and other nuts, but you can explicitly request "Nutless Mandi" when ordering if you have a nut allergy. Kabuli Pulao is naturally 100% nut-free.',
  },
  {
    question: 'Is all meat 100% Halal?',
    answer: 'Yes! Prince Albert Halal Kitchen is 100% Halal certified and family-owned, using only fresh premium Halal lamb.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    author: 'Tariq K., Prince Albert',
    rating: 5,
    text: 'The Kabuli Pulao is absolute perfection! Tender lamb that falls off the bone and sweet carrots over aromatic rice. Prince Albert needed this!',
    dish: 'Kabuli Pulao',
  },
  {
    author: 'Sarah M., Prince Albert',
    rating: 5,
    text: 'Ordered the Arabian Mandi Family Platter for Sunday dinner. The whole family loved it! The Mandi sauce and Raita complement the dish so well.',
    dish: 'Arabian Mandi',
  },
  {
    author: 'Dawud S., Prince Albert',
    rating: 5,
    text: 'Great portion sizes for $25 single or $90 platter. High quality halal lamb, cooked with genuine passion. Will be ordering every weekend!',
    dish: 'Family Platter',
  },
];
