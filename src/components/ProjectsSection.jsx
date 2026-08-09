import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const projects = [
  {
    id: '01',
    category: 'AI / DATA',
    title: 'GraphRAG Legal Q&A System',
    highlight: '🏆 1st Place · 5.6× more accurate than Basic RAG',
    description: 'A GraphRAG pipeline over a TigerGraph knowledge graph of 63,632 U.S. court opinions (9,632 citation edges, 1,413 courts), enabling multi-hop legal question answering via live GSQL traversal of citation relationships. Benchmarked against Basic RAG (FAISS, 500,959 chunks) and an LLM-only baseline on 55 multi-hop questions — a 50.9% pass rate vs 9.1% for Basic RAG (5.6x improvement) using 37.8% fewer tokens. 1st Place, TigerGraph GraphRAG Inference Hackathon.',
    techStack: ['Python', 'FastAPI', 'TigerGraph', 'GSQL', 'FAISS', 'Gemini', 'React.js', 'HuggingFace InferenceClient', 'BERTScore', 'eyecite', 'courts-db'],
    liveUrl: 'https://graphrag-six.vercel.app/',
    codeUrl: 'https://github.com/maithili39/grag',
    image: '/images/graphrag.png',
  },
  {
    id: '02',
    category: 'AI / WEB',
    title: 'SkinGuard — AI Skincare Ingredient Analyzer',
    highlight: '26,058-record ingredient knowledge base',
    description: 'An AI skincare analysis platform supporting OCR label scanning, barcode lookup, and manual ingredient entry for personalized cosmetic safety assessment. Backed by an ingredient knowledge base of 26,058 records (25,775 EU CosIng entries, 283 safety profiles) driving automated risk classification, containerized with Docker for reproducible deployment.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenCV', 'pgvector', 'Redis', 'Sentence-Transformers', 'Groq LLM', 'Tesseract OCR', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'TailwindCSS', 'Docker'],
    liveUrl: 'https://skin-guard-nu.vercel.app/',
    codeUrl: 'https://github.com/maithili39/SkinGuard',
    image: '/images/sguard.png',
  },
  {
    id: '03',
    category: 'AI / WEB',
    title: 'CritiQ — AI-Powered Candidate Screening',
    highlight: 'End-to-end automated technical interviews',
    description: 'An AI-powered platform that runs a complete technical screening interview end to end. Parses resumes, generates adaptive role-specific questions grounded via RAG over curated knowledge-base PDFs, scores each answer live against a rubric, and produces a structured, traceable hiring report with a recommendation.',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'PostgreSQL', 'Redis', 'ChromaDB', 'Sentence-Transformers', 'Anthropic Claude', 'Groq', 'PyMuPDF', 'React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://criti-q-nu.vercel.app/',
    codeUrl: 'https://github.com/maithili39/CritiQ',
    image: '/images/critiq.png',
  },
  {
    id: '04',
    category: 'AI / WEB',
    title: 'CivicSense',
    highlight: '5 live dashboards · real-time SLA alerts',
    description: 'An enterprise-grade public grievance redressal platform that leverages Zero-Shot AI to instantly categorize, prioritize, and route citizen complaints. Eliminates manual triage by extracting sentiment and risk level from every complaint, with five real-time dashboards via Socket.IO and automated SLA alerts that escalate overdue tickets to higher authorities.',
    techStack: ['React', 'Vite', 'CSS', 'Node.js', 'Express', 'Socket.IO', 'MongoDB Atlas', 'Python', 'FastAPI', 'PyTorch', 'HuggingFace', 'DistilBERT', 'Vercel', 'Render'],
    liveUrl: 'https://civicsense-bice.vercel.app/',
    codeUrl: 'https://github.com/maithili39/HackgenX',
    image: '/images/civicsense1.png',
  },
  {
    id: '05',
    category: 'AI',
    title: 'BIS Compliance Recommendation Engine',
    highlight: 'Hybrid semantic + keyword search',
    description: 'A hybrid semantic search engine recommending relevant Bureau of Indian Standards documents by combining dense vector retrieval (Sentence-Transformers + ChromaDB) with keyword search. Built as an end-to-end document ingestion, embedding, and retrieval pipeline exposed via REST APIs and a Streamlit interface, deployed on Hugging Face Spaces.',
    techStack: ['Python', 'ChromaDB', 'Sentence-Transformers', 'Streamlit', 'LangChain-HuggingFace', 'Rank-BM25', 'NumPy', 'PyPDF', 'LangChain-Core'],
    liveUrl: 'https://maithili39-bis-rag-engine.hf.space/',
    codeUrl: 'https://github.com/maithili39/bis-rag-engine',
    image: '/images/bis.png',
  },
];

const CARD_HEIGHT = '92vh';
const TOP_OFFSET = 64;

const CATEGORY_ACCENTS = {
  'AI / DATA': { tag: 'bg-[#2d6a4f] text-white', shadow: 'var(--color-ink)', dot: '#2d6a4f' },
  'AI / WEB': { tag: 'bg-coral text-ink', shadow: 'var(--color-rust)', dot: 'var(--color-rust)' },
  'AI': { tag: 'bg-[#6d597a] text-white', shadow: '#6d597a', dot: '#6d597a' },
};
const accentFor = (category) => CATEGORY_ACCENTS[category] || CATEGORY_ACCENTS['AI / WEB'];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const accent = accentFor(project.category);

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
        style={{ scale, '--accent-shadow': accent.shadow }}
        className="group/card relative origin-top w-full h-full flex flex-col gap-5 md:gap-6 rounded-[32px] md:rounded-[40px] border-4 border-ink bg-cream shadow-[8px_8px_0_0_var(--accent-shadow)] hover:shadow-[12px_12px_0_0_var(--accent-shadow)] hover:-translate-y-2 p-6 sm:p-7 md:p-10 transition-all duration-500 backdrop-blur-sm"
      >
        {/* Scroll progress dots (desktop) */}
        <div className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 flex-col gap-2.5" aria-hidden="true">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full border border-ink/30 transition-all duration-300"
              style={{ background: i === index ? accent.dot : 'transparent', transform: i === index ? 'scale(1.4)' : 'scale(1)' }}
            />
          ))}
        </div>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 flex-shrink-0">
          <div className="flex flex-row items-start gap-4 md:gap-8 min-w-0 flex-1">
            <div
              className="shrink-0 font-sans-display font-black text-ink/10 group-hover/card:text-rust/20 leading-none select-none transition-colors duration-300"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              {project.id}
            </div>
            <div className="flex flex-col gap-1.5 pt-1 min-w-0 flex-1">
              <span className={`font-mono-display inline-block ${accent.tag} border-2 border-ink px-2 py-0.5 font-bold uppercase tracking-widest text-[10px] shadow-[2px_2px_0_0_var(--color-ink)] w-fit`}>
                {project.category}
              </span>
              <h3
                className="font-sans-display font-black uppercase text-ink leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                {project.title}
              </h3>
              {project.highlight && (
                <span className="font-sans-display inline-flex w-fit items-center gap-1.5 text-rust text-xs sm:text-sm font-bold">
                  {project.highlight}
                </span>
              )}
              <p
                className="font-sans-display text-ink/55 text-sm leading-relaxed font-medium max-w-xl"
                style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {project.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-row sm:flex-col gap-3 w-full sm:w-auto pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-rust px-6 py-3 text-xs font-black uppercase tracking-widest text-cream bg-rust shadow-[6px_6px_0_0_var(--color-ink)] hover:shadow-[8px_8px_0_0_var(--color-rust)] hover:-translate-y-1 transition-all duration-300 group flex-1 sm:flex-none rounded-lg hover:scale-105"
              >
                Live <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-display inline-flex items-center justify-center border-4 border-ink px-6 py-3 text-xs font-black uppercase tracking-widest text-ink bg-cream shadow-[6px_6px_0_0_var(--color-ink)] hover:shadow-[8px_8px_0_0_var(--color-rust)] hover:-translate-y-1 transition-all duration-300 group flex-1 sm:flex-none rounded-lg hover:scale-105"
              >
                Code <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Tech stack — flexible grid with polished badges */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="font-mono-display inline-flex items-center px-3 py-1.5 bg-gradient-to-br from-rust/10 to-rust/5 border-2 border-rust/30 text-rust text-[11px] tracking-wider uppercase font-bold rounded-full hover:border-rust/60 hover:bg-rust/15 transition-all duration-300 group-hover/card:scale-105"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Image — enhanced with smooth hover and better styling */}
        {project.image ? (
          <div className="group/image w-full flex-1 min-h-0 flex items-start justify-center overflow-hidden rounded-[20px] md:rounded-[28px] bg-ink/5 backdrop-blur-sm">
            <img
              src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
              alt={project.title}
              className="max-w-full max-h-full w-auto h-auto block border-4 border-ink rounded-[16px] md:rounded-[24px] transition-all duration-700 group-hover/image:scale-110 group-hover/image:drop-shadow-lg"
            />
          </div>
        ) : (
          <div className="w-full flex-1 min-h-0 rounded-[20px] md:rounded-[28px] bg-gradient-to-br from-cream-alt to-cream border-4 border-dashed border-ink/20 flex items-center justify-center">
            <span className="font-mono-display text-ink/30 font-bold text-xs tracking-widest uppercase">No Preview</span>
          </div>
        )}
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="projects" ref={ref} className="bg-cream px-4 sm:px-6 md:px-10 py-14 md:py-20 text-ink">

      <div className={`relative text-center mb-8 md:mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <p className="font-script text-xl md:text-2xl text-rust mb-1">what I've built</p>
        <h2 className="font-display relative inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
          Projects
          <span className="hidden sm:block absolute -top-3 -right-8 md:-right-10 text-rust text-2xl md:text-3xl rotate-12 select-none" aria-hidden="true">✦</span>
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
          className="font-sans-display inline-flex items-center justify-center border-4 border-ink px-10 py-4 text-sm font-black uppercase tracking-widest text-ink bg-cream shadow-[4px_4px_0_0_var(--color-rust)] hover:shadow-[6px_6px_0_0_var(--color-rust)] hover:-translate-y-1 transition-all duration-300 group"
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
