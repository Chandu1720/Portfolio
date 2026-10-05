import React from 'react';
import { Award, BookOpen, ExternalLink, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { learningCoursesData } from '../../data/portfolioData';

export default function LearningCourses() {
  return (
    <section id="certifications" className="py-16 md:py-20 bg-[#fafbfc] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Continuous Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Learning & Certifications
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            Structured coursework and academic background supporting ongoing technical growth and engineering discipline.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningCoursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
                    {course.id === 'ece-degree' ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <BookOpen className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    {course.status}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs font-medium text-brand-700 mt-1">
                  {course.focus}
                </p>

                <p className="text-[11px] text-slate-400 mt-0.5">
                  {course.institution}
                </p>

                {/* Course areas */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Topics Covered:
                  </span>
                  {course.areas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note with Link Placeholder */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 italic">
                    {course.credentialNote}
                  </span>
                  <button 
                    onClick={() => alert("Official verification document available on request for hiring verifications.")}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-brand-600 transition-colors p-1"
                    title="Verification link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-fabrication integrity statement */}
        <div className="mt-8 p-3.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              <strong>Integrity Guarantee:</strong> Certifications, coursework, and degree details avoid fabricated metrics or dates and reflect actual learning milestones.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
