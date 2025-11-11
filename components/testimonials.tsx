"use client";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Marquee from "@/components/ui/marquee";

const testimonials = [
    {
        name: "Jonathan Yombo",
        position: "Ingénieur Logiciel",
        text: "Tailus est vraiment extraordinaire et très pratique, pas besoin de se casser la tête. Une vraie mine d'or.",
        img: "https://i.pravatar.cc/150?img=41",
    },
    {
        name: "Yves Kalume",
        position: "GDE - Android",
        text: "Sans aucune expérience en webdesign, j'ai redessiné tout mon site web en quelques minutes avec tailwindcss grâce à Tailus.",
        img: "https://i.pravatar.cc/150?img=42",
    },
    {
        name: "Yucel Faruksahan",
        position: "Créateur de Tailkits",
        text: "Tailus redéfinit le standard du web design, avec ces blocs il offre un moyen facile et efficace pour ceux qui aiment la beauté mais manquent de temps pour la mettre en œuvre. Je ne peux que recommander cette merveille incroyable.",
        img: "https://i.pravatar.cc/150?img=43",
    },
    {
        text: "Fazier déchire... nous avons eu nos meilleurs jours et vous avez généré le plus de trafic sur le site ce mois-ci, et continuez à générer des ventes pour SvelteLaunch.",
        name: "Travis Mathis",
        position: "Fondateur de SvelteLaunch",
        img: "https://i.pravatar.cc/150?img=44",
    },
    {
        text: "J'ai lancé mon offre d'agence à 500K en avril. Le soutien de la communauté a dépassé toutes mes attentes.",
        name: "Paul Xue",
        position: "Fondateur de Spacestation Labs",
        img: "https://i.pravatar.cc/150?img=45",
    },
    {
        text: "Génial ! Fazier est génial !",
        name: "Tyler Shukert",
        position: "Ingénieur DevRel chez Supabase",
        img: "https://i.pravatar.cc/150?img=46",
    },
    {
        text: "Démarrage rapide sur Fazier... Une alternative de premier ordre à ProductHunt. 14,5% de mon trafic en provient. Je le recommande vivement !",
        name: "Nathan Chua",
        position: "Fondateur de Snipowl",
        img: "https://i.pravatar.cc/150?img=47",
    },
    {
        text: "Nous a définitivement aidés à faire plus de ventes !",
        name: "Tim White",
        position: "VP Marketing, Fondateur de WildSEO",
        img: "https://i.pravatar.cc/150?img=48",
    },
    {
        text: "Fazier m'a aidé à obtenir beaucoup de trafic et de retours sur mes produits. Merci pour le projet !",
        name: "Serg Karakhanyan",
        position: "Fondateur de Larafast",
        img: "https://i.pravatar.cc/150?img=49",
    },
    {
        text: "J'ai lancé mon offre d'agence à 500K en avril. Le soutien de la communauté a dépassé toutes mes attentes.",
        name: "Paul Xue",
        position: "Fondateur de Spacestation Labs",
        img: "https://i.pravatar.cc/150?img=52",
    },
    {
        text: "Génial ! Fazier est génial !",
        name: "Tyler Shukert",
        position: "Ingénieur DevRel chez Supabase",
        img: "https://i.pravatar.cc/150?img=53",
    },
    {
        text: "Démarrage rapide sur Fazier... Une alternative de premier ordre à ProductHunt. 14,5% de mon trafic en provient. Je le recommande vivement !",
        name: "Nathan Chua",
        position: "Fondateur de Snipowl",
        img: "https://i.pravatar.cc/150?img=54",
    },
    {
        text: "Nous a définitivement aidés à faire plus de ventes !",
        name: "Tim White",
        position: "VP Marketing, Fondateur de WildSEO",
        img: "https://i.pravatar.cc/150?img=55",
    },
    {
        text: "Fazier m'a aidé à obtenir beaucoup de trafic et de retours sur mes produits. Merci pour le projet !",
        name: "Serg Karakhanyan",
        position: "Fondateur de Larafast",
        img: "https://i.pravatar.cc/150?img=56",
    },
    {
        text: "Fazier déchire... nous avons eu nos meilleurs jours et vous avez généré le plus de trafic sur le site ce mois-ci, et continuez à générer des ventes pour SvelteLaunch.",
        name: "Travis Mathis",
        position: "Fondateur de SvelteLaunch",
        img: "https://i.pravatar.cc/150?img=44",
    },
    {
        text: "J'ai lancé mon offre d'agence à 500K en avril. Le soutien de la communauté a dépassé toutes mes attentes.",
        name: "Paul Xue",
        position: "Fondateur de Spacestation Labs",
        img: "https://i.pravatar.cc/150?img=45",
    },
    {
        text: "Génial ! Fazier est génial !",
        name: "Tyler Shukert",
        position: "Ingénieur DevRel chez Supabase",
        img: "https://i.pravatar.cc/150?img=46",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
            <div className="text-center space-y-4 pb-16 mx-auto max-w-4xl">
                <Badge>TÉMOIGNAGES</Badge>
                <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
                    Explorez l'Avenir de l'Innovation
                </h2>
                <p className="text-xl text-muted-foreground pt-1">
                    Dans un domaine où l'imagination rencontre la technologie, notre plateforme favorise
                    l'innovation, inspire la créativité et permet à chaque individu de
                    transformer leur vision en réalité.
                </p>
            </div>
            <div className="relative mt-6 max-h-screen overflow-hidden">
                <style>
                    {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes marquee-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 20s linear infinite;
          }
        `}
                </style>
                <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
                    {Array(Math.ceil(testimonials.length / 3))
                        .fill(0)
                        .map((_, i) => (
                            <Marquee
                                vertical
                                reverse={i === 0 || i === 3}
                                key={i}
                                className={cn({
                                    "[--duration:30s]": i === 0,
                                    "[--duration:31s]": i === 1,
                                    "[--duration:32s]": i === 2,
                                    "[--duration:33s]": i === 3,
                                })}
                            >
                                {testimonials
                                    .slice(i * 3, (i + 1) * 3)
                                    .map((testimonial, idx) => (
                                        <div key={idx} className="flex justify-center min-w-full">
                                            <TestimonialCard
                                                name={testimonial.name}
                                                position={testimonial.position}
                                                text={testimonial.text}
                                                img={testimonial.img}
                                            />
                                        </div>
                                    ))}
                            </Marquee>
                        ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
            </div>
        </section>
    );
}

function TestimonialCard({
                             name,
                             position,
                             text,
                             img,
                         }: {
    name: string;
    position: string;
    text: string;
    img: string;
}) {
    return (
        <div className="group p-6 ring-1 ring-primary rounded-2xl shadow-xl text-card-foreground hover:bg-accent break-inside-avoid min-w-full">
            <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                    <Avatar img={img} alt={name} />
                    <div className="flex flex-col">
                        <h3 className="font-medium text-foreground ">{name}</h3>
                        <span className="block text-sm text-muted-foreground group-hover:text-black">
              {position}
            </span>
                    </div>
                </div>
                <blockquote className="mt-3">
                    <p className="text-muted-foreground group-hover:text-black">{text}</p>
                </blockquote>
            </div>
        </div>
    );
}

function Avatar({ img, alt }: { img: string; alt: string }) {
    return (
        <div className="w-12 h-12">
            <img
                className="h-full w-full rounded-full object-cover"
                src={img}
                alt={alt}
                loading="lazy"
                width={48}
                height={48}
            />
        </div>
    );
}

