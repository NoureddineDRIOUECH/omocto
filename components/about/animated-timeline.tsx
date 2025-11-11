'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    year: '2020',
    title: 'The Genesis',
    description: 'Omocto was born from a shared vision to create digital experiences that are not only beautiful but also meaningful. We started as a small team of passionate designers and developers.',
  },
  {
    year: '2022',
    title: 'First Major Project',
    description: 'We launched our first major project, a complex web application for a leading tech startup. This project set the standard for our commitment to quality and innovation.',
  },
  {
    year: '2024',
    title: 'Expanding Horizons',
    description: 'Our team grew, and so did our ambitions. We expanded our services to include branding and mobile app development, helping more clients to achieve their goals.',
  },
  {
    year: 'Today',
    title: 'Future Forward',
    description: 'We continue to push the boundaries of digital creativity, exploring new technologies and ideas to create the future of web experiences. The best is yet to come.',
  },
];

const TimelineItem = ({ event, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -50% 0px"
  });

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className="w-1/2 p-6 bg-card rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gold-gradient">{event.title}</h3>
          <p className="text-lg font-bold mb-2">{event.year}</p>
          <p>{event.description}</p>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full z-10"></div>
    </div>
  );
};

const AnimatedTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
