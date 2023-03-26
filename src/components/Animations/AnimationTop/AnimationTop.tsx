import { motion, useAnimation } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  classNames?: string;
  thresholdValue?: number;
}

export const AnimationTop: FC<Props> = ({
  children,
  classNames,
  thresholdValue,
}) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { ref, inView } = useInView({ threshold: thresholdValue || 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (!animationPlayed) {
      if (inView) {
        animation.start({
          y: 0,
          transition: {
            type: 'spring',
            duration: 1,
            bounce: 0.4,
          },
        });
        setAnimationPlayed(true);
      } else animation.start({ y: 150 });
    }
  }, [inView, animationPlayed, animation]);
  return (
    <motion.div animate={animation} className={classNames} ref={ref}>
      {children}
    </motion.div>
  );
};
