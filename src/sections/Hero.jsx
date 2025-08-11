import React from 'react'
import { Canvas } from '@react-three/fiber'
import HeroText from '../components/HeroText'
import ParalaxBackground from '../components/ParalaxBackground'

const Hero = () => {
  return (
    <section id='home' className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <HeroText />
        <ParalaxBackground />
    </section>
  )
}

export default Hero