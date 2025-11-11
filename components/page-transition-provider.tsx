'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { TextReveal } from '@/components/ui/text-reveal';

const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Format pathname to a readable string
  const getPageName = (path: string) => {
    if (path === '/') return 'OMOCTO';
    const name = path.split('/').pop()?.replace(/-/g, ' ') || '';
    return name.toUpperCase();
  };

  const pageName = getPageName(pathname);

  const transitionVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.5 },
    },
    exit: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {children}

        <motion.div
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-background"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={textVariants}
            className="flex flex-col items-center"
          >
            <TextReveal
              variant="slideLeft"
              className="text-7xl font-extrabold text-foreground font-['Inter_Display', 'Inter_Display_Placeholder', 'sans-serif']"
              staggerDelay={0.05}
              delay={0.7}
              startOnView={false}
            >
              {pageName}
            </TextReveal>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="text-2xl font-bold text-foreground mt-2"
            >
              OMOCTO
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionProvider;
