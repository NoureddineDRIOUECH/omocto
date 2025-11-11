'use client';
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const revealVariants2 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -40,
      opacity: 0,
    },
  };
  const revealVariants3 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      ref={heroRef}
    >
      {/* Amber Glow Background */}
      <TimelineContent
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff00 40%, #13131300 100%)
      `,
          backgroundSize: "100% 100%",
        }}
        animationNum={2}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />
      <TimelineContent
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]"
        animationNum={3}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-accent  text-sm font-semibold uppercase mb-6 flex items-center justify-center gap-2">
          About
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold  mb-6">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.2}
            staggerFrom="last"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 30,
              delay: 0.2,
            }}
            containerClassName=" leading-[120%] text-center  justify-center items-center"
          >
            {
              "A Legacy of Excellence, How Our Dedication Fuels Everything We Do"
            }
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className=" text-center sm:text-lg text-sm mb-8 leading-relaxed"
        >
          From day one, our mission has been to create solutions that inspire,
          empower, and make a difference. With a commitment to quality and
          creativity.
        </TimelineContent>

        <TimelineContent
          as="button"
          animationNum={1}
          customVariants={revealVariants3}
          timelineRef={heroRef}
          className="bg-accent hover:bg-accent shadow-lg shadow-accent border border-accent flex w-fit mx-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-full cursor-pointer"
        >
          Explore Our Services <ArrowRight className="" />
        </TimelineContent>
      </div>
      <div className="max-w-6xl mx-auto pt-20">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team working together"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </section>
  );
}
