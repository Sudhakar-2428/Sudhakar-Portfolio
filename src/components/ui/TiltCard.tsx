import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../../utils/soundEffects';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.12)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -6; // max -6deg tilt
    const rY = ((mouseX - width / 2) / (width / 2)) * 6;  // max 6deg tilt

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playPop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`relative rounded-3xl glass-card-light p-6 overflow-hidden transition-shadow duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Dynamic Cursor Glare Highlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 75%)`,
          }}
        />
      )}

      {/* Border glow highlight */}
      {isHovered && (
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[#6366f1]/30 transition-opacity duration-300 z-10" />
      )}

      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};
