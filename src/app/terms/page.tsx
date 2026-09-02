import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use and general website disclaimer for Burhill Engineering Partners Pty Ltd.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="bg-navy text-white py-12 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-2">
          <div className="text-xs font-mono text-gold uppercase font-bold">LEGAL & GOVERNANCE</div>
          <h1 className="text-3xl font-serif font-bold text-white">Terms of Use</h1>
          <p className="text-xs font-mono text-slate-300">Effective Date: August 2026 | Burhill Engineering Partners Pty Ltd</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <div className="bg-navy-dark text-white p-4 rounded border border-gold/30 font-mono text-xs">
          <strong className="text-gold uppercase block mb-1">GENERAL INFORMATIONAL NOTICE:</strong>
          Website content is published for general informational reference only. Formal engineering, site surveillance, and court expert witness engagements require a signed, written agreement with Burhill Engineering Partners Pty Ltd.
        </div>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or browsing this website, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, you must discontinue use of this website immediately.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">2. Engineering & Legal Advice Disclaimer</h2>
        <p>
          The articles, case studies, technical pillars, and calculations shown on this site are indicative and simplified for presentation. They do not constitute formal engineering design advice, legal counsel, or statutory certification for any specific construction site or asset.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">3. Intellectual Property Rights</h2>
        <p>
          All content, trade names, logo marks ("BURHILL", "BEP"), vector diagrams, and proprietary methodologies presented on this website remain the exclusive intellectual property of Burhill Engineering Partners Pty Ltd.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">4. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of the State of New South Wales and the Commonwealth of Australia.
        </p>
      </section>
    </div>
  );
}
