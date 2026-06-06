import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'

function App() {
 return (
 <div className="bg-[#FAFAF8] font-sans-display">
 <Navbar />
 <HeroSection />
 <SkillsSection />
 <ExperienceSection />
 <ProjectsSection />
 <AchievementsSection />
 <ContactSection />
 </div>
 )
}

export default App
