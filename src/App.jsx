import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ProductBusinessAnalysis from './components/sections/ProductBusinessAnalysis';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import ProblemSolving from './components/sections/ProblemSolving';
import LearningCourses from './components/sections/LearningCourses';
import ResumeSection from './components/sections/ResumeSection';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import VideoIntroModal from './components/ui/VideoIntroModal';
import Toast from './components/ui/Toast';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  const handleCloseToast = () => {
    setToastMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenVideoModal={() => setIsVideoModalOpen(true)} 
        />
        <About />
        <ProductBusinessAnalysis />
        <Projects />
        <Skills />
        <ProblemSolving />
        <LearningCourses />
        <ResumeSection />
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 1-Min Self-Intro Video Modal */}
      <VideoIntroModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toastMessage}
        type="success"
        onClose={handleCloseToast}
      />
    </div>
  );
}
