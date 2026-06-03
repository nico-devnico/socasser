import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import ElevatorModel from '../3d/ElevatorModel'

const Hero = () => {
  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden flex items-center">
      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/20">Scroll Exploration</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-luxury-glass border border-luxury-border text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-12 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              L'excellence verticale • SOCASSER
            </motion.div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-heading font-bold leading-[0.85] mb-12 tracking-[-0.05em] text-white">
              FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-white drop-shadow-[0_0_30px_rgba(0,229,255,0.8)]">BEYOND</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-luxury-dim/90 mb-16 max-w-md leading-relaxed font-normal tracking-wide">
              Redéfinir l'ingénierie du mouvement pour l'architecture de demain. Une précision chirurgicale, une esthétique intemporelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative overflow-hidden bg-white text-black px-12 py-7 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initier un projet
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/237674026695"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-luxury-glass backdrop-blur-2xl border border-luxury-border text-white px-12 py-7 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-500"
              >
                <MessageCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
          
          {/* Visual balance spacer */}
          <div className="hidden lg:block h-[800px]"></div>
        </div>
      </div>
      
      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  )
}

export default Hero
