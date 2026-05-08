'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Code2, Rocket, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Column - Reduced Size */}
          <div className="lg:w-5/12" ref={imageRef}>
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Decorative background boxes */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden glass border-white/10 aspect-[4/5] shadow-2xl">
                <Image 
                  src="/about-workspace.png" 
                  alt="My Workspace" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Experience Badge */}
                <div className="absolute top-6 -right-6 glass p-4 rounded-2xl shadow-xl border-primary/20 animate-bounce duration-[4s]">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">Years of<br/>Experience</div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/20 backdrop-blur-md border border-white/10 text-primary">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Frontend Specialist</div>
                      <div className="text-foreground/40 text-[10px] tracking-wider uppercase">Tiruppur, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column - More detailed */}
          <div className="lg:w-7/12">
            <div className="space-y-2 mb-8">
              <span className="about-text inline-block text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                My Story
              </span>
              <h2 className="about-text text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                Crafting <span className="text-gradient">Digital</span> <br />
                Masterpieces.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-foreground/60 leading-relaxed mb-12">
              <p className="about-text">
                I am <span className="text-foreground font-semibold">Padmanaban</span>, a Frontend Developer at Admiro Soft Technologies. I don't just write code; I build bridges between complex business logic and human-centered design.
              </p>
              <p className="about-text">
                My approach is simple: <span className="text-primary font-medium italic">Efficiency meets Aesthetics.</span> Whether it's optimizing load times by 25% or building real-time GPS tracking systems, I thrive on the challenge of making things work beautifully.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="about-text p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Impact Driven</h4>
                  <p className="text-xs text-foreground/40 leading-relaxed">Focusing on solutions that actually grow businesses.</p>
                </div>
              </div>
              <div className="about-text p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-secondary/30 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">User Focused</h4>
                  <p className="text-xs text-foreground/40 leading-relaxed">Crafting experiences that people actually enjoy using.</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="about-text flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "GSAP", "Tailwind"].map(tech => (
                <div key={tech} className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
