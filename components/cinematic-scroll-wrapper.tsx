'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CinematicScrollWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity, scale, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default CinematicScrollWrapper;
