import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] bg-coral text-ink flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 pb-4 overflow-hidden"
    >
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-6px) rotate(2deg); }
        }
        .hero-fade-in { opacity: 0; animation: heroFadeIn 1s cubic-bezier(0.16,1,0.3,1) forwards; }
        .badge-float  { animation: floatBadge 4s ease-in-out infinite; }
      `}</style>

      {/* Decorative Wavy/Blob Vignettes */}
      <div className="absolute left-0 top-[15%] w-[18vw] h-[45vh] bg-rust/5 rounded-r-full blur-3xl pointer-events-none select-none" aria-hidden="true" />
      <div className="absolute right-0 bottom-[10%] w-[22vw] h-[55vh] bg-rust/10 rounded-l-full blur-3xl pointer-events-none select-none" aria-hidden="true" />

      {/* Decorative Doodles: evenly distributed across 4 corners + midpoints */}

      {/* Top-left: Browser window */}
      <div className="hidden md:block absolute top-[8%] left-[4%] w-16 h-12 opacity-40 select-none pointer-events-none z-[5]" aria-hidden="true">
        <svg viewBox="0 0 100 80" className="w-full h-full stroke-ink stroke-2 fill-none">
          <rect x="8" y="8" width="84" height="64" rx="4" />
          <line x1="8" y1="28" x2="92" y2="28" />
          <circle cx="18" cy="18" r="2" fill="var(--color-ink)" />
          <circle cx="28" cy="18" r="2" fill="var(--color-ink)" />
          <circle cx="38" cy="18" r="2" fill="var(--color-ink)" />
        </svg>
      </div>

      {/* Top-right: Code brackets {} */}
      <div className="hidden md:block absolute top-[12%] right-[6%] text-4xl opacity-35 select-none pointer-events-none z-[5] text-ink" aria-hidden="true">
        {'{ }'}
      </div>

      {/* Middle-left: Lightning bolt */}
      <div className="hidden md:block absolute top-[50%] left-[3%] text-5xl opacity-30 select-none pointer-events-none z-[5]" aria-hidden="true">
        ⚡
      </div>

      {/* Bottom-left: Paper plane */}
      <div className="hidden md:block absolute bottom-[10%] left-[5%] text-4xl opacity-40 select-none pointer-events-none z-[5]" aria-hidden="true">
        ✈️
      </div>

      {/* Bottom-right: Coffee/cup */}
      <div className="hidden md:block absolute bottom-[15%] right-[5%] text-4xl opacity-35 select-none pointer-events-none z-[5]" aria-hidden="true">
        ☕
      </div>

      {/* Top center: Dot grid pattern */}
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 opacity-15 select-none pointer-events-none z-0" aria-hidden="true">
        <div className="grid grid-cols-6 gap-1.5 text-ink">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-0.5 h-0.5 rounded-full bg-current" />
          ))}
        </div>
      </div>

      {/* The page had no h1: "DEVELOPER" is decorative (aria-hidden) and the
          name lives in the navbar link, so assistive tech and search engines
          got no document heading. Visually hidden to leave the design as-is. */}
      <h1 className="sr-only">Maithili Dorkhande — Developer</h1>

      {/* Mobile greeting: the two floating badges are desktop-only, so small
          screens got no name and no availability cue at all. */}
      <div className="md:hidden relative z-10 flex flex-col items-center gap-2 text-center px-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">👋</span>
          <p className="font-display text-ink text-[20px] font-bold leading-tight">I'm Maithili</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="font-display text-ink/70 text-[11px] font-bold uppercase tracking-wider">Open to Work</span>
        </div>
      </div>

      {/* Hi Intro — right side, floating plain text */}
      <div className="hidden md:block absolute top-[22%] right-[6%] lg:right-[9%] z-10 select-none badge-float" style={{ animationDelay: '0s' }}>
        <div className="flex items-center gap-2.5">
          <span className="text-4xl">👋</span>
          <div>
            <p className="font-display text-ink/50 text-[15px] uppercase tracking-widest leading-none">Hey there,</p>
            <p className="font-display text-ink text-[26px] font-bold leading-tight">I'm Maithili</p>
          </div>
        </div>
      </div>

      {/* Open to Work — mirrors the "Hey there" badge on the opposite flank */}
      <div className="hidden md:block absolute top-[24%] left-[14%] lg:left-[19%] z-10 select-none badge-float" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="font-display text-ink text-[12px] font-bold uppercase tracking-wider">Open to Work</span>
        </div>
      </div>

      {/* Circular rotating text ring — right side */}
      <div className="hidden md:block absolute top-[42%] right-[3%] lg:right-[5%] z-10 pointer-events-none select-none" aria-hidden="true">
        <style>{`
          @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .spin-ring { animation: spinRing 14s linear infinite; transform-origin: center; }
        `}</style>
        <div className="relative w-[130px] h-[130px]">
          {/* rotating text */}
          <svg className="spin-ring absolute inset-0" width="130" height="130" viewBox="0 0 130 130">
            <defs>
              <path id="circle-path" d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
            </defs>
            <text fill="var(--color-ink)" fontSize="10.5" fontFamily="'Archivo Black', sans-serif" letterSpacing="2.2" opacity="0.75">
              <textPath href="#circle-path">
                Problem Solver • AI Dev • Web Builder • Creative Coder •&nbsp;
              </textPath>
            </text>
          </svg>
          {/* center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-rust/60" />
          </div>
        </div>
      </div>

      {/* Main content: centered column */}

      <div className="relative flex-1 min-h-0 flex flex-col items-center justify-center w-full" style={{ zIndex: 10 }}>

        {/* Center image container - increased size & shifted upwards */}
        <div className="relative w-full flex-1 min-h-0 flex items-center justify-center mt-[-4vh] mb-[-4vh]">
          {/* Background Filled DEVELOPER Text */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-display uppercase leading-none select-none pointer-events-none whitespace-nowrap text-center"
            style={{
              // Track the narrower of width/height so the word still fits the
              // line on a phone, where 16vh alone overflows a 390px viewport.
              fontSize: 'clamp(2rem, min(12vw, 16vh), 16rem)',
              zIndex: 0,
              // Cream paper on a crisp ink edge - the palette's two anchors.
              color: 'var(--color-cream)',
              WebkitTextStroke: '2px var(--color-ink)',
              paintOrder: 'stroke fill',
            }}
            aria-hidden="true"
          >
            DEVELOPER
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/hero-illustration.png`}
            alt="Maithili Dorkhande at her desk"
            className="hero-fade-in relative h-full max-h-[58vh] sm:max-h-[60vh] md:max-h-[62vh] lg:max-h-[68vh] w-auto object-contain"
            style={{ animationDelay: '0.2s', zIndex: 1 }}
            fetchPriority="high"
            decoding="async"
          />
          {/* Foreground Outlined DEVELOPER Text */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-display uppercase leading-none select-none pointer-events-none whitespace-nowrap text-center text-transparent"
            style={{
              fontSize: 'clamp(2rem, min(12vw, 16vh), 16rem)',
              zIndex: 2,
              // A two-tone outline: the cream stroke reads against her dark
              // hair, and the thin ink contour around it reads against the
              // white t-shirt. No colour outside the palette.
              WebkitTextStroke: '3px var(--color-cream)',
              textShadow:
                '1.5px 1.5px 0 var(--color-ink), -1.5px -1.5px 0 var(--color-ink), 1.5px -1.5px 0 var(--color-ink), -1.5px 1.5px 0 var(--color-ink)',
            }}
            aria-hidden="true"
          >
            DEVELOPER
          </div>
        </div>
      </div>

      {/* Bottom Social Icons & Resume Footer Row */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 pb-6 mt-6 md:mt-8" style={{ zIndex: 10 }}>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 md:px-11 py-3 md:py-3.5 rounded-full border-2 border-ink bg-[#c7f9cc] text-ink hover:bg-rust hover:text-cream hover:border-rust text-[13px] sm:text-[14px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="Resume"
        >
          <span>RESUME</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </a>
        <a
          href="#about"
          className="flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 md:px-11 py-3 md:py-3.5 rounded-full border-2 border-ink bg-[#c4b5fd] text-ink hover:bg-rust hover:text-cream hover:border-rust text-[13px] sm:text-[14px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="About"
        >
          <span>ABOUT</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </a>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <a
            href="https://github.com/maithili39"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
            title="GitHub"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/maithili-dorkhande"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
            title="LinkedIn"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:maithilidorkhande39@gmail.com"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
            title="Email"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
