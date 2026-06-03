import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    title: "Analyse du besoin",
    description: "Nous écoutons vos objectifs et contraintes pour définir le périmètre idéal."
  },
  {
    title: "Audit technique",
    description: "Inspection rigoureuse de vos installations existantes ou du site de construction."
  },
  {
    title: "Étude du projet",
    description: "Conception technique détaillée et choix des équipements les plus adaptés."
  },
  {
    title: "Installation",
    description: "Montage et mise en service par nos techniciens experts certifiés."
  },
  {
    title: "Contrôle qualité",
    description: "Tests de sécurité approfondis et validation de conformité aux normes."
  },
  {
    title: "Maintenance continue",
    description: "Accompagnement longue durée pour garantir la pérennité de vos équipements."
  }
]

const Process = () => {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} id="process" className="py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
          >
            Méthodologie
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-tight">
            Le Cycle de la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Précision</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Animated Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <div className="mb-12 relative">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]">
                  0{index + 1}
                </div>
                {/* Connector pulse */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-6 text-white group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-luxury-dim font-normal leading-relaxed group-hover:text-white transition-colors">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
