"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Target, value: "300+", label: "Projects Completed" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Award, value: "25+", label: "Awards Won" },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 gradient-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <span className="text-balance">Crafting Digital Excellence Since 2019</span>
            </h2>
            <p
              className={`text-xl text-muted-foreground mb-8 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-pretty">
                At omocto.ma, we believe in the power of exceptional design and innovative technology to transform
                businesses. Our team of passionate creators and developers work tirelessly to bring your vision to life.
              </span>
            </p>
            <p
              className={`text-lg text-muted-foreground mb-8 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-pretty">
                From startups to enterprise clients, we've helped brands across industries establish their digital
                presence and achieve remarkable growth through strategic design and development.
              </span>
            </p>
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
