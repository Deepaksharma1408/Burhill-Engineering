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
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border transition-all duration-300 ease-out hover:-translate-y-1.5 ${
        featured
          ? 'bg-navy-dark border-gold text-white shadow-xl hover:border-gold-light hover:shadow-gold/10'
          : 'bg-white border-slate-border text-navy hover:border-navy hover:shadow-xl'
      }`}
    >
      <div className="space-y-4">
        {/* Header Icon + Number Tag */}
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded border ${featured ? 'bg-navy border-gold text-gold group-hover:scale-110' : 'bg-slate-bg border-slate-border text-navy group-hover:border-gold group-hover:text-gold group-hover:scale-110'} transition-all duration-300`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded border ${featured ? 'border-navy-border bg-navy text-gold' : 'border-slate-border bg-slate-bg text-slate-muted group-hover:border-gold/40'} transition-colors`}>
            PILLAR #{service.id.slice(0, 8)}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-serif font-bold ${featured ? 'text-white' : 'text-navy group-hover:text-gold'} transition-colors duration-200`}>
          {service.title}
        </h3>

        {/* Short Description */}
        <p className={`text-sm leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
          {service.shortDesc}
        </p>

        {/* Expandable Section if enabled */}
        {expandable && (
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isExpanded ? 'max-h-96 opacity-100 pt-4 border-t border-slate-border/20 space-y-3' : 'max-h-0 opacity-0'
            }`}
          >
            <p className={`text-xs leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-700'}`}>
              {service.fullDesc}
            </p>
            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-gold block">
                Key Engineering Deliverables:
              </span>
              <ul className="space-y-1">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className={`text-xs flex items-start space-x-2 ${featured ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="text-gold font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Actions */}
      <div className="pt-6 mt-6 border-t border-slate-border/30 flex items-center justify-between">
        {expandable ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-xs font-mono font-semibold uppercase tracking-wider flex items-center space-x-1 ${
              featured ? 'text-gold hover:text-white' : 'text-navy hover:text-gold'
            } transition-colors`}
          >
            <span>{isExpanded ? 'Collapse Details' : 'Expand Scope'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
          </button>
        ) : (
          <Link
            href={`/services#${service.slug}`}
            className={`text-xs font-mono font-semibold uppercase tracking-wider flex items-center space-x-1.5 ${
              featured ? 'text-gold hover:text-white' : 'text-navy hover:text-gold'
            } transition-colors`}
          >
            <span>Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        )}

        <div className="flex space-x-1">
          {service.sectors.map((sec, i) => (
            <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-light/10 text-slate-muted group-hover:text-navy transition-colors">
              {sec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
