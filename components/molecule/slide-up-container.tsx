"use client";

import { useEffect, useRef, useState } from "react";

interface ISlideUpContainer {
  children: React.ReactNode;
  delay?: number;
}

const SlideUpContainer = ({ children, delay = 1 }: ISlideUpContainer) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Uncomment to animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out !h-full
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{
        transitionDelay: `${delay * 150}ms`, // stagger by 150ms per item
      }}
    >
      {children}
    </div>
  );
};

export default SlideUpContainer;
