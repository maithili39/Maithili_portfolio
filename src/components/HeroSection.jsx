import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-coral text-ink flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-4 overflow-hidden"
    >
      <style>{`
        @keyframes slideUpHero {
          from { transform: translateY(100%) skewY(2deg); opacity: 0; }
          to   { transform: translateY(0) skewY(0deg); opacity: 1; }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-6px) rotate(2deg); }
        }
        .hero-slide-up { animation: slideUpHero 1.3s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-fade-in  { opacity: 0; animation: heroFadeIn 1s cubic-bezier(0.16,1,0.3,1) forwards; }
        .badge-float   { animation: floatBadge 4s ease-in-out infinite; }
        .hero-btn-primary {
          background: var(--color-rust); color: var(--color-cream); border: 2px solid var(--color-rust);
          transition: background 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .hero-btn-primary:hover {
          background: var(--color-rust-deep);
          box-shadow: 5px 5px 0 var(--color-ink);
          transform: translateY(-2px);
        }
        .hero-btn-secondary {
          background: transparent; color: var(--color-ink); border: 2px solid var(--color-ink);
          transition: background 0.25s, color 0.25s, transform 0.2s;
        }
        .hero-btn-secondary:hover {
          background: var(--color-ink); color: var(--color-cream);
          transform: translateY(-2px);
        }
        .social-icon {
          transition: background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .social-icon:hover {
          background: var(--color-ink); color: var(--color-cream); border-color: var(--color-ink);
          transform: translateY(-3px);
        }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-12px) rotate(calc(var(--r, 0deg) + 5deg)); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0px, 0px) rotate(var(--r, 0deg)); }
          50% { transform: translate(10px, -14px) rotate(calc(var(--r, 0deg) - 6deg)); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(calc(var(--r, 0deg) - 5deg)); }
          50% { transform: rotate(calc(var(--r, 0deg) + 7deg)); }
        }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes heroMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .spin-ccw    { animation: spinCCW 18s linear infinite; }
        .bob-float   { animation: bob 3.6s ease-in-out infinite; }
        .bob-side    { animation: bobSide 4s ease-in-out infinite; }
        .twinkle     { animation: twinkle 2.4s ease-in-out infinite; }
        .wiggle-slow { animation: wiggle 3s ease-in-out infinite; }
        .drift-float { animation: drift 5s ease-in-out infinite; }
        .hero-marquee-track { animation: heroMarquee 22s linear infinite; }
      `}</style>
      




      {/* Decorative Wavy/Blob Vignettes */}
      <div className="absolute left-0 top-[15%] w-[18vw] h-[45vh] bg-rust/5 rounded-r-full blur-3xl pointer-events-none select-none" aria-hidden="true" />
      <div className="absolute right-0 bottom-[10%] w-[22vw] h-[55vh] bg-rust/10 rounded-l-full blur-3xl pointer-events-none select-none" aria-hidden="true" />

      {/* Decorative Dot Patterns */}
      <div className="absolute left-[3%] top-[18%] opacity-20 select-none pointer-events-none z-0" aria-hidden="true">
        <div className="grid grid-cols-5 gap-2 text-ink">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-current" />
          ))}
        </div>
      </div>
      <div className="absolute right-[3%] top-[65%] opacity-20 select-none pointer-events-none z-0" aria-hidden="true">
        <div className="grid grid-cols-5 gap-2 text-ink">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-current" />
          ))}
        </div>
      </div>

      {/* Background Doodles */}
      {/* 1. Paper Airplane */}
      <div className="hidden lg:block absolute top-[15%] left-[28%] text-ink/30 pointer-events-none select-none z-0 float-bob" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" className="absolute top-[35px] right-[15px] text-ink/15">
          <path d="M100 0 C 70 30, 30 30, 0 15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Code tag */}
      <div className="hidden md:block absolute top-[38%] left-[24%] text-ink/30 pointer-events-none select-none z-0 drift-float" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* 3. Browser window */}
      <div className="hidden lg:block absolute top-[35%] left-[8%] text-ink/25 pointer-events-none select-none z-0 bob-float" aria-hidden="true">
        <svg width="44" height="32" viewBox="0 0 48 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="44" height="30" rx="4" />
          <line x1="2" y1="10" x2="46" y2="10" />
          <circle cx="8" cy="6" r="1.5" fill="currentColor" />
          <circle cx="14" cy="6" r="1.5" fill="currentColor" />
          <circle cx="20" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* 4. Brackets */}
      <div className="hidden md:block absolute top-[52%] left-[13%] text-ink/30 pointer-events-none select-none z-0 wiggle-slow" aria-hidden="true">
        <span className="font-display text-2xl font-bold select-none">{"{ }"}</span>
      </div>

      {/* 5. Coffee cup */}
      <div className="hidden md:block absolute top-[68%] left-[18%] text-ink/30 pointer-events-none select-none z-0 drift-float" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <path d="M6 2v3M10 2v3M14 2v3" />
        </svg>
      </div>

      {/* 6. Lightning bolt */}
      <div className="hidden md:block absolute top-[36%] right-[32%] text-ink/35 pointer-events-none select-none z-0 twinkle" aria-hidden="true">
        <svg width="22" height="30" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 18 11 18 11 30 21 14 13 14" />
        </svg>
      </div>

      {/* 7. Swirly loop arrow */}
      <div className="hidden lg:block absolute top-[30%] right-[24%] text-ink/30 pointer-events-none select-none z-0 drift-float" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 10 C 15 5, 25 5, 30 15 C 35 25, 25 35, 15 30 C 5 25, 10 15, 20 20" />
          <polyline points="15 22 20 20 18 15" />
        </svg>
      </div>

      {/* Hi Intro — right side, floating plain text */}
      <div className="hidden md:block absolute top-[22%] right-[6%] lg:right-[9%] z-10 select-none badge-float" style={{ animationDelay: '0s' }}>
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">👋</span>
          <div>
            <p className="font-display text-ink/50 text-[11px] uppercase tracking-widest leading-none">Hey there,</p>
            <p className="font-display text-ink text-[15px] font-bold leading-tight">I'm Maithili</p>
          </div>
        </div>
      </div>

      {/* Open to Work — left side, floating pill no box */}
      <div className="hidden md:block absolute top-[28%] left-[6%] lg:left-[8%] z-10 select-none badge-float" style={{ animationDelay: '0.8s' }}>
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
            className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 font-display uppercase leading-none select-none pointer-events-none whitespace-nowrap text-center text-ink"
            style={{ fontSize: 'clamp(2.5rem, 16vh, 16rem)', zIndex: 0 }}
            aria-hidden="true"
          >
            DEVELOPER
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/hero-illustration.png`}
            alt="Maithili Dorkhande at her desk"
            className="hero-fade-in relative h-full max-h-[92vh] sm:max-h-[100vh] md:max-h-[108vh] lg:max-h-[116vh] w-auto object-contain"
            style={{ animationDelay: '0.2s', zIndex: 1 }}
          />
          {/* Foreground Outlined DEVELOPER Text */}
          <div
            className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 font-display uppercase leading-none select-none pointer-events-none whitespace-nowrap text-center text-transparent"
            style={{ fontSize: 'clamp(2.5rem, 16vh, 16rem)', zIndex: 2, WebkitTextStroke: '3px var(--color-ink)' }}
            aria-hidden="true"
          >
            DEVELOPER
          </div>
        </div>
      </div>

      {/* Bottom Social Icons & Resume Footer Row */}
      <div className="flex justify-center items-center gap-5 pb-6 mt-8" style={{ zIndex: 10 }}>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-10 py-2.5 rounded-full border-2 border-ink bg-[#c7f9cc] text-ink hover:bg-rust hover:text-cream hover:border-rust text-[12px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="Resume"
        >
          <span>RESUME</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </a>
        <a
          href="#about"
          className="flex items-center justify-center gap-2 px-10 py-2.5 rounded-full border-2 border-ink bg-[#c4b5fd] text-ink hover:bg-rust hover:text-cream hover:border-rust text-[12px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="About"
        >
          <span>ABOUT</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </a>
        <a
          href="https://github.com/maithili39"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/maithili-dorkhande"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="mailto:maithilidorkhande39@gmail.com"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink bg-[#e9c46a] text-ink hover:bg-rust hover:text-cream hover:border-rust transition-all duration-200 shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-rust)] hover:-translate-y-1"
          title="Email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
