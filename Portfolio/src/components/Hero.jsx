import React, { Suspense, lazy, useEffect, useState } from 'react';

const Scene3D = lazy(() => import('./Scene3D'));

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
};

const Hero = () => {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const loadScene = () => setShowScene(true);
    const timeoutId = window.setTimeout(loadScene, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
      {!shouldReduceMotion && (
        <video
          src="/3129977-uhd_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}
      {showScene && (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      )}
      <div className="relative z-10 text-center ">
        <h1 className="hero-reveal hero-reveal-1 text-5xl md:text-7xl font-bold mb-4">
          Yash Yogi
        </h1>
        <p className="hero-reveal hero-reveal-2 text-xl md:text-2xl mb-8">
          Computer Science Student & Developer
        </p>
        <p className="hero-reveal hero-reveal-3 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Passionate about building innovative solutions with code. Experienced in full-stack development, algorithms, and software engineering.
        </p>
        <a
          href="#about"
          className="hero-reveal hero-reveal-4 inline-block bg-gray-800 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 hover:scale-105 active:scale-95 transition duration-300 border border-blue-400"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
