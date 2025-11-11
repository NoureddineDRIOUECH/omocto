'use client';
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap } from "lucide-react";
import { useRef } from "react";

export default function RethinkingSection() {
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
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <div
      className="max-w-6xl mx-auto py-20 px-4"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ref={heroRef}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Right side - Content */}
        <div className="flex-1">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold  mb-8"
          >
            We are{" "}
            <TimelineContent
              as="span"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="text-accent border-2 border-accent inline-block xl:h-16  border-dotted px-2 rounded-md"
            >
              rethinking
            </TimelineContent>{" "}
            vehicle charging to be more reliable and always you-first. Our
            goal is to continually raise the bar and{" "}
            <TimelineContent
              as="span"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="text-accent border-2 border-accent inline-block xl:h-16  border-dotted px-2 rounded-md"
            >
              challenge
            </TimelineContent>{" "}
            how things could{" "}
            <TimelineContent
              as="span"
              animationNum={3}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="text-accent border-2 border-accent inline-block xl:h-16 border-dotted px-2 rounded-md"
            >
              work for you.
            </TimelineContent>
          </TimelineContent>

          <div className="mt-12 flex gap-2 justify-between">
            <TimelineContent
              as="div"
              animationNum={4}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="mb-4 sm:text-xl text-xs"
            >
              <div className=" font-medium  mb-1 capitalize">
                We are Electra and we will
              </div>
              <div className="  font-semibold uppercase">
                take you further
              </div>
            </TimelineContent>

            <TimelineContent
              as="button"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="bg-accent gap-2 font-medium shadow-lg shadow-accent text-white h-12 px-4 rounded-full text-sm inline-flex items-center cursor-pointer"
            >
              <Zap fill="white" size={16} />
              About Electra
            </TimelineContent>
          </div>
        </div>
      </div>
    </div>
  );
}
