'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import TextType from "@/components/ui/text-type";

export default function AgencySection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'], // Changed to 'end end' for a full-scroll animation
  });

  // Text column slides in from the right
  const textX = useTransform(scrollYProgress, [0.1, 0.4], ['100%', '0%']);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Staggered fade-in for text content
  const itemOpacity = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 1]);

  // Image reveal animation
  const imageScale = useTransform(scrollYProgress, [0, 0.15], [1.2, 1]);
  const imageClipPath = useTransform(
    scrollYProgress,
    [0, 0.15],
    [
      'inset(15% 15% 15% 15% round 30px)',
      'inset(0% 0% 0% 0% round 0px)',
    ],
  );

  // Background elements parallax
  const bgCircleY1 = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const bgCircleY2 = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-background">
      <motion.div
        className="sticky top-0 h-screen overflow-hidden bg-background"
      >
        <motion.div
          className="absolute inset-0 bg-grid-14 bg-grid-gold-500/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        {/* Background Elements */}
        <motion.div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"
            style={{ y: bgCircleY1 }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
            style={{ y: bgCircleY2 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full container mx-auto relative z-10">
          {/* Left Column - Image */}
          <div className="h-full flex items-center justify-center">
            <div className="relative w-full h-[80vh]">
              <motion.div
                className="w-full h-full overflow-hidden rounded-3xl shadow-2xl"
                style={{ clipPath: imageClipPath }}
              >
                <motion.img
                  src="/ourAgency.jpg"
                  alt="Espace de travail professionnel"
                  className="w-full h-full object-cover"
                  style={{ scale: imageScale }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            className="h-full flex items-center"
            style={{ x: textX, opacity: textOpacity }}
          >
            <div className="space-y-8 max-w-2xl">
              <motion.div
                style={{ opacity: itemOpacity(0.2, 0.3) }}
                className="space-y-2"

              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  Excellence et Innovation
                </motion.div>
                <h1 className="text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  Notre <span className="text-accent">Agence</span>
                </h1>
                <div className="w-20 h-1.5 bg-accent rounded-full" />
              </motion.div>

              {/* Text Reveal Animation */}
              <div className="overflow-hidden">
                <motion.h2
                  style={{
                    opacity: itemOpacity(0.3, 0.4),
                    y: useTransform(scrollYProgress, [0.3, 0.4], ['100%', '0%']),
                  }}
                  className="text-2xl font-semibold text-muted-foreground italic"
                >
                  Disponibilité, Réactivité, Pertinence
                </motion.h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
<p
        style={{
            opacity: itemOpacity(0.4, 0.5),
            y: useTransform(
                scrollYProgress,
                [0.4, 0.5],
                ['100%', '0%'],
            ),
        }}
    >
        {/*<strong className="text-foreground">Omocto</strong>*/}
    <TextType
        text={["Omocto est l'agence de communication qui repense les règles du jeu. Forte d'une expertise approfondie dans le domaine des relations médias et d'une très solide expérience numérique, Omocto vous offre du sur mesure en matière de visibilité médiatique. Peu importe que vous soyez une entité publique, une entreprise ou un particulier, nous vous proposerons toujours des solutions qui seront adaptées à tous vos besoins. Très complète, notre approche repose sur un diagnostic extrêmement précis de vos enjeux et attentes, mais aussi sur un conseil stratégique de grande qualité, en plus du déploiement d'un plan média à fort impact."]}
        typingSpeed={10}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        startAnimation={isInView}
    />
    </p>
              </div>

              <motion.div
                style={{ opacity: itemOpacity(0.6, 0.7) }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Découvrir Notre Travail
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}