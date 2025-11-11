'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { slugify } from '@/lib/utils';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

// Assuming servicesData has this structure from lib/data.ts
interface Service {
  id: number;
  src: StaticImageData | string;
  alt: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
      whileHover={{ y: -8 }}
    >
      <Link href={`/services/${slugify(service.alt)}`}>
        <div 
          className="bg-card rounded-lg shadow-lg overflow-hidden h-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <ProgressiveBlur
            blurIntensity={0.5}
            className="w-full aspect-square overflow-hidden"
          >
            <motion.div
              className="w-full h-full"
              style={{ originX: '50%', originY: '50%' }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={service.src}
                alt={service.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ProgressiveBlur>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gold-gradient mb-2">{service.alt}</h3>
            <p>{service.description}</p>
          </div>
          <motion.div
            className="absolute w-28 h-28 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl pointer-events-none"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Voir
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
