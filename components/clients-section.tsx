"use client";
'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LOGOS = [
  { src: "https://omocto.ma/wp-content/uploads/2023/11/24-300x250.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/23-300x250.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/22-300x250.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/21-300x250.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/20.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/19.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/18.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/17.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/8.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/7.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/6.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/5.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/16.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/15.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/14.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/13.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/12.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/11.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/10.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/9.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/2.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/1.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/3.png", alt: "" },
  { src: "https://omocto.ma/wp-content/uploads/2023/11/4.png", alt: "" }
];

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const ClientsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const firstRowLogos = LOGOS.slice(0, 8);
  const secondRowLogos = LOGOS.slice(8, 16);
  const thirdRowLogos = LOGOS.slice(16, 24);

  return (
    <motion.section
      ref={targetRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className=" rounded-xl"
    >
      <div className="py-24 sm:py-32">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative mt-16 flex flex-col gap-8 overflow-hidden"
        >
          <motion.div style={{ x }}>
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {firstRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-top-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
              {firstRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-top-dup-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ x: x2 }}>
            <motion.div
              className="flex gap-8"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {secondRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-middle-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
              {secondRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-middle-dup-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ x }}>
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {thirdRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-bottom-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
              {thirdRowLogos.map((logo, index) => (
                <div
                  className="group flex h-40 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-accent/80 p-4 transition-all duration-300 hover:border-white/50 hover:bg-accent/90"
                  key={`logo-bottom-dup-${index}`}
                >
                  <img
                    alt={logo.alt}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={logo.src}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;