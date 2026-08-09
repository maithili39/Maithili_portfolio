import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiVolume2 } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const experiences = [
  {
    id: 1,
    icon: <FiBriefcase />,
    role: 'Software Engineering Intern',
    company: 'Trust Fintech · Hybrid',
    period: 'Jun 2025 – Jan 2026',
    accent: 'rust',
    badge: 'Live KYC Module',
    highlights: [
      { tag: 'Face Auth', text: 'Integrated real-time face verification into KYC pipeline using OpenCV & Computer Vision.' },
      { tag: 'KYC Module', text: 'Built & deployed production-grade customer onboarding engine using ASP.NET & SQL Server.' },
      { tag: 'DB Tuning', text: 'Designed normalized schemas & optimized indexing for fast response times & audit integrity.' },
    ],
    skills: ['ASP.NET', 'SQL Server', 'OpenCV', 'HTML/CSS', 'Database Indexing'],
  },
  {
    id: 2,
    icon: <FiVolume2 />,
    role: 'Promotion Head',
    company: 'Hackronyx 2025',
    period: '2024 – 2025',
    accent: 'ink',
    badge: '3,500+ Students',
    highlights: [
      { tag: 'Outreach', text: 'Led nationwide marketing & promotional campaigns across 50+ college communities.' },
      { tag: 'Engagement', text: 'Drove record student participation for national-level hackathon event.' },
    ],
    skills: ['Marketing Strategy', 'Team Leadership', 'Community Outreach'],
  },
];

const ACCENTS = {
  rust: { node: 'bg-rust text-cream', tag: 'bg-coral text-ink', shadow: 'var(--color-rust)' },
  ink: { node: 'bg-ink text-cream', tag: 'bg-cream-alt text-ink', shadow: 'var(--color-ink)' },
};

const ExperienceSection = () => {
  const [ref, visible] = useVisible();
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={ref} className="py-14 md:py-20 bg-cream-alt px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-8 md:mb-10 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="font-script text-xl md:text-2xl text-rust mb-1">where I've been</p>
          <h2 className="font-display relative inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
            Experience
            <span className="hidden sm:block absolute -top-2 -left-8 md:-left-10 text-rust text-2xl md:text-3xl -rotate-12 select-none" aria-hidden="true">✦</span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative w-full pl-14 sm:pl-20">
          {/* Track + scroll-filled line */}
          <div className="absolute left-5 sm:left-7 top-2 bottom-2 w-[3px] bg-ink/15 rounded-full" aria-hidden="true" />
          <motion.div
            className="absolute left-5 sm:left-7 top-2 w-[3px] bg-ink rounded-full origin-top"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14 sm:gap-16">
            {experiences.map((exp, i) => {
              const accent = ACCENTS[exp.accent];
              const tilt = i % 2 === 0 ? -0.7 : 0.7;
              return (
                <div key={exp.id} className={`relative ${visible ? `animate-fade-up delay-${i + 1}` : 'opacity-0'}`}>
                  {/* Node */}
                  <span className={`absolute -left-14 sm:-left-20 top-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-ink ${accent.node} shadow-[3px_3px_0_0_var(--color-ink)] text-lg`}>
                    {exp.icon}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="bg-cream border-2 md:border-4 border-ink p-4 md:p-6 shadow-[6px_6px_0_0_var(--accent-shadow)]"
                    style={{ '--accent-shadow': accent.shadow, rotate: tilt }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="font-sans-display text-lg md:text-2xl font-black uppercase tracking-tight text-ink leading-none">
                            {exp.role}
                          </h3>
                          {exp.badge && (
                            <span className="font-mono-display text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border border-ink bg-rust text-cream shadow-[1px_1px_0_0_var(--color-ink)]">
                              ★ {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className={`border-2 border-ink px-3 py-1 font-sans-display font-black uppercase tracking-widest text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] ${accent.tag}`}>
                          {exp.company}
                        </div>
                      </div>
                      <div className="font-mono-display font-bold uppercase tracking-widest text-[10px] text-ink/50 shrink-0">
                        {exp.period}
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-4">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-ink/80 font-sans-display">
                          <span className="shrink-0 font-mono-display text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-ink/40 bg-cream-alt text-rust rounded">
                            {item.tag}
                          </span>
                          <span className="font-medium leading-snug">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="pt-2 border-t border-ink/15 flex flex-wrap gap-2">
                        {exp.skills.map((skill, si) => (
                          <span key={si} className={`font-sans-display px-2 py-0.5 border-2 border-ink text-[10px] font-bold uppercase tracking-widest shadow-[1px_1px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-rust)] transition-all ${accent.tag}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
