import React from 'react';
import { learningJourney } from '../../data/portfolioData';
import { ArrowRight, Compass } from 'lucide-react';

export default function LearningJourney() {
  return (
    <section id="journey" className="py-16 md:py-20 bg-[#fafbfc] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Evolution & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Learning Journey
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            A grounded timeline showing how an engineering foundation evolved into frontend development and business application engineering.
          </p>
        </div>

        {/* Timeline Horizontal / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {learningJourney.map((item, index) => (
            <div
              key={item.stage}
              className="relative p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    STAGE {item.stage}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Milestone {index + 1} of 6</span>
                {index < 5 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Concise takeaway */}
        <div className="mt-8 p-4 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-brand-600 flex-shrink-0" />
            <span>
              <strong>Trajectory:</strong> Electronics & Communication Engineering → Software Development → Frontend Development → React → Real Business Applications → AI & Modern Technology.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
