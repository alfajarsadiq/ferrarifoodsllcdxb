import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Star, Gem, Leaf, Globe, ArrowRight } from 'lucide-react';

// --- Type definition matching the one in FeaturedProducts.tsx ---
interface Product {
    name: string;
    description: string;
    images: string[];
    rating: number;
    features: string[];
}

interface ProductDetailModalProps {
    product: Product | null;
    onClose: () => void;
    brandColors: {
        gold: string;
        black: string;
    };
}

// --- WhatsApp Handler Function ---
const handleWhatsAppEnquiry = (productName: string) => {
    const phoneNumber = '971585639040'; // Your WhatsApp number without '+' or spaces
    const message = `Hello! I'm interested in a wholesale quote for: "${productName}".`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};


const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, brandColors }) => {
    const [activeImage, setActiveImage] = useState(0);

    if (!product) return null;
    
    // Select an icon for each feature
    const featureIcons = [<Gem size={18} />, <Leaf size={18} />, <Globe size={18} />];

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3, ease: 'easeIn' } },
    };
    
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="relative flex flex-col md:flex-row w-full max-w-4xl h-full md:h-auto max-h-[90vh] bg-[#f5f3f0] rounded-2xl shadow-2xl overflow-hidden"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white rounded-full transition-colors"
                    aria-label="Close product details"
                >
                    <X className="w-6 h-6 text-black" />
                </button>

                {/* Left Side: Image Gallery */}
                <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 bg-white">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                       <AnimatePresence mode="wait">
                            <motion.img
                                key={activeImage}
                                src={product.images[activeImage]}
                                alt={`${product.name} view ${activeImage + 1}`}
                                className="w-full h-full object-contain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>
                    </div>
                    {product.images.length > 1 && (
                        <div className="flex gap-3 justify-center">
                            {product.images.map((img, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${activeImage === index ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900">{product.name}</h2>
                    
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className={i < product.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} />
                            ))}
                        </div>
                        <span className="text-sm text-neutral-600 font-medium">({product.rating}.0)</span>
                    </div>

                    <p className="mt-4 text-neutral-600 leading-relaxed">{product.description}</p>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold" style={{ color: brandColors.gold }}>Premium Specifications</h3>
                        <ul className="mt-4 space-y-3">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
                                        {featureIcons[index % featureIcons.length]}
                                    </span>
                                    <span className="text-neutral-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6">
                        {/* --- UPDATED: Button is now a motion component with an onClick handler --- */}
                        <motion.button 
                            className="w-full group flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg" 
                            style={{ backgroundColor: brandColors.black }} 
                            onClick={() => handleWhatsAppEnquiry(product.name)}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get a Wholesale Quote 
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProductDetailModal;