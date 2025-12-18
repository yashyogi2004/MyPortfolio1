import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Curious Team learning pvt ltd',
      period: 'june 2025 - August 2025',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      title: 'Software Developer Intern',
      company: 'MarketThings',
      period: 'June 2025 - August2025',
      description: 'Worked as part time backend developer using nodejs and expressjs. Implemented RESTful APIs and optimized database queries for performance.'
    },
    {
      title: ' Graphics Coordinator',
      company: 'Finance Club, Rajasthan Technical University, Kota',
      period: 'August 2024 - Present',
      description: 'Designed promotional materials and managed social media graphics to enhance club visibility and engagement.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="experience"
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
          Experience
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 border-l-4 border-blue-500 pl-8"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;