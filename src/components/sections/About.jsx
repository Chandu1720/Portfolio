import React from 'react';
import { Cpu, Layout, FileSpreadsheet, CheckSquare, Database, Compass, Workflow, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Engineering & Product Mindset
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            Frontend developer with an analytical ECE foundation and practical experience bridging business requirements with modern React architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed">
            <div className="p-4 rounded-lg bg-slate-50 border-l-4 border-brand-600 border border-slate-200/80">
              <p className="italic text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                “My background started in Electronics and Communication Engineering at Usha Rama College of Engineering and Technology, where I developed an interest in technology and problem solving. Over time, I moved toward software development and found my strongest interest in building web interfaces and business applications.”
              </p>
            </div>

            <p>
              Currently working as a <strong>Consultant</strong> at <strong>AFORV Private Limited</strong> in Bengaluru, I build type-safe, responsive applications using <strong>React.js, TypeScript, Tailwind CSS, and RESTful APIs</strong>. But my contribution doesn't stop at rendering mockups: I actively engage in the <strong>product thinking and workflow analysis</strong> that precedes implementation.
            </p>

            <p>
              I take pride in understanding the real operational workflows behind every screen:
            </p>

            {/* Bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>Requirement Gathering:</strong> Converting business needs into functional specs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>Workflow Design:</strong> Mapping state transitions & approval gates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>Type-Safe React:</strong> TypeScript interfaces reducing runtime bugs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>REST API Integration:</strong> Axios CRUD with error & loading states</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>Business Validation:</strong> Client-side constraint enforcement</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span><strong>Agile Collaboration:</strong> Jira sprint planning, Git, and code reviews</span>
              </div>
            </div>

            <p className="pt-2 text-slate-600 text-xs sm:text-sm">
              I don't claim unearned senior labels; I bring disciplined engineering habits, clear functional documentation, and an eager drive to solve real problems for businesses and end users.
            </p>
          </div>

          {/* Practical Highlights / Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl border border-slate-200 bg-[#fafbfc] hover:border-slate-300 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Product-Minded Engineer</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating edge cases before coding: What happens during partial shipments? How are unallocated doctor advances reconciled? How do role permissions filter data?
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-[#fafbfc] hover:border-slate-300 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Type Safety & Code Quality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leveraging TypeScript with React functional components to enforce data contracts, simplify refactoring, and reduce client-side crashes by ~30%.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-[#fafbfc] hover:border-slate-300 transition-colors space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Full-Stack Context (MongoDB)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Working knowledge of MongoDB document schemas and REST API patterns ensures seamless synchronization between database records and UI states.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
