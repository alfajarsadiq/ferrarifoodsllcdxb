import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation

// Component Imports
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import StatsCardSection from '../components/StatsCardSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';

// Asset Imports
import heroVideo from '../assets/about.webm';
import jeerakasalaImg from '../assets/jeerakasala.png';
import palakkadanImg from '../assets/palakkadan.png';
import basmatirice from '../assets/1121bas.png'


// --- UPDATED CTA Button Component to handle links ---
const CtaButton = ({ text, to }: { text: string; to: string }) => {
    return (
        <Link to={to}>
            <motion.div 
                className="group flex items-center justify-between w-full sm:w-auto lg:w-64 bg-black text-white rounded-full pl-6 pr-2 py-2 text-left font-semibold cursor-pointer"
                whileHover="hover" initial="rest" animate="rest"
            >
                <span>{text}</span>
                <motion.div 
                    className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <div className="w-4 h-4 rounded-full bg-white" />
                </motion.div>
            </motion.div>
        </Link>
    )
}

const Home = () => {
  const brandColors = { gold: '#cfb652', white: '#ffffff', black: '#1f1f1f' };
  
  const featuredProducts = [
    { 
        name: 'Noora 1121 Basmati Rice', 
        description: 'Premium extra-long Basmati rice, naturally aged for rich aroma and perfect fluffiness the royal choice for every biryani.', 
        images: [basmatirice],
        rating: 5, 
        features: [
  "Extra-Long Grains",
  "Naturally Aged Aroma",
  "Fluffy & Non-Sticky Texture"
]
    },
    { 
        name: 'Noora Palakkadan Matta', 
        description: 'An indigenous variety of rice from Kerala...', 
        images: [palakkadanImg], 
        rating: 4,  
        features: ["Rich in Nutrients", "Authentic Kerala Origin", "Boosts Immunity"] 
    },
    { 
        name: 'Noora Jeerakasala Rice', 
        description: 'A tiny-grained, aromatic rice variant...', 
        images: [jeerakasalaImg], 
        rating: 5, 
        features: ["Highly Aromatic", "Quick Cooking", "Ideal for Biryani"] 
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen overflow-hidden rounded-b-[4rem] shadow-2xl bg-black">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
        <div className="relative h-full flex items-center justify-start z-20">
            <div className="container mx-auto px-6">
                <motion.div 
                  className="max-w-3xl" 
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    <h1 className="text-5xl md:text-7xl  font-bold uppercase tracking-tight text-white">
                        <span style={{ color: brandColors.gold }}>Premium Grains,</span><br />
                        Global Standards
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-gray-200 leading-relaxed">
                        From Dubai, Ferrari Foods is your trusted B2B partner for the world's finest rice and food grains.
                    </p>
                    {/* --- UPDATED Hero Buttons with Links --- */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                        <Link to="/contact">
                            <motion.button 
                              className="px-7 py-3 text-base font-semibold tracking-wide text-black rounded-full shadow-lg flex items-center gap-2" 
                              style={{ backgroundColor: brandColors.gold }} 
                              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} 
                              whileTap={{ scale: 0.95 }} 
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                Get a Wholesale Quote <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <Link to="/products">
                            <motion.button 
                              className="px-7 py-3 text-base font-semibold tracking-wide text-white rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm" 
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.75)' }} 
                              whileTap={{ scale: 0.95 }} 
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                Explore Products
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} brandColors={brandColors} />
      <AboutUsSection brandColors={brandColors} />
      
      <StatsCardSection />

      <TestimonialsSection />

      {/* --- UPDATED CTA SECTION --- */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="relative mx-auto max-w-7xl rounded-3xl bg-orange-500 p-12 md:p-16 lg:p-20 overflow-hidden">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-white/5" />
                <div className="absolute inset-[60px] rounded-full bg-white/5" />
                <div className="absolute inset-[120px] rounded-full bg-white/5" />
                <div className="absolute inset-[180px] rounded-full bg-white/5" />
                <div className="absolute inset-[240px] rounded-full bg-white/5" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Let's Get In Touch.
                    </h2>
                    <p className="mt-4 text-lg text-white/80 max-w-md">
                        Looking for a reliable B2B supplier for premium grains? We're here to help you scale your business with quality products and dependable service.
                    </p>
                </motion.div>
                {/* --- UPDATED CTA Buttons with Links --- */}
                <motion.div className="flex flex-col sm:flex-row sm:justify-start lg:justify-end gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <CtaButton text="Request a Quote" to="/contact"/>
                    <CtaButton text="Explore Products" to="/products"/>
                </motion.div>
            </div>
        </div>
      </section>

      <ContactSection brandColors={brandColors} />
    </div>
  );
};

export default Home;