import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const projects = [
  {
    id: '01',
    category: 'AI / WEB',
    title: 'SkinGuard',
    description: 'An intelligent skincare analysis platform that scans product labels and ingredients to flag potential skin concerns, track routines, and provide personalized skin profiles.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Sentence-transformers', 'Gemini AI', 'Tesseract OCR', 'Next.js', 'React', 'Tailwind CSS', 'Docker'],
    liveUrl: 'https://skin-guard-jet.vercel.app/',
    codeUrl: 'https://github.com/maithili39/SkinGuard',
    image: '/images/screenguard.png',
  },
  {
    id: '02',
    category: 'AI',
    title: 'BIS RAG Engine',
    description: 'A Retrieval-Augmented Generation (RAG) system mapping manufacturing product descriptions to Bureau of Indian Standards regulations, using hybrid retrieval and zero hallucinations.',
    techStack: ['Python', 'Sentence-Transformers', 'LangChain-HuggingFace', 'Rank-BM25', 'OpenAI GPT-3.5', 'NumPy', 'PyPDF', 'LangChain-Core', 'Pickle', 'Python-Dotenv'],
    liveUrl: 'https://maithili39-bis-rag-engine.hf.space/',
    codeUrl: 'https://github.com/maithili39/bis-rag-engine',
    image: '/images/bis-finder.png',
  },
  {
    id: '03',
    category: 'AI / WEB',
    title: 'CivicSense',
    description: 'An AI-powered grievance portal designed to streamline civic issue reporting and resolution with intelligent categorization and automated routing.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'FastAPI', 'PyTorch', 'HuggingFace', 'DistilBERT', 'FAISS', 'Flan-T5-base', 'Google Maps API'],
    liveUrl: 'https://amravati-hackgen-x.vercel.app/',
    codeUrl: 'https://github.com/maithili39/HackgenX',
    image: '/images/civicsense.png',
  },
  {
    id: '04',
    category: 'AI / DATA',
    title: 'AI Energy Demand Forecasting & Efficiency Monitoring',
    description: 'Production-grade AI system for building energy analytics, forecasting, anomaly detection, and real-time simulation.',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'LightGBM', 'XGBoost', 'CatBoost', 'Random Forest', 'Optuna', 'SHAP', 'Scikit-learn', 'Plotly', 'Pandas'],
    codeUrl: 'https://github.com/maithili39/AI-Energy-Demand-Forecasting-Efficiency-Monitoring-System',
    image: '/images/energy.png',
  },
];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 0.92;
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0.92]
  );
  return (

    // This is the sticky viewport-height shell — exactly like Harsh's approach.
    // h-[100vh] pins it at a fixed height so the next card can scroll over it.
    <div
      ref={cardRef}
      className="sticky w-full h-[85vh]"
      style={{ top: '80px' }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top w-full h-full flex flex-col gap-5 md:gap-7 rounded-[32px] md:rounded-[40px] border-4 border-black bg-white shadow-[6px_6px_0_0_#F77F00] p-5 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 flex-shrink-0">
          <div className="flex flex-row items-start gap-4 md:gap-8 min-w-0 flex-1">
            <div className="shrink-0 font-sans-display font-black text-black/10 leading-none select-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}>
              {project.id}
            </div>
            <div className="flex flex-col gap-1.5 pt-1 min-w-0 flex-1">
              <span className="font-mono-display inline-block bg-[#FCBF49] border-2 border-black px-2 py-0.5 font-bold uppercase tracking-widest text-black text-[10px] shadow-[2px_2px_0_0_#000] w-fit">
                {project.category}
              </span>
              <h3 className="font-sans-display font-black uppercase text-black leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}>
                {project.title}
              </h3>
              <p className="font-sans-display text-neutral-500 text-sm leading-relaxed font-medium max-w-xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-row sm:flex-col gap-3 w-full sm:w-auto pt-1">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#F77F00] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-0.5 transition-all duration-200 group flex-1 sm:flex-none">
                Live <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-0.5 transition-all duration-200 group flex-1 sm:flex-none">
                Code <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Tech marquee */}
        {project.techStack && (
          <div className="w-full overflow-hidden flex items-center min-h-[44px] flex-shrink-0">
            <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] gap-2 px-2">
              {[...project.techStack, ...project.techStack, ...project.techStack, ...project.techStack].map((tech, i) => (
                <span key={i} className="font-mono-display shrink-0 inline-flex items-center px-3 py-1.5 bg-[#FCBF49] border-2 border-black text-black text-[10px] tracking-widest uppercase font-bold shadow-[3px_3px_0_0_#000] leading-none">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Image — fills remaining space, object-cover so it fills the card like Harsh's */}
        {project.image ? (
          <div className="group/image relative w-full flex-1 min-h-0 overflow-hidden rounded-[16px] md:rounded-[24px] border-4 border-black bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover/image:scale-105"
            />
          </div>
        ) : (
          <div className="w-full flex-1 min-h-0 rounded-[16px] md:rounded-[24px] bg-[#EAE2B7] border-4 border-black flex items-center justify-center">
            <span className="font-mono-display text-neutral-400 font-bold text-xs tracking-widest uppercase">No Preview</span>
          </div>
        )}
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const [ref, visible] = useVisible();
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={ref} className="bg-[#FAF8F5] px-4 sm:px-6 md:px-10 py-14 md:py-20 text-black">

      <div className={`text-center mb-8 md:mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
          Projects
        </h2>
      </div>

      <div
        ref={containerRef}
        className="mx-auto max-w-5xl relative"
        style={{
          height: `${projects.length * 90}vh`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky"
            style={{
              top: `${80 + index * 20}px`,
              zIndex: index + 1,
            }}
          >
            <ProjectCard
              project={project}
              index={index}
              total={projects.length}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16 relative z-10">
        <a href="https://github.com/maithili39" target="_blank" rel="noopener noreferrer"
          className="font-sans-display inline-flex items-center justify-center border-4 border-black px-10 py-4 text-sm font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#F77F00] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-1 transition-all duration-300 group">
          View More Projects
          <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </section>
  );
};

export default ProjectsSection;