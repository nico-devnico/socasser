import React, { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

const projects = [
  {
    id: 1,
    title: 'Tour Horizon',
    location: 'Douala, Bonanjo',
    category: 'Installation',
    description: 'Installation de 4 ascenseurs haute vitesse avec système de contrôle intelligent.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    services: ['Installation', 'Audit', 'Maintenance']
  },
  {
    id: 2,
    title: 'Yaoundé Mall',
    location: 'Yaoundé, Bastos',
    category: 'Escalators',
    description: 'Mise en place de 8 escalators nouvelle génération avec capteurs de présence.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop',
    services: ['Montage', 'Électricité']
  },
  {
    id: 3,
    title: 'Kribi Resort',
    location: 'Kribi',
    category: 'Modernisation',
    description: 'Modernisation complète d\'un ascenseur panoramique de luxe.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    services: ['Modernisation', 'Design']
  },
  {
    id: 4,
    title: 'Complexe Industriel G-Tech',
    location: 'Douala, Zone Bassa',
    category: 'Électricité',
    description: 'Installation du système électrique et maintenance corrective des monte-charges.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    services: ['Électricité', 'Maintenance']
  }
]

const categories = ['Tous', 'Installation', 'Escalators', 'Modernisation', 'Électricité']

const ProjectCard = forwardRef(({ project }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-luxury-glass border border-luxury-border hover:border-primary/40 transition-all duration-700 shadow-2xl"
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      {/* Dark overlay that intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-700"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-12 relative z-10">
        <div className="flex items-center gap-3 text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-6 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
          <MapPin size={14} />
          {project.location}
        </div>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white group-hover:text-primary transition-colors duration-500 tracking-tight drop-shadow-lg">{project.title}</h3>
        <p className="text-white/80 text-lg font-normal leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 max-w-md drop-shadow-md">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-100">
          {project.services.map((service, i) => (
            <span key={i} className="px-5 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl text-[10px] font-bold text-white">
              {service}
            </span>
          ))}
        </div>
        
        <button className="flex items-center gap-4 text-[10px] font-bold text-white tracking-[0.3em] uppercase group/btn">
          Exploration <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
        </button>
      </div>
    </motion.div>
  )
})

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="realisations" className="py-40 px-6 bg-black relative">
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
              Héritage & Vision
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-10 text-white tracking-tighter leading-tight">
              Réalisations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Signature</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 p-2 bg-luxury-glass backdrop-blur-3xl border border-luxury-border rounded-[1.5rem]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500",
                  activeCategory === cat 
                    ? "bg-primary text-black shadow-2xl" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-32 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-all duration-500 group"
          >
            Voir tout le catalogue
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
              <ArrowRight size={20} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Projects
