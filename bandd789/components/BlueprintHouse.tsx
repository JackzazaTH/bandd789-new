'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export const BlueprintHouse: React.FC = () => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto cursor-crosshair"
      whileHover={{ scale: 1.1, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg viewBox="0 0 200 150" className="w-full h-auto filter drop-shadow-xl">
        {/* House Outline - Black */}
        <motion.path
          d="M20 80 L100 20 L180 80 L180 140 L20 140 Z"
          fill="transparent"
          stroke="#1f2937" 
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        {/* Roof Inner Line - Gray Dashed */}
        <motion.path
          d="M35 80 L100 32 L165 80"
          fill="transparent"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
        {/* Door - Red Accent */}
        <motion.path
          d="M85 140 L85 100 L115 100 L115 140"
          fill="rgba(220, 38, 38, 0.1)"
          stroke="#dc2626" 
          strokeWidth="2.5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
        {/* Window Left - Black */}
        <motion.rect
          x="40" y="90" width="30" height="30"
          fill="transparent"
          stroke="#1f2937"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
        {/* Window Right - Black */}
        <motion.rect
          x="130" y="90" width="30" height="30"
          fill="transparent"
          stroke="#1f2937"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8, duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
        {/* Measurements / Blueprint lines - Red Dashed */}
        <motion.line
          x1="10" y1="145" x2="190" y2="145"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="2 2"
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: { scaleX: 1, opacity: 1, transition: { duration: 1.5, delay: 2 } }
          }}
          initial="hidden"
          animate="visible"
        />
         <motion.line
          x1="195" y1="140" x2="195" y2="20"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="2 2"
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1, transition: { duration: 1.5, delay: 2.2 } }
          }}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
};