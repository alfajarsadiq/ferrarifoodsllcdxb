import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';
import { ShieldCheck, Award, Leaf, ChevronDown, Globe } from 'lucide-react';

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Data for Section ---
const certificationsData = [
    {
      id: 'iso',
      icon: Award,
      name: 'ISO 9001:2015',
      title: 'Quality Management System',
      subtitle: 'Certified for international standards of quality and consistency.',
      details: 'Our ISO 9001:2015 certification demonstrates our commitment to a systematic, process-driven approach to quality management. It ensures that every aspect of our operation, from sourcing to delivery, is executed with precision to consistently meet and exceed customer expectations.'
    },
    {
      id: 'haccp',
      icon: ShieldCheck,
      name: 'HACCP Certified',
      title: 'Food Safety Hazard Control',
      subtitle: 'Proactive management of all potential food safety risks.',
      details: 'HACCP (Hazard Analysis and Critical Control Points) certification is the global benchmark for food safety. This proactive system identifies, evaluates, and controls potential hazards at every stage of our production process, guaranteeing the safety and integrity of our products.'
    },
    {
      id: 'fssc',
      icon: Globe,
      name: 'FSSC 22000',
      title: 'Global Food Safety Standard',
      subtitle: 'Comprehensive and internationally recognized food safety management.',
      details: 'FSSC 22000 is a globally recognized food safety certification that integrates ISO 22000 with sector-specific prerequisite programs. This confirms our robust food safety management system, ensuring trust throughout the global supply chain.'
    },
    {
      id: 'gmp',
      icon: Leaf, 
      name: 'GMP Certified',
      title: 'Good Manufacturing Practice',
      subtitle: 'Ensuring products are consistently produced and controlled.',
      details: 'Our Good Manufacturing Practice (GMP) certification ensures that products are consistently produced and controlled according to quality standards. It is designed to minimize the risks involved in any food production that cannot be eliminated through testing the final product.'
    },
];

type Certification = typeof certificationsData[0];

// --- DESKTOP VIEW COMPONENT ---
const CertificationPanelDesktop = ({ certification, setActiveId }: { certification: Certification, setActiveId: (id: string) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveId(certification.id);
        }
    }, [isInView, setActiveId, certification.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center">
            <motion.div
                className="max-w-xl p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={itemVariants}
            >
                <certification.icon className="h-16 w-16 text-gray-800 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{certification.title}</h3>
                <p className="text-xl text-gray-700 font-semibold mb-4">{certification.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{certification.details}</p>
            </motion.div>
        </div>
    );
};

// --- MOBILE VIEW COMPONENT (Accordion Style) ---
const CertificationAccordionMobile: React.FC<{ certification: Certification; expanded: boolean; onToggle: () => void }> = ({ certification, expanded, onToggle }) => {
    return (
        <motion.div variants={itemVariants} className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left p-6 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <certification.icon className="h-8 w-8 text-gray-700" />
                    <span className="text-xl font-bold text-gray-800">{certification.name}</span>
                </div>
                <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                </motion.div>
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-white">
                             <h3 className="text-2xl font-bold text-gray-900 mb-3">{certification.title}</h3>
                             <p className="text-lg text-gray-700 font-semibold mb-4">{certification.subtitle}</p>
                             <p className="text-gray-600 leading-relaxed">{certification.details}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


const CertificationsSection = () => {
    const [activeId, setActiveId] = useState(certificationsData[0].id);
    const [expandedId, setExpandedId] = useState<string | null>(certificationsData[0].id);

    const handleToggle = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <motion.section
            className="py-12 bg-gray-50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- SIGNIFICANTLY REDUCED WHITESPACE HERE --- */}
                <motion.div className="text-center mb-6" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Quality & Food Safety Certifications</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our commitment to global standards, verified by internationally recognized certifications.</p>
                </motion.div>

                {/* --- DESKTOP VIEW --- */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center">
                        <ul className="space-y-12">
                            {certificationsData.map((cert) => (
                                <li key={cert.id} className="flex items-center gap-8">
                                    <motion.div
                                        animate={{
                                            scale: activeId === cert.id ? 1.1 : 1,
                                            opacity: activeId === cert.id ? 1 : 0.7
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                      <cert.icon className={`h-10 w-10 transition-colors ${activeId === cert.id ? 'text-gray-800' : 'text-gray-400'}`} />
                                    </motion.div>
                                    <motion.span
                                        className="text-2xl font-bold transition-colors"
                                        animate={{ opacity: activeId === cert.id ? 1 : 0.5 }}
                                    >
                                        {cert.name}
                                    </motion.span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {certificationsData.map((cert) => (
                            <CertificationPanelDesktop key={cert.id} certification={cert} setActiveId={setActiveId} />
                        ))}
                    </div>
                </div>
                
                {/* --- MOBILE VIEW --- */}
                <div className="lg:hidden">
                     <motion.div
                        className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                     >
                        {certificationsData.map((cert) => (
                            <CertificationAccordionMobile 
                                key={cert.id}
                                certification={cert}
                                expanded={expandedId === cert.id}
                                onToggle={() => handleToggle(cert.id)}
                            />
                        ))}
                     </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default CertificationsSection;