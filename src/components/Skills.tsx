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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Skills & <br />Technologies</h3>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Fast learner eager to learn new technologies and apply them to solve complex problems.
            </p>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <div className="font-bold text-xl mb-3 flex items-center gap-2">
                <Globe className="text-primary" /> Area of Interest
              </div>
              <ul className="space-y-2 text-white/70">
                <li>• Web Development</li>
                <li>• Software Development</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="glass-card p-6 sm:p-10 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    {cat.icon}
                  </div>
                  <h4 className="text-2xl font-bold">{cat.name}</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
