import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/data/content';
import { BlueprintGraphic } from './BlueprintGraphic';
import { ArrowRight, MapPin, Tag } from 'lucide-react';

interface ProjectCardProps {
  project: CaseStudy;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white border border-slate-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-gold hover:shadow-xl transition-all duration-300">
      {/* Blueprint Visual Header */}
      <div className="relative border-b border-slate-border bg-navy-dark overflow-hidden">
        <BlueprintGraphic type={project.blueprintType} className="max-h-[180px]" />
        <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur border border-gold/40 text-gold text-[10px] font-mono px-2.5 py-1 rounded">
          {project.sector}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>{project.location}</span>
            </span>
            <span className="truncate max-w-[160px] text-right">{project.clientType}</span>
          </div>

          <h3 className="text-lg font-serif font-bold text-navy group-hover:text-gold transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-bg p-2 rounded text-center border border-slate-border/50">
              <div className="text-xs font-mono font-bold text-navy">{m.value}</div>
              <div className="text-[9px] text-slate-500 font-mono uppercase truncate">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-slate-bg/60 border-t border-slate-border flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 uppercase">Case Study File #{project.id}</span>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-mono font-semibold uppercase text-navy group-hover:text-gold flex items-center space-x-1 transition-colors"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
