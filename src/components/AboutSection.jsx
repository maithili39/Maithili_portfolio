import React from 'react';
import useVisible from '../hooks/useVisible';

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
                {/* Anchored to a narrow word and drawn leftward. It only has
                    room from sm up, and the wider variant only clears the
                    viewport's left edge at xl - md/lg grew it faster than the
                    surrounding column grew, which clipped it. */}
                <svg className="hidden sm:block absolute -bottom-14 right-2 w-[300px] xl:w-[520px] h-16 text-rust/70 pointer-events-none" viewBox="0 0 450 60" fill="none" aria-hidden="true">
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
            loading="lazy"
            decoding="async"
            className="w-full max-w-md h-auto object-contain ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
