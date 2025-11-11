'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import ContactForm from "@/components/ui/contact-form";
import { TextGenerateEffect } from "@/components/ui/animated-textgenerate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: <Twitter />, href: '#' },
    { icon: <Linkedin />, href: '#' },
    { icon: <Instagram />, href: '#' },
  ];

  return (
    <div className="bg-background text-white min-h-screen animated-gradient-gold">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Let's Build Something Amazing Together"
            className="text-5xl md:text-7xl font-bold text-gold-gradient"
          />
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Vous avez un projet en tête ? Nous serions ravis d'en discuter. Remplissez le formulaire ci-dessous pour nous contacter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Envoyez un Message</h2>
            <ContactForm />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Contact Details</h2>
              <div className="space-y-4">
                <Card className="bg-white/5 border-none">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Mail className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-xl text-white">Email</CardTitle>
                      <p className="text-gray-400">Contact@omocto.ma</p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/5 border-none">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Phone className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-xl text-white">Phone</CardTitle>
                      <p className="text-gray-400">+212 5 22 29 56 26</p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/5 border-none">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <MapPin className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-xl text-white">Localisation</CardTitle>
                      <p className="text-gray-400">20 Rue Moussa Ibn Noussair, Quartier Gauthier, Etage 4 Appt. N 6.</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Suivez Nous</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-accent transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div variants={itemVariants}>
              <Card className="bg-white/5 border-none overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Trouve nous Ici</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3401.7255672720844!2d-7.631572555757069!3d33.58982188920544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sma!4v1761316876935!5m2!1sen!2sma" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}