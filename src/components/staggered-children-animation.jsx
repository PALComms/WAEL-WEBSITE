'use client';
import { motion } from 'framer-motion';

export const StaggeredChildren = ({ 
  children, 
  delay = 0, 
  stagger = 0.1,
  className = '',
  once = true,
  amount = 0.2
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  yOffset = 20,
  duration = 0.6,
  className = '' 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { 
            duration,
            ease: [0.16, 0.77, 0.47, 0.97] 
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};