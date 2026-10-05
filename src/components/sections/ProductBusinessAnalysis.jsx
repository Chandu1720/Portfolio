import React, { useState } from 'react';
import { 
  GitFork, 
  FileText, 
  Workflow, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Compass, 
  Layers, 
  Cpu, 
  CheckSquare, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { productAnalysisData } from '../../data/portfolioData';

export default function ProductBusinessAnalysis() {
  const [expandedScenario, setExpandedScenario] = useState(0);
  const [activeTab, setActiveTab] = useState('gathering'); // 'gathering' | 'workflows' | 'documentation' | 'rules'

  const { capabilities, collaborationFlow, requirementToFeatureCaseStudy } = productAnalysisData;

  return (
    <section id="product-analysis" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-mono font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Product & Business Analysis Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Understanding the Business Requirements Behind the Screen
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            I don't simply build user interfaces from wireframes. I actively work across the gap between business processes and technical execution: clarifying requirements with stakeholders, modeling workflows, documenting functional behavior, and translating complex rules into dependable React code.
          </p>
        </div>

        {/* 1. VISUAL PRODUCT COLLABORATION FLOW */}
        <div className="mb-14 bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-slate-200/70 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Full-Cycle Product Collaboration
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                From Business Intent to Shipped Feature
              </h3>
            </div>
            <span className="text-xs font-mono text-brand-700 font-medium bg-brand-50 px-2.5 py-1 rounded border border-brand-100">
              8-Step Engineering Pipeline
            </span>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {collaborationFlow.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col justify-between hover:border-brand-300 transition-colors shadow-2xs relative group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-slate-400 mb-1">
                    <span>{step.step}</span>
                    {idx < collaborationFlow.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-slate-300 hidden lg:block group-hover:text-brand-500 transition-colors" />
                    )}
                  </div>
                  <div className="font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                    {step.name}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 mt-2 leading-snug">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CORE CAPABILITIES (4 PILLARS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Left Column: Interactive Nav Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">
              Analysis Capabilities
            </h3>
            
            <button
              onClick={() => setActiveTab('gathering')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${
                activeTab === 'gathering'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CheckSquare className="w-4 h-4 flex-shrink-0" />
                <span>Requirement Gathering</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('workflows')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${
                activeTab === 'workflows'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Workflow className="w-4 h-4 flex-shrink-0" />
                <span>Workflow Design</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('documentation')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${
                activeTab === 'documentation'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Functional Documentation</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>

            <button
              onClick={() => setActiveTab('rules')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${
                activeTab === 'rules'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Business Rule Analysis</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          </div>

          {/* Right Column: Tab Content Display */}
          <div className="lg:col-span-8 bg-[#fafbfc] rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            
            {/* Tab 1: Requirement Gathering */}
            {activeTab === 'gathering' && (
              <div className="space-y-4 animate-fade-in">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900">
                    Requirement Gathering & Discovery
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Converting business conversations into structured, actionable functional specifications.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {capabilities.requirementGathering.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Workflow Design */}
            {activeTab === 'workflows' && (
              <div className="space-y-4 animate-fade-in">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900">
                    Workflow Design Prior to Coding
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {capabilities.workflowDesign.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {capabilities.workflowDesign.pipelines.map((pipe, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-white border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{pipe.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">Sequential</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 font-mono text-[11px] sm:text-xs text-brand-800 font-medium">
                        {pipe.flow}
                      </div>
                      <p className="text-[11px] text-slate-500 italic">
                        {pipe.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200">
                  <strong>Workflow Dimensions Defined:</strong> User actions, System triggers, Validations, Status changes, Approvals, Cross-module dependencies, and Exception paths.
                </div>
              </div>
            )}

            {/* Tab 3: Functional Documentation */}
            {activeTab === 'documentation' && (
              <div className="space-y-4 animate-fade-in">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900">
                    Functional & Process Documentation
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {capabilities.functionalDocumentation.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                  {capabilities.functionalDocumentation.documentTypes.map((doc, idx) => (
                    <div key={idx} className="p-2.5 rounded-md bg-white border border-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0"></span>
                      <span className="text-slate-800 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-brand-50 border border-brand-100 rounded-lg text-xs text-brand-900">
                  <strong>Documentation Impact:</strong> Reduces developer rework, gives QA explicit boundary criteria, and gives stakeholders transparency into how the app will behave.
                </div>
              </div>
            )}

            {/* Tab 4: Business Rule Analysis */}
            {activeTab === 'rules' && (
              <div className="space-y-4 animate-fade-in">
                <div className="pb-3 border-b border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900">
                    Business Rule Analysis & Architectural Questions
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {capabilities.businessRuleAnalysis.description}
                  </p>
                </div>

                <div className="space-y-2 pt-1 max-h-[380px] overflow-y-auto pr-1">
                  {capabilities.businessRuleAnalysis.scenarios.map((sc, idx) => {
                    const isExpanded = expandedScenario === idx;
                    return (
                      <div 
                        key={idx}
                        className="rounded-lg border border-slate-200 bg-white overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setExpandedScenario(isExpanded ? null : idx)}
                          className="w-full p-3 text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          <div className="flex items-center gap-2">
                            <HelpCircle className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                            <span>{sc.question}</span>
                          </div>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                        </button>
                        {isExpanded && (
                          <div className="px-3 pb-3 pt-1 text-xs text-slate-600 bg-slate-50/50 border-t border-slate-100 leading-relaxed">
                            <strong className="text-brand-800">System Behavior:</strong> {sc.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* 3. INTERACTIVE REQUIREMENT-TO-FEATURE CASE STUDY */}
        <div className="rounded-xl border border-slate-200 bg-[#fafbfc] overflow-hidden shadow-xs p-6 sm:p-8">
          
          <div className="pb-5 mb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-700 uppercase tracking-wider">
                Concrete Example
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {requirementToFeatureCaseStudy.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {requirementToFeatureCaseStudy.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              End-to-End Traceability
            </span>
          </div>

          {/* Stepper Breakdown */}
          <div className="relative space-y-4">
            {requirementToFeatureCaseStudy.steps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-lg border border-slate-200 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-100">
                      {st.badge}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{st.heading}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="w-full md:w-auto md:min-w-[240px] p-2.5 rounded bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Outcome / Rule</span>
                  <span className="font-semibold text-brand-800">{st.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 text-center">
            Demonstrates how business realities inform frontend state machines, form validation conditions, and API payloads.
          </div>

        </div>

      </div>
    </section>
  );
}
