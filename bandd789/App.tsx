'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, HardHat, Facebook, Phone, Info, ArrowRight } from 'lucide-react';
import { BlueprintHouse } from './components/BlueprintHouse';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-grid-paper text-slate-900 relative overflow-hidden flex flex-col">
      
      {/* Top Decoration: Safety Tape */}
      <div className="w-full h-3 bg-safety-tape shadow-md z-50"></div>

      {/* Background Geometric Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Large Red Circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        {/* Black Angle */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent" />
        
        {/* Animated Icons */}
        <motion.div 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-10 opacity-10 text-black"
        >
          <Hammer size={80} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 right-10 opacity-10 text-red-600"
        >
          <HardHat size={80} />
        </motion.div>
      </div>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-black text-white text-sm font-bold uppercase tracking-wider mb-6 shadow-lg transform -skew-x-12">
                <span className="skew-x-12 flex items-center gap-2">
                  <Info size={16} className="text-red-500" />
                  Under Renovation
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                เรากำลัง
                <br />
                <span className="text-red-600 relative inline-block">
                  ปรับปรุง
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-black/10 -z-10 transform -skew-x-12"></span>
                </span>
                <span className="text-slate-900"> ระบบ</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="h-1 w-24 bg-red-600 mx-auto lg:mx-0"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                เพื่อรากฐานที่มั่นคงและบริการที่ดียิ่งขึ้น <br/>
                เว็บไซต์ <span className="font-bold text-black">DDHOUSE</span> กำลังได้รับการออกแบบใหม่
                <span className="text-slate-900 font-medium"> อย่างพิถีพิถัน</span>
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">ติดต่อสอบถามข้อมูลเพิ่มเติม</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                
                {/* Facebook Button */}
                <a href="#" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-lg shadow-[4px_4px_0px_0px_#1877F2] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 min-w-[200px]">
                   <Facebook className="w-6 h-6 text-[#1877F2] group-hover:scale-110 transition-transform" />
                   <span className="font-bold text-lg">Facebook</span>
                   <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-slate-400" />
                </a>

                {/* Phone Button */}
                <a href="tel:0979787459" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white border-2 border-red-700 rounded-lg shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 min-w-[200px]">
                   <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                   <span className="font-bold text-lg">097 978 7459</span>
                </a>

              </div>
            </motion.div>
          </div>

          {/* Right Side: Graphic Card */}
          <div className="w-full relative px-4 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white border-[3px] border-slate-900 p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] rounded-sm"
            >
              <div className="flex justify-between items-center mb-10 border-b-[3px] border-slate-100 pb-6">
                 <div>
                   <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">SITE PLAN</h3>
                   <div className="flex items-center gap-2 mt-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     <p className="text-sm text-slate-500 font-mono font-bold">REF: DD-2026-V2</p>
                   </div>
                 </div>
                 <div className="text-right">
                    <div className="text-3xl md:text-4xl font-black text-red-600 leading-none whitespace-nowrap">เร็วๆนี้</div>
                 </div>
              </div>

              <div className="py-2 px-4">
                <BlueprintHouse />
              </div>
              
              <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500 border-t border-slate-100 pt-4 gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">ARCHITECT:</span> 
                    <span>DDHOUSE DESIGN TEAM</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">STATUS:</span> 
                    <span className="text-black font-bold bg-yellow-400 px-2 py-0.5 rounded-sm">IN PROGRESS</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-slate-900 text-white text-sm relative z-20 mt-auto">
        <p className="font-light opacity-80">&copy; {new Date().getFullYear()} DDHOUSE Construction. <span className="text-red-500 font-bold mx-2">|</span> Building Your Future</p>
      </footer>
    </div>
  );
};

export default App;