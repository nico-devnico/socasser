import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '../utils/cn'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700',
        isScrolled ? 'py-4 bg-black/60 backdrop-blur-3xl border-b border-white/5' : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          {/* Logo Placeholder - Prêt pour votre image */}
          <div className="relative">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-black font-bold text-2xl group-hover:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_30px_rgba(0,194,255,0.4)] overflow-hidden">
              <img 
                src="/logo.png" 
                alt="SOCASSER Logo" 
                className="w-full h-full object-contain hidden" // Caché par défaut jusqu'à ce que vous fournissiez l'image
                onLoad={(e) => e.target.classList.remove('hidden')}
              />
              <span className="group-hover:opacity-0 transition-opacity">S</span>
            </div>
          </div>
          <span className="text-2xl font-heading font-bold tracking-tighter text-white">SOCASSER</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-10 py-3.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
          >
            Estimation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] bg-background z-40 md:hidden transition-all duration-500 ease-in-out px-6 py-8 flex flex-col gap-6',
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#quote"
          className="bg-primary text-background px-6 py-4 rounded-xl text-center font-bold text-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Demander un devis
        </a>
        <div className="mt-auto flex items-center gap-4 text-foreground/60">
          <Phone size={20} />
          <span className="text-lg">+237 674 026 695</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
