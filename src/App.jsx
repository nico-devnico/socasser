import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Presentation from './components/sections/Presentation'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import Process from './components/sections/Process'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import GlobalCanvas from './components/GlobalCanvas'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <GlobalCanvas />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Presentation />
        <Services />
        <Stats />
        <Process />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  )
}

export default App
