import React from 'react';
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

const SkillsSection = () => {
  const [ref, visible] = useVisible();

  return (
    <section id="skills" ref={ref} className="py-14 md:py-20 bg-[#FAF8F5] text-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className={`w-full text-center mb-8 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-sans-display inline-block text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black [text-shadow:4px_4px_0_#F77F00]">
            Skills
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col w-full ${visible ? `animate-fade-up delay-${index + 1}` : 'opacity-0'}`}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-black">{category.icon}</span>
                <h3 className="font-sans-display text-xl md:text-2xl font-black text-black tracking-wide uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`font-sans-display flex-shrink-0 px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-black border-2 border-black shadow-[2px_2px_0_0_#000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000] transition-all duration-200 ${category.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
