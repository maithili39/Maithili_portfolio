import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const projects = [
  {
    id: '01',
    category: 'AI / DATA',
    title: 'GraphRAG Performance Benchmarking Engine',
    description: 'A benchmarking platform comparing baseline LLM, vector RAG, and GraphRAG pipelines on a Wikipedia knowledge graph. Cuts token usage per query from ~1,400 to ~200 while retaining accuracy, validated via automated BERTScore evaluation.',
    techStack: ['Python', 'FastAPI', 'Uvicorn', 'Groq LLM (Llama-3.1-8b)', 'FAISS', 'Neo4j', 'Cypher', 'BERTScore', 'Tiktoken', 'React', 'Vite', 'Recharts', 'Docker'],
    liveUrl: 'https://graph-rag-chi.vercel.app/',
    codeUrl: 'https://github.com/maithili39/GraphRAG',
    image: '/images/graphrag.png',
  },
  {
    id: '02',
    category: 'AI / WEB',
    title: 'SkinGuard',
    description: 'An intelligent skincare analysis platform where users scan product labels via camera or barcode. It extracts ingredients with OCR, analyzes them using LLM and semantic embeddings, detects routine conflicts, scores safety, and delivers personalized recommendations based on skin profiles.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Sentence-Transformers', 'Groq LLM', 'Tesseract OCR', 'Google Cloud Vision', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'TailwindCSS', 'NativeWind', 'Docker'],
    liveUrl: 'https://skin-guard-nu.vercel.app/',
    codeUrl: 'https://github.com/maithili39/SkinGuard',
    image: '/images/sguard.png',
  },
  {
    id: '03',
    category: 'AI / WEB',
    title: 'CivicSense',
    description: 'An enterprise-grade public grievance redressal platform that leverages Zero-Shot AI to instantly categorize, prioritize, and route citizen complaints. Eliminates manual triage by extracting sentiment and risk level from every complaint, with five real-time dashboards via Socket.IO and automated SLA alerts that escalate overdue tickets to higher authorities.',
    techStack: ['React', 'Vite', 'CSS', 'Node.js', 'Express', 'Socket.IO', 'MongoDB Atlas', 'Python', 'FastAPI', 'PyTorch', 'HuggingFace', 'DistilBERT', 'Vercel', 'Render'],
    liveUrl: 'https://civicsense-bice.vercel.app/',
    codeUrl: 'https://github.com/maithili39/HackgenX',
    image: '/images/civicsense1.png',
  },
  {
    id: '04',
    category: 'AI',
    title: 'BIS RAG Engine',
    description: 'A Retrieval-Augmented Generation (RAG) system mapping manufacturing product descriptions to Bureau of Indian Standards regulations, using hybrid retrieval and zero hallucinations.',
    techStack: ['Python', 'Sentence-Transformers', 'LangChain-HuggingFace', 'Rank-BM25', 'OpenAI GPT-3.5', 'NumPy', 'PyPDF', 'LangChain-Core', 'Pickle', 'Python-Dotenv'],
    liveUrl: 'https://maithili39-bis-rag-engine.hf.space/',
    codeUrl: 'https://github.com/maithili39/bis-rag-engine',
    image: '/images/bis-finder.png',
  },
];

const CARD_HEIGHT = '92vh';
const TOP_OFFSET = 64;

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 0.93]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{ top: `${TOP_OFFSET + index * 16}px`, height: CARD_HEIGHT }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top w-full h-full flex flex-col gap-4 md:gap-5 rounded-[32px] md:rounded-[40px] border-4 border-black bg-white shadow-[6px_6px_0_0_#F77F00] p-5 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 flex-shrink-0">
          <div className="flex flex-row items-start gap-4 md:gap-8 min-w-0 flex-1">
            <div
              className="shrink-0 font-sans-display font-black text-black/10 leading-none select-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              {project.id}
            </div>
            <div className="flex flex-col gap-1.5 pt-1 min-w-0 flex-1">
              <span className="font-mono-display inline-block bg-[#FCBF49] border-2 border-black px-2 py-0.5 font-bold uppercase tracking-widest text-black text-[10px] shadow-[2px_2px_0_0_#000] w-fit">
                {project.category}
              </span>
              <h3
                className="font-sans-display font-black uppercase text-black leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                {project.title}
              </h3>
              <p className="font-sans-display text-neutral-500 text-sm leading-relaxed font-medium max-w-xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-row sm:flex-col gap-3 w-full sm:w-auto pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#F77F00] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-0.5 transition-all duration-200 group flex-1 sm:flex-none"
              >
                Live <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-0.5 transition-all duration-200 group flex-1 sm:flex-none"
              >
                Code <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Tech marquee */}
        {project.techStack && (
          <div className="w-full overflow-hidden flex items-center min-h-[40px] flex-shrink-0">
            <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] gap-2 px-2">
              {[...project.techStack, ...project.techStack, ...project.techStack, ...project.techStack].map((tech, i) => (
                <span
                  key={i}
                  className="font-mono-display shrink-0 inline-flex items-center px-3 py-1.5 bg-[#FCBF49] border-2 border-black text-black text-xs tracking-widest uppercase font-bold shadow-[3px_3px_0_0_#000] leading-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Image — flex-1 so it fills remaining card height; object-contain shows full screenshot */}
        {project.image ? (
          <div className="group/image w-full flex-1 min-h-0 flex items-start justify-center overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
              alt={project.title}
              className="max-w-full max-h-full w-auto h-auto block border-4 border-black rounded-[16px] md:rounded-[24px] transition-transform duration-500 group-hover/image:scale-105"
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

  return (
    <section id="projects" ref={ref} className="bg-[#FAF8F5] px-4 sm:px-6 md:px-10 py-14 md:py-20 text-black">

      <div className={`text-center mb-8 md:mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
          Projects
        </h2>
      </div>

      {/* Scroll budget: each card needs ~100vh of scroll space to be fully seen before the next takes over */}
      <div
        className="mx-auto max-w-5xl relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
        ))}
      </div>

      <div className="flex justify-center mt-16 relative z-10">
        <a
          href="https://github.com/maithili39"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-display inline-flex items-center justify-center border-4 border-black px-10 py-4 text-sm font-black uppercase tracking-widest text-black bg-white shadow-[4px_4px_0_0_#F77F00] hover:shadow-[6px_6px_0_0_#F77F00] hover:-translate-y-1 transition-all duration-300 group"
        >
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
