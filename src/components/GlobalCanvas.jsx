import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { useScroll, useTransform } from 'framer-motion'
import ElevatorModel from './3d/ElevatorModel'

const GlobalCanvas = () => {
  const { scrollYProgress } = useScroll()
  // L'ascenseur descend au fur et à mesure du scroll sur toute la page
  const elevatorScroll = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-60">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
          <ambientLight intensity={0.5} />
          
          <Suspense fallback={null}>
            <group scale={[0.8, 0.8, 0.8]}>
              <ElevatorModel scrollProgress={elevatorScroll} />
            </group>
            <Environment preset="city" />
            <ContactShadows 
              position={[0, -5, 0]} 
              opacity={0.4} 
              scale={20} 
              blur={2} 
              far={10} 
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Overlay dégradé pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}

export default GlobalCanvas
