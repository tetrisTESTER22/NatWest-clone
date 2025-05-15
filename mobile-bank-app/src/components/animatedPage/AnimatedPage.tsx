// components/animatedPage/AnimatedPage.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigationDirection } from '../../context/NavigationDirectionContext';

export default function AnimatedPageWrapper({ children }: { children: ReactNode }) {
  const { direction } = useNavigationDirection();

  const variants = {
    initial: { opacity: 0, x: direction === 'forward' ? 250 : -250 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === 'forward' ? -250 : 250 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
