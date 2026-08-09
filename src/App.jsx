import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import StatsSection from './components/StatsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'

function App() {
 return (
 <div className="bg-cream font-sans-display">
 <Navbar />
 <HeroSection />
 <AboutSection />
 <SkillsSection />
 <StatsSection />
 <ExperienceSection />
 <ProjectsSection />
 <AchievementsSection />
 <ContactSection />
 </div>
 )
}

export default App
