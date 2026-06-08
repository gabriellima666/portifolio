import React, { useState, useEffect, useRef } from 'react';

export default function DecryptedText({
  text = "",
  speed = 30,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start", // "start", "end", "center"
  animateOn = "hover", // "hover", "view"
  className = "",
  parentClassName = "",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const triggerRef = useRef(null);
  
  const chars = '-_./\\*+!@#$%^&*()={}[];:<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };
  
  useEffect(() => {
    if (!isAnimating) {
      setDisplayText(text);
      return;
    }
    
    let currentIteration = 0;
    const textLength = text.length;
    
    // Define the reveal order based on direction
    let revealOrder = [];
    if (revealDirection === "start") {
      revealOrder = Array.from({ length: textLength }, (_, i) => i);
    } else if (revealDirection === "end") {
      revealOrder = Array.from({ length: textLength }, (_, i) => textLength - 1 - i);
    } else {
      // center
      const center = Math.floor(textLength / 2);
      const order = [];
      let left = center - 1;
      let right = center;
      while (left >= 0 || right < textLength) {
        if (right < textLength) {
          order.push(right);
          right++;
        }
        if (left >= 0) {
          order.push(left);
          left--;
        }
      }
      revealOrder = order;
    }
    
    // Set target iteration steps at which characters start to decrypt
    const revealSteps = Array(textLength).fill(0);
    if (sequential) {
      revealOrder.forEach((pos, index) => {
        revealSteps[pos] = index * 2; // stagger reveal
      });
    }
    
    const maxSteps = sequential 
      ? textLength * 2 + maxIterations 
      : maxIterations;
      
    intervalRef.current = setInterval(() => {
      currentIteration++;
      
      const nextText = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        
        const revealStep = revealSteps[index];
        // Fully revealed condition
        if (currentIteration >= revealStep + maxIterations) {
          return char;
        }
        
        // Scrambling condition
        if (currentIteration >= revealStep) {
          return chars[Math.floor(Math.random() * chars.length)];
        }
        
        // Not reached yet, scramble or keep hidden
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      
      setDisplayText(nextText);
      
      if (currentIteration >= maxSteps) {
        setDisplayText(text);
        setIsAnimating(false);
        clearInterval(intervalRef.current);
      }
    }, speed);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating, text, speed, maxIterations, sequential, revealDirection]);
  
  useEffect(() => {
    if (animateOn === "view") {
      // Small timeout to let mount transition settle
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [animateOn, text]);
  
  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      triggerAnimation();
    }
  };
  
  return (
    <span 
      ref={triggerRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      style={{ display: 'inline-block', cursor: animateOn === 'hover' ? 'pointer' : 'default' }}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
