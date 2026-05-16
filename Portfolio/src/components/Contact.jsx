import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = ({ sectionId = 'contact' }) => {
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
    <Motion.section
      id={sectionId}
      className="py-20 bg-gray-900 text-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <Motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Contact
        </Motion.h2>
        <Motion.div
          className="max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
          <Motion.p
            className="text-lg mb-8"
            variants={itemVariants}
          >
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </Motion.p>
          <Motion.div
            className="flex justify-center gap-8 mb-8"
            variants={itemVariants}
          >
            <Motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashyog2003@gmail.com"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail />
            </Motion.a>
            <Motion.a
              href="https://www.linkedin.com/in/yash-yogi-b72a52257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin />
            </Motion.a>
            <Motion.a
              href="https://github.com/yashyogi2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </Motion.a>
            <Motion.a
              href="https://leetcode.com/Yashyog_21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <FaLeetcode /> */}
              <img src="/icons8-leetcode-24.png" alt="leetcode" className="w-6 h-6 " />
            </Motion.a>
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Contact;
