import React from 'react';
import useVisible from '../hooks/useVisible';

const services = [
  {
    id: '01',
    title: 'Full-Stack Development',
    description: 'Building responsive, scalable web applications with React, Node.js, Express, and modern databases — delivering seamless experiences from frontend interfaces to backend architecture.',
  },
  {
    id: '02',
    title: 'Data Analysis & Visualization',
    description: 'Working with Python, Pandas, NumPy, and SQL to clean, analyze, and visualize data — transforming complex datasets into meaningful insights and interactive dashboards.',
  },
  {
    id: '03',
    title: 'Prompt Engineering & LLM Automation',
    description: 'Designing effective prompts and AI workflows that turn large language models into practical tools for content generation, analysis, and intelligent decision-making.',
  },
  {
    id: '04',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Developing AI-powered solutions using machine learning, predictive analytics, and computer vision — creating systems that learn from data and solve real-world problems.',
  },
  {
    id: '05',
    title: 'API Integration & Intelligent Systems',
    description: 'Connecting applications with third-party services, cloud platforms, and AI APIs — integrating authentication, OCR, barcode scanning, and intelligent automation into modern products.',
  },
];

const ServicesSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="services" ref={ref} className="py-14 md:py-20 bg-[#FAF9F6] text-black px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`flex items-baseline gap-4 mb-8 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-sans-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-none select-none [text-shadow:4px_4px_0_#fecdd3]">
            Services
          </h2>
          <span className="font-mono-display text-[10px] tracking-[0.25em] text-rose-400 uppercase select-none hidden sm:inline">
            [ capabilities ]
          </span>
        </div>

        <div className={`h-px w-full bg-black/10 mb-2 ${visible ? 'animate-fade-in' : 'opacity-0'}`} />

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 py-5 border-b border-black/8 hover:bg-rose-50/50 hover:translate-x-1 transition-all duration-300 group px-2 rounded-sm ${visible ? `animate-fade-up delay-${i + 1}` : 'opacity-0'}`}
            >
              <div className="shrink-0 font-mono-display text-xl md:text-2xl font-bold text-neutral-300 group-hover:text-rose-500 transition-colors duration-300 pt-0.5 select-none">
                {service.id}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans-display text-lg md:text-xl font-bold text-neutral-900 group-hover:text-rose-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans-display text-sm md:text-base font-normal text-neutral-500 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
