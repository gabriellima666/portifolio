import React, { useEffect, useState, useRef } from 'react';
import './BlurText.css';

export default function BlurText({ 
  text = '', 
  delay = 40, 
  className = '', 
  parentClassName = '',
  animateOn = 'view' // 'view' or 'manual'
}) {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn]);

  const words = text.split(' ');

  return (
    <span 
      ref={containerRef} 
      className={`blur-text-container ${parentClassName}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="blur-word">
          {word.split('').map((char, charIndex) => {
            // Calculate sequential letter delay
            const charDelay = (wordIndex * 2 + charIndex) * delay;
            return (
              <span
                key={charIndex}
                className={`blur-char ${revealed ? 'revealed' : ''} ${className}`}
                style={{
                  transitionDelay: `${charDelay}ms`
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Add spacing after word except for the last word */}
          {wordIndex < words.length - 1 && (
            <span className="blur-space">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
