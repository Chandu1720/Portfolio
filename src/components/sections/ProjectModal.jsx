import React from 'react';
import { X, CheckCircle, ArrowRight, Layers, FileCode2, ShieldAlert, Cpu, Sparkles, Workflow, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold border border-brand-100">
                {project.period}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {project.role}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{project.tagline}</p>

            {/* Live Link Buttons if present */}
            {(project.liveClientUrl || project.liveAdminUrl) && (
              <div className="flex flex-wrap items-center gap-2.5 mt-3">
                {project.liveClientUrl && (
                  <a
                    href={project.liveClientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Launch Live Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveAdminUrl && (
                  <a
                    href={project.liveAdminUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open Admin Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-md hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              System Overview
            </h4>
            <p className="text-slate-700 leading-relaxed bg-slate-50/80 p-3.5 rounded-lg border border-slate-200/70 text-xs sm:text-sm">
              {project.overview}
            </p>
          </div>

          {/* Workflow Steps (e.g. for SkyLite) */}
          {project.workflowSteps && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700 flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-brand-600" />
                  5-Step Customer Reservation Pipeline
                </h4>
                <span className="text-[11px] font-mono text-slate-400">Live Booking Engine</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.workflowSteps.map((step) => (
                  <div 
                    key={step.step}
                    className="p-3 rounded-lg border border-slate-200 bg-white hover:border-brand-200 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="font-semibold text-slate-900 text-xs">{step.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 pl-7 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VINFLUX SPECIFIC: From Requirement to Product 7-Step Lifecycle */}
          {project.fromRequirementToProduct && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700 flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-brand-600" />
                  From Requirement to Product (7-Stage Lifecycle)
                </h4>
                <span className="text-[11px] font-mono text-slate-400">Vinflux Case Study</span>
              </div>

              <div className="space-y-2.5">
                {project.fromRequirementToProduct.map((step) => (
                  <div 
                    key={step.stage}
                    className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-brand-300 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-slate-900 text-white font-mono text-[11px] font-bold flex items-center justify-center">
                          {step.stage}
                        </span>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">{step.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-brand-700 font-medium">
                        → {step.action}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pt-1 leading-relaxed pl-8">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-brand-600" />
              Key Contributions & Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded bg-slate-50/60 border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Functional Modules */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-slate-600" />
              Application Modules & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.modules.map((mod, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded bg-white border border-slate-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="text-slate-800 font-medium">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {project.title}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-md transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
