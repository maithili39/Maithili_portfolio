import React from 'react';
import useVisible from '../hooks/useVisible';

const experiences = [
  {
    id: 3,
    role: 'Artificial Intelligence Intern',
    company: 'Springer Capital',
    period: 'Jun 2026 – Present',
    companyBg: 'bg-[#A2D2FF] text-[#1d3557]',
    periodBg: 'bg-[#BDE0FE] text-[#1d3557]',
    skillBg: 'bg-[#FFD6A5] text-[#7c4700]',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-neutral-700 text-sm font-medium font-sans-display">
        <li>Support data preprocessing and model preparation for machine learning experiments on real-world AI use cases.</li>
        <li>Implement AI-driven features and evaluate experiment results against project requirements.</li>
        <li>Document project outcomes and findings to guide iterative improvements.</li>
      </ul>
    ),
    skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'AI Research']
  },
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Trust Fintech',
    period: 'Jun 2025 – Jan 2026',
    companyBg: 'bg-[#CCD5AE] text-[#386641]',
    periodBg: 'bg-[#FAEDCD] text-[#7c4700]',
    skillBg: 'bg-[#E9EDC9] text-[#3a5a40]',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-neutral-700 text-sm font-medium font-sans-display">
        <li>Built a full-stack KYC module with a .NET frontend, REST APIs, and SQL Server backend for secure customer onboarding.</li>
        <li>Developed an OpenCV-based face authentication system for real-time identity verification.</li>
        <li>Designed and optimized database schemas and backend workflows for improved performance and data integrity.</li>
      </ul>
    ),
    skills: ['.NET', 'SQL Server', 'OpenCV', 'REST APIs']
  },
  {
    id: 2,
    role: 'Promotion Head',
    company: 'Hackronyx 2025',
    period: '2024 - 2025',
    companyBg: 'bg-[#fecdd3] text-[#9f1239]',
    periodBg: 'bg-[#fde68a] text-[#78350f]',
    skillBg: 'bg-[#fecdd3] text-[#9f1239]',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-neutral-700 text-sm font-medium font-sans-display">
        <li>Led marketing and outreach initiatives for a national-level hackathon.</li>
        <li>Coordinated promotional campaigns across multiple platforms, contributing to participation from <strong>3,500+ students</strong> across India.</li>
        <li>Collaborated with the organizing team to strengthen community engagement and event visibility.</li>
      </ul>
    ),
    skills: ['Marketing', 'Leadership', 'Community Outreach']
  }
];

const ExperienceSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="experience" ref={ref} className="py-14 md:py-20 bg-[#FAF8F5] px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-10 md:mb-14 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
            Experience
          </h2>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={exp.id}
              className={`w-full bg-white border-2 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 group ${visible ? `animate-fade-up delay-${i + 1}` : 'opacity-0'}`}>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="flex flex-col items-start order-2 md:order-1">
                  <h3 className="font-sans-display text-lg md:text-2xl font-black uppercase tracking-tight text-black leading-none mb-2 group-hover:-translate-y-0.5 transition-transform duration-300">
                    {exp.role}
                  </h3>
                  <div className={`border-2 border-black px-3 py-1 font-sans-display font-black uppercase tracking-widest text-[10px] shadow-[2px_2px_0_0_#000] ${exp.companyBg}`}>
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end order-1 md:order-2 shrink-0">
                  <div className={`border-2 border-black px-3 py-1 font-mono-display font-bold uppercase tracking-widest text-[10px] shadow-[2px_2px_0_0_#000] ${exp.periodBg}`}>
                    {exp.period}
                  </div>
                </div>
              </div>

              <div className="mt-1 pl-1 md:pl-2">
                {exp.description}
              </div>

              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-4 pl-1 md:pl-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={`font-sans-display px-2 py-0.5 border-2 border-black text-[10px] font-bold uppercase tracking-widest shadow-[1px_1px_0_0_#000] hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#000] transition-all ${exp.skillBg}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
