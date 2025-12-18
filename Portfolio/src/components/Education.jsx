import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Rajasthan Technical University, Kota',
      period: '2023 - 2027',
      gpa:'8/10',
      description: 'Relevant coursework: Algorithms, Data Structures, Software Engineering, Machine Learning, Database Systems'
    },
    {
      degree: 'Senior Sec School ',
      institution: 'Gudhaniya Senior Sec School, Mahwa',
      period: '2021-2022',
      gpa: '96.6%',
      description: 'Completed higher secondary education with a focus on Science stream, excelling in subjects like Mathematics, Physics, and Chemistry.'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-gray-800 text-gray-200"
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
          Education
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-400 font-medium">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.period} | GPA: {edu.gpa}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;