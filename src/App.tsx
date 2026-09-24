import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PipelineSimulator } from './components/PipelineSimulator';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { CursorSpotlight } from './components/CursorSpotlight';
import { DataStreamTicker } from './components/DataStreamTicker';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  // Profile photo state with local storage persistence
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      return localStorage.getItem('neha_custom_photo') || '/neha-sain.png';
    } catch {
      return '/neha-sain.png';
    }
  });

  const handlePhotoChange = (newPhotoUrl: string) => {
    setPhotoSrc(newPhotoUrl);
    try {
      localStorage.setItem('neha_custom_photo', newPhotoUrl);
    } catch (e) {
      console.warn('Could not save photo to localStorage', e);
    }
  };

  const handleResetPhoto = () => {
    setPhotoSrc('/neha-sain.png');
    try {
      localStorage.removeItem('neha_custom_photo');
    } catch {}
  };

  const handleOpenPipelineLab = () => {
    const el = document.getElementById('pipeline-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-200 relative">
        {/* Interactive Apple-Grade Ambient Cursor Spotlight */}
        <CursorSpotlight />

        {/* Top Fixed Navbar */}
        <Navbar
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection
            photoSrc={photoSrc}
            onOpenResume={() => setResumeModalOpen(true)}
          />

          {/* Live Simulated Enterprise Data Stream Telemetry */}
          <DataStreamTicker />

          <AboutSection 
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
          />

          <SkillsSection />

          <ExperienceSection />

          <ProjectsSection />

          <PipelineSimulator />

          <EducationSection />

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* Secret Profile Picture Upload Modal */}
        <PhotoUploadModal
          isOpen={photoModalOpen}
          onClose={() => setPhotoModalOpen(false)}
          currentPhoto={photoSrc}
          onPhotoChange={handlePhotoChange}
          onResetDefault={handleResetPhoto}
        />
      </div>
    </ThemeProvider>
  );
}
