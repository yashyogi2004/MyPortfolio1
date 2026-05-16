import React, { Suspense, useEffect, useRef, useState } from 'react';

const DeferredSection = ({ id, className = '', children }) => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div id={id} ref={sectionRef} className={className}>
      {shouldRender && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default DeferredSection;
