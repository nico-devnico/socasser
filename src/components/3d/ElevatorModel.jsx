import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Sparkles, Float } from '@react-three/drei'
import * as THREE from 'three'

const Person = ({ position, color = "#ffffff" }) => (
  <group position={position}>
    {/* Realistic Silhouette - High Polish Material */}
    <mesh position={[0, 0.45, 0]} castShadow>
      <capsuleGeometry args={[0.1, 0.5, 12, 24]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.1} 
        metalness={0.8} 
        emissive={color}
        emissiveIntensity={0.2}
        clearcoat={1}
      />
    </mesh>
    <mesh position={[0, 0.95, 0]} castShadow>
      <sphereGeometry args={[0.09, 32, 32]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.1} 
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
        clearcoat={1}
      />
    </mesh>
  </group>
)

const ElevatorModel = ({ scrollProgress = 0 }) => {
  const cabinRef = useRef(null)
  const groupRef = useRef(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const progress = typeof scrollProgress === 'object' ? scrollProgress.get() : scrollProgress
    
    if (cabinRef.current) {
      const targetY = 5 - (progress * 10)
      cabinRef.current.position.y = THREE.MathUtils.lerp(
        cabinRef.current.position.y,
        targetY,
        0.08
      )
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        Math.sin(t * 0.15) * 0.1,
        0.05
      )
    }
  })

  return (
    <group ref={groupRef}>
      <Stars radius={150} depth={50} count={2000} factor={4} saturation={0} fade speed={0.2} />
      <Sparkles count={30} scale={15} size={1} speed={0.2} color="#ffffff" />

      {/* Ultra-Modern Building Shaft */}
      <group>
        {/* Transparent Shaft Structure */}
        <mesh>
          <boxGeometry args={[3.2, 15, 3.2]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transparent 
            opacity={0.02} 
            transmission={0.95}
            thickness={0.5}
            roughness={0}
            metalness={0.1}
          />
        </mesh>
        
        {/* Refined Chrome Pillars */}
        {[[-1.6, -1.6], [1.6, -1.6], [1.6, 1.6], [-1.6, 1.6]].map(([x, z], i) => (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.04, 15, 0.04]} />
            <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0.05} />
          </mesh>
        ))}

        {/* Minimalist Floor Lines */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[0, -6.5 + i * 1.2, 0]}>
            <boxGeometry args={[3.25, 0.01, 3.25]} />
            <meshStandardMaterial color="#00C2FF" emissive="#00C2FF" emissiveIntensity={0.3} transparent opacity={0.1} />
          </mesh>
        ))}
      </group>

      {/* High-End Elevator Cabin */}
      <group ref={cabinRef}>
        {/* Outer Frame - Black Chrome */}
        <mesh position={[0, -1.15, 0]}>
          <boxGeometry args={[2.4, 0.1, 2.4]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[0, 1.15, 0]}>
          <boxGeometry args={[2.4, 0.1, 2.4]} />
          <meshPhysicalMaterial color="#000000" metalness={1} roughness={0.1} />
        </mesh>

        {/* Glass Cabin Walls */}
        <mesh>
          <boxGeometry args={[2.3, 2.3, 2.3]} />
          <meshPhysicalMaterial 
            color="#00C2FF"
            transmission={0.9}
            thickness={0.2}
            roughness={0.01}
            metalness={0.1}
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Internal Vertical Lights */}
        {[[-1.1, -1.1], [1.1, -1.1], [1.1, 1.1], [-1.1, 1.1]].map(([x, z], i) => (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.03, 2.3, 0.03]} />
            <meshStandardMaterial color="#00C2FF" emissive="#00C2FF" emissiveIntensity={4} />
          </mesh>
        ))}

        {/* Silhouettes */}
        <Person position={[-0.4, -1.1, -0.4]} color="#ffffff" />
        <Person position={[0.5, -1.1, 0.3]} color="#00C2FF" />
        
        {/* Soft Interior Glow */}
        <pointLight position={[0, 0.5, 0]} intensity={1.5} color="#00C2FF" />
      </group>

      {/* Cinematic Lighting */}
      <spotLight position={[15, 25, 15]} angle={0.25} penumbra={1} intensity={3} color="#ffffff" castShadow />
      <pointLight position={[-15, -15, -15]} color="#00C2FF" intensity={0.8} />
      <ambientLight intensity={0.2} />
    </group>
  )
}

export default ElevatorModel
