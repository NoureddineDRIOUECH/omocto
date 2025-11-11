"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- TextRevealAbout Component ---
export const TextReveal = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const words = children.split(" ");

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      aria-label={children}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ display: "inline-block", willChange: "transform, opacity", paddingRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};


// --- Shuffle Component ---
export const Shuffle = ({ children }: { children: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [shuffledText, setShuffledText] = useState(children);

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;

    const animateShuffle = () => {
        const text = children.toUpperCase();
        let completedChars = 0;
        let frame = 0;

        const shuffle = () => {
            const newText = text
                .split("")
                .map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < completedChars) {
                        return text[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setShuffledText(newText);

            if (completedChars < text.length) {
                frame++;
                if (frame % 3 === 0) { // Control the speed of reveal
                    completedChars++;
                }
                animationFrameId = requestAnimationFrame(shuffle);
            } else {
                setShuffledText(text);
            }
        };
        
        timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(shuffle);
        }, 200); // Initial delay before starting
    };

    animateShuffle();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isInView, children]);

  return <span ref={ref}>{shuffledText}</span>;
};