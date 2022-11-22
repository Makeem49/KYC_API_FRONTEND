import React from 'react';
import { motion } from 'framer-motion';

const SlideLeftContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0%)' }}
      exit={{ transform: 'translateX(100%)' }}
      transition={{ duration: 0.2 }}
      className='w-full h-full relative'>
      {children}
    </motion.div>
  );
};

export default SlideLeftContainer;
