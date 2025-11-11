'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from "@/components/hero-section"
import AgencySection from "@/components/agency-section";
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CinematicScrollWrapper from "@/components/cinematic-scroll-wrapper";
import TestimonialsSection from "@/components/testimonials";

const WowScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const [top, bottom] = React.Children.toArray(children);

  const topScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const topOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const bottomOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={scrollRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div style={{ scale: topScale, opacity: topOpacity }} className="absolute inset-0">
          {top}
        </motion.div>
        <motion.div style={{ scale: bottomOpacity }} className="absolute inset-0">
          {bottom}
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      {/*<CinematicScrollWrapper>*/}
        <AgencySection />
      {/*</CinematicScrollWrapper>*/}
      {/*<CinematicScrollWrapper>*/}
        <ServicesSection />
      {/*</CinematicScrollWrapper>*/}
      {/*<CinematicScrollWrapper>*/}
        <ClientsSection />
      <TestimonialsSection/>
      {/*</CinematicScrollWrapper>*/}
      {/*<WowScrollWrapper>*/}
        <ContactSection />
      {/*</WowScrollWrapper>*/}
    </main>
  )
}