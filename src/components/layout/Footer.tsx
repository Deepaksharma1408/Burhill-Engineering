import React from 'react';
import Link from 'next/link';
import { SITE_CONTENT } from '@/data/content';
import { MapPin, Phone, Mail, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white border-t border-navy-border relative overflow-hidden">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-navy border-2 border-gold rounded flex items-center justify-center text-gold font-serif text-xl font-bold">
                BEP
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight block leading-tight">
                  BURHILL ENGINEERING PARTNERS
                </span>
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block">
                  {SITE_CONTENT.company.subtext}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {SITE_CONTENT.company.tagline} Director-led forensic engineering, technical due diligence, quality governance, and structural risk advisory for major Australian infrastructure, hyperscale data centres, and specialist civil works.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-gold bg-navy/60 px-3 py-2 rounded border border-navy-border w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-gold" />
              <span>Independent Technical Governance // Sydney Practice</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold border-b border-navy-border pb-2">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {SITE_CONTENT.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-gold transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-gold font-bold">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold border-b border-navy-border pb-2">
              Service Pillars
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {SITE_CONTENT.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-300 hover:text-gold transition-colors truncate block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-gold hover:underline text-[11px] font-bold block pt-1">
                  View All 8 Pillars →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold border-b border-navy-border pb-2">
              Sydney Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SITE_CONTENT.company.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${SITE_CONTENT.company.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold">
                  {SITE_CONTENT.company.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${SITE_CONTENT.company.email}`} className="hover:text-gold">
                  {SITE_CONTENT.company.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{SITE_CONTENT.officeDetails.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Footer Disclaimer Banner */}
        <div className="mt-12 pt-6 border-t border-navy-border/60 bg-navy/40 p-4 rounded border border-gold/20 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
            <strong className="text-gold font-semibold uppercase">Legal Disclaimer: </strong>
            {SITE_CONTENT.company.disclaimer} Formal engineering engagements, site surveillance, and forensic expert witness appointments require a signed terms of engagement agreement with Burhill Engineering Partners Pty Ltd.
          </p>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="bg-navy border-t border-navy-border/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Burhill Engineering Partners Pty Ltd. All rights reserved. ABN 84 921 408 192.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
