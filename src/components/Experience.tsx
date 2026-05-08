import React from 'react';
import { Briefcase, GraduationCap, Calendar, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
  const work = [
    {
      role: "Frontend Developer",
      company: "Admiro Soft Technologies",
      type: "Full-time",
      period: "Jun 2024 - Present",
      location: "Tiruppur, Tamil Nadu",
      description: "Improved application load time by 25% using code splitting and asset optimization. Increased mobile engagement by 50% by implementing a mobile-first responsive design strategy. Implemented robust state management using Zustand and optimized data fetching with React Query. Built scalable UI components using React & Tailwind CSS for complex enterprise dashboards. Integrated GPS tracking and real-time features using Mapbox and WebSockets.",
      skills: ["React.js", "Zustand", "React Query", "Tailwind CSS", "Mapbox API", "WebSockets"]
    },
    {
      role: "Web Developer Intern",
      company: "DotWorld Technologies Pvt Ltd",
      type: "Internship",
      period: "Dec 2023 - Feb 2024",
      location: "Coimbatore, Tamil Nadu",
      description: "Developed interactive UI components using HTML, CSS, and JavaScript. Implemented smooth scroll animations and micro-interactions using GSAP. Improved overall user experience by 20% through UI refactoring and feedback loops.",
      skills: ["HTML/CSS", "JavaScript", "GSAP", "UI Refactoring"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      school: "Dr. N.G.P Institute of Technology, Coimbatore",
      period: "2019 - 2023",
      grade: "7.8 CGPA",
      description: "Completed Computer Science and Engineering with 7.8 CGPA at Dr.N.G.P.Institute of Technology, Coimbatore."
    },
    {
      degree: "HSC",
      school: "SVV Matriculation Higher Secondary School",
      period: "2018 - 2019",
      grade: "71.3%",
      description: "Completed HSC with 71.3% at SVV Matriculation Higher Secondary School, Gobichettipalayam."
    },
    {
      degree: "SSLC",
      school: "SVV Matriculation Higher Secondary School",
      period: "2016 - 2017",
      grade: "92.6%",
      description: "Completed SSLC with 92.6% at SVV Matriculation Higher Secondary School, Gobichettipalayam."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold">Professional Journey</h3>
            </div>
            
            <div className="space-y-12">
              {work.map((item, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-white/10 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black group-hover:scale-125 transition-transform"></div>
                  
                  <div className="glass-card p-6 sm:p-8 group-hover:border-primary/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.role}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary font-semibold">{item.company}</span>
                          <span className="text-white/20">•</span>
                          <span className="text-white/40 text-sm">{item.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-white/50 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                        <Calendar size={14} className="text-primary" /> {item.period}
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-6">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {item.skills.map(skill => (
                        <span key={skill} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md bg-white/5 text-white/50 border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-[#1a2b3c] px-6 py-3 rounded-xl mb-12 text-center border border-white/5 shadow-lg">
              <h3 className="text-xs font-display font-bold uppercase tracking-[0.3em] text-white/90">Academic Qualification</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="glass-card p-8 group hover:border-secondary/30 transition-all">
                  <h4 className="text-lg font-bold group-hover:text-secondary transition-colors mb-2">{item.degree}</h4>
                  <div className="text-sm opacity-60 mb-4">{item.school}</div>
                  <p className="text-xs text-white/50 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="text-secondary font-bold text-xl">{item.grade}</div>
                    <div className="text-xs opacity-50 px-3 py-1 rounded-full bg-white/5 tracking-wider">{item.period}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Cards */}
            <div className="mt-12 space-y-4">
              <div className="glass-card p-6 flex items-center gap-4 border-primary/20 bg-primary/5">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">25%</div>
                  <div className="text-xs opacity-60 uppercase tracking-tighter">Performance Boost</div>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center gap-4 border-secondary/20 bg-secondary/5">
                <div className="p-3 rounded-xl bg-secondary/20 text-secondary">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">50%</div>
                  <div className="text-xs opacity-60 uppercase tracking-tighter">Engagement Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
