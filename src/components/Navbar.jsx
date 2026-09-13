import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
 { label: 'Skills', href: '#skills' },
 { label: 'Experience', href: '#experience' },
 { label: 'Projects', href: '#projects' },
 { label: 'Achievements', href: '#achievements' },
 { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
 const [active, setActive] = useState('');
 const [open, setOpen] = useState(false);

 useEffect(() => {
 const ids = navLinks.map((l) => l.href.slice(1));
 let frame = 0;

 const measure = () => {
 frame = 0;
 setScrolled(window.scrollY > 40);

 // The last section whose top has passed under the navbar is the one
 // being read, so that's the link to highlight. getBoundingClientRect
 // is viewport-relative, so it stays correct regardless of offsetParent.
 const line = window.innerWidth >= 1024 ? 96 : 80;
 let current = '';
 for (const id of ids) {
 const el = document.getElementById(id);
 if (el && el.getBoundingClientRect().top <= line) current = `#${id}`;
 }
 // The final section can never reach the detection line, because the page
 // runs out of scroll first - so claim it once we're at the bottom.
 const doc = document.documentElement;
 const atBottom =
 window.innerHeight + window.scrollY >= doc.scrollHeight - 160;
 if (atBottom) current = `#${ids[ids.length - 1]}`;

 // Bail out when nothing moved, so scrolling inside one section is free.
 setActive((prev) => (prev === current ? prev : current));
 };

 // Coalesce a burst of scroll events into one measurement per frame.
 const onScroll = () => {
 if (!frame) frame = requestAnimationFrame(measure);
 };

 measure();
 window.addEventListener('scroll', onScroll, { passive: true });
 window.addEventListener('resize', onScroll);
 return () => {
 if (frame) cancelAnimationFrame(frame);
 window.removeEventListener('scroll', onScroll);
 window.removeEventListener('resize', onScroll);
 };
 }, []);

 // The drawer is position:fixed, so without this the page kept scrolling
 // behind it. Also close on Escape and when the viewport reaches desktop.
 useEffect(() => {
 if (!open) return;
 const prev = document.body.style.overflow;
 document.body.style.overflow = 'hidden';

 const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
 const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };

 window.addEventListener('keydown', onKey);
 window.addEventListener('resize', onResize);
 return () => {
 document.body.style.overflow = prev;
 window.removeEventListener('keydown', onKey);
 window.removeEventListener('resize', onResize);
 };
 }, [open]);

 const close = () => setOpen(false);

 return (
 <>
 <style>{`
 @keyframes navSlideDown {
 from { opacity: 0; transform: translateY(-100%); }
 to { opacity: 1; transform: translateY(0); }
 }
 .nav-slide-down { animation: navSlideDown 0.5s cubic-bezier(0.16,1,0.3,1) both; }
 .nav-link-item { border-top: 1px solid rgba(36,18,9,0.35); }
 .nav-link-active { border-top: 3px solid var(--color-rust); }
 `}</style>
 <nav
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-slide-down ${
 scrolled
 ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-ink/10'
 : 'bg-transparent'
 }`}
 >
 <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-6 flex items-center justify-between h-16 lg:h-20">

 {/* Logo */}
 <a
 href="#hero"
 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-ink leading-tight"
 >
 Maithili<br /> Dorkhande
 </a>

 {/* Desktop links */}
 <div className="hidden lg:flex items-center gap-5 xl:gap-8 h-full">
 {navLinks.map((link) => (
 <a
 key={link.href}
 href={link.href}
 aria-current={active === link.href ? 'true' : undefined}
 className={`nav-link-item flex items-center font-sans-display text-xs font-bold uppercase tracking-widest underline underline-offset-4 transition-colors duration-200 pt-3 ${
 active === link.href
 ? 'nav-link-active text-ink decoration-2'
 : 'text-rust decoration-1 hover:text-ink'
 }`}
 >
 {link.label}
 </a>
 ))}

 {/* Resume button */}
 <a
 href={`${import.meta.env.BASE_URL}resume.pdf`}
 target="_blank"
 rel="noopener noreferrer"
 style={{ backgroundColor: 'var(--color-rust)', color: 'var(--color-cream)' }}
 className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-4 py-2 font-sans-display text-xs font-black uppercase tracking-widest shadow-[2px_2px_0_0_var(--color-ink)] hover:shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-y-0.5 transition-all duration-200"
 >
 Resume ↗
 </a>
 </div>

 {/* Mobile hamburger */}
 <button
 className="lg:hidden text-ink p-2 -mr-2"
 onClick={() => setOpen((v) => !v)}
 aria-label={open ? 'Close menu' : 'Open menu'}
 aria-expanded={open}
 >
 {open ? <FiX size={24} /> : <FiMenu size={24} />}
 </button>
 </div>
 </nav>

 {/* Mobile drawer */}
 {open && (
 <div className="fixed inset-0 z-40 bg-coral flex flex-col pt-20 px-6 overflow-y-auto overscroll-contain">
 <div className="flex flex-col gap-0 mt-4">
 {navLinks.map((link) => (
 <a
 key={link.href}
 href={link.href}
 onClick={close}
 className={`font-display text-2xl uppercase tracking-tight py-4 border-b border-ink/15 hover:pl-2 transition-all duration-200 ${
 active === link.href ? 'text-rust pl-2' : 'text-ink hover:text-rust'
 }`}
 >
 {link.label}
 </a>
 ))}
 </div>
 <a
 href={`${import.meta.env.BASE_URL}resume.pdf`}
 target="_blank"
 rel="noopener noreferrer"
 onClick={close}
 className="mt-6 inline-flex items-center justify-center gap-2 bg-ink text-cream px-6 py-3 text-xs font-sans-display font-black uppercase tracking-widest"
 >
 Open Resume ↗
 </a>
 </div>
 )}
 </>
 );
};

export default Navbar;
