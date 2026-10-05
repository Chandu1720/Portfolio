import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Left Brand Summary */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-slate-900 text-sm font-mono tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-700 font-medium text-xs">
                Frontend Developer with Product & Business Analysis Experience
              </span>
            </div>
            <p className="text-xs text-slate-400">
              AFORV Private Limited • Bengaluru, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
            <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
            <a href="#product-analysis" className="hover:text-brand-600 transition-colors">Product Analysis</a>
            <a href="#projects" className="hover:text-brand-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-600 transition-colors">Skills</a>
            <a href="#problem-solving" className="hover:text-brand-600 transition-colors">Problem Solving</a>
            <a href="#resume" className="hover:text-brand-600 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Chandu Kampasati. Crafted for clarity, reliability, and real business workflows.</p>
          <div className="flex items-center gap-2 font-mono">
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Lucide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
