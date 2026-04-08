"use client";

import { useState, useRef, ReactNode } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  [key: string]: any;
}

export default function MagneticButton({ 
  href, 
  children, 
  className = "", 
  strength = 0.3,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const style = {
    transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.02 : 1})`,
    transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const element = (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      onMouseEnter={() => setIsHovered(true)}
      style={style}
      {...props}
    >
      {children}
    </a>
  );

  return element;
}
