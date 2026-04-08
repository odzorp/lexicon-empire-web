"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
}

export default function ParallaxHero({ children, backgroundImage, className = "" }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroTop = heroRef.current.offsetTop;
      const heroHeight = heroRef.current.offsetHeight;
      
      // Only animate if hero is in view or near it
      if (scrollY <= heroTop + heroHeight) {
        const speed = 0.4;
        const yOffset = scrollY * speed;
        if (imageRef.current) {
          imageRef.current.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.1)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background Layer */}
      <div 
        ref={imageRef}
        className="absolute inset-0 scale-110 will-change-transform"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundColor: "#0a1020",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.1s linear",
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020]/30 via-[#0a1020]/60 to-[#0a1020]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/40 via-transparent to-[#0a1020]/40" />
      
      {/* Animated Gold Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#c7a559] opacity-[0.06] blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#c7a559] opacity-[0.04] blur-[100px] animate-pulse-slow-delayed" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Custom animation keyframes (add to globals.css if not present)
export const parallaxStyles = `
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.06; }
    50% { transform: scale(1.1); opacity: 0.08; }
  }
  
  @keyframes pulse-slow-delayed {
    0%, 100% { transform: scale(1); opacity: 0.04; }
    50% { transform: scale(1.15); opacity: 0.06; }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }
  
  .animate-pulse-slow-delayed {
    animation: pulse-slow-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
  }
  
  .will-change-transform {
    will-change: transform;
  }
`;
