import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="p-16 flex flex-col items-center dark:bg-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold text-3xl md:text-5xl lg:text-7xl dark:text-white"
      >
        Hi, I'm Keitty
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-300 mt-2"
      >
        Front-End Developer & Solution Engineer
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 bg-lime-500 text-white px-6 py-3 rounded-full font-bold hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700"
      >
        View My Work
      </motion.button>
    </section>
  )
}

export default Hero