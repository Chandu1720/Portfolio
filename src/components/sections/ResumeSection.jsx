import React from 'react';
import { Download, Printer, ExternalLink, FileText, CheckCircle2, MapPin, Mail, Phone, Calendar, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo, experienceData, projectsData, educationData } from '../../data/portfolioData';

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-200 gap-4 no-print">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Professional Resume
            </h2>
            <p className="text-sm text-slate-500">
              Verified resume reflecting 1 year of production experience, custom projects, and educational credentials.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-all shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-[#fafbfc] rounded-xl border border-slate-300 p-6 sm:p-10 shadow-sm text-slate-800 space-y-7 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                {personalInfo.formalName}
              </h1>
              <p className="text-sm font-bold text-brand-700 mt-0.5 uppercase tracking-wide">
                Consultant
                <span className="text-slate-500 font-normal normal-case"> • Frontend & Business Application Engineering</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.contacts.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.contacts.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.contacts.email}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
              <div className="flex sm:justify-end items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>linkedin.com/in/chandu-kampasati</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                <a 
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors"
                >
                  github.com/Chandu1720
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
              Front-end developer with 1 year of experience building scalable, responsive web applications using React.js, TypeScript, HTML5, and CSS3. Skilled in developing reusable components, dynamic dashboards, and REST API–driven CRUD features. Comfortable in Agile/Scrum environments, collaborating via Git/GitHub and Jira. Working knowledge of MongoDB to support end-to-end application functionality.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Professional Experience
            </h3>

            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 pb-3 border-b border-slate-100">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {experienceData[0].company}
                  </h4>
                  <p className="text-xs text-brand-700 font-semibold">
                    {experienceData[0].role}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  {experienceData[0].location}
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                {experienceData[0].points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects from Resume */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Projects
            </h3>

            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="bg-white rounded-lg border border-slate-200 p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 pb-2 border-b border-slate-100">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">
                          {project.title}
                        </h4>
                        {project.liveClientUrl && (
                          <a
                            href={project.liveClientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-700 hover:text-brand-800 underline no-print"
                          >
                            Live App <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {project.liveAdminUrl && (
                          <a
                            href={project.liveAdminUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 hover:text-slate-900 underline no-print"
                          >
                            Admin Portal <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        Tech Stack: {project.techStack.join(', ')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {project.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 mt-1.5"></span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-4 rounded-lg border border-slate-200">
              <div>
                <span className="font-bold text-slate-900">Languages:</span>{' '}
                <span className="text-slate-700">JavaScript (ES6+), TypeScript, C (Fundamentals), C++ (Fundamentals)</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Frontend:</span>{' '}
                <span className="text-slate-700">React.js, Redux, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Styling & UI:</span>{' '}
                <span className="text-slate-700">Tailwind CSS, Bootstrap, Responsive Design</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Database:</span>{' '}
                <span className="text-slate-700">MongoDB</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Tools & Workflow:</span>{' '}
                <span className="text-slate-700">Git, GitHub, Jira, Agile/Scrum</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Product & Analysis:</span>{' '}
                <span className="text-slate-700">Requirement Gathering, Workflow Design, Functional Documentation</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              Education
            </h3>
            <div className="bg-white rounded-lg border border-slate-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {educationData.degree} – {educationData.field}
                </h4>
                <p className="text-xs text-brand-700 font-medium">
                  {educationData.institution}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Verified B-Tech Degree
              </span>
            </div>
          </div>

          {/* Languages */}
          <div className="pt-1 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>
              <strong>Languages Spoken:</strong> {personalInfo.languagesSpoken.join(', ')}
            </span>
            <span className="text-[11px] text-slate-400">
              Verified from Resume • KAMPASATI CHANDU
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
