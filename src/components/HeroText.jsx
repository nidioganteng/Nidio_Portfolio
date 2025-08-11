import { FlipWords } from "./FlipWords.jsx"
import { motion } from "framer-motion"

const words = ["Web Developer", "Frontend Developer", "UI/UX Designer"]

const HeroText = () => {
  return (
    <div className="z-10 flex flex-col min-h-screen text-center md:text-left justify-start md:justify-center pt-52 md:pt-0">
      <div className="flex flex-col c-space">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col space-y-4">
          <motion.h1 
            className="text-6xl font-medium"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Nidio
          </motion.h1>

          <motion.p 
            className="text-7xl font-medium text-neutral-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Digital Worlds <br />One Pixel at a Time
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FlipWords words={words} className="text-4xl font-bold text-white" />
          </motion.div>
        </div>

            {/* Mobile View */}
            <div className="flex flex-col items-center text-center px-4 space-y-6 md:hidden">
            <motion.p 
                className="text-4xl font-medium"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Nidio
            </motion.p>

            <motion.p 
                className="text-4xl font-black text-neutral-300 leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Love to Create <br />Digital Experiences
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <FlipWords words={words} className="text-2xl font-bold text-white" />
            </motion.div>
            </div>
      </div>
    </div>
  )
}

export default HeroText
