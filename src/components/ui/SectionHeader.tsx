import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  subtext,
  centered = false,
  dark = false,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase font-semibold text-gold">
          <span className="inline-block w-2 h-2 bg-gold"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};
