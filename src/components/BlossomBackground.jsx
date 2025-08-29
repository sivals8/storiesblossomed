import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Blossoms } from './Blossoms'

gsap.registerPlugin(ScrollTrigger)

const BlossomBackground = () => {
    const cameraRef = useRef()
    const dummy = useRef({ z: 180 }) // starting z
  
    useEffect(() => {
      gsap.to(dummy.current, {
        z: 0, // zoom in closer
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#zoom-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true

        }
      })
    }, [])
  
    useFrame(() => {
      if (!cameraRef.current) return
  
      // Update camera using dummy values
      cameraRef.current.position.z = dummy.current.z
      cameraRef.current.lookAt(8, -25, -30)
    })
  
    return (
      <>
        <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
        <PerspectiveCamera
          ref={cameraRef}
          fov={45}
          near={0.5}
          far={1000}
          makeDefault
          position={[0, 0, 180]}
        />
        <Environment preset="city" />
        <Blossoms />
      </>
    )
  }

export default BlossomBackground
