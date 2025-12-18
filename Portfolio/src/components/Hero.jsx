import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
       <video src="/3129977-uhd_3840_2160_30fps.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0"></video>
      <Scene3D /> 
      <div className="relative z-10 text-center ">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Yash Yogi
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Computer Science Student & Developer
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about building innovative solutions with code. Experienced in full-stack development, algorithms, and software engineering.
        </motion.p>
        <motion.a
          href="#about"
          className="bg-gray-800 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300 border border-blue-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;