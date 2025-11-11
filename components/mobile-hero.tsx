"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function MobileHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden md:hidden">
      {/* Mobile Background - Static image instead of video for performance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.jpg?height=1920&width=1080&query=cinematic agency creative work dark moody mobile"
          alt="Creative agency work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Mobile Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">omocto.ma</div>
        <Button
          variant="outline"
          size="sm"
          className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
        >
          Menu
        </Button>
      </nav>

      {/* Mobile Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center">
          {/* Mobile Headline */}
          <h1
            className={`text-3xl font-bold text-white mb-4 leading-tight ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span className="text-balance">
              Crafting Digital
              <br />
              <span className="text-accent">Experiences</span>
            </span>
          </h1>

          {/* Mobile Subheadline */}
          <p className={`text-base text-white/80 mb-6 leading-relaxed ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <span className="text-pretty">
              We transform bold ideas into exceptional digital solutions that drive results.
            </span>
          </p>

          {/* Mobile CTA */}
          <div className={`${isLoaded ? "animate-scale-in" : "opacity-0"}`}>
            <Button className="bg-accent hover:bg-accent/90 text-black font-semibold px-6 py-3 rounded-full w-full max-w-xs">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-5 h-5 text-white/60 animate-bounce-slow" />
      </div>
    </div>
  )
}
