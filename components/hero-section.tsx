"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { useRef } from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=350&q=60",
  },
];

function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const scrollRef = useRef<HTMLDivElement>(null);



  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const opacityVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section
      ref={scrollRef}
      className="relative h-screen bg-black"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Video 1 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://omocto.ma/wp-content/uploads/2023/11/mixkit-cameraman-filming-in-the-city-22016-large.mp4"
              // src="https://omocto.ma/wp-content/uploads/2023/11/mixkit-business-people-at-work-meeting-4809-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Video 2 */}
        {/*<motion.div*/}
        {/*  style={{ clipPath: clipPathV2 }}*/}
        {/*  className="absolute top-0 left-0 w-full h-full"*/}
        {/*>*/}
        {/*  <video*/}
        {/*    autoPlay*/}
        {/*    loop*/}
        {/*    muted*/}
        {/*    playsInline*/}
        {/*    className="absolute top-0 left-0 w-full h-full object-cover"*/}
        {/*  >*/}
        {/*    <source*/}
        {/*      src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"*/}
        {/*      type="video/mp4"*/}
        {/*    />*/}
        {/*    Your browser does not support the video tag.*/}
        {/*  </video>*/}
        {/*</motion.div>*/}

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        {/* Sticky Title for Video 2 */}
        {/*<motion.div*/}
        {/*  style={{ opacity: titleOpacity, x: titleX }}*/}
        {/*  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 px-8 md:px-16"*/}
        {/*>*/}
        {/*  <h2 className="text-4xl md:text-6xl font-bold text-[#BD9452]">*/}
        {/*    Mobile Innovation*/}
        {/*  </h2>*/}
        {/*</motion.div>*/}

        {/* Initial UI Content */}
        <motion.div
          className="relative z-10 w-full h-full flex flex-col"
        >
          {/* Header */}


          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto xl:px-0 px-5 flex-1 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <article className="text-white space-y-4">
<h1 className="sm:text-5xl text-3xl lg:text-6xl font-semibold leading-tight">
                    <VerticalCutReveal
                      splitBy="words"
                      staggerDuration={0.15}
                      staggerFrom="first"
                      reverse={true}
                      containerClassName="justify-start"
                      transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0.8 }}
                    >
                      Omocto: Repenser les règles du jeu de la communication.
                    </VerticalCutReveal>
                  </h1>
                  <TimelineContent
                    as="p"
                    animationNum={2}
                    timelineRef={scrollRef}
                    customVariants={revealVariants}
                    className="sm:text-xl text-lg text-gray-200 leading-relaxed max-w-lg"
                  >
                    Forte d'une expertise approfondie et d'une solide expérience numérique, nous offrons du sur mesure en visibilité médiatique.
                  </TimelineContent>
                </article>
                <TimelineContent
                  as="div"
                  animationNum={3}
                  timelineRef={scrollRef}
                  customVariants={revealVariants}
                >
                  <button className="bg-black text-white border border-[#BD9452] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#BD9452] hover:text-black transition-colors duration-300 shadow-lg pulsating-glow">
                    Découvrir Nos Travaux
                  </button>
                </TimelineContent>
              </div>

              {/* Right Content - Testimonial Card */}
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={scrollRef}
                customVariants={opacityVariants}
                className="lg:mt-24"
              >
                <LiquidGlassCard
                  glowIntensity="md"
                  shadowIntensity="sm"
                  borderRadius="12px"
                  blurIntensity="sm"
                  className="p-4 ml-auto sm:w-[28rem] w-full"
                >
                  <div className="flex items-center gap-10 mb-6">
                    <div className="flex flex-row items-center justify-start">
                      <AnimatedTooltip items={people} />
                    </div>
                    <span className="text-white font-medium text-sm">
                      Approuvé par plus de 80 startups à forte croissance
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10">
                    <blockquote className="text-white text-sm leading-relaxed">
                      "En seulement 6 semaines, Omocto a transformé notre MVP en une plateforme moderne et intuitive avec une identité claire, nous aidant à attirer les bons clients et investisseurs."
                    </blockquote>
                    <cite className="text-white pt-2 inline-block font-semibold">
                      Un Client Satisfait
                    </cite>
                  </div>
                </LiquidGlassCard>
              </TimelineContent>
            </div>
          </div>

          {/* Company Logos Section */}
          <div className="mt-auto xl:px-0 px-5 mb-12 text-white max-w-7xl mx-auto relative z-10 w-full">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center space-x-2">
                <span className="text-lg">5.0</span>
                <span className="">évaluation sur Clutch</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#BD9452] rounded-sm"></div>
                  ))}
                </div>
              </div>
              <div className="text-lg font-semibold">Nation</div>
              <div className="text-lg font-semibold">Jumexo</div>
              <div className="text-lg font-semibold">Revocalize</div>
              <div className="text-lg font-semibold">NARADA</div>
              <div className="text-lg font-semibold">AgentBoost</div>
            </div>
          </div>
        </motion.div>



        <ProgressiveBlur
          className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-full z-20"
          blurIntensity={0.5}
        />
      </div>
    </section>
  );
}

export default HeroSection;
