'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NotificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative group shadow-2xl rounded-full">
        <div className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                if(status === 'error') setStatus('idle');
            }}
            placeholder="อีเมลของคุณสำหรับรับข่าวสาร"
            disabled={status === 'success' || status === 'loading'}
            className={`w-full px-6 py-4 rounded-full bg-white border-2 
              ${status === 'error' ? 'border-red-500 text-red-600' : 'border-gray-200 focus:border-red-600 text-gray-900'}
              placeholder-gray-400 focus:outline-none transition-all duration-300
              disabled:bg-gray-100 disabled:cursor-not-allowed`}
          />
          <button
            type="submit"
            disabled={status === 'success' || status === 'loading'}
            className="absolute right-2 p-3 bg-red-600 hover:bg-black text-white rounded-full transition-colors duration-300 disabled:bg-gray-400 shadow-md transform hover:scale-105"
          >
            {status === 'loading' ? (
               <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : status === 'success' ? (
                <CheckCircle size={20} />
            ) : (
                <Send size={20} />
            )}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 flex items-center justify-center text-green-600 text-sm font-semibold gap-2"
          >
            <CheckCircle size={16} />
            <span>ขอบคุณ! เราจะแจ้งให้คุณทราบทันทีเมื่อเสร็จสมบูรณ์</span>
          </motion.div>
        )}
        {status === 'error' && (
           <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 flex items-center justify-center text-red-600 text-sm font-semibold gap-2"
           >
             <AlertCircle size={16} />
             <span>กรุณากรอกอีเมลให้ถูกต้อง</span>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};