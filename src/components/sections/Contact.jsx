import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react'

import emailjs from '@emailjs/browser'

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Téléphone requis"),
  service: z.string(),
  message: z.string().min(10, "Veuillez détailler votre projet"),
})

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section id="contact" className="py-40 px-6 bg-black relative">
      {/* Decorative radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-luxury-gradient opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
            >
              Contact & Support
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-12 text-white tracking-tighter leading-tight">
              Bâtissons le <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Futur</span>
            </h2>
            <p className="text-2xl text-luxury-dim font-light leading-relaxed mb-20 max-w-lg">
              Une question technique ? Un projet d'envergure ? Nos experts sont à votre disposition pour une consultation exclusive.
            </p>

            <div className="space-y-12">
              {[
                { icon: Phone, title: "Téléphone", value: "+237 674 026 695" },
                { icon: Mail, title: "Email", value: "contact@socasser.cm" },
                { icon: MapPin, title: "Localisation", value: "Akwa, Douala, Cameroun" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 bg-luxury-glass border border-luxury-border rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-2xl">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-luxury-dim uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl font-medium text-luxury-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-luxury-glass backdrop-blur-3xl border border-luxury-border p-12 rounded-[3rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Nom Complet</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 text-white transition-all placeholder:text-white/10"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 text-white transition-all placeholder:text-white/10"
                    placeholder="jean@socasser.cm"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 text-white transition-all resize-none placeholder:text-white/10"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <button className="w-full bg-white text-black py-6 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all duration-500 group flex items-center justify-center gap-4">
                Envoyer la requête
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
