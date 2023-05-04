import { GlobalContext } from '@/Contexts/GlobalContext/GlobalContext';
import { motion, useAnimation } from 'framer-motion';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  classNames?: string;
  thresholdValue?: number;
}

export const AnimationSide: FC<Props> = ({
  children,
  classNames,
  thresholdValue,
}) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { ref, inView } = useInView({ threshold: thresholdValue || 0.2 });
  const animation = useAnimation();
  const { isMobile } = useContext(GlobalContext);

  useEffect(() => {
    if (!animationPlayed) {
      if (inView) {
        animation.start({
          x: 0,
          transition: {
            type: 'spring',
            duration: 1.1,
            bounce: 0.42,
          },
        });
        setAnimationPlayed(true);
      } else animation.start({ x: isMobile ? -220 : -520 });
    }
  }, [inView, animationPlayed, animation, isMobile]);
  return (
    <motion.div animate={animation} className={classNames} ref={ref}>
      {children}
    </motion.div>
  );
};
