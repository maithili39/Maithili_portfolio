import React from 'react';
import useVisible from '../hooks/useVisible';

const stats = [
  { icon: '💻', n: '47+', label: 'TABS OPEN AT ONCE', rotate: -6 },
  { icon: '⚡', n: '99+', label: '“SMALL CHANGES” THAT SOMEHOW TOOK 4 HOURS', rotate: 4 },
  { icon: '🐛', n: '404', label: 'BUGS I DEFINITELY DIDN’T CREATE', rotate: -4 },
  { icon: '📦', n: '∞', label: 'npm install STILL INSTALLING', rotate: 6 },
];

const StatsSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section className="relative bg-cream text-ink py-14 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <svg className="hidden md:block absolute bottom-10 left-8 lg:left-20 w-16 h-16 text-ink/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeDasharray="2 4" />
      </svg>
      <span className="hidden md:block absolute top-8 right-10 lg:right-24 text-rust/25 text-4xl -rotate-6 select-none" aria-hidden="true">✦</span>

      <div className="max-w-5xl mx-auto flex flex-col items-center">

        <div className="text-center mb-6 md:mb-8 animate-fade-up">
          <p className="font-script text-xl md:text-2xl text-rust mb-1">by the numbers</p>
          <h2 className="font-display inline-block text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-none text-ink">
            Track Record
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-up">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center text-center gap-3"
              style={{ transform: `rotate(${stat.rotate}deg)` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-ink bg-cream flex items-center justify-center text-xl md:text-2xl text-rust shadow-[4px_4px_0_0_var(--color-ink)] group-hover:-translate-y-1.5 group-hover:shadow-[6px_6px_0_0_var(--color-rust)] transition-all duration-300">
                {stat.icon}
              </div>
              <span className="font-display text-3xl md:text-4xl text-ink leading-none">
                {stat.n}
              </span>
              <span className="font-mono-display text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-ink/50 max-w-[9rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
