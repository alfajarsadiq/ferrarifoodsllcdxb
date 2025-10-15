import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader } from 'lucide-react';
import axios from 'axios';

interface LeadCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LeadCollectionModal: React.FC<LeadCollectionModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setMessage('Please enter a valid phone number.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // --- THIS IS THE CORRECTED LINE FOR VITE PROJECTS ---
      const apiUrl = import.meta.env.VITE_API_URL;
      const fullNumber = `${countryCode}${phoneNumber}`;
      
      console.log('Attempting to send lead to:', `${apiUrl}/api/send-lead`);
      
      await axios.post(`${apiUrl}/api/send-lead`, { phone: fullNumber });

      setStatus('success');
      setMessage('Success! Your download will begin shortly.');
      
      // Trigger the onSuccess callback after a short delay
      setTimeout(() => {
        onSuccess();
        onClose();
        resetForm();
      }, 1500);

    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      console.error('Lead submission error:', error);
    }
  };
  
  const resetForm = () => {
      setPhoneNumber('');
      setCountryCode('+971');
      setStatus('idle');
      setMessage('');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#1f1f1f] border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Download Catalog</h3>
            <p className="text-white/70 mb-6">Please provide your phone number to start the download.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full sm:w-auto bg-black/50 border border-white/20 rounded-lg px-3 py-3 text-white outline-none focus:ring-2 focus:ring-[#C6A664]"
                >
                  <option>+971</option>
                  <option>+966</option>
                  <option>+91</option>
                  <option>+44</option>
                  <option>+1</option>
                </select>
                <input
                  type="tel"
                  placeholder="50 123 4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#C6A664]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-[#C6A664] text-black font-bold rounded-full hover:bg-[#bfa356] transition-colors disabled:bg-gray-500"
              >
                {status === 'loading' ? <Loader className="animate-spin" /> : <Send className="w-5 h-5" />}
                <span>Submit & Download</span>
              </button>
            </form>

            {message && (
                <p className={`mt-4 text-center text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                    {message}
                </p>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCollectionModal;
