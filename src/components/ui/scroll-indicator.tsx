import React, { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const ScrollIndicator = ({
  direction = 'vertical',
  className = ''
}: ScrollIndicatorProps) => {
  const [showIndicator, setShowIndicator] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const element = direction === 'vertical' 
        ? document.documentElement
        : document.querySelector('.horizontal-scroll');
      
      if (!element) return;

      const maxScroll = direction === 'vertical'
        ? element.scrollHeight - element.clientHeight
        : element.scrollWidth - element.clientWidth;
      
      const currentScroll = direction === 'vertical'
        ? window.scrollY
        : element.scrollLeft;

      // Hide indicator when near bottom/right
      setShowIndicator(currentScroll < maxScroll - 100);
      
      // Fade based on scroll position
      setOpacity(Math.max(0, 1 - (currentScroll / (maxScroll * 0.25))));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction]);

  if (!showIndicator) return null;

  return (
    <div 
      className={`fixed ${direction === 'vertical' ? 'bottom-8 right-8' : 'bottom-8 right-1/2 translate-x-1/2'} 
                  transition-opacity duration-300 pointer-events-none z-50 ${className}`}
      style={{ opacity }}
    >
      <div className={`
        glass-panel-warm p-2 rounded-full shadow-lg
        ${direction === 'vertical' 
          ? 'animate-bounce' 
          : 'animate-pulse'
        }
      `}>
        {direction === 'vertical' ? (
          <svg 
            className="w-6 h-6 text-orange-500"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        ) : (
          <svg 
            className="w-6 h-6 text-orange-500"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </div>
    </div>
  );
};