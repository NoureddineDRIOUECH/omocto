'use client';

import { useScroll, useTransform, motion, useInView, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

import { servicesData, ImageData } from '@/lib/data';

const InfoCard = () => {
  return (
    <div className="relative h-[70vh] w-[50vw] shrink-0 flex flex-col items-center gap-8">
      <div className="flex h-1/2 w-full items-center justify-center bg-accent p-8 text-center">
        <h2 className="max-w-sm text-4xl font-bold text-accent-foreground lg:text-5xl">
          Découvrez nos services
        </h2>
      </div>
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-black p-8 text-center text-white">
        <p className="max-w-xs text-xl lg:text-2xl">
          POUR FAIRE APPEL À NOUS, COLLABORER OU JUSTE ALLER LUNCHER.
        </p>
        <a href="#" className="mt-8 rounded-full border border-white px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black">
          Contactez-nous
        </a>
      </div>
    </div>
  );
};

const ServiceCard = ({
  image,
  scrollYProgress,
  index,
}: {
  image: ImageData;
  scrollYProgress: MotionValue<number>;
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { root: null, margin: '0px -40% 0px -40%' });

  // User-scroll parallax for the entire vertical text block
  const yUser = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yParallax = useTransform(yUser, (v) => `${v}vh`);

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full  w-[80vw] shrink-0 flex items-center gap-8 p-8 overflow-hidden"
    >
      <div
        className="absolute top-0 z-0 h-full"
        style={{
          left: '-6.5rem',
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
        }}
      >
        <motion.div style={{ y: yParallax }}>
          <motion.div
            className="flex"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
          >
            <h1 className="text-[15rem] font-bold text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1px var(--accent)' }}>
              {image.alt}
            </h1>
            <h1 className="text-[15rem] font-bold text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1px var(--accent)' }}>
              {image.alt}
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Left side: Image */}
      <div className="w-2/3 h-[70vh] relative z-10">
        <motion.div
          className="h-full w-full rounded-lg p-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover rounded-md"
          />
        </motion.div>
      </div>

      {/* Right side: Text block */}
      <div className="w-1/3 flex flex-col justify-center relative z-10 bg-background">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-accent"
        >
          {image.alt}
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {image.description}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link href={`/services/${slugify(image.alt)}`} className="text-accent font-semibold group inline-block">
            <div className="inline-flex items-center justify-between border-2 border-accent p-4 transition-colors group-hover:bg-accent group-hover:text-black">
              <span className="text-lg">Voir le service</span>
              <ArrowUpRight className="h-8 w-8 ml-4" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const [scrollDistance, setScrollDistance] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = trackRef.current.offsetWidth;
        setScrollDistance(trackWidth - containerWidth);
      }
    };

    calculateScrollDistance();
    window.addEventListener('resize', calculateScrollDistance);
    return () => window.removeEventListener('resize', calculateScrollDistance);
  }, []);

  // Animate the horizontal scroll of the cards
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full items-center gap-12 px-8"
        >
          <InfoCard />
          {servicesData.map((image, index) => (
            <ServiceCard
              key={image.id}
              image={image}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
