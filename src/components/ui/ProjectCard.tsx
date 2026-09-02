import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/data/content';
import { BlueprintGraphic } from './BlueprintGraphic';
import { ArrowRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: CaseStudy;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white border border-slate-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-gold hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up">
      {/* Blueprint Visual Header with Smooth Hover Scale */}
      <div className="relative border-b border-slate-border bg-navy-dark overflow-hidden">
        <div className="transform group-hover:scale-105 transition-transform duration-700 ease-out">
          <BlueprintGraphic type={project.blueprintType} className="max-h-[180px]" />
        </div>
        <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur border border-gold/40 text-gold text-[10px] font-mono px-2.5 py-1 rounded shadow-md font-semibold">
          {project.sector}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-gold animate-pulse-subtle" />
              <span>{project.location}</span>
            </span>
            <span className="truncate max-w-[160px] text-right font-medium">{project.clientType}</span>
          </div>

          <h3 className="text-lg font-serif font-bold text-navy group-hover:text-gold transition-colors duration-200 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-bg p-2 rounded text-center border border-slate-border/50 group-hover:border-gold/30 group-hover:bg-navy/5 transition-all duration-300">
              <div className="text-xs font-mono font-bold text-navy group-hover:text-gold transition-colors">{m.value}</div>
              <div className="text-[9px] text-slate-500 font-mono uppercase truncate">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-slate-bg/60 border-t border-slate-border flex items-center justify-between group-hover:bg-navy-dark group-hover:text-white transition-colors duration-300">
        <span className="text-[11px] font-mono text-slate-500 group-hover:text-gold uppercase transition-colors">Case Study File #{project.id}</span>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-mono font-semibold uppercase text-navy group-hover:text-gold flex items-center space-x-1.5 transition-colors"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};
