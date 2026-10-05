import React from 'react';
import { Layout, Wrench, Network, Terminal, Check, Info, Compass, Database, FileText } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Technical Toolset & Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Skills & Practical Proficiencies
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            Derived directly from production work at AFORV Private Limited and custom enterprise applications.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. Frontend & UI Engineering */}
          <div className="bg-[#fafbfc] rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base">Frontend & UI Engineering</h3>
                    <p className="text-[11px] text-slate-500">Core Specialization</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-medium border border-brand-100">
                  Primary Focus
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.frontend.map((skill) => (
                  <div key={skill.name} className="p-2.5 rounded-md bg-white border border-slate-200/80 text-xs">
                    <div className="font-semibold text-slate-900">{skill.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{skill.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Focuses on type-safe React functional components, custom hooks, predictable state, and mobile-responsive UI.
            </p>
          </div>

          {/* 2. Product & Business Analysis */}
          <div className="bg-[#fafbfc] rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base">Product & Business Analysis</h3>
                    <p className="text-[11px] text-slate-500">Workflow & Requirements</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-medium border border-emerald-100">
                  Key Strength
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.productAndAnalysis.map((item) => (
                  <div key={item.name} className="p-2.5 rounded-md bg-white border border-slate-200/80 text-xs">
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Experience gathering requirements, modeling state flows, detailing validation constraints, and drafting functional specs.
            </p>
          </div>

          {/* 3. Programming Languages */}
          <div className="bg-[#fafbfc] rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base">Programming Languages</h3>
                    <p className="text-[11px] text-slate-500">Syntax & Foundations</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium border border-slate-200">
                  Languages
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.languages.map((lang) => (
                  <div key={lang.name} className="p-2.5 rounded-md bg-white border border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 font-mono">{lang.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{lang.level}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{lang.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Extensive TypeScript & ES6+ daily usage backed by classical C/C++ memory and algorithmic fundamentals.
            </p>
          </div>

          {/* 4. Database & Workflow Tools */}
          <div className="bg-[#fafbfc] rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base">Database, Workflow & Tools</h3>
                    <p className="text-[11px] text-slate-500">Team Collaboration</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium border border-slate-200">
                  Agile Tooling
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.databaseAndTools.map((tool) => (
                  <div key={tool.name} className="p-2.5 rounded-md bg-white border border-slate-200/80 text-xs">
                    <div className="font-semibold text-slate-900">{tool.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tool.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Working knowledge of MongoDB document storage and API sync; daily Git/GitHub and Jira agile collaboration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
