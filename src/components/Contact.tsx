'use client';

import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "expo.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="contact-card glass-card p-6 sm:p-10 md:p-16 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Let's Work <span className="text-gradient">Together</span>
              </h3>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                I'm currently available for new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Email Me</div>
                    <a href="mailto:padmanabanponnusamy701@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                      padmanabanponnusamy701@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Call Me</div>
                    <a href="tel:6383023497" className="text-lg font-bold hover:text-primary transition-colors">
                      +91 6383023497
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Location</div>
                    <div className="text-lg font-bold">
                      Tiruppur, Tamil Nadu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <form className="glass p-8 md:p-10 rounded-3xl space-y-6 border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70 ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/70 ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 ml-1">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white min-h-[150px] resize-none" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
