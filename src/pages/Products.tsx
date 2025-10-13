import React, { useRef } from 'react';
import { Wheat, Package, Award, Truck, ChevronDown, Quote, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- COMPONENT IMPORTS ---
import StickyProductShowcase from '../components/StickyProductShowcase';
import WheatCollection from '../components/WheatCollection';

// --- ASSET IMPORTS ---
import heroImage from '../assets/product.webm';
import jeerakasalaImg from '../assets/jeerakasala.png';
import palakkadanImg from '../assets/palakkadan.png';
import creamysellaImg from '../assets/creamysella.png';
import basmati1121Img from '../assets/1121bas.png';
import goldenSellaImg from '../assets/goldensella.png';
import sonaimg from '../assets/sona.png';

// --- DATA ---
const riceProducts = [
  {
    id: 'noora-jeerakasala-rice',
    name: 'Noora Jeerakasala Rice',
    image: jeerakasalaImg,
    description: 'A premium, aromatic short-grain rice known for its distinctive fragrance and flavor. Perfect for traditional dishes and biryanis.',
    features: ["Aromatic Short-Grain", "Perfect for Biryani", "Distinctive Fragrance", "Available in 18kg"]
  },
  {
    id: 'noora-palakkadan-matta-rice',
    name: 'Noora Palakkadan Matta Rice',
    image: palakkadanImg,
    description: 'Authentic Kerala Brown rice with a rich, earthy flavor and high nutritional value. Ideal for daily consumption and traditional recipes.',
    features: ["Authentic Kerala Brown Rice", "Rich, Earthy Flavor", "High Nutritional Value", "Available in 18kg"]
  },
  {
    id: 'noora-creamy-sella-rice',
    name: 'Noora Creamy Sella Rice',
    image: creamysellaImg,
    description: 'A parboiled basmati rice known for its creamy texture and rich aroma. The grains are firm and separate, ideal for pilafs and biryanis.',
    features: ["Creamy Parboiled Basmati", "Rich Aroma", "Firm & Separate Grains", "Available in 40kg"]
  },
  {
    id: 'noora-1121-basmati-rice',
    name: 'Noora 1121 Basmati Rice',
    image: basmati1121Img,
    description: "Globally renowned for having the longest grain, the 1121 variety elongates to twice its length post-cooking, offering exceptional visual appeal.",
    features: ["World's Longest Grain", "Maximum Elongation", "Delicate Texture", "Premium Export Quality"]
  },
  {
    id: 'noora-1121-golden-sella',
    name: 'Noora 1121 Golden Sella',
    image: goldenSellaImg,
    description: "Parboiled 1121 Basmati that undergoes a process to retain more nutrients. The grains are golden, firm, and separate beautifully when cooked.",
    features: ["Golden Parboiled Grains", "Nutrient-Rich", "Firm & Non-Sticky", "Perfect for Biryani & Pilaf"]
  },
  {
    id: 'noora-indian-sonamasoori',
    name: 'Noora Indian Sonamasoori',
    image: sonaimg,
    description: "A lightweight and aromatic medium-grain rice, prized for its delicate texture and low starch content. A versatile and healthy choice for everyday meals, from steamed rice to flavorful pulao.",
    features: ["Lightweight & Aromatic", "Authentic South Indian Variety", "Low Starch & Easy to Digest", "Versatile for Daily Cooking"]
  }
];

const testimonialsData = [
    {
      quote: "The softness and consistency of Ferrari Foods’ wheat flour have transformed our bakery products...",
      name: 'Leading Bakery in Dubai',
      stars: 5,
    },
    {
      quote: "As a trusted foodstuff distributor, reliability and supply consistency are critical...",
      name: 'Foodstuff Trading Company, UAE',
      stars: 5,
    },
    {
      quote: "Our biryani and rice-based dishes owe their signature taste to Ferrari Foods’ premium basmati rice...",
      name: 'Popular Restaurant Group, UAE',
      stars: 5,
    },
];

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// --- Main Page Component ---
const Products = () => {
  const riceSectionRef = useRef<HTMLDivElement>(null);
  const wheatSectionRef = useRef<HTMLDivElement>(null);

  const handleEnquiry = (productName: string) => {
    const phoneNumber = '971585639040';
    const message = `Hello! I'm interested in making an enquiry about your product: "${productName}".`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToRice = () => {
    riceSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWheat = () => {
    wheatSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="h-screen w-full p-4">
        <section className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl">
          <video src={heroImage} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div
            className="relative z-20 text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-trusted font-bold mb-4 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Excellence in Every Grain
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover our portfolio of premium rice and wheat, cultivated and processed to meet the highest global standards.
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
              <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
          </motion.div>
        </section>
      </div>

      {/* --- PRODUCT CATEGORIES INTRO --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium rice and wheat varieties sourced from the finest global suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className="text-center p-8 bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              onClick={scrollToRice}
            >
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wheat className="h-10 w-10 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Rice Varieties</h3>
              <p className="text-gray-600 text-lg">
                From aromatic Basmati to nutritious red rice, our collection features the world's finest rice varieties.
              </p>
            </div>
            <div 
              className="text-center p-8 bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              onClick={scrollToWheat}
            >
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Wheat Products</h3>
              <p className="text-gray-600 text-lg">
                From specialty flours to wholesome atta, our wheat products serve diverse culinary applications with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RICE SECTION --- */}
      <div ref={riceSectionRef}>
        <StickyProductShowcase
          title="Premium Rice Collection"
          subtitle="Carefully selected varieties from trusted global sources."
          products={riceProducts}
          onEnquiry={handleEnquiry}
        />
      </div>

      {/* --- WHEAT SECTION --- */}
      <div ref={wheatSectionRef}>
        <WheatCollection onEnquiry={handleEnquiry} />
      </div>

      {/* --- TESTIMONIALS SECTION --- */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By Professionals Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our commitment to quality has earned the praise of chefs, distributors, and families alike.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col border border-gray-100"
                variants={itemVariants}
              >
                <Quote className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- CTA & QUALITY ASSURANCE SECTION --- */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Award className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">International Standards</h3>
              <p className="text-gray-300">
                Every product meets the highest international standards of quality, hygiene, and compliance.
              </p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Package className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">Premium Packaging</h3>
              <p className="text-gray-300">
                State-of-the-art packaging ensures freshness and quality from our facilities to your door.
              </p>
            </motion.div>
            <motion.div
              className="p-6"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Truck className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
              <p className="text-gray-300">
                Global logistics network ensures timely delivery across all our international markets.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center bg-gray-700/50 p-10 rounded-2xl border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Source the Finest Grains?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Partner with us to elevate your offerings with premium-quality rice and wheat. Contact our team today for wholesale inquiries and tailored solutions.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;