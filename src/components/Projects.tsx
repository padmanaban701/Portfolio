'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ExternalLink, Truck, Activity, Calculator, Smartphone, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Github = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "Multi-Tenant Enterprise SaaS Platform",
    icon: <Users className="text-primary" />,
    description: "Architected a multi-tenant architecture supporting dynamic RBAC for complex enterprise hierarchies. Integrated with a high-performance Flutter mobile application for real-time fleet tracking and data synchronization.",
    tags: ["React", "TypeScript", "Flutter", "Zustand", "Firebase"],
    features: ["Multi-tenant RBAC", "Real-time GPS Tracking", "Flutter Mobile Integration", "Automated Payroll", "Push Notifications"]
  },
  {
    title: "Logistics & Delivery Operations Suite",
    icon: <Truck className="text-secondary" />,
    description: "Developed a mission-critical delivery management system featuring live driver tracking and automated shipment routing. Built for high-concurrency environments with real-time status monitoring.",
    tags: ["React", "Material UI", "Mapbox", "Real-time Tracking"],
    features: ["Live Driver Tracking", "Automated Routing", "Multi-role Dashboard", "Shipment Lifecycle", "Admin Analytics"]
  },
  {
    title: "Medicine Supply Chain & Order Management",
    icon: <Activity className="text-accent" />,
    description: "Streamlined end-to-end pharmacy order fulfillment by developing an integrated tracking and inventory synchronization system with built-in hardware barcode scanner support.",
    tags: ["React", "Material UI", "Inventory Sync", "Barcode Integration"],
    features: ["Inventory Tracking", "Barcode Scanner Support", "Dynamic Order Routing", "Vendor Management", "Role-based Workflow"]
  },
  {
    title: "High-Performance E-commerce Ecosystem",
    icon: <Smartphone className="text-primary" />,
    description: "Developed a scalable storefront with secure payment gateway integration and centralized order lifecycle management. Optimized for speed and cross-device seamless experience.",
    tags: ["React", "Next.js", "Payment Integration", "Perf Optimization"],
    features: ["Secure Payments", "Centralized Inventory", "Sales Analytics", "Asset Caching", "Lazy Loading"]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Enterprise Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold">Complex Systems <br/>& <span className="text-gradient">Real-world Solutions</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card p-10 flex flex-col hover:border-primary/40 transition-all duration-500 group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/10 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <Github size={20} className="text-white/20 hover:text-white cursor-pointer" />
                  <ExternalLink size={20} className="text-white/20 hover:text-white cursor-pointer" />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-white/60 text-base leading-relaxed mb-8">{project.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Key Capabilities</div>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-md bg-white/5 text-white/40 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
