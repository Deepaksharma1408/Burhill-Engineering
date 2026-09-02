import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONTENT } from '@/data/content';
import { BlueprintGraphic } from '@/components/ui/BlueprintGraphic';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { CTABanner } from '@/components/ui/CTABanner';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONTENT.projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = SITE_CONTENT.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 sm:space-y-16 py-8">

      {/* Top Header & Breadcrumb */}
      <section className="bg-navy text-white py-12 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 animate-slide-up">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-navy-dark text-gold border border-gold/30 rounded font-semibold">
                {project.sector}
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center space-x-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-gold animate-pulse-subtle" />
                <span>{project.location}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm font-mono text-slate-300">
              CLIENT ENGAGEMENT: <span className="text-gold font-bold">{project.clientType}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-navy-dark p-6 rounded-xl border border-navy-border animate-slide-up">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center p-4 bg-navy rounded border border-gold/20 hover:border-gold/50 transition-all hover:-translate-y-1 space-y-1">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-gold">{m.value}</div>
              <div className="text-xs font-mono text-slate-300 uppercase">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Blueprint Visual Panel */}
        <div className="bg-navy-dark rounded-xl border border-navy-border p-6 shadow-xl space-y-2 animate-slide-up">
          <div className="text-xs font-mono text-gold uppercase tracking-wider flex items-center justify-between border-b border-navy-border pb-2">
            <span>CAD TECHNICAL DIAGNOSTIC DIAGRAM // REF: #{project.id}</span>
            <span className="text-[10px] text-slate-400">AUDITED ENGAGEMENT</span>
          </div>
          <BlueprintGraphic type={project.blueprintType} className="max-h-[300px]" />
        </div>

        {/* Challenge / Approach / Outcome Breakdown */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* Challenge Box */}
          <div className="bg-white border border-slate-border rounded-lg p-6 sm:p-8 space-y-3 hover:border-gold hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-red-700 uppercase bg-red-50 px-3 py-1 rounded w-fit border border-red-200">
              <span>01 // THE TECHNICAL CHALLENGE</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-navy">
              Complex Engineering & Operational Constraint
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Approach Box */}
          <div className="bg-white border border-slate-border rounded-lg p-6 sm:p-8 space-y-3 hover:border-gold hover:shadow-xl transition-all duration-300 animate-slide-up delay-100">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-navy uppercase bg-slate-bg px-3 py-1 rounded w-fit border border-slate-border">
              <span>02 // BURHILL ENGINEERING APPROACH</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-navy">
              Diagnostic Investigation & Technical Intervention
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.approach}
            </p>

            {/* Technical Keypoints */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-gold">Specific Methodologies Employed:</span>
              <ul className="space-y-2">
                {project.technicalKeypoints.map((kp, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start space-x-2 bg-slate-bg p-2.5 rounded border border-slate-border hover:border-gold/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome Box */}
          <div className="bg-navy-dark text-white border border-gold/40 rounded-lg p-6 sm:p-8 space-y-3 shadow-xl hover:border-gold transition-all duration-300 animate-slide-up delay-200">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-navy uppercase bg-gold px-3 py-1 rounded w-fit">
              <span>03 // DEFINITIVE TECHNICAL OUTCOME</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              De-Risked Asset & Formal Compliance Sign-off
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.outcome}
            </p>
          </div>

        </div>

        {/* CTABanner */}
        <CTABanner
          title={`Facing a similar challenge in ${project.sector}?`}
          subtext="Engage Burhill's senior directors for an independent technical review."
        />

      </section>

    </div>
  );
}
