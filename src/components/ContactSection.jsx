import React, { useState } from 'react';
import { FaEnvelope, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const contactLinks = [
  {
    id: 'email',
    title: 'Email',
    value: 'maithilidorkhande6@gmail.com',
    icon: <FaEnvelope />,
    href: 'mailto:maithilidorkhande6@gmail.com',
    accent: '#D62828',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    value: '@maithilii',
    icon: <FaTelegram />,
    href: 'https://t.me/maithilii',
    accent: '#0369a1',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: 'in/maithili-dorkhande',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/maithili-dorkhande/',
    accent: '#003049',
  },
  {
    id: 'github',
    title: 'GitHub',
    value: '@maithili39',
    icon: <FaGithub />,
    href: 'https://github.com/maithili39',
    accent: '#111827',
  },
];

const inputClass = `
  w-full bg-cream/40 border-2 border-ink/25 text-ink placeholder-ink/40
  font-sans-display text-base font-medium px-4 py-3
  focus:outline-none focus:border-ink focus:bg-cream/70
  transition-all duration-200
`.trim();

const ContactSection = () => {
  const [ref, visible] = useVisible();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '9d6432b2-b9de-4e7f-bd00-83fab3e90487', // ← replace with key from web3forms.com
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact" className="py-14 md:py-20 bg-coral px-6 md:px-12 lg:px-24" ref={ref}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className={`mb-10 md:mb-14 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="font-script text-xl md:text-2xl text-ink/70 mb-1">let's talk</p>
            <h2 className="font-display inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left — contact cards */}
            <div className={`flex flex-col gap-3 ${visible ? 'animate-fade-up delay-1' : 'opacity-0'}`}>
              <p className="font-mono-display text-xs text-ink/60 uppercase tracking-[0.25em] mb-2">Find me on</p>
              {contactLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border-2 border-ink/20 bg-cream/40 hover:bg-cream/70 hover:border-ink/40 transition-all duration-200 hover:translate-x-1"
                >
                  <div
                    className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: link.accent, color: '#fff' }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono-display text-xs text-ink/60 uppercase tracking-widest">{link.title}</span>
                    <span className="font-sans-display font-bold text-ink text-base truncate underline decoration-1 underline-offset-4">{link.value}</span>
                  </div>
                  <FiArrowUpRight className="ml-auto w-4 h-4 text-ink/40 group-hover:text-rust group-hover:rotate-45 shrink-0 transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Right — contact form */}
            <div className={`${visible ? 'animate-fade-up delay-2' : 'opacity-0'}`}>
              <p className="font-mono-display text-xs text-ink/60 uppercase tracking-[0.25em] mb-5">Send a message</p>

              {status === 'success' ? (
                <div className="border-2 border-ink bg-cream/50 p-8 text-center">
                  <p className="font-sans-display font-black text-rust text-lg uppercase tracking-tight">Message Sent!</p>
                  <p className="font-sans-display text-ink/60 text-sm mt-2">I'll get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 font-sans-display text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors">
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-display text-xs text-ink/60 uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-display text-xs text-ink/60 uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-display text-xs text-ink/60 uppercase tracking-widest">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-sans-display text-[var(--color-rust-deep)] text-xs font-medium">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group mt-1 inline-flex items-center justify-center gap-2 bg-ink text-cream border-2 border-ink px-6 py-3 font-sans-display font-black text-xs uppercase tracking-widest hover:bg-rust hover:border-rust hover:text-cream transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>Send Message <FiSend className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-ink border-t border-cream/10 py-5 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono-display text-xs text-cream/50 uppercase tracking-widest">© 2026 Maithili Dorkhande</p>
          <p className="font-mono-display text-xs text-cream/50 uppercase tracking-widest">Built in Nagpur</p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
