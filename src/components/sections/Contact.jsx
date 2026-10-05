import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMode, setSuccessMode] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Option 1: Send via Direct Email (chandukampasati.1@gmail.com)
  const handleSendEmail = (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    // Prepare mailto link with encoded subject & body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Chandu,\n\nYou received a new message from your portfolio website:\n\n` +
      `From: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Sent via: chandu-kampasati.portfolio`
    );

    // Trigger user's mail client directly to your inbox
    window.location.href = `mailto:${personalInfo.contacts.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMode('email');
      if (onShowToast) {
        onShowToast("Opening your email client to send directly to chandukampasati.1@gmail.com!");
      }
    }, 500);
  };

  // Option 2: Send via WhatsApp (+91 89190 33989)
  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setError('');
    const rawPhone = personalInfo.contacts.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `*New Portfolio Message*\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Message:*\n${formData.message}`
    );

    const waUrl = `https://wa.me/${rawPhone}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSuccessMode('whatsapp');
    if (onShowToast) {
      onShowToast("Opening WhatsApp chat with Chandu (+91 89190 33989)!");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#fafbfc] border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <span className="text-xs font-mono font-semibold text-brand-700 tracking-wider uppercase">
            Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            Whether you are recruiting for frontend or UI roles, want to discuss business application workflows, or review my technical background, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.contacts.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="font-medium text-slate-800 break-all">{personalInfo.contacts.email}</div>
                  </div>
                </a>

                {/* WhatsApp & Phone */}
                <a
                  href={`https://wa.me/${personalInfo.contacts.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-emerald-100 bg-emerald-50/20 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-700 uppercase flex items-center gap-1 font-semibold">
                      WhatsApp & Mobile <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <div className="font-medium text-slate-800 font-mono">{personalInfo.contacts.phone}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="font-medium text-slate-800">linkedin.com/in/chandu-kampasati</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="font-medium text-slate-800">github.com/Chandu1720</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Current Location</div>
                    <div className="font-medium text-slate-700">{personalInfo.contacts.location} (IST, UTC +5:30)</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Explanatory Callout: How messages are received */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>How your messages are received</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>
                  <strong>Email:</strong> Delivered straight to <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-[11px]">chandukampasati.1@gmail.com</code>.
                </li>
                <li>
                  <strong>WhatsApp:</strong> Instantly routed to your phone at <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-[11px]">+91 89190 33989</code>.
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form with Both Sending Options */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">Send a Message</h3>
                  <p className="text-xs text-slate-500">
                    Choose whether to dispatch directly via <strong>Email</strong> or start a chat on <strong>WhatsApp</strong>.
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMode && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>
                    {successMode === 'email'
                      ? "Email client opened! You can dispatch the drafted message directly to chandukampasati.1@gmail.com."
                      : "WhatsApp chat launched! Your message was formatted and ready to send."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager / Recruiter Name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your team, role opening, or project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-colors"
                  ></textarea>
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 disabled:opacity-70 flex-1"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex-1"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                  <span>🔒 Direct dispatch • No spam</span>
                  <span>Both options are active</span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
