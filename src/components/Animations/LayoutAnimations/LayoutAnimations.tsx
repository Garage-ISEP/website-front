import { motion } from 'framer-motion';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const LayoutAnimations: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
