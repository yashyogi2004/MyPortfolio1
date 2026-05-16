import React from 'react';
import { motion as Motion } from 'framer-motion';

const About = ({ sectionId = 'about' }) => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Motion.section
      id={sectionId}
      className="py-20 bg-gray-800 text-gray-200"
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
          About Me
        </Motion.h2>
         <div className=" flex justify-center mt-12">
          <img src="/profileimage.jpeg" alt="Profile Image" className="w-48 h-48 rounded-full object-cover border-4 border-blue-500" />
        </div>
        <Motion.div
          className="max-w-3xl mx-auto text-center"
          variants={itemVariants}
        >
          <Motion.p
            className="text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            Hello ! I'm Yash Yogi, a passionate Computer Science student and developer. I love creating innovative solutions through code and have experience in full-stack development, algorithms, and software engineering.
            I enjoy tackling challenging problems and continuously learning new technologies to enhance my skills.
            I have done my Bachelor's in Computer Science from Rajasthan Technical University, Kota.
            Over the years, I've worked on various projects that showcase my ability to build efficient and scalable applications.
            I'm always eager to collaborate with like-minded individuals and contribute to open-source projects.
            Let's connect and explore how we can work together to bring innovative solutions to the world.
          </Motion.p>
          <Motion.p
            className="text-lg leading-relaxed"
            variants={itemVariants}
          >
            My interests include machine learning, web development, and cybersecurity. I'm always eager to learn new technologies
            and collaborate on exciting projects.
          </Motion.p>
        </Motion.div>
       
      </div>
    </Motion.section>
  );
};

export default About;
