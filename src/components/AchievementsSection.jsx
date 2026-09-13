import React from 'react';
import useVisible from '../hooks/useVisible';

const achievements = [
  {
    id: 1,
    number: '01',
    title: '1st Place',
    type: 'Hackathon',
    subtitle: 'GraphRAG Inference Hackathon by TigerGraph',
    location: '2000+ Participants',
    emoji: '🏆',
    bg: '#CCD5AE',
    accent: '#386641',
  },
  {
    id: 2,
    number: '02',
    title: '1st Runner-Up',
    type: 'Global Hackathon',
    subtitle: 'NASA Space Apps Challenge 2024',
    description: 'ML model to reduce seismic noise',
    emoji: '🚀',
    bg: '#FAEDCD',
    accent: '#c05e00',
  },
  {
    id: 3,
    number: '03',
    title: 'Published',
    type: 'Copyright',
    subtitle: 'Skill Pilot',
    description: 'AI-Powered Career Guidance Platform',
    location: 'Govt. of India — Diary No: LD-36923/2025-CO',
    emoji: '📄',
    bg: '#fecdd3',
    accent: '#9f1239',
  },
];

const AchievementsSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-14 md:py-20 bg-cream-alt text-ink px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <style>{`
        /* Entrance: each card lifts and settles, staggered down the row */
        @keyframes achIn {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ach-in { animation: achIn 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        /* Idle: the medal drifts */
        @keyframes medalBob {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50%      { transform: translateY(-4px) rotate(4deg); }
        }
        .medal-bob { animation: medalBob 3.2s ease-in-out infinite; }

        .ach-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
        }
        .ach-card:hover { transform: translateY(-6px); box-shadow: 10px 10px 0 0 var(--accent); }

        /* Hover: a light sweep travels across the card */
        @keyframes achShine {
          from { transform: translateX(-130%) skewX(-18deg); }
          to   { transform: translateX(240%) skewX(-18deg); }
        }
        .ach-shine {
          position: absolute; inset: 0; z-index: 5;
          pointer-events: none; opacity: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
          width: 45%;
        }
        .ach-card:hover .ach-shine { opacity: 1; animation: achShine 0.9s ease-out; }

        /* Hover: the medal spins once */
        @keyframes medalSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .ach-card:hover .medal-bob { animation: medalSpin 0.7s cubic-bezier(0.16,1,0.3,1); }

        /* Hover: title nudges, rule extends, meta chip lifts */
        .ach-title { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .ach-card:hover .ach-title { transform: translateX(5px); }

        .ach-rule { transition: width 0.45s cubic-bezier(0.16,1,0.3,1); }
        .ach-card:hover .ach-rule { width: 4.5rem; }

        .ach-meta { transition: transform 0.3s ease; }
        .ach-card:hover .ach-meta { transform: translateY(-2px); }

        .ach-index { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease; }
        .ach-card:hover .ach-index { transform: scale(1.15); opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .medal-bob, .ach-card:hover .medal-bob, .ach-card:hover .ach-shine { animation: none; }
        }
      `}</style>

      <span
        className="hidden md:block absolute top-10 left-10 lg:left-24 text-3xl -rotate-12 select-none"
        style={{ color: 'var(--color-rust)', opacity: 0.28 }}
        aria-hidden="true"
      >✦</span>
      <span
        className="hidden md:block absolute bottom-12 right-10 lg:right-24 text-4xl rotate-12 select-none"
        style={{ color: 'var(--color-rust)', opacity: 0.22 }}
        aria-hidden="true"
      >✦</span>

      <div className="max-w-5xl mx-auto">

        <div className={`w-full text-center mb-10 md:mb-14 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="font-script text-xl md:text-2xl text-rust mb-1">little wins</p>
          <h2 className="font-display inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {achievements.map((item, index) => (
            <article
              key={item.id}
              style={{ '--accent': item.accent, animationDelay: `${index * 0.13}s` }}
              className={`ach-card group flex flex-col border-4 border-ink shadow-[6px_6px_0_0_var(--color-ink)] ${
                visible ? 'ach-in' : 'opacity-0'
              } ${achievements.length % 2 !== 0 && index === achievements.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="ach-shine" aria-hidden="true" />
              {/* Colored header: medal, award type, index */}
              <div
                className="px-4 sm:px-5 py-3.5 border-b-4 border-ink flex items-center gap-3"
                style={{ backgroundColor: item.bg }}
              >
                <span
                  className="medal-bob flex items-center justify-center w-10 h-10 shrink-0 rounded-full border-2 border-ink bg-cream text-xl shadow-[2px_2px_0_0_var(--color-ink)]"
                  aria-hidden="true"
                >
                  {item.emoji}
                </span>
                <span
                  className="font-mono-display font-bold uppercase tracking-[0.18em] text-[9px] sm:text-[10px]"
                  style={{ color: item.accent }}
                >
                  {item.type}
                </span>
                <span
                  className="ach-index ml-auto font-display text-lg leading-none select-none"
                  style={{ color: 'rgba(36,18,9,0.22)' }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 bg-cream gap-2.5">

                {/* The placing is the headline */}
                <h3
                  className="ach-title font-display text-2xl sm:text-[26px] uppercase tracking-tight leading-none"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>

                <p className="font-sans-display font-black text-base sm:text-lg text-ink leading-snug">
                  {item.subtitle}
                </p>

                <span
                  className="ach-rule block w-10 border-t-2 border-dashed my-0.5"
                  style={{ borderColor: 'rgba(36,18,9,0.25)' }}
                  aria-hidden="true"
                />

                {item.description && (
                  <p
                    className="font-sans-display text-sm font-medium leading-relaxed"
                    style={{ color: 'rgba(36,18,9,0.6)' }}
                  >
                    {item.description}
                  </p>
                )}

                {item.location && (
                  <span
                    className="ach-meta font-mono-display text-[9px] uppercase tracking-widest mt-auto pt-3 px-2 py-1.5 rounded border-2 leading-snug"
                    style={{
                      color: item.accent,
                      backgroundColor: `${item.bg}66`,
                      borderColor: 'rgba(36,18,9,0.15)',
                      paddingTop: '0.375rem',
                    }}
                  >
                    {item.location}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
