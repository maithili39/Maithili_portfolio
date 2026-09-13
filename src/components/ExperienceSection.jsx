import React from 'react';
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
  rust: {
    iconBg: 'var(--color-rust)',
    iconFg: 'var(--color-cream)',
    headerBg: 'var(--color-cream-alt)',
    titleFg: 'var(--color-rust-deep)',
    tagBg: 'var(--color-coral)',
    tagFg: 'var(--color-ink)',
    shadow: 'var(--color-rust)',
  },
  ink: {
    iconBg: 'var(--color-ink)',
    iconFg: 'var(--color-cream)',
    headerBg: 'var(--color-cream-alt)',
    titleFg: 'var(--color-rust-deep)',
    tagBg: 'var(--color-cream-alt)',
    tagFg: 'var(--color-ink)',
    shadow: 'var(--color-ink)',
  },
};

const ExperienceSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="experience" ref={ref} className="py-14 md:py-20 bg-coral px-6 md:px-12 lg:px-24 overflow-hidden">
      <style>{`
        .exp-card { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease; }
        .exp-card:hover { transform: translateY(-5px); box-shadow: 10px 10px 0 0 var(--accent-shadow); }
        .exp-line { transition: background-color 0.2s ease; }
        .exp-line:hover { background-color: rgba(36,18,9,0.04); }

      `}</style>

      <div className="max-w-4xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-8 md:mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="font-script text-xl md:text-2xl mb-1" style={{ color: 'rgba(36,18,9,0.65)' }}>where I've been</p>
          <h2 className="font-display relative inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
            Experience
            <span className="hidden sm:block absolute -top-2 -left-8 md:-left-10 text-rust text-2xl md:text-3xl -rotate-12 select-none" aria-hidden="true">✦</span>
          </h2>
        </div>

        {/* Plain stacked cards - no rail, no nodes. */}
        <div className="w-full flex flex-col gap-7 md:gap-9">
          {experiences.map((exp, i) => {
            const accent = ACCENTS[exp.accent];
            return (
              <div
                key={exp.id}
                className={`exp-card relative bg-cream border-2 md:border-4 border-ink shadow-[6px_6px_0_0_var(--accent-shadow)] ${
                  visible ? `animate-fade-up delay-${i + 1}` : 'opacity-0'
                }`}
                style={{ '--accent-shadow': accent.shadow }}
              >
                {/* Tinted header band carries the role; the body below stays
                    calm cream. Same shape as the achievement cards. */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 md:px-6 py-3.5 md:py-4 border-b-2 md:border-b-4 border-ink"
                  style={{ backgroundColor: accent.headerBg }}
                >
                  <span
                    className="shrink-0 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] text-xl"
                    style={{ backgroundColor: accent.iconBg, color: accent.iconFg }}
                    aria-hidden="true"
                  >
                    {exp.icon}
                  </span>

                  <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                    <h3
                      className="font-sans-display text-xl md:text-2xl font-black uppercase tracking-tight leading-none"
                      style={{ color: accent.titleFg }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono-display font-bold uppercase tracking-widest text-[10px]" style={{ color: 'rgba(36,18,9,0.72)' }}>
                        {exp.company}
                      </span>
                      {exp.badge && (
                        <span
                          className="font-mono-display text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border border-ink"
                          style={{ backgroundColor: 'var(--color-rust)', color: 'var(--color-cream)' }}
                        >
                          ★ {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="shrink-0 self-start sm:self-center font-mono-display font-bold uppercase tracking-widest text-[10px] border-2 bg-cream rounded-full px-3 py-1.5"
                    style={{ color: 'rgba(36,18,9,0.65)', borderColor: 'rgba(36,18,9,0.25)' }}
                  >
                    {exp.period}
                  </div>
                </div>

                <div className="relative p-4 md:p-6">

                  <div className="relative flex flex-col gap-1 mb-5">
                    {exp.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="exp-line flex items-start gap-3 text-xs md:text-sm font-sans-display border-l-2 pl-3 py-2 rounded-r"
                        style={{ borderColor: accent.shadow, color: 'rgba(36,18,9,0.78)' }}
                      >
                        <span className="shrink-0 mt-px font-mono-display text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border bg-cream-alt rounded" style={{ borderColor: 'rgba(36,18,9,0.35)', color: 'rgba(36,18,9,0.7)' }}>
                          {item.tag}
                        </span>
                        <span className="font-medium leading-snug">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="relative pt-3 border-t-2 border-dashed" style={{ borderColor: 'rgba(36,18,9,0.18)' }}>
                      <p className="font-mono-display text-[9px] font-bold uppercase tracking-[0.22em] mb-2.5" style={{ color: 'rgba(36,18,9,0.4)' }}>
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, si) => (
                          <span
                            key={si}
                            className="font-sans-display px-2.5 py-1 border-2 border-ink text-[10px] font-bold uppercase tracking-widest shadow-[1px_1px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-rust)] transition-all"
                            style={{ backgroundColor: accent.tagBg, color: accent.tagFg }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
