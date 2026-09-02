import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';

export const metadata = {
  title: "Engineering Insights & Technical Papers",
  description: "Technical articles, forensic failure analyses, and governance papers published by Burhill Engineering Partners' directors.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span>TECHNICAL THOUGHT LEADERSHIP // FORENSIC PAPERS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Engineering Insights & Advisory Briefings
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Evidence-based papers addressing structural failure mechanics, quality governance, delay forensics, and mission-critical data centre delivery.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="PUBLISHED ADVISORY ARTICLES"
          heading="Forensic & Governance Publications"
          subtext="Written directly by our directors and principal consultants."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.insights.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner
          title="Subscribe to Director-Led Technical Briefings"
          subtext="Contact our office to receive quarterly forensic engineering and governance updates."
        />
      </section>

    </div>
  );
}
