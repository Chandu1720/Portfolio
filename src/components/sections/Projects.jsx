import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  CheckCircle2, 
  Layers, 
  ChevronRight, 
  Workflow, 
  Cpu, 
  Sparkles, 
  ShieldCheck,
  Calendar,
  Code2,
  Database,
  ExternalLink,
  Film,
  QrCode,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const skyliteProject = projectsData.find((p) => p.id === 'skylite-theatre');
  const vinfluxProject = projectsData.find((p) => p.id === 'vinflux-dms');
  const shopProject = projectsData.find((p) => p.id === 'shop-management');

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#fafbfc] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
              Production Experience & Live Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Web Applications
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl">
              Live web applications and production systems demonstrating responsive React engineering, complex booking pipelines, dynamic UPI payments, and end-to-end business workflows.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            3 Production Projects
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          
          {/* PROJECT 1: SkyLite Private Theatre (LIVE ON VERCEL) */}
          {skyliteProject && (
            <div className="rounded-xl border-2 border-brand-200/80 bg-white overflow-hidden shadow-sm hover:border-brand-400 transition-all">
              <div className="p-6 sm:p-8">
                
                {/* Card Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-amber-700" />
                      Featured Live Platform
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {skyliteProject.period}
                    </span>
                  </div>
                  
                  {/* Live Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={skyliteProject.liveClientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-2xs transition-colors"
                    >
                      <span>Live Client</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={skyliteProject.liveAdminUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs transition-colors"
                    >
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      <span>Admin Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Title & Overview */}
                <div className="mt-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {skyliteProject.title}
                    </h3>
                    <span className="text-xs font-mono text-brand-700 font-medium">
                      React 18 • Dynamic UPI • iCal • Vercel
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skyliteProject.overview}
                  </p>
                </div>

                {/* 5-Step Booking Workflow Pipeline */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-brand-600" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                        Interactive 5-Step Reservation Pipeline
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      End-to-End Customer Journey
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">STEP 01</span>
                      <div className="font-semibold text-slate-900 text-xs mt-1">Occasion & Hall</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">Thematic decor & guest capacity</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">STEP 02</span>
                      <div className="font-semibold text-slate-900 text-xs mt-1">Live Slot Hold</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">30-day calendar & hold timer</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">STEP 03</span>
                      <div className="font-semibold text-slate-900 text-xs mt-1">Celebration Add-ons</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">Cakes, flowers, neon lights & snacks</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">STEP 04</span>
                      <div className="font-semibold text-slate-900 text-xs mt-1">UPI QR & UTR</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">Advance deposit & 12-digit UTR proof</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">STEP 05</span>
                      <div className="font-semibold text-slate-900 text-xs mt-1">iCal & WhatsApp</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">.ics file export & concierge sync</p>
                    </div>
                  </div>
                </div>

                {/* Highlights & Modules */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-2">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Technical & Workflow Contributions:
                    </h4>
                    {skyliteProject.highlights.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right Module Tags & CTA */}
                  <div className="lg:col-span-4 bg-[#fafbfc] p-4 rounded-lg border border-slate-200 space-y-3">
                    <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      Client & Admin Modules
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skyliteProject.modules.slice(0, 6).map((m) => (
                        <span key={m} className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-700 font-semibold">● Active Production</span>
                      <button
                        onClick={() => setSelectedProject(skyliteProject)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                      >
                        Deep Dive <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT 2: Vinflux / DMS */}
          {vinfluxProject && (
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all">
              <div className="p-6 sm:p-8">
                
                {/* Card Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-50 text-brand-700 border border-brand-100">
                      Medical Distribution & Supply
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {vinfluxProject.period}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    TypeScript & React 18
                  </span>
                </div>

                {/* Title & Overview */}
                <div className="mt-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {vinfluxProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {vinfluxProject.overview}
                  </p>
                </div>

                {/* SPECIAL SECTION: From Requirement to Product (7 Steps) */}
                <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/70 gap-2">
                    <div className="flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-brand-600" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                        Vinflux Case Study: From Requirement to Product
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-brand-700">
                      7-Stage Product Engineering Lifecycle
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>01. Requirement</span>
                      </div>
                      <div className="font-semibold text-slate-800">Understand Process</div>
                      <p className="text-[11px] text-slate-500 mt-1">Surgical kit dispatches, implant usage & doctor settlement cycles.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>02. Workflow Design</span>
                      </div>
                      <div className="font-semibold text-slate-800">Define Interactions</div>
                      <p className="text-[11px] text-slate-500 mt-1">Mapped user states: surgery booking → shipment → consumption → case closure.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>03. Documentation</span>
                      </div>
                      <div className="font-semibold text-slate-800">Functional Specs</div>
                      <p className="text-[11px] text-slate-500 mt-1">Documented validation rules, HSN criteria, and backend REST contracts.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>04. Frontend Dev</span>
                      </div>
                      <div className="font-semibold text-slate-800">Type-Safe UI</div>
                      <p className="text-[11px] text-slate-500 mt-1">React 18 + TypeScript interfaces reducing runtime bugs by ~30%.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>05. API Integration</span>
                      </div>
                      <div className="font-semibold text-slate-800">Axios Interceptors</div>
                      <p className="text-[11px] text-slate-500 mt-1">Connected UI to REST endpoints with robust token handling & error states.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>06. Business Rules</span>
                      </div>
                      <div className="font-semibold text-slate-800">Constraint Logic</div>
                      <p className="text-[11px] text-slate-500 mt-1">Enforced strict expiry checks, batch tracking & asynchronous BD closure rules.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 sm:col-span-2">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-700 mb-1">
                        <span>07. Testing & Refinement</span>
                      </div>
                      <div className="font-semibold text-slate-800">Edge Case Resolution</div>
                      <p className="text-[11px] text-slate-500 mt-1">Addressed partial shipment returns and refined high-frequency surgical entry workflows.</p>
                    </div>
                  </div>
                </div>

                {/* Resume bullet points */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-2">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Technical Scope & Impact (Resume Highlights):
                    </h4>
                    {vinfluxProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right sidebar */}
                  <div className="lg:col-span-4 bg-[#fafbfc] p-4 rounded-lg border border-slate-200 space-y-3">
                    <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      Key Modules
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {vinfluxProject.modules.map((m) => (
                        <span key={m} className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">TypeScript • REST</span>
                      <button
                        onClick={() => setSelectedProject(vinfluxProject)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                      >
                        Case Study <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT 3: Shop Management Application */}
          {shopProject && (
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all">
              <div className="p-6 sm:p-8">
                
                {/* Card Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-100">
                      Retail Operations & Point of Sale
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {shopProject.period}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    React.js & MongoDB
                  </span>
                </div>

                {/* Title & Overview */}
                <div className="mt-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {shopProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {shopProject.overview}
                  </p>
                </div>

                {/* Resume bullet points */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Implementation Details (Resume Highlights):
                    </h4>
                    {shopProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right sidebar */}
                  <div className="lg:col-span-4 bg-[#fafbfc] p-4 rounded-lg border border-slate-200 space-y-3">
                    <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-slate-500" />
                      System Capabilities
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {shopProject.modules.map((m) => (
                        <span key={m} className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">~40% effort reduction</span>
                      <button
                        onClick={() => setSelectedProject(shopProject)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                      >
                        Deep Dive <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
