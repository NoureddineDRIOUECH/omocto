'use client'

import { Mail, MapPin, Phone, Send, Server, User, FileText } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { TextGenerateEffect } from "./ui/animated-textgenerate"
import { useToast } from "@/components/ui/use-toast"

// --- Form Schema ---
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
})

// --- Data ---
const contactInfo = [
  { icon: <Mail className="h-8 w-8 text-gold-500" />, title: "Email", detail: "Contact@omocto.ma" },
  { icon: <Phone className="h-8 w-8 text-gold-500" />, title: "Phone", detail: "+212 5 22 29 56 26" },
  { icon: <MapPin className="h-8 w-8 text-gold-500" />, title: "Location", detail: "20 Rue Moussa Ibn Noussair, Quartier Gauthier, Etage 4 Appt. N 6." },
]

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

// --- Sub-components ---

const AnimatedInput = ({ register, errors, name, placeholder, icon, type = "text", isTextarea = false }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div className="relative" variants={itemVariants}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500/50">{icon}</div>
      {isTextarea ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent pl-12 pr-4 py-3 text-white border-b-2 border-gold-500/20 focus:outline-none transition-colors duration-300 resize-none h-32 pt-3"
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent pl-12 pr-4 py-3 text-white border-b-2 border-gold-500/20 focus:outline-none transition-colors duration-300"
        />
      )}
      <svg className="absolute bottom-0 left-0 w-full h-px pointer-events-none" viewBox="0 0 100 1" preserveAspectRatio="none">
        <motion.path
          d="M 0 0.5 L 100 0.5"
          stroke="var(--gold-500)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isFocused ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </svg>
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </motion.div>
  )
}

const ContactInfoCard = ({ icon, title, detail, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
      className="flex items-center space-x-6 bg-black/50 border border-gold-500/10 p-6 rounded-2xl shadow-lg shadow-gold-500/5 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-gold-500/10 border border-gold-500/20">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gold-300/70 tracking-wider">{detail}</p>
      </div>
    </motion.div>
  )
}

// --- Main Component ---
export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    // Here you would typically send the data to your backend
    toast({
      title: "Message Envoyé !",
      description: "Nous avons bien reçu votre message et vous recontacterons sous peu.",
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden bg-black  text-white"
    >
      <div className="container relative mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <TextGenerateEffect
            words="Construisons Quelque Chose de Grand"
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-gold-500"
          />
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Nous serions ravis d'en discuter. Remplissez le formulaire ci-dessous pour nous contacter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-10" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="rounded-3xl border border-gold-500/20 bg-black/60 p-8 shadow-2xl shadow-gold-500/10 backdrop-blur-lg"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <AnimatedInput register={register} errors={errors} name="name" placeholder="Votre Nom" icon={<User />} />
              <AnimatedInput register={register} errors={errors} name="email" placeholder="Votre E-mail" icon={<Mail />} type="email" />
              <AnimatedInput register={register} errors={errors} name="subject" placeholder="Sujet" icon={<FileText />} />
              <AnimatedInput register={register} errors={errors} name="message" placeholder="Votre Message" icon={<Server />} isTextarea />
              
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 font-semibold text-black transition-all duration-300 hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/30 transform hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
