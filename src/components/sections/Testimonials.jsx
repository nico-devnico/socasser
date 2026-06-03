import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Marc Kameni",
    role: "Directeur Technique",
    company: "BTP Cameroun",
    content: "L'expertise de SOCASSER en matière d'ascenseurs est inégalée. Leur réactivité lors des maintenances correctives nous permet de garantir une continuité de service optimale.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sophie Ewane",
    role: "Gérante Immobilière",
    company: "Résidences Douala",
    content: "Une équipe professionnelle qui comprend les enjeux de sécurité et de confort pour nos résidents. La modernisation de nos escalators a été un succès total.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Jean- Paul Mbia",
    role: "Architecte",
    company: "Studio Vision",
    content: "Intégrer les solutions SOCASSER dans mes projets est un gage de qualité. Leur vision futuriste s'aligne parfaitement avec l'architecture moderne.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      paginate(1)
    }, 8000)
    return () => clearInterval(timer)
  }, [currentIndex, isAutoPlaying])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)"
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
          >
            Témoignages & Impact
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-tight">
            Avis de nos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Partenaires</span>
          </h2>
        </div>

        <div 
          className="relative h-[600px] md:h-[500px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                filter: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full max-w-4xl bg-white/5 backdrop-blur-[100px] border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              {/* Internal glow effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-1000" />
              
              <div className="absolute top-10 right-10 opacity-10">
                <Quote size={80} className="text-white" />
              </div>
              
              <div className="flex gap-2 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-16 italic tracking-tight"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                  <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">{testimonials[currentIndex].role} • {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-12 z-10">
            <button 
              onClick={() => paginate(-1)}
              className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-500 shadow-2xl group active:scale-90"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentIndex ? "w-12 bg-primary shadow-[0_0_15px_rgba(0,229,255,0.6)]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => paginate(1)}
              className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-500 shadow-2xl group active:scale-90"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
