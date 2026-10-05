import React from 'react';
import { ArrowDown, FileText, ArrowRight, Play, MapPin, CheckCircle, Code2, Layers, Briefcase, Compass, Building2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ onOpenVideoModal, onOpenResumeModal }) {
  return (
    <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-800 font-semibold">{personalInfo.currentRole}</span>
              <span className="text-slate-400">@</span>
              <span className="text-slate-700">{personalInfo.currentCompany}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Name & Primary Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                {personalInfo.name}
              </h1>
              
              <div className="pt-1">
                <div className="text-xl sm:text-2xl font-bold text-brand-700 leading-snug">
                  {personalInfo.role}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mt-2">
                  {personalInfo.supportingRoles.map((role) => (
                    <span 
                      key={role} 
                      className="bg-slate-100/90 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200/60"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Exact Requested Positioning Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortIntro}
            </p>

            {/* Practical highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Code2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>React 18 & TypeScript</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Compass className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Workflow & Spec Design</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Briefcase className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Business Logic & APIs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm transition-all shadow-sm active:scale-95"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#product-analysis"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm active:scale-95"
              >
                <Compass className="w-4 h-4 text-slate-300" />
                Product & Business Analysis
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Resume
              </a>
            </div>

          </div>

          {/* Right Column: Profile & Intro Video Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-2xl shadow-inner border border-slate-700">
                  CK
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base">{personalInfo.name}</h3>
                  <p className="text-xs text-brand-700 font-medium">{personalInfo.currentRole}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{personalInfo.currentCompany}</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400">Core Stack</span>
                  <span className="font-medium text-slate-800">React.js, TypeScript, Tailwind</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400">Key Domain</span>
                  <span className="font-medium text-slate-800">Medical Distribution (DMS) & Retail</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400">Database</span>
                  <span className="font-medium text-slate-800">MongoDB (Working Knowledge)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Location</span>
                  <span className="font-medium text-slate-800">{personalInfo.location}</span>
                </div>
              </div>

              {/* Personal Video Introduction Trigger */}
              <div className="pt-1">
                <div 
                  onClick={onOpenVideoModal}
                  className="group relative cursor-pointer rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/80 p-3.5 transition-all flex items-center justify-between"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenVideoModal()}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                        1-Min Professional Introduction
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Overview of frontend & business analysis experience
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600">
                    1:15 min
                  </span> */}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
