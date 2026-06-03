import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Settings, ShieldCheck, PenTool, Building2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const services = [
  {
    title: 'Ascenseurs',
    description: 'Installation, montage et réhabilitation complète de systèmes d\'ascenseurs modernes.',
    icon: Building2,
    items: ['Installation', 'Montage', 'Modernisation', 'Réhabilitation'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Escalators',
    description: 'Expertise pointue dans l\'installation et la maintenance d\'escalators et trottoirs roulants.',
    icon: Settings,
    items: ['Installation', 'Maintenance', 'Réparation'],
    color: 'from-cyan-500/20 to-emerald-500/20'
  },
  {
    title: 'Audit Technique',
    description: 'Diagnostic complet et rapports d\'inspection détaillés pour vos installations.',
    icon: ShieldCheck,
    items: ['Inspection', 'Diagnostic', 'Rapport technique'],
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Électricité Industrielle',
    description: 'Solutions électriques robustes pour l\'industrie et le bâtiment.',
    icon: Zap,
    items: ['Tableaux électriques', 'Câblage', 'Automatisation'],
    color: 'from-teal-500/20 to-blue-500/20'
  },
  {
    title: 'Maintenance',
    description: 'Programmes de maintenance préventive et corrective sur mesure.',
    icon: PenTool,
    items: ['Préventive', 'Corrective', 'Contrats annuels'],
    color: 'from-blue-600/20 to-indigo-600/20'
  }
]

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative bg-luxury-glass backdrop-blur-3xl border border-luxury-border p-10 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-700 hover:-translate-y-2"
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700", service.color)}></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-2xl">
          <service.icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-3xl font-heading font-bold mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-luxury-dim mb-10 font-normal leading-relaxed text-lg group-hover:text-white transition-colors">{service.description}</p>
        
        <ul className="space-y-5 mb-12">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-sm text-luxury-dim font-medium tracking-wide">
              <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(0,229,255,1)]"></div>
              {item}
            </li>
          ))}
        </ul>
        
        <button className="flex items-center gap-4 text-[10px] font-bold text-primary tracking-[0.3em] uppercase group-hover:gap-6 transition-all duration-700">
          Exploration <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-700" />
        </button>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-24 mb-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
            >
              Expertise & Ingénierie
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-heading font-bold mb-12 tracking-tighter text-white leading-tight"
            >
              Le futur du <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Mouvement</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white/30 font-light leading-relaxed max-w-2xl"
            >
              Une fusion parfaite entre la mécanique de précision et l'esthétique futuriste.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
