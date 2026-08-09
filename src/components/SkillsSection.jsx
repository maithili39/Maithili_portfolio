import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiCpu, FiPenTool } from 'react-icons/fi';
import useVisible from '../hooks/useVisible';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode className="w-5 h-5" />,
    skills: ['Python', 'C++', 'JavaScript', 'C', 'SQL'],
    tagColor: 'bg-[#6d597a] text-white border-[#6d597a]'
  },
  {
    title: 'Frontend',
    icon: <FiLayout className="w-5 h-5" />,
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    tagColor: 'bg-[#003049] text-white border-[#003049]'
  },
  {
    title: 'Backend',
    icon: <FiServer className="w-5 h-5" />,
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Streamlit'],
    tagColor: 'bg-[#D62828] text-white border-[#D62828]'
  },
  {
    title: 'Database',
    icon: <FiDatabase className="w-5 h-5" />,
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'ChromaDB'],
    tagColor: 'bg-[#F77F00] text-black border-[#F77F00]'
  },
  {
    title: 'AI/ML',
    icon: <FiCpu className="w-5 h-5" />,
    skills: ['Scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Computer Vision'],
    tagColor: 'bg-[#2d6a4f] text-white border-[#2d6a4f]'
  },
  {
    title: 'Tools & Deployment',
    icon: <FiPenTool className="w-5 h-5" />,
    skills: ['Git', 'GitHub', 'Vercel', 'Hugging Face Spaces', 'Postman'],
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
    <section id="skills" ref={ref} className="relative py-14 md:py-20 bg-cream-alt text-ink px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-8 md:mb-10 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="font-script text-xl md:text-2xl text-rust mb-1">what I work with</p>
          <h2 className="font-display inline-block text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-ink">
            Skills
          </h2>
        </div>



        {/* 2-Column Section with height stretch to keep columns aligned */}
        <div className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch ${visible ? 'animate-fade-up delay-1' : 'opacity-0'}`}>
          
          {/* Left Column: Vertical Tabs */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-3 pb-3 md:pb-0 scrollbar-none w-full h-full justify-between">
            {skillCategories.map((category, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`font-sans-display flex items-center justify-between px-5 py-4 border-2 border-ink font-black uppercase tracking-widest text-xs transition-all duration-300 text-left shrink-0 md:shrink-1 select-none cursor-pointer w-full group flex-1 ${
                    isActive
                      ? 'bg-ink text-cream shadow-[4px_4px_0_0_var(--color-rust)] -translate-y-0.5'
                      : 'bg-cream text-ink hover:bg-cream-alt shadow-[3px_3px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-rust' : 'text-ink/50'}`}>
                      {category.icon}
                    </span>
                    <span>{category.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`font-mono-display text-[10px] font-bold px-1.5 py-0.5 border rounded-full ${
                      isActive ? 'border-cream/40 text-cream/70' : 'border-ink/20 text-ink/40'
                    }`}>
                      {category.skills.length}
                    </span>
                    {/* Subtle arrow indicator sliding in on hover / active */}
                    <span className={`text-xs transition-all duration-300 ${
                      isActive
                        ? 'text-rust translate-x-0 opacity-100'
                        : 'text-ink/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}>
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content (Table layout matching left column height) */}
          <div className="md:col-span-8 w-full h-full">
            <div className="bg-cream border-4 border-ink p-6 md:p-8 shadow-[6px_6px_0_0_var(--color-ink)] h-full w-full relative overflow-hidden flex flex-col justify-between">

              <div>
                {/* Tab Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b-2 border-ink mb-6">
                  <span className="text-rust">{skillCategories[activeTab].icon}</span>
                  <h3 className="font-sans-display text-xl md:text-2xl font-black text-ink tracking-wide uppercase">
                    {skillCategories[activeTab].title}
                  </h3>
                </div>

                {/* Invisible Border Table */}
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
                        className="flex items-center py-4 border-b border-ink/10 last:border-0 group hover:bg-rust/5 px-3 -mx-3 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3.5">
                          {/* Animating rust bullet point */}
                          <span className="w-2.5 h-2.5 rounded-full bg-rust group-hover:scale-125 transition-transform duration-300" />
                          <span className="font-sans-display font-black text-sm md:text-base text-ink tracking-wide group-hover:translate-x-1.5 transition-transform duration-300">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
