'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      const chars = titleRef.current?.innerText.split('');
      if (titleRef.current) {
        titleRef.current.innerHTML = chars?.map(c => `<span class="char inline-block">${c === ' ' ? '&nbsp;' : c}</span>`).join('') || '';
      }

      gsap.from('.char', {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="flex-1 hero-content">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-primary/20">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary-foreground/80">Frontend Developer @ Admiro Soft Technologies</span>
            </div>
            
            <h1 ref={titleRef} className="font-display font-bold leading-tight mb-6 text-5xl md:text-7xl perspective-1000">
              Hi, I'm <span className="text-primary">Padmanaban</span>. <br />
              <span className="opacity-80">Crafting High-Performance Digital Experiences.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer at Admiro Soft Technologies, specializing in building responsive, user-friendly web applications with a focus on 25% faster load times and 50% better engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                Explore Projects <ArrowRight size={20} />
              </a>
              <a href="/PADMANABAN_RESUME.pdf" download className="glass hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all border-white/10">
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 opacity-50">
              <div className="flex items-center gap-2">
                <Code size={20} />
                <span className="text-sm font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal size={20} />
                <span className="text-sm font-medium">Node.js & SQL</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative hero-image">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image 
                  src="/hero-profile.png" 
                  alt="Padmanaban" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl shadow-xl animate-bounce duration-[3s]">
                <div className="font-bold text-xl text-primary">Web</div>
                <div className="text-xs opacity-70">Developer</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-2xl shadow-xl animate-bounce duration-[4s] delay-700">
                <div className="font-bold text-xl text-secondary">GSAP</div>
                <div className="text-xs opacity-70">Animation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
