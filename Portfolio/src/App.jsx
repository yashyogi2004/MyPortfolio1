import React, { lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DeferredSection from './components/DeferredSection';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <div className="font-sans">
      <Navigation />
      <Hero />
      <DeferredSection id="about" className="min-h-[40vh] bg-gray-800">
        <About sectionId={null} />
      </DeferredSection>
      <DeferredSection id="skills" className="min-h-[40vh] bg-gray-900">
        <Skills sectionId={null} />
      </DeferredSection>
      <DeferredSection id="projects" className="min-h-[40vh] bg-gray-800">
        <Projects sectionId={null} />
      </DeferredSection>
      <DeferredSection id="experience" className="min-h-[40vh] bg-gray-900">
        <Experience sectionId={null} />
      </DeferredSection>
      <DeferredSection id="education" className="min-h-[40vh] bg-gray-800">
        <Education sectionId={null} />
      </DeferredSection>
      <DeferredSection id="contact" className="min-h-[40vh] bg-gray-900">
        <Contact sectionId={null} />
      </DeferredSection>
    </div>
  );
};

export default App;
