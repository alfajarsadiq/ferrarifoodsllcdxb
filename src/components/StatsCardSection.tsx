import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Data for the cards ---
const statsData = [
  {
    id: 'containers',
    label: 'CONTAINERS ANNUALLY',
    value: '500+',
    keyword: 'Global Reach',
    color: 'black',
    detailTitle: 'Unmatched Scale & Global Reach',
    detailText: 'Our capacity to ship over 500 containers annually demonstrates our robust logistics network and ability to meet large-scale demands worldwide. We ensure a consistent and reliable supply for our B2B partners, no matter the volume.',
    link: '/globalpresence'
  },
  {
    id: 'countries',
    label: 'COUNTRIES SERVED',
    value: '7+',
    keyword: 'Worldwide Delivery',
    color: 'green',
    detailTitle: 'Delivering Excellence Worldwide',
    detailText: 'We proudly serve partners in over 7 countries across multiple continents. Our expertise in international trade and compliance ensures smooth, hassle-free delivery to diverse global markets.',
    link: '/globalpresence'
  },
  {
    id: 'logistics',
    label: 'RELIABLE LOGISTICS',
    value: '99.8%',
    keyword: 'On-Time Delivery',
    color: 'gold',
    detailTitle: 'Every Grain Delivered with Care',
    detailText: 'With a 99.8% on-time delivery rate, our logistics are the cornerstone of our promise. We manage the entire supply chain with precision, providing our partners with peace of mind and predictable inventory.',
    link: '/globalpresence'
  },
  {
    id: 'partnerships',
    label: 'TRUSTED PARTNERSHIPS',
    value: '100+',
    keyword: 'Strong Relations',
    color: 'purple',
    detailTitle: 'Strong Relations, Stronger Supply',
    detailText: 'We have built over 100 long-term partnerships with businesses that trust us for their supply needs. Our commitment to mutual growth and understanding makes us more than a supplier—we are a partner in your success.',
    link: '/partners'
  },
];

// --- Card Color Styles ---
const colorStyles: { [key: string]: { bg: string; text: string; arrowBgHover: string; arrowTextHover: string } } = {
  black: { bg: 'bg-black', text: 'text-white', arrowBgHover: 'bg-white', arrowTextHover: 'text-black' },
  green: { bg: 'bg-green-600', text: 'text-white', arrowBgHover: 'bg-white', arrowTextHover: 'text-green-600' },
  gold: { bg: 'bg-yellow-500', text: 'text-black', arrowBgHover: 'bg-black', arrowTextHover: 'text-yellow-500' },
  purple: { bg: 'bg-purple-600', text: 'text-white', arrowBgHover: 'bg-white', arrowTextHover: 'text-purple-600' },
};


// --- Individual Stat Card Component ---
const StatCard = ({ item, onSelect }: { item: typeof statsData[0], onSelect: () => void }) => {
  const styles = colorStyles[item.color];
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      className={`group relative p-8 rounded-3xl overflow-hidden cursor-pointer ${styles.bg} ${styles.text} shadow-lg`}
      whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onSelect}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70">{item.label}</p>
          <p className="text-6xl font-extrabold mt-4 transition-transform duration-300 group-hover:scale-105">{item.value}</p>
        </div>
        <div className="mt-auto">
          <p className="text-xl font-medium opacity-90">{item.keyword}</p>
        </div>
      </div>
      <div 
        className="absolute top-6 right-6 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center 
                   bg-white/10 backdrop-blur-sm text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45"
      >
        <ArrowRight className="w-6 h-6" />
      </div>
       {/* Optional subtle grain texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] opacity-[2%] pointer-events-none"></div>
    </motion.div>
  );
};


// --- Detailed Card Modal Component ---
const StatDetailCard = ({ item, onClose }: { item: typeof statsData[0], onClose: () => void }) => {
    const styles = colorStyles[item.color];
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-6">
            <motion.div
                layoutId={`card-${item.id}`}
                className={`relative w-full max-w-2xl p-10 rounded-3xl overflow-hidden ${styles.bg} ${styles.text} shadow-2xl`}
            >
                <div className="relative z-10">
                    <p className="text-sm font-semibold uppercase tracking-widest opacity-70">{item.label}</p>
                    <h2 className="text-5xl font-bold my-4">{item.detailTitle}</h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-8">{item.detailText}</p>
                    <Link to={item.link}>
                        <motion.div
                            className={`group inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-full ${styles.arrowBgHover} ${styles.arrowTextHover}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                    </Link>
                </div>
                <motion.button
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center"
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                >
                    <X className="w-6 h-6" />
                </motion.button>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] opacity-[2%] pointer-events-none"></div>
            </motion.div>
        </div>
    );
};


// --- Main Section Component ---
const StatsCardSection = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedStat = selectedId ? statsData.find(s => s.id === selectedId) : null;

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-neutral-900">
                        Our Performance by the <span className="text-yellow-500">Numbers</span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        We are more than a supplier; we are a partner dedicated to your success, providing reliability and excellence in every grain.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map(stat => (
                        <StatCard key={stat.id} item={stat} onSelect={() => setSelectedId(stat.id)} />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedStat && (
                        <StatDetailCard item={selectedStat} onClose={() => setSelectedId(null)} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default StatsCardSection;