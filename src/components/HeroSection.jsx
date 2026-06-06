import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId;
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const updatePosition = () => {
      current.x += (mouse.x - current.x) * 0.06;
      current.y += (mouse.y - current.y) * 0.06;
      setSpotlightPos({ x: current.x, y: current.y });
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    window.addEventListener('mousemove', handleMouseMove);
    updatePosition();
    return () => { window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(animationFrameId); };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const handleResize = () => { if (!canvas) return; width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    const particles = [];
    const particleCount = Math.min(50, Math.floor((width * height) / 25000));
    const connectionDistance = 130;
    const mouse = { x: null, y: null, radius: 180 };
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2.2 + 0.8;
        const r = Math.random();
        this.color = r > 0.92 ? 'rgba(251,113,133,0.55)' : r > 0.82 ? 'rgba(250,210,225,0.6)' : 'rgba(0,0,0,0.07)';
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x, dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) { const force = (mouse.radius - dist) / mouse.radius; this.x += (dx / dist) * force * 0.8; this.y += (dy / dist) * force * 0.8; }
        }
      }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.06;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(180,60,60,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] bg-[#FAF8F5] text-black flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-10 overflow-hidden"
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
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50%       { transform: scale(1.4); opacity: 1; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        .hero-slide-up { animation: slideUpHero 1.3s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-fade-in  { opacity: 0; animation: heroFadeIn 1s cubic-bezier(0.16,1,0.3,1) forwards; }
        .badge-float   { animation: floatBadge 3s ease-in-out infinite; }
        .dot-pulse     { animation: pulseDot 2s ease-in-out infinite; }
        .bg-dot-pattern {
          background-size: 22px 22px;
          background-image: radial-gradient(circle, rgba(120,80,200,0.07) 1px, transparent 1px);
        }
        .hero-btn-primary {
          background: #111; color: #fff; border: 2px solid #111;
          transition: background 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .hero-btn-primary:hover {
          background: #9f1239;
          box-shadow: 5px 5px 0 #fda4af;
          transform: translateY(-2px);
        }
        .hero-btn-secondary {
          background: transparent; color: #111; border: 2px solid rgba(0,0,0,0.15);
          transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.2s;
        }
        .hero-btn-secondary:hover {
          background: #111; color: #fff; border-color: #111;
          transform: translateY(-2px);
        }
        .social-icon {
          transition: background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .social-icon:hover {
          background: #e11d48; color: #fff; border-color: #e11d48;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(225,29,72,0.25);
        }
      `}</style>

      {/* Canvas particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-60" style={{ zIndex: 1 }} />

      {/* Mouse spotlight */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none mix-blend-multiply filter blur-[130px] opacity-[0.14] hidden md:block"
        style={{
          background: 'radial-gradient(circle, #fda4af 0%, #fde68a 55%, transparent 100%)',
          left: `${spotlightPos.x - 350}px`,
          top: `${spotlightPos.y - 350}px`,
          transform: 'translate3d(0,0,0)',
          zIndex: 2,
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-16 right-12 w-64 h-64 rounded-full pointer-events-none hidden lg:block"
        style={{ background: 'radial-gradient(circle, rgba(253,164,175,0.2) 0%, transparent 70%)', zIndex: 2, filter: 'blur(40px)' }} />
      <div className="absolute bottom-20 left-8 w-48 h-48 rounded-full pointer-events-none hidden lg:block"
        style={{ background: 'radial-gradient(circle, rgba(253,230,138,0.22) 0%, transparent 70%)', zIndex: 2, filter: 'blur(30px)' }} />

      {/* Status badge */}
      <div className="relative flex items-center justify-center pt-4" style={{ zIndex: 10 }}>
        <div className="badge-float flex items-center gap-2.5 hero-fade-in px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-50/70 backdrop-blur-sm shadow-sm"
          style={{ animationDelay: '0.1s' }}>
          <span className="relative flex h-2 w-2">
            <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono-display text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-800">
            Open to Work
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center gap-6 py-12 max-w-4xl mx-auto w-full" style={{ zIndex: 10 }}>

        {/* Name */}
        <h1 className="font-sans-display text-[clamp(3.2rem,9vw,7rem)] font-black uppercase tracking-tighter text-[#0f0f0f] leading-[0.9] select-none">
          <span className="block overflow-hidden">
            <span className="inline-block"
              style={{ transform: 'translateY(100%) skewY(2deg)', opacity: 0,
                animation: mounted ? 'slideUpHero 1.3s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
                animationDelay: '0.15s' }}>
              Maithili
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span className="inline-block text-[#e11d48]"
              style={{ transform: 'translateY(100%) skewY(2deg)', opacity: 0,
                animation: mounted ? 'slideUpHero 1.3s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
                animationDelay: '0.3s' }}>
              Dorkhande
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-sans-display hero-fade-in text-base md:text-lg font-medium text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: '0.5s' }}>
          Final-year CS student building{' '}
          <span className="font-bold text-[#0f0f0f]">intelligent systems</span> at the intersection of{' '}
          <span className="font-bold text-[#0f0f0f]">artificial intelligence</span> &{' '}
          <span className="font-bold text-[#0f0f0f]">full-stack engineering</span>.
        </p>

        {/* Buttons */}
        <div className="hero-fade-in flex flex-col items-center gap-6 mt-6" style={{ animationDelay: '0.65s' }}>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects"
              className="hero-btn-primary inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none group">
              <span className="flex items-center gap-2">
                View Work
                <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
              </span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="hero-btn-secondary inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none">
              Resume ↗
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-1">
            {[
              { href: 'https://github.com/maithili39', icon: <FiGithub size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/maithili-dorkhande/', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:maithilidorkhande6@gmail.com', icon: <FiMail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={label}
                className="social-icon p-3 rounded-full border border-neutral-200/70 bg-white/60 text-neutral-600">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
