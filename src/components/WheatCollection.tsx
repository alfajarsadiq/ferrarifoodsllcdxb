import React, { useState, useRef } from 'react';
import StickyProductShowcase from './StickyProductShowcase';
import { ArrowLeft, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// --- BRAND LOGO IMPORTS ---
import iffcoLogo from '../assets/iffcologo.png';
import grandMillsLogo from '../assets/grandlogo.png';
import alghurairLogo from '../assets/alghurairlogo.png';

// --- WHEAT PRODUCT IMAGE IMPORTS (Updated) ---
import hareeswheatImg from '../assets/hareeswheat.png';
import parathaMaidaImg from '../assets/parathamaida.png';
import iffcoAllPurposeImg from '../assets/allpurpose.png';
import flourn1Img from '../assets/flourn1.png';
import flourn2Img from '../assets/flourn2.png';
import malabarImg from '../assets/malabar.png';
import allbakingImg from '../assets/allbaking.png';
import semolineImg from '../assets/semolina.png';
import flourn3Img from '../assets/flourn3.png';
import pashtunimg from '../assets/pashtun.png';
import paktwoimg from '../assets/pak2.png';
import tazaimg from '../assets/taza.png';
import pakoneimg from '../assets/pak1.png';
import classiconeimg from '../assets/classic1.png';
import classictwoimg from '../assets/classic2.png';
import alparathaimg from '../assets/alparatha.png';
import alafghanimg from '../assets/alatta.png';
import rotiimg from '../assets/roti.png';
import almaidaimg from '../assets/almaida.png';
import alharris from '../assets/alharris.png';
import alsemolina from '../assets/alsemolina.png';
import rawanpureimg from '../assets/rawanpure.png';
import pakistanflour from '../assets/pakistanflour.png';
// --- NEW IMAGES FOR AL GHURAIR ---
import jmaida from '../assets/jmaida.png';
import jatta from '../assets/jatta.png';
import rawanimg from '../assets/rawan.png';
import rodhaoneImg from '../assets/rodhaone.png';
import rodhatwoImg from '../assets/rodhatwo.png';
import zeinImg from '../assets/zein.png';


// --- Wheat Products Data ---
const wheatProducts = [
  // IFFCO Products
  { id: 'IFFCO-all-purpose-flour', name: 'All Purpose Wheat Flour', image: iffcoAllPurposeImg, description: 'A versatile and reliable all-purpose flour from IFFCO, suitable for everyday cooking and baking.', features: ["Multi-Purpose Use", "Reliable for Baking", "Enriched Flour", "Perfect for Everyday Cooking"] },
  { id: 'IFFCO-chakki-atta-pak-2', name: 'Pak 2 Wheat Flour', image: paktwoimg, description: 'Authentic stone-ground whole wheat flour, perfect for making soft and fluffy rotis.', features: ["Stone-Ground", "100% Whole Wheat", "High in Fiber", "For Soft Rotis"] },
  { id: 'IFFCO-taza-atta', name: 'Taza Flour', image: tazaimg, description: 'Freshly milled atta packed with nutrients, ideal for healthy and wholesome meals.', features: ["Freshly Milled", "Nutrient-Rich", "High in Dietary Fiber", "Perfect for Daily Cooking"] },
  { id: 'IFFCO-chakki-atta-pak-1', name: 'Pak 1 Wheat Flour', image: pakoneimg, description: 'Premium quality whole wheat atta, stone-ground to preserve its natural goodness.', features: ["Premium Whole Wheat", "Stone-Ground Goodness", "Natural Aroma", "Excellent for Flatbreads"] },
  { id: 'IFFCO-classic-flour-1', name: 'Classic Flour No. 1', image: classiconeimg, description: 'A superior quality all-purpose flour, finely milled for baking fluffy cakes and soft breads.', features: ["Superior All-Purpose Flour", "Fine & Silky Texture", "Excellent for Baking", "Consistent Performance"] },
  { id: 'IFFCO-classic-flour-2', name: 'Classic Flour No. 2', image: classictwoimg, description: 'A versatile flour perfect for a wide range of culinary uses, from traditional breads to fried delicacies.', features: ["Versatile & Multi-purpose", "Ideal for Breads & Frying", "Consistent Quality", "Reliable Results"] },
  { id: 'IFFCO-paratha-maida', name: 'Paratha Maida', image: parathaMaidaImg, description: 'Specially milled for creating flaky, layered parathas with a soft dough and perfect texture.', features: ["Ideal for Parathas", "Fine Refined Flour", "Soft Dough", "Ensures Flaky Layers"] },

  // Al Ghurair Products (Updated and Reordered)
  { id: 'al-ghurair-jenan-maida', name: 'Jenan Maida No 1', image: jmaida, description: 'Fine, silky maida perfect for authentic sweets and specialty breads.', features: ["Fine & Silky", "For Sweets", "Specialty Breads", "Premium Quality"] },
  { id: 'al-ghurair-jenan-atta', name: 'Jenan Atta No 2', image: jatta, description: 'A versatile, high-quality flour for all your baking and cooking needs.', features: ["All-Purpose", "Consistent Quality", "Ideal for Baking", "Fine Texture"] },
  { id: 'al-ghurair-afghan-maida', name: 'Afghan Maida', image: almaidaimg, description: 'Fine, silky maida perfect for authentic Afghan sweets and specialty breads.', features: ["Fine & Silky", "For Afghan Sweets", "Specialty Breads", "Premium Quality"] },
  { id: 'al-ghurair-afghan-atta', name: 'Afghan Atta', image: alafghanimg, description: 'Traditional Afghan whole wheat flour for making authentic, flavorful flatbreads.', features: ["Authentic Afghan Style", "Whole Wheat", "Rich Flavor", "Perfect for Naan"] },
  { id: 'al-ghurair-rawan-maida', name: 'Rawan Maida', image: rawanimg, description: 'A premium, pure refined flour known for its exceptional quality and baking performance.', features: ["Premium & Pure", "Fine Texture", "Excellent for Baking", "Consistent Results"] },
  { id: 'al-ghurair-rawan-atta', name: 'Rawan Atta', image: rawanpureimg, description: 'A premium, pure flour known for its exceptional quality and baking performance.', features: ["Premium & Pure", "Excellent for Baking", "Consistent Results", "High Quality"] },
  { id: 'al-ghurair-rodha-1', name: 'Rodha 1', image: rodhaoneImg, description: 'Premium quality flour, ideal for traditional bread making and daily culinary needs.', features: ["Premium Quality", "For Traditional Breads", "Versatile Use", "Consistent Results"] },
  { id: 'al-ghurair-rodha-2', name: 'Rodha 2', image: rodhatwoImg, description: 'A finer grade flour perfect for delicate pastries and specialized baking applications.', features: ["Fine Grade", "For Pastries & Cakes", "Silky Texture", "Excellent Performance"] },
  { id: 'al-ghurair-paratha-maida', name: 'Paratha Maida', image: alparathaimg, description: 'The perfect choice for deliciously flaky and layered parathas every time.', features: ["For Layered Parathas", "Fine Texture", "Easy to Knead", "Authentic Taste"] },
  { id: 'al-ghurair-harris', name: 'Harris', image: alharris, description: 'Coarsely ground wheat for the traditional, hearty dish of Harees.', features: ["Coarsely Ground", "For Traditional Harees", "Nutritious & Hearty", "Authentic Texture"] },
  { id: 'al-ghurair-roti-flour', name: 'Roti Flour', image: rotiimg, description: 'Specially milled for soft, fluffy rotis that stay fresh for longer.', features: ["For Soft Rotis", "Easy to Knead", "Wholesome Goodness", "Stays Fresh Longer"] },
  { id: 'al-ghurair-pakistan-flour', name: 'Pakistan Flour', image: pakistanflour, description: 'A versatile flour ideal for making traditional Pakistani breads and snacks.', features: ["For Pakistani Cuisine", "Versatile Use", "Authentic Taste", "Great for Breads & Snacks"] },
  { id: 'al-ghurair-semolina-fine', name: 'Semolina Fine', image: alsemolina, description: 'Fine semolina for smooth pasta, delicate desserts, and light coatings.', features: ["Fine Grade", "For Pasta & Desserts", "Smooth Texture", "High in Protein"] },
  { id: 'al-ghurair-zein-flour', name: 'Zein Flour', image: zeinImg, description: 'A specialty corn-based protein flour, ideal for gluten-free baking and creating edible food coatings.', features: ["Gluten-Free", "High in Protein", "Corn-Based", "Edible Food Coatings"] },

  // Grand Mills Products
  { id: 'GrandMills-harees-wheat', name: 'Harees Wheat', image: hareeswheatImg, description: 'Premium quality crushed wheat, perfect for preparing the traditional dish, Harees.', features: ["Premium Crushed Wheat", "Ideal for Harees", "Nutritious & Hearty", "Available in 40kg"] },
  { id: 'GrandMills-flour-no1', name: 'Flour No. 1', image: flourn1Img, description: 'A premium, high-quality patent flour perfect for making fine breads, cakes, and pastries.', features: ["Premium Patent Flour", "Ideal for Fine Breads", "Perfect for Cakes & Pastries", "Superior White Texture"] },
  { id: 'GrandMills-chappati-atta', name: 'Chappati Atta', image: flourn2Img, description: 'An excellent quality atta milled to produce exceptionally soft and delicious chapatis.', features: ["Fine Milled Atta", "For Soft Chapatis", "Easy to Knead", "Wholesome Goodness"] },
  { id: 'GrandMills-malabar-paratha-maida', name: 'Malabar Paratha Maida', image: malabarImg, description: 'The secret to perfect, flaky Malabar parottas. Formulated for high elasticity.', features: ["Specialty Paratha Flour", "For Flaky Layers", "High Elasticity", "Authentic Malabar Style"] },
  { id: 'GrandMills-all-baking-flour', name: 'All Baking Flour', image: allbakingImg, description: 'Your go-to flour for all baking adventures. Perfectly balanced for cakes, cookies, and muffins.', features: ["Versatile Baking Flour", "Perfect for Cakes & Cookies", "Consistent Results", "Enriched & Pre-sifted"] },
  { id: 'GrandMills-semolina', name: 'Semolina', image: semolineImg, description: 'Coarsely ground durum wheat, ideal for making traditional pasta, couscous, and upma.', features: ["Coarse Durum Wheat", "Ideal for Pasta & Upma", "Used in Desserts", "Rich in Protein"] },
  { id: 'GrandMills-chakki-atta', name: 'Chakki Atta', image: flourn3Img, description: 'Authentic stone-ground whole wheat flour that locks in natural dietary fiber and aroma.', features: ["Authentic Chakki Fresh", "100% Whole Wheat", "High in Fiber", "For Soft & Fluffy Rotis"] },
  { id: 'GrandMills-pashtun-flour-n1', name: 'Pashtun Flour No. 1', image: pashtunimg, description: 'A high-quality, fine Pashtun-style flour, perfect for creating authentic, soft traditional breads.', features: ["Authentic Pashtun Style", "Premium No. 1 Grade", "Ideal for Naan & Roti", "Fine, Soft Texture"] }
];

// --- Brands Data ---
const brands = [
  { name: 'IFFCO', logo: iffcoLogo, key: 'IFFCO' },
  { name: 'Grand Mills', logo: grandMillsLogo, key: 'GrandMills' },
  { name: 'Al Ghurair', logo: alghurairLogo, key: 'al-ghurair' },
];

const WheatCollection = ({ onEnquiry }: { onEnquiry: (productName: string) => void }) => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const wheatSectionRef = useRef<HTMLDivElement>(null);

  const handleBrandSelect = (brandKey: string) => {
    setSelectedBrand(brandKey);
  };

  const handleGoBack = () => {
    setSelectedBrand(null);
    wheatSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = selectedBrand
    ? wheatProducts.filter(p => p.id.startsWith(selectedBrand))
    : [];
  
  const currentBrand = brands.find(b => b.key === selectedBrand);

  return (
    <div ref={wheatSectionRef} className="bg-gray-50 py-20 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedBrand ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Wheat Partner Brands</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We source our high-quality wheat products from the most trusted names in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {brands.map((brand) => (
                <motion.div
                  key={brand.key}
                  onClick={() => handleBrandSelect(brand.key)}
                  className="group cursor-pointer"
                  whileHover="hovered"
                >
                  <div className="bg-white rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between aspect-square">
                    <div className="p-6 flex-grow flex flex-col items-center justify-center">
                        <img src={brand.logo} alt={`${brand.name} logo`} className="h-16 md:h-20 object-contain" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border-t border-gray-200/80">
                        <h3 className="text-md font-semibold text-gray-800">{brand.name}</h3>
                        <motion.div 
                            className="h-10 w-10 flex-shrink-0 rounded-full border border-gray-300 flex items-center justify-center text-neutral-500 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                            variants={{ rest: { rotate: 0 }, hovered: { rotate: 45, y: -8 } }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowUpRight className="h-5 w-5" />
                        </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selectedBrand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             <button 
                onClick={handleGoBack} 
                className="flex items-center gap-2 mb-10 text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Brands
             </button>

             {currentBrand && (
                <StickyProductShowcase
                  title={`${currentBrand.name} Collection`}
                  subtitle={`Our selection of products from ${currentBrand.name}.`}
                  products={filteredProducts}
                  imagePosition="right"
                  onEnquiry={onEnquiry}
                />
             )}

            <div className="mt-20 text-center">
                <motion.button
                    onClick={handleGoBack}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronLeft size={20} />
                    View Other Brands
                </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WheatCollection;
