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
 const [open, setOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 40);
 window.addEventListener('scroll', onScroll, { passive: true });
 return () => window.removeEventListener('scroll', onScroll);
 }, []);

 const close = () => setOpen(false);

 return (
 <>
 <style>{`
 @keyframes navSlideDown {
 from { opacity: 0; transform: translateY(-100%); }
 to { opacity: 1; transform: translateY(0); }
 }
 .nav-slide-down { animation: navSlideDown 0.5s cubic-bezier(0.16,1,0.3,1) both; }
 `}</style>
 <nav
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-slide-down ${
 scrolled
 ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
 : 'bg-transparent'
 }`}
 >
 <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-0 flex items-center justify-between h-14 md:h-16">

 {/* Logo */}
 <a
 href="#hero"
 className="font-sans-display text-base md:text-lg font-black uppercase tracking-tight text-black leading-none"
 >
 Maithili Dorkhande<span style={{ color: '#F77F00' }}>.</span>
 </a>

 {/* Desktop links */}
 <div className="hidden md:flex items-center gap-6 lg:gap-8">
 {navLinks.map((link) => (
 <a
 key={link.href}
 href={link.href}
 className="font-sans-display text-xs font-black uppercase tracking-widest text-neutral-600 hover:text-[#F77F00] transition-colors duration-200"
 >
 {link.label}
 </a>
 ))}
 </div>

 {/* Mobile hamburger */}
 <button
 className="md:hidden text-black p-1"
 onClick={() => setOpen((v) => !v)}
 aria-label="Toggle menu"
 >
 {open ? <FiX size={22} /> : <FiMenu size={22} />}
 </button>
 </div>
 </nav>

 {/* Mobile drawer */}
 {open && (
 <div className="fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6">
 <div className="flex flex-col gap-0 mt-4">
 {navLinks.map((link) => (
 <a
 key={link.href}
 href={link.href}
 onClick={close}
 className="font-sans-display text-2xl font-black uppercase tracking-tight text-black py-4 border-b border-neutral-100 hover:text-[#F77F00] hover:pl-2 transition-all duration-200"
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
 className="mt-6 inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-xs font-sans-display font-black uppercase tracking-widest"
 >
 Open Resume ↗
 </a>
 </div>
 )}
 </>
 );
};

export default Navbar;
