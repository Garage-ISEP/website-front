import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const PagesAnimations: FC<Props> = ({ children }) => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };
  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : undefined}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
