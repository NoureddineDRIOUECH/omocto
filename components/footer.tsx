'use client'
import { Facebook, Twitter, Instagram, Linkedin, Github,  Mail, Phone, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Gravity, { MatterBody } from "@/components/fancy/physics/gravity";

// --- Data ---
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

const footerNav = {
  services: [
    { name: "Conseil et Stratégie", href: "#" },
    { name: "Relations médias", href: "#" },
    { name: "Relations Publiques", href: "#" },
    { name: "Social Media et Digital", href: "#" },
  ],
  company: [
    { name: "À Propos de Nous", href: "#" },
    { name: "Notre Équipe", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] },
  },
};

// --- Sub-components ---

const FooterCompanyInfo = () => (
  <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-center md:items-start">
    <h2 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">omocto.ma</h2>
    <p className="text-gray-400 leading-relaxed mb-8 max-w-xs text-center md:text-left">
      Créer des expériences numériques qui inspirent et transforment.
    </p>
    <div className="flex items-center justify-center md:justify-start space-x-5">
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          aria-label={link.name}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.2, color: '#fff' }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <link.icon className="w-7 h-7" />
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const FooterLinkColumn = ({ title, links }) => (
  <motion.div variants={itemVariants}>
    <h3 className="text-lg font-semibold mb-5 tracking-wider uppercase text-gray-300">{title}</h3>
    <ul className="space-y-4">
      {links.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 group">
            {item.name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FooterContact = () => (
  <motion.div variants={itemVariants}>
    <h3 className="text-lg font-semibold mb-5 tracking-wider uppercase text-gray-300">Contact</h3>
    <div className="space-y-4 text-gray-400">
      <p className="flex items-center justify-center md:justify-start hover:text-white transition-colors"><MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-accent" /> Casablanca, Maroc</p>
      <p className="flex items-center justify-center md:justify-start hover:text-white transition-colors"><Mail className="w-5 h-5 mr-3 flex-shrink-0 text-accent" /> Contact@omocto.ma</p>
      <p className="flex items-center justify-center md:justify-start hover:text-white transition-colors"><Phone className="w-5 h-5 mr-3 flex-shrink-0 text-accent" /> +212 5 22 29 56 26</p>
    </div>
  </motion.div>
);

// --- Main Component ---

const OmoctoScrollText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const text = "OMOCTO";

  return (
    <div ref={ref} className="flex items-center justify-center overflow-hidden h-[600px] -mt-60">
      <div className="w-full h-full">
        {isInView && (
          <Gravity gravity={{ x: 0, y: 0.8 }} className="w-full h-full">
            {text.split("").map((char, index) => (
              <MatterBody
                key={index}
                matterBodyOptions={{ friction: 0.2, restitution: 0.8 }}
                x={`${15 + index * 12}%`}
                y="40%"
              >
                <div className="text-[8rem] md:text-[10rem] lg:text-[15rem] font-bold select-none leading-none bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-white/70 tracking-tighter cursor-grab">
                  {char}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        )}
      </div>
    </div>
  );
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="relative text-white pt-24  overflow-hidden h-screen flex flex-col justify-center">
      {/* Background Aurora Effect */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-40">
        <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[10%] h-[800px] w-[140%] rounded-full bg-gradient-to-r from-accent/80 via-gold-600/50 to-yellow-900/70 blur-3xl animate-aurora"></div>
      </div>
      <style jsx>{`
        @keyframes aurora {
          0% { transform: translateX(-15%) rotate(0deg); }
          50% { transform: translateX(15%) rotate(3deg); }
          100% { transform: translateX(-15%) rotate(0deg); }
        }
      `}</style>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 text-center md:text-left">
          <FooterCompanyInfo />
          <FooterLinkColumn title="Services" links={footerNav.services} />
          <FooterLinkColumn title="Entreprise" links={footerNav.company} />
          <FooterContact />
        </div>

        <motion.div
          className="border-t border-white/10 pt-10 mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 1.5, duration: 1.5 } } : {}}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} omocto.ma. Tous droits réservés.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
              <Link href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <OmoctoScrollText />
    </footer>
  )
}