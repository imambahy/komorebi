"use client";

import React, { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};

// Simple animation components
export const AnimatedDiv: React.FC<{ 
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}> = ({ 
  children, 
  className = "", 
  animation = "fadeIn",
  delay = 0,
  style,
  onClick,
  ...props 
}) => {
  const { ref, isInView } = useScrollAnimation();
  
  const getAnimationClass = () => {
    if (!isInView) return '';
    
    const baseClass = 'animate-on-scroll';
    const animationClass = `animate-${animation}`;
    return `${baseClass} ${animationClass}`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        transitionDelay: `${delay}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}; 