import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data governance standards for Burhill Engineering Partners Pty Ltd.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="bg-navy text-white py-12 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-2">
          <div className="text-xs font-mono text-gold uppercase font-bold">LEGAL & GOVERNANCE</div>
          <h1 className="text-3xl font-serif font-bold text-white">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-300">Effective Date: August 2026 | Burhill Engineering Partners Pty Ltd</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <div className="bg-slate-bg p-4 rounded border border-slate-border font-mono text-xs text-navy">
          This Privacy Policy outlines how Burhill Engineering Partners Pty Ltd ("Burhill", "we", "us") collects, uses, protects, and manages confidential client information and website user data in compliance with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
        </div>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">1. Collection of Client & Technical Information</h2>
        <p>
          In the course of providing forensic engineering, expert witness testimony, and technical due diligence services, Burhill collects personal and organizational details including names, corporate contact details, position titles, project specifications, and structural diagnostic files provided directly by clients.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">2. Confidentiality & Project File Security</h2>
        <p>
          Given the high-consequence nature of major infrastructure and court expert witness engagements, all project data and technical reports are held under strict commercial confidentiality protocols. We do not sell, rent, or trade client information to third parties.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">3. Website Telemetry & Technical Analytics</h2>
        <p>
          Our website collects anonymized server logs (IP address, browser type, pages visited) solely to monitor system security, performance, and regional user engagement.
        </p>

        <h2 className="text-lg font-serif font-bold text-navy pt-2">4. Contact Information</h2>
        <p>
          For inquiries regarding our privacy practices or data access requests, contact our Sydney office:
          <br />
          <strong className="text-navy font-mono">Burhill Engineering Partners Pty Ltd</strong>
          <br />
          Level 28, 175 Liverpool Street, Sydney NSW 2000
          <br />
          Email: <a href={`mailto:${SITE_CONTENT.company.email}`} className="text-gold underline">{SITE_CONTENT.company.email}</a>
        </p>
      </section>
    </div>
  );
}
