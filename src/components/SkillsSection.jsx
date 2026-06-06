import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiZap, FiPenTool } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout className="w-5 h-5" />,
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    tagColor: 'bg-[#003049] text-white border-[#003049]'
  },
  {
    title: 'Backend',
    icon: <FiServer className="w-5 h-5" />,
    skills: ['Node.js', 'Express.js', 'ASP.NET', 'REST APIs'],
    tagColor: 'bg-[#D62828] text-white border-[#D62828]'
  },
  {
    title: 'Database',
    icon: <FiDatabase className="w-5 h-5" />,
    skills: ['MongoDB', 'SQL Server', 'ChromaDB'],
    tagColor: 'bg-[#F77F00] text-black border-[#F77F00]'
  },
  {
    title: 'AI/ML',
    icon: <FiCpu className="w-5 h-5" />,
    skills: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'LightGBM'],
    tagColor: 'bg-[#2d6a4f] text-white border-[#2d6a4f]'
  },
  {
    title: 'Generative AI',
    icon: <FiZap className="w-5 h-5" />,
    skills: ['RAG', 'LangChain', 'Hugging Face', 'Prompt Engineering', 'FAISS', 'Embeddings'],
    tagColor: 'bg-[#FCBF49] text-black border-[#FCBF49]'
  },
  {
    title: 'Tools',
    icon: <FiPenTool className="w-5 h-5" />,
    skills: ['Git', 'GitHub', 'Postman', 'Streamlit', 'Jupyter Notebook'],
    tagColor: 'bg-[#c1121f] text-white border-[#c1121f]'
  }
];

// Framer Motion Animation Variants
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 14 
    } 
  }
};

const SkillsSection = () => {
  const [ref, visible] = useVisible();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" ref={ref} className="py-14 md:py-20 bg-[#FAF8F5] text-black px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-10 md:mb-14 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
            Skills
          </h2>
        </div>

        {/* 2-Column Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Vertical Tabs */}
          <div className={`md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-3 pb-3 md:pb-0 scrollbar-none w-full ${visible ? 'animate-fade-up delay-1' : 'opacity-0'}`}>
            {skillCategories.map((category, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`font-sans-display flex items-center justify-between px-5 py-4 border-2 border-black font-black uppercase tracking-widest text-xs transition-all duration-300 text-left shrink-0 md:shrink-1 select-none cursor-pointer w-full group ${
                    isActive
                      ? 'bg-black text-white shadow-[4px_4px_0_0_#F77F00] -translate-y-0.5'
                      : 'bg-white text-black hover:bg-neutral-50 shadow-[3px_3px_0_0_#000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-[#F77F00]' : 'text-neutral-500'}`}>
                      {category.icon}
                    </span>
                    <span>{category.title}</span>
                  </div>
                  
                  {/* Subtle arrow indicator sliding in on hover / active */}
                  <span className={`text-xs transition-all duration-300 ${
                    isActive 
                      ? 'text-[#F77F00] translate-x-0 opacity-100' 
                      : 'text-neutral-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content (Table layout with Framer Motion) */}
          <div className={`md:col-span-8 bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0_0_#000] min-h-[360px] w-full relative overflow-hidden ${visible ? 'animate-fade-up delay-2' : 'opacity-0'}`}>
            
            {/* Tab Header */}
            <div className="flex items-center gap-3.5 pb-4 border-b-2 border-black mb-6">
              <span className="text-[#F77F00]">{skillCategories[activeTab].icon}</span>
              <h3 className="font-sans-display text-xl md:text-2xl font-black text-black tracking-wide uppercase">
                {skillCategories[activeTab].title}
              </h3>
            </div>

            {/* Staggered Animated List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col"
              >
                {skillCategories[activeTab].skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0 group hover:bg-[#F77F00]/5 px-3 -mx-3 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Animating orange bullet point */}
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F77F00] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_6px_rgba(247,127,0,0.4)]" />
                      <span className="font-sans-display font-black text-sm md:text-base text-black tracking-wide group-hover:translate-x-1.5 transition-transform duration-300">
                        {skill}
                      </span>
                    </div>
                    
                    {/* Interactive category tag badge */}
                    <span className={`font-mono-display text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-black/10 select-none ${skillCategories[activeTab].tagColor.split(' ')[0]} bg-opacity-10 text-neutral-600 transition-all duration-300 group-hover:border-black/30 group-hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)]`}>
                      Skill
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
