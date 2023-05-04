import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  classNames?: string;
}

export const ApparitionAnimation: FC<Props> = ({ children, classNames }) => {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };

  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible', { duration: 0.4 });
    }
  }, [control, inView]);

  return (
    <motion.div
      className={classNames}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};
