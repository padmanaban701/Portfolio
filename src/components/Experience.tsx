import React from 'react';
import { Briefcase, GraduationCap, Calendar, TrendingUp, Users, MapPin, ArrowUpRight } from 'lucide-react';

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
    <section id="experience" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Work Experience / Professional Journey */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-[#ff6b2b]/10 text-[#ff6b2b]">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                <p className="text-xs text-white/30">{work.length} positions</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {work.map((item, i) => (
                <div key={i} className={`relative p-8 rounded-2xl bg-[#0a0f1a] border border-white/5 overflow-hidden transition-all hover:border-white/10 group ${i === 0 ? 'border-l-4 border-l-[#ff6b2b]' : 'border-l-4 border-l-[#3b82f6]'}`}>
                  {/* Background Number */}
                  <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                    0{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-[#ff6b2b] font-medium">{item.company}</span>
                          {i === 0 && (
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-2.5 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-[#ff6b2b]">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-white/30 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-white/20" /> {item.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-white/20" /> {item.location}
                      </div>
                    </div>
                    
                    <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-lg">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <span key={skill} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#1e293b] text-white/60 border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Qualification */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-[#3b82f6]/10 text-[#3b82f6]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Academic Qualification</h3>
                <p className="text-xs text-white/30">{education.length} levels</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="relative p-8 rounded-2xl bg-[#0a0f1a] border border-white/5 border-l-4 border-l-[#3b82f6]/50 overflow-hidden transition-all hover:border-white/10 group">
                  {/* Background Number */}
                  <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                    0{i + 1}
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                    <div className="text-[#3b82f6] font-medium mb-4">{item.school}</div>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-white/30 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-white/20" /> {item.period}
                      </div>
                      <div className="flex items-center gap-2 font-bold text-[#3b82f6]">
                        {item.grade}
                      </div>
                    </div>
                    
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
