'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed top-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MouseFollower;
