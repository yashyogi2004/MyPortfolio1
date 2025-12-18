import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-900 text-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Contact
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg mb-8"
            variants={itemVariants}
          >
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </motion.p>
          <motion.div
            className="flex justify-center gap-8 mb-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashyog2003@gmail.com"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yash-yogi-b72a52257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/yashyogi2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://leetcode.com/Yashyog_21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              Leetcode
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;