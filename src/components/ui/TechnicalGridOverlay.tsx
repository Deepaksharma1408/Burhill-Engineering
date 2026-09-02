import React from 'react';

interface TechnicalGridOverlayProps {
  dark?: boolean;
  className?: string;
}

export const TechnicalGridOverlay: React.FC<TechnicalGridOverlayProps> = ({
  dark = false,
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        dark ? 'bg-dark-cad-pattern opacity-60' : 'bg-cad-pattern opacity-70'
      } ${className}`}
    >
      {/* Corner Technical Crosshairs */}
      <div className="absolute top-4 left-4 flex items-center space-x-1 font-mono text-[10px] tracking-widest uppercase opacity-40 text-navy dark:text-gold">
        <span className="inline-block w-2 h-2 border-t border-l border-current"></span>
        <span>SYS.CAD // 33.8768°S 151.2096°E</span>
      </div>
      
      <div className="absolute top-4 right-4 flex items-center space-x-1 font-mono text-[10px] tracking-widest uppercase opacity-40 text-navy dark:text-gold">
        <span>GRID: BUR-SYS-01</span>
        <span className="inline-block w-2 h-2 border-t border-r border-current"></span>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center space-x-1 font-mono text-[10px] tracking-widest uppercase opacity-40 text-navy dark:text-gold">
        <span className="inline-block w-2 h-2 border-b border-l border-current"></span>
        <span>VERIFIED TECHNICAL DIAGNOSTIC</span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-1 font-mono text-[10px] tracking-widest uppercase opacity-40 text-navy dark:text-gold">
        <span>BURHILL PARTNERS</span>
        <span className="inline-block w-2 h-2 border-b border-r border-current"></span>
      </div>
    </div>
  );
};
