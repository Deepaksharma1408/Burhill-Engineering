import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { TechnicalGridOverlay } from './TechnicalGridOverlay';

interface CTABannerProps {
  title?: string;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to engage director-led technical expertise?",
  subtext = "Contact our Sydney engineering partners for expert witness, forensic review, or major asset advisory.",
  primaryCtaText = "Request a Confidential Consultation",
  primaryCtaHref = "/contact",
}) => {
  return (
    <section className="relative bg-navy-dark text-white rounded-xl border border-navy-border overflow-hidden p-8 sm:p-12 shadow-2xl">
      <TechnicalGridOverlay dark />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-gold uppercase tracking-widest bg-navy px-3.5 py-1.5 rounded-full border border-gold/30">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span>Director-Led Advisory // Sydney CBD Office</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-7 py-3.5 rounded shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 font-sans text-sm"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${SITE_CONTENT.company.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-navy hover:bg-navy-light text-white font-medium px-6 py-3.5 rounded border border-navy-border transition-colors font-mono text-xs"
          >
            <PhoneCall className="w-4 h-4 text-gold" />
            <span>{SITE_CONTENT.company.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
