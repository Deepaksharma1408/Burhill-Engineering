'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServicePillar } from '@/data/content';
import { Compass, ShieldCheck, FileCheck, TrendingUp, Eye, Layers, FileText, Server, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Eye,
  Layers,
  FileText,
  Server,
};

interface ServiceCardProps {
  service: ServicePillar;
  expandable?: boolean;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  expandable = false,
  featured = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = ICON_MAP[service.iconName] || Compass;

  return (
    <div
      className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-lg border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 ${
        featured
          ? 'bg-navy-dark border-gold text-white shadow-lg hover:border-gold-light hover:shadow-gold/10'
          : 'bg-white border-slate-border text-navy hover:border-navy hover:shadow-lg'
      }`}
    >
      <div className="space-y-3">
        {/* Header Icon + Clean Pillar Tag */}
        <div className="flex items-center justify-between">
          <div className={`p-2.5 rounded border ${featured ? 'bg-navy border-gold text-gold group-hover:scale-105' : 'bg-slate-bg border-slate-border text-navy group-hover:border-gold group-hover:text-gold group-hover:scale-105'} transition-all duration-300`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${featured ? 'border-navy-border bg-navy text-gold' : 'border-slate-border bg-slate-bg text-slate-600 group-hover:border-gold/40'} transition-colors`}>
            Pillar Scope
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-serif font-bold ${featured ? 'text-white' : 'text-navy group-hover:text-gold'} transition-colors duration-200 leading-snug`}>
          {service.title}
        </h3>

        {/* Short Description */}
        <p className={`text-xs leading-relaxed line-clamp-3 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
          {service.shortDesc}
        </p>

        {/* Sector Application Badges */}
        <div className="flex flex-wrap items-center gap-1 pt-1">
          {service.sectors.map((sec, i) => (
            <span
              key={i}
              className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-colors ${
                featured
                  ? 'bg-navy/80 border-navy-border text-gold'
                  : 'bg-slate-bg border-slate-border/80 text-slate-600 group-hover:border-gold/30'
              }`}
            >
              {sec}
            </span>
          ))}
        </div>

        {/* Expandable Section if enabled */}
        {expandable && (
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isExpanded ? 'max-h-96 opacity-100 pt-3 border-t border-slate-border/20 space-y-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className={`text-xs leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-700'}`}>
              {service.fullDesc}
            </p>
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-gold block">
                Key Engineering Deliverables:
              </span>
              <ul className="space-y-1">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className={`text-xs flex items-start space-x-1.5 ${featured ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="text-gold font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Compact Action Footer */}
      <div className="pt-3 mt-4 border-t border-slate-border/30 flex items-center justify-between">
        {expandable ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-xs font-mono font-semibold uppercase tracking-wider flex items-center space-x-1 ${
              featured ? 'text-gold hover:text-white' : 'text-navy hover:text-gold'
            } transition-colors`}
          >
            <span>{isExpanded ? 'Collapse Details' : 'Expand Scope'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 transition-transform" /> : <ChevronDown className="w-3.5 h-3.5 transition-transform" />}
          </button>
        ) : (
          <Link
            href={`/services#${service.slug}`}
            className={`text-xs font-mono font-semibold uppercase tracking-wider flex items-center space-x-1.5 ${
              featured ? 'text-gold hover:text-white' : 'text-navy hover:text-gold'
            } transition-colors`}
          >
            <span>Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
    </div>
  );
};
