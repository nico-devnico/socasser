import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: 'Projets réalisés', value: '250', suffix: '+' },
  { label: 'Années d\'expérience', value: '15', suffix: '+' },
  { label: 'Clients satisfaits', value: '120', suffix: '+' },
  { label: 'Assistance technique', value: '24/7', suffix: '' },
]

const StatItem = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] hover:border-primary/40 transition-all duration-700 group"
    >
      <div className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:text-primary group-hover:drop-shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-700">
        {stat.value}<span className="text-primary group-hover:text-white transition-colors duration-700">{stat.suffix}</span>
      </div>
      <div className="text-[11px] font-bold text-luxury-dim uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-700">
        {stat.label}
      </div>
    </motion.div>
  )
}

const Stats = () => {
  return (
    <section className="py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
          >
            Performance & Data
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-tight">
            Notre Impact en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Chiffres</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
