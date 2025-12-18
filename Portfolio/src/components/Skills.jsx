import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="skills"
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
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                <motion.div
                  className="bg-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-400">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;