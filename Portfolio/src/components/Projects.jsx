import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://yashyogi2004/MyPortfolio1/',
      demo: 'https://my-portfolio1-one-orpin.vercel.app/'
    },
    {
      title: 'Employee Management System',
      description: 'A frontend application for managing employee records, including CRUD operations and data visualization.',
      technologies: ['React', 'Redux', 'Chart.js', 'CSS'],
      github: 'https://github.com/yashyogi2004/Employeeproject',
    },
    {
     title: 'Log Management System',
     description: 'A web application for Mantaining daily actitvities of students in college',
     technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
     github: 'https://github.com/yashyogi2004/Logbook',
     demo: 'https://logbook-mu.vercel.app/'
    },
    {
      title: 'iptracker',
      description: 'A web application that tracks IP addresses and provides geolocation information using external APIs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'IP Geolocation API'],
      github: 'https://github.com/yashyogi2004/iptracker'     
    }
  ];

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
    <motion.section
      id="projects"
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
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};


export default Projects;
