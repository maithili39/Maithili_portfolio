import React from 'react';
import { SiPython, SiReact, SiFastapi, SiPostgresql, SiDocker, SiGithub, SiClaude, SiPostman } from 'react-icons/si';
import useVisible from '../hooks/useVisible';

const tools = [
  { icon: <SiClaude />, label: 'Claude', rotate: -8, top: '4%', left: '58%' },
  { icon: <SiGithub />, label: 'GitHub', rotate: 6, top: '2%', left: '80%' },
  { icon: <SiPython />, label: 'Python', rotate: -4, top: '32%', left: '90%' },
  { icon: <SiFastapi />, label: 'FastAPI', rotate: 8, top: '60%', left: '86%' },
  { icon: <SiReact />, label: 'React', rotate: -10, top: '82%', left: '64%' },
  { icon: <SiPostgresql />, label: 'Postgres', rotate: 5, top: '86%', left: '36%' },
  { icon: <SiDocker />, label: 'Docker', rotate: -6, top: '64%', left: '10%' },
  { icon: <SiPostman />, label: 'Postman', rotate: 9, top: '34%', left: '4%' },
];

const AboutSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="about" ref={ref} className="relative bg-cream text-ink py-14 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-10 items-center">

        {/* Left: About text, left-aligned */}
        <div className="flex flex-col items-start text-left">
          <div className={`mb-6 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="font-script text-xl md:text-2xl text-rust mb-1">a little about me</p>
            <h2 className="font-display inline-block text-3xl md:text-4xl uppercase tracking-tight leading-none text-ink">
              About
            </h2>
          </div>

          <p className={`font-sans-display text-ink text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl ${visible ? 'animate-fade-up delay-1' : 'opacity-0'}`}>
            <span className="font-script text-2xl sm:text-3xl md:text-4xl block mb-1" style={{ color: '#1b4332' }}>Hi, I'm Maithili Dorkhande</span>
            I build AI and full-stack systems that actually work (yes, even outside my local machine). Scroll down to see my projects—or skip the preview and just hire me already.
          </p>

          {/* Hand-drawn build-process loop */}
          <div className={`relative w-full mt-12 md:mt-14 ${visible ? 'animate-fade-up delay-2' : 'opacity-0'}`}>
            <p className="font-mono-display text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-6">
              my build loop
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 max-w-xl">
              {/* Step 1: explore */}
              <span className="font-script text-2xl sm:text-3xl text-rust -rotate-3 select-none shrink-0">
                explore
              </span>

              {/* Arrow 1: explore -> build */}
              <svg className="w-8 sm:w-12 h-6 text-ink/70 shrink-0" viewBox="0 0 60 30" fill="none" aria-hidden="true">
                <path d="M4 22 C 20 6, 40 6, 54 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M44 20 L 55 18 L 48 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 2: build */}
              <span className="font-script text-2xl sm:text-3xl text-rust rotate-2 select-none shrink-0">
                build
              </span>

              {/* Arrow 2: build -> test */}
              <svg className="w-8 sm:w-12 h-6 text-rust/80 shrink-0" viewBox="0 0 60 30" fill="none" aria-hidden="true">
                <path d="M4 8 C 20 24, 40 24, 54 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M44 10 L 55 12 L 48 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 3: test */}
              <span className="font-script text-2xl sm:text-3xl text-rust -rotate-2 select-none shrink-0">
                test
              </span>

              {/* Arrow 3: test -> ship */}
              <svg className="w-8 sm:w-12 h-6 text-ink/70 shrink-0" viewBox="0 0 60 30" fill="none" aria-hidden="true">
                <path d="M4 22 C 20 6, 40 6, 54 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M44 20 L 55 18 L 48 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Step 4: ship with loop arrow back to explore */}
              <div className="relative shrink-0">
                <span className="font-script text-2xl sm:text-3xl text-rust rotate-3 select-none">
                  ship
                </span>
                {/* Curved loop arrow pointing back to explore (left) - longer and deeper curve */}
                <svg className="absolute -bottom-14 right-2 w-[320px] sm:w-[520px] h-16 text-rust/70 pointer-events-none" viewBox="0 0 450 60" fill="none" aria-hidden="true">
                  <path d="M 440 10 Q 225 54, 12 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
                  <path d="M 22 17 L 10 25 L 24 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image shifted right */}
        <div className={`relative flex items-center justify-end md:pl-8 ${visible ? 'animate-fade-up delay-1' : 'opacity-0'}`}>
          <img
            src={`${import.meta.env.BASE_URL}images/image.png`}
            alt="About Maithili"
            className="w-full max-w-md h-auto object-contain ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
