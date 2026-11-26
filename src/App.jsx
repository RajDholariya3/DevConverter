import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { CursorGlow, ScrollProgressBar } from './components/MotionPrimitives'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechMarquee from './components/TechMarquee'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import EngagementAndTestimonials from './components/EngagementAndTestimonials'
import ContactSection from './components/ContactSection'
import { SCOPE_OPTIONS } from './data/nexoraData'
import Footer from './components/Footer'

export default function App() {
  const [selectedScopes, setSelectedScopes] = useState(['Custom Enterprise Software'])
  const [brief, setBrief] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleScope = (scope) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    )
  }

  const jumpToContact = (topic = '') => {
    if (topic) {
      if (SCOPE_OPTIONS.includes(topic)) {
        setSelectedScopes((prev) => (prev.includes(topic) ? prev : [...prev, topic]))
      } else {
        setBrief(`Interested in: ${topic}. Let's discuss architecture and timelines.`)
      }
      setSubmitted(false)
    }
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const jumpToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#05070e] text-[#f4f7fb]">
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar onStartProject={() => jumpToContact()} />

        <main>
          <HeroSection
            onExploreWork={jumpToWork}
            onStartProject={() => jumpToContact()}
          />
          <TechMarquee />
          <ServicesSection onSelectService={(serviceTitle) => jumpToContact(serviceTitle)} />
          <ProcessSection />
          <CaseStudiesSection onRequestSimilar={(studyTitle) => jumpToContact(studyTitle)} />
          <EngagementAndTestimonials
            onSelectModel={(modelName) => jumpToContact(modelName)}
          />
          <ContactSection
            selectedScopes={selectedScopes}
            onToggleScope={toggleScope}
            brief={brief}
            onBriefChange={setBrief}
            submitted={submitted}
            onSubmittedChange={setSubmitted}
          />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
