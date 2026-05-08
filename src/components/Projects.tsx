'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Rocket, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    title: "Multi-Tenant Enterprise SaaS Platform",
    description: "Architected a multi-tenant architecture supporting dynamic RBAC for complex enterprise hierarchies. Engineered a real-time GPS tracking system with precise movement logging and distance calculations. Developed an integrated Flutter mobile application with Firebase for real-time data sync and push notifications. Automated high-volume payroll processing and automated pay-slip generation.",
    tags: ["React", "TypeScript", "Flutter", "Zustand", "Firebase"],
    features: ["Multi-tenant RBAC", "Real-time GPS Tracking", "Flutter Mobile Integration", "Automated Payroll", "Push Notifications"]
  },
  {
    title: "Logistics & Delivery Operations Suite",
    description: "Developed a mission-critical delivery management system featuring live driver tracking and automated shipment routing. Built a comprehensive administrative dashboard for real-time monitoring of fleet performance and order metrics. Implemented a secure, multi-level authentication system to manage workflows across Super Admin, Dispatchers, and Field Agents.",
    tags: ["React", "Material UI", "Mapbox", "Real-time Tracking"],
    features: ["Live Driver Tracking", "Automated Routing", "Multi-role Dashboard", "Shipment Lifecycle", "Admin Analytics"]
  },
  {
    title: "Medicine Supply Chain & Order Management",
    description: "Streamlined end-to-end pharmacy order fulfillment by developing an integrated tracking and inventory synchronization system. Enhanced operational efficiency by integrating barcode scanner support for rapid stock-in/stock-out processes. Designed a resilient order assignment engine that dynamically routes deliveries based on employee availability and proximity.",
    tags: ["React", "Material UI", "Inventory Sync", "Barcode Integration"],
    features: ["Inventory Tracking", "Barcode Scanner Support", "Dynamic Order Routing", "Vendor Management", "Role-based Workflow"]
  },
  {
    title: "High-Performance E-commerce Ecosystem",
    description: "Developed a scalable storefront with secure payment gateway integration and centralized order lifecycle management. Built an intuitive vendor administration panel for real-time inventory tracking, sales analytics, and customer management. Optimized frontend performance through asset caching and lazy loading, ensuring a seamless cross-device experience.",
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
    <section id="projects" ref={sectionRef} className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-[#ff6b2b]/10 text-[#ff6b2b]">
            <Rocket size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
            <p className="text-xs text-white/30">{projects.length} projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card relative p-8 rounded-2xl bg-[#0a0f1a] border border-white/5 overflow-hidden transition-all hover:border-white/10 group">
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#ff6b2b] bg-[#ff6b2b]/10 px-3 py-1 rounded-full">
                    <Sparkles size={12} />
                    Featured
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#1e293b] text-white/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
