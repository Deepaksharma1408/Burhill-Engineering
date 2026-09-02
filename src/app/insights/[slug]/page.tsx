import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONTENT } from '@/data/content';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { CTABanner } from '@/components/ui/CTABanner';
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, Bookmark, Share2 } from 'lucide-react';

interface InsightArticleDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONTENT.insights.map((a) => ({
    slug: a.slug,
  }));
}

export default async function InsightArticleDetail({ params }: InsightArticleDetailProps) {
  const resolvedParams = await params;
  const article = SITE_CONTENT.insights.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Find author profile if available
  const authorProfile = SITE_CONTENT.directors.find(d => d.name === article.author);

  return (
    <div className="space-y-12 sm:space-y-16 py-8">

      {/* Top Article Header */}
      <section className="bg-navy text-white py-12 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights & Technical Papers</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1 bg-navy-dark text-gold border border-gold/30 rounded font-semibold uppercase">
                {article.category}
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center space-x-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">{article.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-gold text-navy-dark font-serif font-bold text-sm flex items-center justify-center border border-white">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{article.author}</div>
                <div className="text-xs text-gold font-mono">{article.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Layout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Executive Excerpt Box */}
        <div className="bg-slate-bg border-l-4 border-gold p-6 rounded-r-lg space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-navy">EXECUTIVE BRIEFING SUMMARY</span>
          <p className="text-base text-slate-800 font-serif italic leading-relaxed">
            "{article.excerpt}"
          </p>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed font-sans text-base">
          {article.contentParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Key Takeaways Technical Box */}
        <div className="bg-navy-dark text-white border border-gold/40 rounded-xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-gold" />
            <span>KEY ADVISORY TAKEAWAYS FOR ASSET DIRECTORS</span>
          </div>

          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, tIdx) => (
              <li key={tIdx} className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Author Bio Card */}
        {authorProfile && (
          <div className="bg-white border border-slate-border rounded-lg p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-16 h-16 rounded-full bg-navy text-gold font-serif text-2xl font-bold flex items-center justify-center shrink-0 border-2 border-gold">
              {authorProfile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-gold font-bold block">ABOUT THE AUTHOR</span>
              <h3 className="text-lg font-serif font-bold text-navy">{authorProfile.name}</h3>
              <p className="text-xs font-mono text-slate-500">{authorProfile.credentials}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{authorProfile.bio}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <CTABanner
          title="Discuss these technical principles with our team"
          subtext="Contact Burhill Engineering Partners to arrange an executive technical briefing."
        />

      </section>

    </div>
  );
}
