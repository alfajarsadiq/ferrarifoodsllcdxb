import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definition for Timeline Data ---
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  height: number; // Represents the height of the bar
  color: string;
};

// --- Data for Section ---
// Spanning 15 years from 2010 to 2025
const timelineData: TimelineItem[] = [
    { year: '2010', title: 'Foundation', description: 'Company established, setting the vision for our journey.', height: 100, color: '#6B21A8' },
    { year: '2011', title: 'Office Implementation', description: 'Our first corporate office was implemented and developed.', height: 115, color: '#7E22CE' },
    { year: '2012', title: 'Team Expansion', description: 'Expanded our core team to support initial growth.', height: 130, color: '#9333EA' },
    { year: '2013', title: 'Market Entry', description: 'Expanded our market presence into three new Emirates.', height: 145, color: '#3B82F6' },
    { year: '2014', title: 'Infrastructure Growth', description: 'Developed new infrastructure to support our operations in three Emirates.', height: 160, color: '#2563EB' },
    { year: '2015', title: 'Our Brand Established', description: 'Successfully established and launched our own in-house brand.', height: 180, color: '#1D4ED8' },
    { year: '2016', title: 'Imports Begin', description: 'Initiated import operations, sourcing high-quality products from other countries.', height: 200, color: '#10B981' },
    { year: '2017', title: 'Nationwide Expansion', description: 'Expanded our market reach to all seven Emirates.', height: 220, color: '#059669' },
    { year: '2018', title: 'Further Team Growth', description: 'Another significant team expansion to meet growing demand.', height: 240, color: '#F59E0B' },
    { year: '2019', title: 'Product Diversification', description: 'Diversified our product line to include new categories like sugar and oils.', height: 260, color: '#D97706' },
    { year: '2020', title: 'First Export', description: 'Began exporting our products to international markets.', height: 280, color: '#F97316' },
    { year: '2021', title: 'Digital Transformation', description: 'Embraced digital transformation to streamline operations and enhance efficiency.', height: 300, color: '#EA580C' },
    { year: '2022', title: 'Infrastructure Upgrade', description: 'Significantly increased and upgraded our infrastructure.', height: 320, color: '#EF4444' },
    { year: '2023', title: 'Global Recognition', description: 'Received global recognition for our quality and service.', height: 340, color: '#DC2626' },
    { year: '2024', title: 'Project Expansion', description: 'Initiated a major project expansion to further scale our operations.', height: 360, color: '#BE123C' },
];

const TimelineSection = () => {
    const [hoveredYear, setHoveredYear] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">15 Years of Excellence</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A visual journey through our key milestones and achievements since our inception.
                    </p>
                </motion.div>

                <div className="relative flex justify-center items-end h-[450px] gap-4 px-4">
                    {timelineData.map((item, index) => (
                        <div
                            key={item.year}
                            className="relative flex-1 h-full flex flex-col justify-end items-center"
                            onMouseEnter={() => setHoveredYear(item.year)}
                            onMouseLeave={() => setHoveredYear(null)}
                        >
                            {/* Description Tooltip */}
                            <AnimatePresence>
                                {hoveredYear === item.year && (
                                    <motion.div
                                        className="absolute -top-4 w-48 p-3 bg-gray-800 text-white rounded-lg shadow-xl z-10 text-center"
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h3 className="font-bold text-md">{item.title}</h3>
                                        <p className="text-xs text-gray-300 mt-1">{item.description}</p>
                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* The Bar */}
                            <motion.div
                                className="w-full rounded-t-lg cursor-pointer"
                                style={{ backgroundColor: item.color }}
                                initial={{ height: 0 }}
                                whileInView={{ height: item.height }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            />
                            
                             {/* The Candle Wick */}
                            <div className="w-1 h-4 bg-gray-300"/>

                            {/* Year Label */}
                            <p className="mt-2 font-semibold text-gray-700">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;