'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { TextRevealAbout } from "@/components/ui/text-reveal-about";

const newCoreValues = [
  {
    title: 'Qualité',
    text: 'Priorisez la qualité dans tout ce que vous faites, en veillant à ce que les produits et services soient de la plus haute qualité possible.',
    image: '/conseil_strategie.png',
    imagePosition: 'left',
  },
  {
    title: 'Professionnalisme',
    text: 'Montrez votre professionnalisme en étant toujours à l\'heure, en respectant les délais et en maintenant une communication claire et ouverte avec vos clients.',
    image: '/relation_medias.png',
    imagePosition: 'right',
  },
  {
    title: 'Intégrité',
    text: 'Agissez de manière éthique et transparente en toutes circonstances, en respectant les lois et les normes en vigueur.',
    image: '/relation_publique.png',
    imagePosition: 'left',
  },
  {
    title: 'Innovation',
    text: 'Continuer à explorer de nouvelles idées et techniques pour améliorer la qualité et l\'efficacité de vos produits et services.',
    image: '/social_digital.png',
    imagePosition: 'right',
  },
];



const CoreValuesSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="w-full my-20 py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-gradient">Nos Valeurs</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>
        <div className="space-y-20 md:space-y-28">
          {newCoreValues.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${value.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: value.imagePosition === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={`${value.image}`}
                  alt={value.title}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-3xl font-bold text-accent">{value.title}</span>

                <TextRevealAbout>{value.text}</TextRevealAbout>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

CoreValuesSection.displayName = 'CoreValuesSection';

export default CoreValuesSection;