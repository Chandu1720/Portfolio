import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Workflow, 
  Clock, 
  Layers, 
  Lightbulb, 
  Sparkles, 
  ArrowRight,
  Cpu,
  Database
} from 'lucide-react';
import { problemSolvingData } from '../../data/portfolioData';

export default function ProblemSolving() {
  const [activeTab, setActiveTab] = useState(0);

  const { scenarios, sectionTitle, description } = problemSolvingData;
  const currentScenario = scenarios[activeTab];

  return (
    <section id="problem-solving" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Practical Engineering Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl">
            {description}
          </p>
        </div>

        {/* Framing callout */}
        <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
          <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Real-World Focus:</strong> Rather than reciting theoretical algorithmic puzzles, my problem-solving focuses on resolving concurrency conflicts, asynchronous financial ledger states, edge cases in form validations, and resilient UI-to-database synchronization in live applications.
          </p>
        </div>

        {/* Interactive Scenario Container */}
        <div className="rounded-xl border border-slate-200 bg-[#fafbfc] overflow-hidden shadow-xs">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center border-b border-slate-200 bg-white px-3 pt-2 gap-1.5">
            {scenarios.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2.5 rounded-t-lg text-xs font-semibold transition-all border-b-2 ${
                  activeTab === idx
                    ? 'border-brand-600 text-brand-700 bg-brand-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-slate-400">0{idx + 1}.</span>
                  <span>{sc.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Scenario Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 gap-2">
              <div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold border border-brand-100">
                  {currentScenario.system}
                </span>
                <span className="text-xs text-slate-400 font-mono ml-2">• {currentScenario.domain}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {currentScenario.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentScenario.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 3-Column Problem / Solution / Outcome Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Challenge Column */}
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-red-200/70 shadow-2xs space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>The Production Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {currentScenario.problem}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-red-600 font-medium">
                  Risk: State inconsistency, revenue leakage, or bad user experience.
                </div>
              </div>

              {/* Solution Column */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                    <Workflow className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>Technical & Architectural Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {currentScenario.solution}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-brand-700 font-mono">
                  Engineered with React state machines & strict business rules.
                </div>
              </div>

              {/* Outcome Column */}
              <div className="lg:col-span-3 bg-white p-5 rounded-xl border border-emerald-200/70 shadow-2xs space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Measurable Outcome</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium mt-2 leading-relaxed">
                    {currentScenario.outcome}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span>Production Verified</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
