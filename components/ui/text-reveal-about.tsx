"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
    children: string
}

export const TextRevealAbout: FC<TextRevealProps> = ({ children, className }) => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "start start"],
    })

    if (typeof children !== "string") {
        throw new Error("TextRevealAbout: children must be a string")
    }

    const words = children.split(" ")

    return (
        <div ref={targetRef} className={cn("relative z-0 ", className)}>
            <div
                className={
                    "sticky top-0  flex max-w-3xl items-center bg-transparent  py-[1rem]"
                }
            >
        <span
            className={
                "flex flex-wrap text-xl font-bold text-white/20 md:text-2xl lg:text-3xl xl:text-4xl dark:text-white/20"
            }
        >
          {words.map((word, i) => {
              const start = i / words.length
              const end = start + 1 / words.length
              return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                      {word}
                  </Word>
              )
          })}
        </span>
            </div>
        </div>
    )
}

interface WordProps {
    children: ReactNode
    progress: MotionValue<number>
    range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
          style={{ opacity: opacity }}
          className={"text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
    )
}
