import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';

export const metadata = {
  title: "Project Experience & Case Studies",
  description: "Explore representative case studies highlighting Burhill Engineering Partners' forensic problem solving, major asset surveillance, and technical advisory.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner with Entrance Animation */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 animate-slide-up">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle"></span>
            <span>TRACK RECORD // AUDITED CASE FILES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Project Experience & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Representative technical engagements demonstrating forensic root-cause analysis, defect elimination, structural verification, and major asset governance.
          </p>
        </div>
      </section>

      {/* Project Experience Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="ENGINEERING CASE FILES"
          heading="Featured Representative Engagements"
          subtext="Detailed breakdowns of technical challenges, diagnostic methodologies, and quantifiable outcomes."
          className="animate-slide-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SITE_CONTENT.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner
          title="Require a confidential technical review of your asset?"
          subtext="Contact Burhill's senior directors for an independent preliminary assessment."
        />
      </section>

    </div>
  );
}
