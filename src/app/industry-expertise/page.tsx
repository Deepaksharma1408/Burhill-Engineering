import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTABanner } from '@/components/ui/CTABanner';
import { BlueprintGraphic } from '@/components/ui/BlueprintGraphic';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Industry Expertise & Sector Practice",
  description: "Specialized construction engineering advisory across major Australian infrastructure, hyperscale data centres, specialist civil works, and built environment.",
};

export default function IndustryExpertisePage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span>TARGET ASSET CLASSES // HIGH-CONSEQUENCE INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Industry Expertise & Sector Breakdown
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Burhill brings senior director experience across critical infrastructure sectors where technical complexity, high capital risk, and strict statutory compliance converge.
          </p>
        </div>
      </section>

      {/* Detailed Sector Breakdown Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SITE_CONTENT.sectors.map((sector, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={sector.id}
              id={sector.slug}
              className="bg-white border border-slate-border rounded-xl overflow-hidden shadow-sm hover:border-gold transition-all duration-300 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Left Sector Visual / Diagram */}
                <div className={`lg:col-span-5 bg-navy-dark p-6 sm:p-8 flex flex-col justify-between relative border-b lg:border-b-0 ${isEven ? 'lg:border-r' : 'lg:order-last lg:border-l'} border-navy-border`}>
                  <TechnicalGridOverlay dark />
                  <div className="relative z-10 space-y-4">
                    <div className="text-[10px] font-mono text-gold uppercase tracking-widest">
                      SECTOR CODE // SEC-0{index + 1}
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-white">
                      {sector.title}
                    </h2>
                    <p className="text-xs font-mono text-slate-300 italic">
                      "{sector.tagline}"
                    </p>
                  </div>

                  <div className="relative z-10 my-6">
                    <BlueprintGraphic
                      type={index === 0 ? 'tunnel' : index === 1 ? 'datacenter' : index === 2 ? 'bridge' : 'foundation'}
                    />
                  </div>

                  <div className="relative z-10 pt-4 border-t border-navy-border flex items-center justify-between text-xs font-mono text-gold">
                    <span>{sector.featuredProjectsCount} Representative Engagements</span>
                    <Link href="/projects" className="hover:underline flex items-center space-x-1">
                      <span>View Projects</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Right Sector Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {sector.summary}
                  </p>

                  {/* Key Challenges Solved */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-navy tracking-wider flex items-center space-x-1.5">
                      <AlertCircle className="w-4 h-4 text-gold" />
                      <span>Key Technical Challenges Addressed:</span>
                    </span>
                    <ul className="space-y-2">
                      {sector.keyChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-600 flex items-start space-x-2 bg-slate-bg p-2.5 rounded border border-slate-border/60">
                          <span className="text-gold font-bold">›</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Value Add */}
                  <div className="p-4 bg-navy-dark text-white rounded-lg border border-gold/30 space-y-1">
                    <div className="text-[10px] font-mono text-gold uppercase font-bold">BURHILL TECHNICAL VALUE PROPOSITION</div>
                    <p className="text-xs text-slate-200 font-sans leading-relaxed">
                      {sector.ourValue}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-navy text-white hover:bg-gold hover:text-navy-dark font-mono text-xs font-bold px-5 py-2.5 rounded transition-colors"
                    >
                      <span>Discuss {sector.title} Engagement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Pre-Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner
          title="Looking for sector-specific engineering governance?"
          subtext="Our directors bring direct Tier 1 experience in infrastructure, data centres, and civil works."
        />
      </section>

    </div>
  );
}
