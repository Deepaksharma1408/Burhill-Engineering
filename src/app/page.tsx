import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { BlueprintGraphic } from '@/components/ui/BlueprintGraphic';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { ArrowRight, CheckCircle2, ShieldAlert, Award, Building2, Server, HardHat, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">

      {/* 1. HERO SECTION WITH CLEAN INDUSTRIAL BACKGROUND */}
      <section className="relative bg-navy-dark text-white pt-12 pb-20 lg:py-28 overflow-hidden border-b border-navy-border min-h-[640px] flex items-center">
        {/* Cinematic Heavy Industrial Sunset Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark Navy Gradient Overlay - dark on left for text legibility, crystal clear on right for sunset industrial view */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3.5 py-1.5 rounded border border-gold/30">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>{SITE_CONTENT.hero.badge}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                {SITE_CONTENT.hero.headline}
              </h1>
              <p className="text-xl sm:text-2xl font-serif font-semibold gold-gradient-text">
                {SITE_CONTENT.hero.subtext}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {SITE_CONTENT.hero.leadParagraph}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gold hover:bg-gold-light text-navy-dark font-sans text-sm font-bold px-7 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>{SITE_CONTENT.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 bg-navy-dark hover:bg-navy-light text-white font-mono text-xs font-semibold px-6 py-3.5 rounded border border-navy-border transition-colors"
              >
                <span>{SITE_CONTENT.hero.secondaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>

            {/* Hero Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-navy-border/60">
              {SITE_CONTENT.hero.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-gold">{m.value}</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTOR-LED POSITIONING INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-bg border border-slate-border rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <SectionHeader
                eyebrow={SITE_CONTENT.positioning.eyebrow}
                heading={SITE_CONTENT.positioning.heading}
              />
              <p className="text-base text-slate-700 leading-relaxed">
                {SITE_CONTENT.positioning.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-slate-border shadow-sm space-y-4">
              <div className="text-xs font-mono font-bold text-navy uppercase tracking-wider border-b border-slate-border pb-2">
                PRACTICE PROFILE HIGHLIGHTS
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Director-Led Technical Oversight</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Senior Tier 1 Delivery Experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Sydney CBD Headquartered & Independent</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Legal-Grade Forensic Reports (Federal & Supreme Courts)</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="text-xs font-mono font-bold uppercase text-navy hover:text-gold flex items-center space-x-1 pt-2 transition-colors"
              >
                <span>Read Director Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTOR STRIP (Placeholder blocks for infrastructure, data centres, civil works) */}
      <section className="bg-navy-dark py-12 text-white border-y border-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-gold uppercase tracking-widest font-semibold block">
              TARGET ASSET CLASSES & SECTOR EXPERTISE
            </span>
            <p className="text-xs text-slate-300 font-mono">
              Advising Asset Owners, Head Contractors, Insurers, and Legal Counsel
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SITE_CONTENT.sectors.map((sector) => (
              <Link
                key={sector.id}
                href="/industry-expertise"
                className="group bg-navy/80 hover:bg-navy p-5 rounded border border-navy-border hover:border-gold transition-all"
              >
                <div className="text-[10px] font-mono text-gold uppercase tracking-widest mb-1">
                  SECTOR FILE #{sector.id}
                </div>
                <div className="text-sm font-serif font-bold text-white group-hover:text-gold transition-colors">
                  {sector.title}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-400 flex items-center space-x-1">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SNAPSHOT OF 8 SERVICE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            eyebrow="SPECIALIST SERVICE PILLARS"
            heading="Modular Engineering Expertise Designed for High-Stakes Projects"
            subtext="From initial due diligence and structural surveillance to courtroom expert witness testimony."
          />
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 bg-navy text-white hover:bg-navy-dark font-mono text-xs font-semibold px-5 py-3 rounded border border-navy-border transition-colors shrink-0"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>

        {/* Grid of 8 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONTENT.services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={idx === 0 || idx === 7}
            />
          ))}
        </div>
      </section>

      {/* 5. "WHY BURHILL" - KEY MESSAGING PILLARS */}
      <section className="bg-slate-bg py-16 sm:py-24 border-y border-slate-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="OUR OPERATING PHILOSOPHY"
            heading="Why Burhill Engineering Partners"
            subtext="Four foundational pillars that set our forensic and technical advisory practice apart."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITE_CONTENT.messagingPillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="bg-white p-8 rounded-lg border border-slate-border hover:border-gold hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold px-2.5 py-1 rounded bg-navy text-gold">
                    0{idx + 1} // ESSENTIAL PRINCIPLE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-bg text-navy flex items-center justify-center font-mono text-xs font-bold border border-slate-border">
                    P{idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-navy">
                  "{pillar.title}"
                </h3>

                <p className="text-xs font-mono text-slate-500 italic bg-slate-bg p-2.5 rounded border-l-2 border-gold">
                  {pillar.quote}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECT EXPERIENCE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            eyebrow="PROVEN ENGINEERING IMPACT"
            heading="Featured Project Experience"
            subtext="Representative case studies highlighting forensic problem solving and major asset governance."
          />
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-navy hover:text-gold font-mono text-xs font-bold uppercase transition-colors shrink-0"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner />
      </section>

    </div>
  );
}
