import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TechnicalGridOverlay } from '@/components/ui/TechnicalGridOverlay';

export const metadata = {
  title: "Services & Engineering Pillars",
  description: "Explore Burhill Engineering Partners' 8 core service pillars across forensic engineering, due diligence, governance, risk management, and surveillance.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">

      {/* Hero Banner with Slide-Up Entrance */}
      <section className="bg-navy text-white py-16 border-b border-navy-border relative overflow-hidden">
        <TechnicalGridOverlay dark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 animate-slide-up">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold uppercase tracking-widest bg-navy-dark px-3 py-1 rounded border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-subtle"></span>
            <span>PRACTICE CAPABILITIES // MODULAR FRAMEWORK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Specialist Services & Engineering Pillars
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Burhill provides director-led technical governance across eight specialized service pillars. Every scope is tailored to safeguard asset value, de-risk delivery, and resolve structural complexity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="COMPLETE SERVICE SCOPE"
          heading="Modular Engineering Scope"
          subtext="Select any service pillar to view detailed deliverables, regulatory standards compliance, and sector applications."
          className="animate-slide-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONTENT.services.map((service, idx) => (
            <div id={service.slug} key={service.id} className="scroll-mt-24">
              <ServiceCard
                service={service}
                expandable={true}
                featured={idx === 0 || idx === 7}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Technical Standards & Governance Framework */}
      <section className="bg-slate-bg py-16 border-y border-slate-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeader
            eyebrow="REGULATORY & QUALITY ALIGNMENT"
            heading="Engineered to Legal & Australian Standards Specifications"
            subtext="Our engineers strictly align all deliverables with statutory frameworks and technical codes."
            className="animate-slide-up"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-border space-y-3 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up">
              <div className="text-xs font-mono font-bold text-gold uppercase">STANDARDS COMPLIANCE</div>
              <h3 className="text-lg font-serif font-bold text-navy">AS 3600 & AS 5100</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full adherence to Concrete Structures (AS 3600) and Bridge Design (AS 5100) codes for structural design verification, crack width modeling, and durability testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-border space-y-3 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up delay-100">
              <div className="text-xs font-mono font-bold text-gold uppercase">LEGAL PROCEDURES</div>
              <h3 className="text-lg font-serif font-bold text-navy">Federal Court CPR 35</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Forensic expert witness reports prepared in compliance with Federal Court and Supreme Court Expert Witness Codes of Conduct.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-border space-y-3 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up delay-200">
              <div className="text-xs font-mono font-bold text-gold uppercase">NSW REGULATION</div>
              <h3 className="text-lg font-serif font-bold text-navy">DBP Act 2020 Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered Design Practitioner & Principal Design Practitioner support under the NSW Design and Building Practitioners Act 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner
          title="Require a customized engineering scope of work?"
          subtext="Contact our directors to scope technical advisory, surveillance, or forensic expert appointments for your asset."
        />
      </section>

    </div>
  );
}
