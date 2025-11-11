'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const numWords = 5;
  const pauseBeats = 3; // Steps to pause at the end of the loop
  const animationInterval = 300; // Time in ms between each word animating

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % (numWords + pauseBeats));
    }, animationInterval);
    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    inactive: {
      backgroundPosition: "100% 0%",
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    active: {
      backgroundPosition: "0% 0%",
      scale: [1, 1.25, 1],
      y: [0, 20, 0],
      transition: {
        duration: 0.8,
        ease: "easeOut",
        times: [0, 0.4, 0.8]
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Curtain Panels */}
      <motion.div
        className="absolute top-0 left-0 w-[51%] h-full bg-black"
        exit={{ x: '-100%', transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] } }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[51%] h-full bg-black"
        exit={{ x: '100%', transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] } }}
      />

      {/* Text Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <div className="flex flex-col gap-10">
          {Array(5).fill("OMOCTO").map((word, index) => (
            <motion.h1
              key={index}
              variants={wordVariants}
              animate={activeIndex === index ? "active" : "inactive"}
              style={{
                backgroundImage: "linear-gradient(to right, #BD9452 50%, transparent 50%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                // @ts-ignore
                WebkitTextStroke: "1px #BD9452",
              }}
              className="text-6xl md:text-8xl font-extrabold uppercase"
            >
              {word}
            </motion.h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
