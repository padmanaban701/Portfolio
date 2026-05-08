import React from 'react';
import { Layout, Server, Database, Code, Zap, Globe } from 'lucide-react';

const skillCategories = [
  {
    name: "Frontend & Mobile",
    icon: <Layout size={24} />,
    skills: ["React", "Next.js", "TypeScript", "Flutter", "Dart", "Tailwind CSS", "Material UI", "GSAP Animation"]
  },
  {
    name: "State & Data",
    icon: <Database size={24} />,
    skills: ["Zustand", "Redux Toolkit", "React Query", "Firebase", "REST APIs", "SQL"]
  },
  {
    name: "Enterprise Solutions",
    icon: <Zap size={24} />,
    skills: ["GPS Tracking", "MapBox API", "RBAC", "Multi-tenancy", "Payroll Systems", "Barcode Integration"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e293b] text-[#ff6b2b] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-white/5">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Skills & <span className="text-[#ff6b2b]">Technologies</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Frontend */}
          <div className="p-8 rounded-3xl bg-[#0a0f1a] border border-white/5 transition-all hover:border-white/10 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#ff6b2b]/10 text-[#ff6b2b]">
                <Layout size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Frontend</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "GSAP Animation"].map(skill => (
                <span key={skill} className="text-xs px-4 py-2 rounded-full bg-[#1e293b]/50 text-white/40 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Mobile */}
          <div className="p-8 rounded-3xl bg-[#0a0f1a] border border-white/5 transition-all hover:border-white/10 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#10b981]/10 text-[#10b981]">
                <Server size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Backend & Mobile</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "SQL", "Firebase", "REST APIs", "Flutter", "Dart"].map(skill => (
                <span key={skill} className="text-xs px-4 py-2 rounded-full bg-[#1e293b]/50 text-white/40 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div className="p-8 rounded-3xl bg-[#0a0f1a] border border-white/5 transition-all hover:border-white/10 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                <Zap size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Enterprise</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["GPS Tracking", "MapBox API", "RBAC", "Multi-tenancy", "Payroll Systems"].map(skill => (
                <span key={skill} className="text-xs px-4 py-2 rounded-full bg-[#1e293b]/50 text-white/40 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Also Familiar With */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-white/5 text-white/40">
              <Code size={18} />
            </div>
            <h4 className="text-lg font-bold text-white/80">Also Familiar With</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Zustand", "Redux Toolkit", "React Query", "Git/GitHub", "Barcode Integration", "Unit Testing", "UI/UX Design", "Performance Optimization"].map(skill => (
              <span key={skill} className="text-[10px] font-bold px-4 py-2 rounded-full bg-[#0a0f1a] text-white/40 border border-white/5 hover:border-white/20 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
