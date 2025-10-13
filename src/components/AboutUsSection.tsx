import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Placeholder for a high-quality image. Replace with your own. ---
import aboutSectionImage from '../assets/hold.webp';

const AboutUsSection = ({ brandColors }: { brandColors: { gold: string } }) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* --- UPDATED Left Column --- */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">( ABOUT US )</p>
              
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <img src={aboutSectionImage} alt="Premium grains in hands" className="w-full h-64 object-cover" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <p className="text-2xl font-bold text-neutral-900">15+</p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="text-2xl font-bold text-neutral-900">7+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <p className="text-2xl font-bold text-neutral-900">25+</p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
              </div>
            </motion.div>

            {/* --- Right Column: Content --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                We are a dedicated team of food grain experts passionate about{' '}
                <span className="text-gray-400">
                  global trade
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                With a shared commitment to excellence, we help businesses source the finest grains through smart, reliable, and affordable solutions designed for lasting impact and partnership.
              </p>
              
              <Link to="/about">
                <motion.div 
                  className="mt-8 group inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 bg-black text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;