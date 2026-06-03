import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield } from 'lucide-react'

const values = [
  {
    title: "Excellence",
    description: "Nous visons la perfection dans chaque installation et maintenance.",
    icon: Target
  },
  {
    title: "Sécurité",
    description: "La priorité absolue pour nos techniciens et les utilisateurs.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "Utilisation des dernières technologies de transport vertical.",
    icon: Eye
  },
  {
    title: "Fiabilité",
    description: "Un accompagnement constant et des équipements durables.",
    icon: Heart
  }
]

const Presentation = () => {
  return (
    <section id="expertise" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[3rem] overflow-hidden bg-luxury-glass border border-luxury-border relative group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            
            {/* Floating Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 p-10 bg-white text-black rounded-[2rem] shadow-2xl hidden md:block"
            >
              <div className="text-4xl font-bold mb-2 tracking-tighter">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Années de Maîtrise</div>
            </motion.div>
          </div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12"
            >
              Notre ADN
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-heading font-bold mb-12 text-white tracking-tighter leading-tight"
            >
              L'Art du <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Dépassement</span>
            </motion.h2>
            <p className="text-2xl text-luxury-dim font-normal leading-relaxed mb-16">
              Basés à Douala, nous fusionnons l'ingénierie lourde avec une vision futuriste pour transformer chaque ascension en une expérience de fluidité absolue.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(0,229,255,1)]" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors">{val.title}</h4>
                  </div>
                  <p className="text-luxury-dim text-sm font-normal leading-relaxed group-hover:text-white transition-colors">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
