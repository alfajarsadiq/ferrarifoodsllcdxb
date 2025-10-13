import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

// --- ASSET IMPORT ---
import team_leader_jpg from '../assets/lead.jpg';

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// --- Data ---
const leadershipData = {
    image: team_leader_jpg,
    name: 'Muhammed Faris',
    title: 'Regional Manager',
};

const philosophyParagraph = "Our mission is to deliver unparalleled quality in every grain, every time. We build lasting global partnerships founded on trust, transparency, and shared growth. Sustainability is not just our goal but our responsibility guiding every step from sourcing to delivery. With integrity and innovation, we strive to nourish the world with quality, care, and consistency, ensuring every partnership grows stronger and every meal reflects excellence.";


const LeadershipSection = () => {
  return (
    <motion.section
      className="py-24 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Driving Force</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guided by a vision of quality, partnership, and responsibility.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* --- UPDATED Left Side: Leader Profile with Overlay --- */}
                <motion.div 
                    className="w-full max-w-sm mx-auto"
                    variants={itemVariants}
                >
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
                        <img
                            src={leadershipData.image}
                            alt={leadershipData.name}
                            className="w-full h-[450px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                            <h3 className="text-3xl font-bold">{leadershipData.name}</h3>
                            <p className="mt-1 text-md opacity-90">{leadershipData.title}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Philosophy Paragraph */}
                <motion.div 
                    className="relative"
                    variants={itemVariants}
                >
                    <Quote className="absolute -top-8 -left-10 w-24 h-24 text-gray-100 z-0" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">
                           A Commitment to Our Customers
                        </h3>
                        <p className="text-2xl italic font-['Playfair_Display'] text-gray-700 leading-relaxed">
                           {philosophyParagraph}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  );
};

export default LeadershipSection;