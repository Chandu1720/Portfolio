import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, UserCheck, FileText, CheckCircle2, Video as VideoIcon, Info } from 'lucide-react';
import { videoIntro } from '../../data/portfolioData';

export default function VideoIntroModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'transcript'
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);

  if (!isOpen) return null;

  const isEmbed = videoIntro.videoUrl && (
    videoIntro.videoUrl.includes('youtube.com') ||
    videoIntro.videoUrl.includes('youtu.be') ||
    videoIntro.videoUrl.includes('loom.com')
  );

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="font-semibold text-slate-900 text-base">{videoIntro.title}</h3>
            <span className="text-xs text-slate-500 font-mono ml-2">{videoIntro.duration}</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-md hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-100 px-6 pt-2 gap-4 text-sm font-medium">
          <button
            onClick={() => setActiveTab('video')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'video'
                ? 'border-brand-600 text-brand-700 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Video Preview
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'transcript'
                ? 'border-brand-600 text-brand-700 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Read Full Transcript
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'video' ? (
            <div className="space-y-4">
              {/* If YouTube / Loom Embed */}
              {isEmbed ? (
                <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-black shadow-inner">
                  <iframe
                    src={videoIntro.videoUrl}
                    title="Self-Introduction Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : !hasVideoError ? (
                /* Native HTML5 Video Player */
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-inner flex flex-col justify-center">
                  <video
                    ref={videoRef}
                    // src={videoIntro.videoUrl}
                    src='/chandu.mp4'
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setHasVideoError(true)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                /* Interactive Profile Card Fallback (when local video file is not yet placed in public/) */
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col justify-between p-6 shadow-inner text-white">
                  {/* Top bar info */}
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">1080p</span>
                      <span>Self-Introduction & Core Focus</span>
                    </div>
                    <span className="font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Ready
                    </span>
                  </div>

                  {/* Center presentation state */}
                  <div className="flex flex-col items-center justify-center text-center my-auto">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-brand-500/40 flex items-center justify-center mb-2 shadow-lg group relative">
                      <div className="text-lg font-bold text-slate-100 font-mono tracking-wider">CK</div>
                      {isPlaying && (
                        <div className="absolute inset-0 rounded-full border-2 border-brand-400 animate-ping opacity-30"></div>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-white">Chandu Kampasati</h4>
                    <p className="text-xs text-slate-400 max-w-md mt-0.5">
                      "Frontend Developer & Consultant specializing in React and enterprise business workflows."
                    </p>
                    
                    {/* Audio waveform visualizer when playing */}
                    {isPlaying ? (
                      <div className="flex items-center gap-1 mt-3 h-5">
                        {[40, 70, 30, 90, 60, 80, 45, 100, 55, 75, 30, 65, 85].map((height, i) => (
                          <div
                            key={i}
                            className="w-1 bg-brand-400 rounded-full animate-pulse"
                            style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    ) : (
                      <button
                        onClick={handleTogglePlay}
                        className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-medium shadow-md transition-all active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        Play Self-Introduction Preview
                      </button>
                    )}
                  </div>

                  {/* Bottom controls */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleTogglePlay}
                        className="text-white hover:text-brand-300 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <span className="font-mono text-[11px]">{isPlaying ? '0:24 / 1:15' : '0:00 / 1:15'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span className="text-[11px]">English Audio</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Practical video insertion instructions for Chandu */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-slate-800">How to insert your recorded video:</div>
                  <div className="text-slate-600 leading-relaxed">
                    <strong>Local File:</strong> Simply drop your recorded MP4 into the <code className="bg-slate-200/70 px-1 py-0.5 rounded font-mono text-[11px]">public/</code> folder named <code className="bg-slate-200/70 px-1 py-0.5 rounded font-mono text-[11px]">intro.mp4</code>.
                    <br />
                    <strong>YouTube / Loom:</strong> Or open <code className="bg-slate-200/70 px-1 py-0.5 rounded font-mono text-[11px]">src/data/portfolioData.js</code> and paste your embed link in <code className="bg-slate-200/70 px-1 py-0.5 rounded font-mono text-[11px]">videoIntro.videoUrl</code>.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 text-slate-700 text-sm leading-relaxed">
              <div className="p-3 bg-brand-50 border border-brand-100 rounded-lg text-xs text-brand-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Natural Introduction:</strong> Transparent overview of Chandu's background, ECE transition, Consultant role at AFORV, and practical React development approach.
                </span>
              </div>

              <div className="space-y-3 font-normal text-slate-700">
                <p>
                  "Hello! My name is <strong>Chandu Kampasati</strong>, and I am a frontend developer and Consultant at AFORV Private Limited in Bengaluru."
                </p>
                <p>
                  "My background started in Electronics and Communication Engineering (ECE), where I developed a strong foundation for analytical problem solving. Over time, I transitioned into software development and discovered my genuine passion for building responsive web interfaces and business applications."
                </p>
                <p>
                  "Rather than just building superficial landing pages, I focus heavily on real-world business workflows. I work with React, modern JavaScript, and Tailwind CSS to build complex forms, multi-step validation logic, data tables, and REST API integrations."
                </p>
                <p>
                  "Whether it's an ERP system tracking procurement from Purchase Order to Warehouse inspection, or a finance ledger calculating settlements and payment rules, I care about reliability, data accuracy, and clean reusable UI components."
                </p>
                <p>
                  "Thank you for visiting my portfolio. Feel free to explore my featured project workflows or download my resume. I'd love to connect!"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open to frontend developer & consulting opportunities</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
