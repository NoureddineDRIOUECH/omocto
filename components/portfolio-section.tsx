"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Plateforme E-Commerce",
    category: "Développement Web",
    description: "Solution e-commerce moderne avec analyses avancées et expérience utilisateur fluide",
    image: "/placeholder.jpg?height=400&width=600&query=modern ecommerce website dark theme",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Application Bancaire Mobile",
    category: "Développement Mobile",
    description: "Application bancaire sécurisée et intuitive avec authentification biométrique",
    image: "/placeholder.jpg?height=400&width=600&query=mobile banking app interface dark",
    tags: ["React Native", "TypeScript", "Firebase"],
  },
  {
    title: "Système d'Identité de Marque",
    category: "Conception",
    description: "Système complet d'identité de marque et de design pour une startup technologique",
    image: "/placeholder.jpg?height=400&width=600&query=brand identity design system dark",
    tags: ["Figma", "Branding", "UI/UX"],
  },
  {
    title: "Tableau de Bord SaaS",
    category: "Développement Web",
    description: "Tableau de bord analytique avec visualisation de données en temps réel et rapports",
    image: "/placeholder.jpg?height=400&width=600&query=saas dashboard analytics dark theme",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
  },
  {
    title: "Application de Livraison de Nourriture",
    category: "Développement Mobile",
    description: "Plateforme complète de livraison de nourriture avec suivi en temps réel",
    image: "/placeholder.jpg?height=400&width=600&query=food delivery app interface dark",
    tags: ["Flutter", "Firebase", "Maps API"],
  },
  {
    title: "Site Web d'Entreprise",
    category: "Développement Web",
    description: "Site web d'entreprise professionnel avec intégration CMS",
    image: "/placeholder.jpg?height=400&width=600&query=corporate website dark professional",
    tags: ["WordPress", "PHP", "MySQL"],
  },
]

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("All")

  const categories = ["Tous", "Développement Web", "Développement Mobile", "Conception"]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("portfolio")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <span className="text-balance">Nos Travaux</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-pretty">
              Découvrez notre portfolio de projets réussis qui mettent en valeur notre expertise et notre créativité
            </span>
          </p>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-accent text-accent-foreground"
                    : "border-border text-foreground hover:border-accent"
                }
              >
                {category === "All" ? "Tous" : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
