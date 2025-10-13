import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Globe, Package, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Data for Section ---
// NOTE: Add your own video files to the 'public' folder and update the paths here.
const successStories = [
    { 
        id: 'grand-mills',
        icon: Building, 
        partner: "Grand Mills, UAE", 
        title: "Boosting Regional Production",
        story: "We streamlined Grand Mills' regional supply chain with a dedicated logistics framework, significantly boosting their premium flour production and market presence.", 
        cta: "View Case Study",
        link: "https://ferrarifoodsllc.blogspot.com/2025/10/wholesale-rice-supplier-uae.html",
        videoSrc: "src/assets/dubai.webm" // Example path
    },
    { 
        id: 'safari-foods',
        icon: Globe, 
        partner: "Safari Foods, Africa", 
        title: "Enabling Pan-African Expansion",
        story: "Enabled expansion into three new African territories by providing a consistent and reliable supply of high-quality wheat, overcoming complex logistical challenges.", 
        cta: "Explore Market Strategy",
        link: "https://ferrarifoodsllc.blogspot.com/2025/10/bulk-rice-supplier-uae-ferrari-foods-dubai.html",
        videoSrc: "src/assets/dubai.webm" // Example path
    },
    { 
        id: 'euro-foods',
        icon: Package, 
        partner: "Euro Foods Inc., Europe",
        title: "Pioneering Sustainable Supply",
        story: "Established a fully certified organic and sustainable supply chain to meet Europe's growing demand, ensuring compliance and premium quality.",
        cta: "See Sustainability Report",
        link: "https://ferrarifoodsllc.blogspot.com/2025/10/wholesale-rice-supplier-uae.html",
        videoSrc: "src/assets/europe.webm" // Example path
    },
    { 
        id: 'agro-exports',
        icon: ShieldCheck, 
        partner: "Agro Exports Ltd., India", 
        title: "Enhancing Global Quality Standards",
        story: "Collaborated to enhance quality assurance protocols from farm to port, leading to a 30% increase in their export market share and brand reputation.", 
        cta: "Read Quality Analysis",
        link: "https://ferrarifoodsllc.blogspot.com/2025/10/wholesale-rice-supplier-uae.html",
        videoSrc: "src/assets/india.webm" // Example path
    },
];

const SuccessStoriesSection = () => {
    const [activeStory, setActiveStory] = useState(successStories[0]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* --- Section Header --- */}
                <div className="max-w-3xl mb-16 text-center md:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
                        Global Partnerships, <br />Proven Success
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600">
                        Discover how our tailored solutions in sourcing and logistics create lasting value and drive growth for partners worldwide.
                    </p>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* --- LEFT COLUMN: Description & CTA --- */}
                    <div className="flex flex-col gap-8">
                        {/* Partner Selector Tabs */}
                        <div className="flex flex-wrap gap-3">
                            {successStories.map((story) => (
                                <button
                                    key={story.id}
                                    onClick={() => setActiveStory(story)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                                        activeStory.id === story.id
                                            ? 'bg-black text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {story.partner}
                                </button>
                            ))}
                        </div>

                        {/* Animated Content Display */}
                        <div className="relative h-48">
                             <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStory.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="absolute inset-0"
                                >
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeStory.title}</h3>
                                    <p className="text-gray-600 text-lg mb-6">{activeStory.story}</p>
                                    <Link to={activeStory.link}>
                                        <div className="group inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer">
                                            {activeStory.cta}
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Video Card --- */}
                    <motion.div 
                        className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <AnimatePresence>
                            <motion.video
                                key={activeStory.videoSrc}
                                src={activeStory.videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                             <div className="p-3 mb-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
                                <activeStory.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold">{activeStory.partner}</h3>
                            <p className="text-lg opacity-80">{activeStory.title}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;