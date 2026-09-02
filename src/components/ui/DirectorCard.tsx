import React from 'react';
import { DirectorProfile } from '@/data/content';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

interface DirectorCardProps {
  director: DirectorProfile;
}

export const DirectorCard: React.FC<DirectorCardProps> = ({ director }) => {
  return (
    <div className="group bg-white border border-slate-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-gold hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up">
      {/* Top Banner & Photo Placeholder */}
      <div className="bg-navy-dark p-6 text-white relative border-b border-navy-border group-hover:bg-navy transition-colors duration-300">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-semibold block">
              DIRECTOR // PRINCIPAL CONSULTANT
            </span>
            <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
              {director.name}
            </h3>
            <p className="text-xs text-gold font-mono font-medium">
              {director.title}
            </p>
          </div>

          {/* SVG Initials Avatar Placeholder */}
          <div className="w-16 h-16 rounded border-2 border-gold bg-navy flex items-center justify-center text-gold font-serif text-2xl font-bold shadow-inner group-hover:scale-105 transition-transform duration-300">
            {director.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Credentials Pill */}
        <div className="mt-4 pt-3 border-t border-navy-border flex items-center space-x-2 text-xs font-mono text-slate-300">
          <Award className="w-4 h-4 text-gold shrink-0 animate-pulse-subtle" />
          <span className="truncate">{director.credentials}</span>
        </div>
      </div>

      {/* Bio & Experience Details */}
      <div className="p-6 space-y-4 flex-1">
        <div className="flex items-center space-x-2 text-xs font-mono text-navy bg-slate-bg px-3 py-1.5 rounded border border-slate-border w-fit group-hover:border-gold/30 transition-colors">
          <Briefcase className="w-3.5 h-3.5 text-gold" />
          <span>{director.experienceYears}+ Years Major Infrastructure Experience</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {director.bio}
        </p>

        {/* Key Areas of Specialisation */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-mono font-semibold uppercase text-gold tracking-wider block">
            Core Areas of Practice:
          </span>
          <div className="space-y-1.5">
            {director.specialisations.map((spec, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-navy font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer stamp */}
      <div className="px-6 py-3 bg-slate-bg border-t border-slate-border flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:bg-navy-dark group-hover:text-slate-300 transition-colors duration-300">
        <span>SYDNEY CBD PRACTICE</span>
        <span className="text-gold font-bold">VERIFIED CREDENTIALS</span>
      </div>
    </div>
  );
};
