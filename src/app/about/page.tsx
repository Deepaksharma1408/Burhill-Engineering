import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DirectorCard } from '@/components/ui/DirectorCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "About & Leadership Profiles",
  description: "Learn about Burhill Engineering Partners' director-led consultancy, Sydney practice overview, and executive leadership profiles.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner with Entrance Animation */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 animate-slide-up">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle"></span>
            <span>PRACTICE OVERVIEW // LEADERSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            About Burhill Engineering Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Founded on senior Tier 1 delivery experience, we bring forensic precision and technical accountability to major infrastructure, hyperscale data centres, and specialist civil works.
          </p>
        </div>
      </section>

      {/* Company Philosophy & Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 animate-slide-up">
            <SectionHeader
              eyebrow="DIRECTOR-LED ADVISORY MODEL"
              heading="Construction Engineers First, Uncompromising Rigour Always"
            />
            <p className="text-base text-slate-700 leading-relaxed">
              In major capital infrastructure, delegated desktop audits often fail to catch physical site vulnerabilities. Burhill Engineering Partners was established to eliminate this structural gap. Every engagement is personally led by a chartered director with decades of Tier 1 project delivery experience.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Based in Sydney, NSW, our practice provides independent forensic engineering, structural surveillance, expert witness testimony, and quality governance. We operate with complete independence—giving asset owners, contractors, legal counsel, and insurers objective engineering clarity when it matters most.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 font-mono text-xs">
              <div className="p-4 bg-slate-bg rounded border border-slate-border hover:border-gold/50 hover:shadow-md transition-all">
                <div className="text-gold font-bold text-lg">SYDNEY CBD</div>
                <div className="text-slate-500 uppercase">Headquarters Practice</div>
              </div>
              <div className="p-4 bg-slate-bg rounded border border-slate-border hover:border-gold/50 hover:shadow-md transition-all">
                <div className="text-gold font-bold text-lg">CPEng / NER / RPEQ</div>
                <div className="text-slate-500 uppercase">Chartered Credentials</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-dark text-white p-8 rounded-xl border border-navy-border space-y-6 shadow-2xl relative animate-slide-up delay-100 hover:border-gold/50 transition-all duration-300">
            <TechnicalGridOverlay dark />
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block">
                OUR COMMITMENT TO CLIENTS
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Legal-Grade Technical Accountability
              </h3>
              <ul className="space-y-3 text-xs text-slate-300 font-sans">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Direct director involvement from scoping through court testimony.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Definitive root-cause determination backed by empirical testing.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Proactive risk identification before defects become commercial claims.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Full compliance with Australian Standards and Court Expert Codes.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Director Profiles Section */}
      <section className="bg-slate-bg py-16 sm:py-24 border-y border-slate-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="EXECUTIVE LEADERSHIP & CONSULTANTS"
            heading="Meet Our Directors"
            subtext="Chartered engineers bringing legal-grade forensic rigor and practical Tier 1 delivery experience."
            centered
            className="animate-slide-up"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SITE_CONTENT.directors.map((director) => (
              <DirectorCard key={director.id} director={director} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner
          title="Connect directly with our engineering directors"
          subtext="Schedule a confidential consultation with Marcus Burhill, Dr. Eleanor Vance, or David Thornton."
        />
      </section>

    </div>
  );
}
