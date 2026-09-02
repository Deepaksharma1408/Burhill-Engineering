'use client';

import React, { useState } from 'react';
import { SITE_CONTENT } from '@/data/content';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: SITE_CONTENT.sectorsList[0],
    service: SITE_CONTENT.services[0].title,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* NOTE: Spam protection (reCAPTCHA/Turnstile) and form submission logic to be added in backend phase */
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner with Entrance Animation */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 animate-slide-up">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle"></span>
            <span>ENGAGEMENT INQUIRY // SYDNEY CBD OFFICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Burhill Engineering Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Request a director consultation, discuss expert witness appointments, or inquire about structural surveillance and quality governance for your asset.
          </p>
        </div>
      </section>

      {/* Contact Layout: Left Office Details + Map, Right Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Office Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block">
                HEAD OFFICE PRACTICE
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy">
                Sydney Office Location
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our directors operate from our central Sydney CBD office, providing rapid response across Metropolitan NSW, interstate capital projects, and regional infrastructure hubs.
              </p>
            </div>

            {/* Office Contact Cards */}
            <div className="bg-slate-bg border border-slate-border rounded-lg p-6 space-y-4 font-mono text-xs text-navy shadow-sm hover:border-gold/50 transition-all">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5 animate-pulse-subtle" />
                <div>
                  <div className="font-bold text-sm text-navy font-serif">{SITE_CONTENT.officeDetails.city}</div>
                  <div className="text-slate-600 mt-1">{SITE_CONTENT.officeDetails.addressLine1}</div>
                  <div className="text-slate-600">{SITE_CONTENT.officeDetails.addressLine2}</div>
                  <div className="text-[10px] text-gold mt-1 font-semibold">COORDINATES: {SITE_CONTENT.officeDetails.coordinates}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-border flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">DIRECT TELEPHONE</span>
                  <a href={`tel:${SITE_CONTENT.company.phone.replace(/[^0-9+]/g, '')}`} className="font-bold hover:text-gold transition-colors">
                    {SITE_CONTENT.company.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-border flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">GENERAL ENQUIRIES</span>
                  <a href={`mailto:${SITE_CONTENT.company.email}`} className="font-bold hover:text-gold transition-colors">
                    {SITE_CONTENT.company.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-border flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">PRACTICE HOURS</span>
                  <span className="text-slate-700">{SITE_CONTENT.officeDetails.hours}</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="bg-navy-dark border border-navy-border rounded-lg p-6 relative overflow-hidden space-y-4 shadow-xl hover:border-gold/40 transition-colors">
              <TechnicalGridOverlay dark />
              <div className="relative z-10 flex items-center justify-between">
                <div className="text-xs font-mono text-gold font-bold">HYDE PARK PRECINCT MAP</div>
                <div className="text-[10px] font-mono text-slate-400">SYDNEY NSW 2000</div>
              </div>

              {/* Vector SVG Map Stylized Render */}
              <div className="relative z-10 h-[180px] bg-navy border border-gold/30 rounded flex flex-col items-center justify-center space-y-2 text-center p-4">
                <MapPin className="w-8 h-8 text-gold animate-bounce" />
                <span className="font-serif text-sm font-bold text-white">175 Liverpool Street, Sydney</span>
                <span className="font-mono text-[10px] text-slate-300">Level 28 Executive Suite // Museum Station Precinct</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-border rounded-xl p-8 shadow-lg space-y-6 animate-slide-up delay-100 hover:border-gold/50 transition-all duration-300">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-serif font-bold text-navy">
                Request a Director Consultation
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Please complete the form below. A senior director will review your inquiry within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-navy-dark text-white p-8 rounded-lg border border-gold/50 space-y-4 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-bounce" />
                <h4 className="text-xl font-serif font-bold text-white">Inquiry Received</h4>
                <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                  Thank you for contacting Burhill Engineering Partners. Your consultation request has been dispatched to our Sydney CBD directorate.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-gold hover:underline pt-2 block mx-auto font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NOTE: Spam protection (reCAPTCHA/Turnstile) and form submission logic to be added in backend phase */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tier 1 Infrastructure JV"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="m.vance@company.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Asset Class / Sector *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    >
                      {SITE_CONTENT.sectorsList.map((sec, idx) => (
                        <option key={idx} value={sec}>{sec}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-semibold text-navy uppercase">
                      Service Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                    >
                      {SITE_CONTENT.services.map((svc) => (
                        <option key={svc.id} value={svc.title}>{svc.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-navy uppercase">
                    Inquiry Summary & Project Context *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide a brief summary of the asset, structural scope, or required forensic investigation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-border bg-slate-bg text-slate-800 text-sm focus:outline-none focus:border-navy focus:bg-white focus:ring-1 focus:ring-navy transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Confidential & Independent</span>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center space-x-2 bg-gold hover:bg-gold-light text-navy-dark font-sans text-xs font-bold px-6 py-3 rounded shadow transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Submit Consultation Request</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
