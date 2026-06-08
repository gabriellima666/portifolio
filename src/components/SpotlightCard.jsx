import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

export default function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(0, 242, 254, 0.12)', 
  ...props 
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--x': `${coords.x}px`,
        '--y': `${coords.y}px`,
        '--spotlight-color': spotlightColor,
        '--opacity': isHovered ? 1 : 0
      }}
      {...props}
    >
      <div className="spotlight-glow" />
      <div className="spotlight-border-glow" />
      <div className="spotlight-content">
        {children}
      </div>
    </div>
  );
}
