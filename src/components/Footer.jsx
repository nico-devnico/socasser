import React from 'react'
import { Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black pt-40 pb-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-4 mb-12 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_30px_rgba(0,194,255,0.4)]">S</div>
              <span className="text-3xl font-heading font-bold tracking-tighter text-white">SOCASSER</span>
            </a>
            <p className="text-white/30 text-xl font-light leading-relaxed max-w-md mb-12">
              L'ingénierie d'excellence au service de l'architecture monumentale. Redéfinir la mobilité urbaine au Cameroun.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-12">Navigation</h4>
            <ul className="space-y-6">
              {['Services', 'Realisations', 'Expertise', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors font-light tracking-wide">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-12">Légal</h4>
            <ul className="space-y-6">
              {['Confidentialité', 'Conditions', 'Cookies', 'Sécurité'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors font-light tracking-wide">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 SOCASSER • ARCHITECTURAL MOBILITY
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-white/20 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
