import React from 'react';
import StickyProductShowcase from './StickyProductShowcase';

// --- OIL PRODUCT IMAGE IMPORTS ---
import hayatpalmImg from '../assets/oilimage/hayatpalm.png';
import mabrookoilImg from '../assets/oilimage/mabrookoil.png';
import mahapalmImg from '../assets/oilimage/mahapalm.png';
import zainoilImg from '../assets/oilimage/zainoil.png';
import zubaithaImg from '../assets/oilimage/zubaitha.png';

// --- OIL PRODUCTS DATA ---
export const oilProducts = [
  {
    id: 'hayat-palm-olein-oil',
    name: 'Hayat Refined Palm Olein Oil',
    image: hayatpalmImg,
    description: 'High-quality refined palm olein oil processed for superior clarity, high thermal stability, and low absorption, making it ideal for deep frying and industrial food production.',
    features: ["100% Refined Palm Olein", "High Smoke Point for Deep Frying", "Cholesterol & Trans-Fat Free", "Extended Frying Life & Stability"]
  },
  {
    id: 'mabrook-pure-vegetable-oil',
    name: 'Mabrook Pure Vegetable Oil',
    image: mabrookoilImg,
    description: 'A premium blend of refined vegetable oils designed for all-around cooking performance, delivering clean flavors for sautéing, baking, and daily meal preparation.',
    features: ["Pure Refined Vegetable Blend", "Enriched with Vitamins", "Neutral Flavor Profile", "Ideal for Daily Cooking & Frying"]
  },
  {
    id: 'maha-palm-oil',
    name: 'Maha Refined Palm Oil',
    image: mahapalmImg,
    description: 'Top-tier edible palm oil offering excellent frying endurance and consistent quality, perfect for food service establishments and bakery operations.',
    features: ["Premium Edible Palm Oil", "Excellent Heat Resistance", "Long Shelf Life", "Commercial & Wholesale Ready"]
  },
  {
    id: 'zain-pure-cooking-oil',
    name: 'Zain Pure Cooking Oil',
    image: zainoilImg,
    description: 'A light, heart-healthy cooking oil crafted to preserve natural food taste while providing crisp texture and clean frying output.',
    features: ["Light & Healthy Formula", "Preserves Natural Taste", "Non-Sticky Frying", "Pure Edible Quality"]
  },
  {
    id: 'zubaitha-vegetable-oil',
    name: 'Zubaitha Pure Vegetable Oil',
    image: zubaithaImg,
    description: 'Freshly refined vegetable oil with a light composition and neutral scent, guaranteeing healthy, nutritious, and wholesome culinary results.',
    features: ["Top Grade Refined Oil", "Clean & Light Composition", "Versatile Culinary Usage", "High Purity Standards"]
  }
];

interface OilCollectionProps {
  onEnquiry: (productName: string) => void;
}

const OilCollection: React.FC<OilCollectionProps> = ({ onEnquiry }) => {
  return (
    <div className="bg-gray-50 py-12">
      <StickyProductShowcase
        title="Edible Oil Collection"
        subtitle="Premium refined vegetable and palm oils sourced for culinary and commercial excellence."
        products={oilProducts}
        imagePosition="left"
        onEnquiry={onEnquiry}
      />
    </div>
  );
};

export default OilCollection;
