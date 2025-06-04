"use client";

import { useState, useEffect, useRef } from "react";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate mouse position relative to center, normalized to -1 to 1
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        
        setMousePosition({ x, y });
      }
    };

    const handleMouseLeave = () => {
      // Smoothly transition back to center
      setMousePosition({ x: 0, y: 0 });
    };

    // Use document level events to avoid flickering on container boundaries
    document.addEventListener('mousemove', handleMouseMove);
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (heroElement) {
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Parallax transform calculator with improved transitions
  const getParallaxTransform = (intensity: number) => {
    const moveX = mousePosition.x * intensity;
    const moveY = mousePosition.y * intensity;
    
    // Check if mouse is outside the hero section to apply smooth transition
    const isReturningToCenter = mousePosition.x === 0 && mousePosition.y === 0;
    
    return {
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
      transition: isReturningToCenter ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.1s ease-out'
    };
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      
      {/* Floating Background Cards */}
      <FloatingCards 
        getParallaxTransform={getParallaxTransform}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white mb-6 sm:mb-8 tracking-tight leading-none">
          Create Value<br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Make Content Liquid
          </span>
        </h1>
        
        <div className="mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/60 leading-relaxed max-w-4xl mx-auto font-light">
            Turn tweets and videos into tradable tokens in seconds. Zap.launch transforms your content into on-chain assets with built-in bonding curves and instant DEX deployment.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto px-4 sm:px-0">
          <a href="https://t.me/Zap_launch" rel="noopener noreferrer">
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto hover:cursor-pointer">
            Join Telegram
          </button>
             </a>
          <a href="https://zap-launch.gitbook.io/docs" target="_blank" rel="noopener noreferrer">
          <button className="border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:border-white hover:bg-white/5 transition-all duration-200 w-full sm:w-auto hover:cursor-pointer">
            Documentation
          </button>
          </a>
        </div>
      </div>
      
     
    </section>
  );
} 
