import React from 'react';
import useVisible from '../hooks/useVisible';

const achievements = [
  {
    id: 1,
    number: '01',
    title: '1st Position',
    subtitle: 'GraphRAG Inference Hackathon by TigerGraph',
    location: '2000+ Participants',
    emoji: '🏆',
    bg: '#CCD5AE',
    accent: '#386641',
    tagBg: '#E9EDC9',
  },
  {
    id: 2,
    number: '02',
    title: '1st Runner-Up',
    subtitle: 'NASA Space Apps Challenge 2024',
    description: 'ML model to reduce seismic noise',
    emoji: '🚀',
    bg: '#FAEDCD',
    accent: '#c05e00',
    tagBg: '#FEF9C3',
  },
  {
    id: 3,
    number: '03',
    title: 'Published',
    subtitle: 'Skill Pilot',
    description: 'AI-Powered Career Guidance Platform',
    location: 'Govt. of India — Diary No: LD-36923/2025-CO',
    emoji: '📄',
    bg: '#fecdd3',
    accent: '#9f1239',
    tagBg: '#ffe4e6',
  }
];

const AchievementsSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="achievements" ref={ref} className="py-14 md:py-20 bg-[#FAF8F5] text-black px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <div className={`w-full text-center mb-10 md:mb-14 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#F77F00] hover:-translate-y-1 transition-all duration-300 ${visible ? `animate-scale-in delay-${index + 1}` : 'opacity-0'}`}
            >
              {/* Colored top header */}
              <div
                className="px-5 py-4 border-b-4 border-black flex items-center justify-between"
                style={{ backgroundColor: item.bg }}
              >
                <span className="font-sans-display font-black uppercase tracking-widest text-xs" style={{ color: item.accent }}>
                  {item.title}
                </span>
                <span className="text-xl">{item.emoji}</span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 bg-white gap-3">

                {/* Big number watermark */}
                <div className="flex items-start justify-between">
                  <h3 className="font-sans-display font-black text-lg uppercase tracking-tight text-black leading-tight flex-1 pr-2">
                    {item.subtitle}
                  </h3>
                  <span className="font-sans-display font-black text-4xl text-black/8 leading-none select-none shrink-0">
                    {item.number}
                  </span>
                </div>

                {item.description && (
                  <p className="font-sans-display text-neutral-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.location && (
                  <p
                    className="font-mono-display text-[9px] uppercase tracking-widest mt-auto pt-3 border-t-2 border-dashed border-black/15"
                    style={{ color: item.accent }}
                  >
                    {item.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
