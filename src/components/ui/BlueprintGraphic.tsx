import React from 'react';

interface BlueprintGraphicProps {
  type?: 'hero' | 'tunnel' | 'datacenter' | 'bridge' | 'foundation';
  className?: string;
}

export const BlueprintGraphic: React.FC<BlueprintGraphicProps> = ({
  type = 'hero',
  className = "",
}) => {
  if (type === 'hero') {
    return (
      <div className={`relative w-full h-full min-h-[340px] flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 600 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-[560px] drop-shadow-2xl opacity-90"
        >
          {/* Blueprint Background Grid */}
          <rect width="600" height="480" fill="#121C33" rx="8" />
          <path d="M0 60H600 M0 120H600 M0 180H600 M0 240H600 M0 300H600 M0 360H600 M0 420H600" stroke="#1F2E4F" strokeWidth="1" />
          <path d="M60 0V480 M120 0V480 M180 0V480 M240 0V480 M300 0V480 M360 0V480 M420 0V480 M480 0V480 M540 0V480" stroke="#1F2E4F" strokeWidth="1" />

          {/* Isometric Structural Beam Grid */}
          <g stroke="#B58A43" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8">
            <path d="M100 360 L300 460 L500 360 L300 260 Z" fill="rgba(181, 138, 67, 0.05)" />
            <path d="M100 260 L300 360 L500 260 L300 160 Z" fill="rgba(181, 138, 67, 0.08)" />
            <path d="M100 160 L300 260 L500 160 L300 60 Z" fill="rgba(181, 138, 67, 0.12)" />
          </g>

          {/* Vertical Columns */}
          <g stroke="#D4AF37" strokeWidth="2">
            <line x1="100" y1="360" x2="100" y2="160" />
            <line x1="300" y1="460" x2="300" y2="260" />
            <line x1="500" y1="360" x2="500" y2="160" />
            <line x1="300" y1="260" x2="300" y2="60" />
          </g>

          {/* Core Foundation Shafts */}
          <g stroke="#4B6A9B" strokeWidth="1.5" strokeDasharray="3 3">
            <line x1="180" y1="400" x2="180" y2="200" />
            <line x1="420" y1="400" x2="420" y2="200" />
          </g>

          {/* Dimension Lines & Technical Annotations */}
          <g stroke="#B58A43" strokeWidth="1">
            {/* Horizontal Span Arrow */}
            <line x1="100" y1="440" x2="500" y2="440" />
            <line x1="100" y1="435" x2="100" y2="445" />
            <line x1="500" y1="435" x2="500" y2="445" />

            {/* Vertical Height Arrow */}
            <line x1="540" y1="60" x2="540" y2="360" />
            <line x1="535" y1="60" x2="545" y2="60" />
            <line x1="535" y1="360" x2="545" y2="360" />
          </g>

          {/* CAD Labels */}
          <text x="300" y="432" fill="#D4AF37" fontSize="11" fontFamily="monospace" textAnchor="middle">PRIMARY SPAN = 48.00m [ALLOWABLE DEFLECTION ≤ L/500]</text>
          <text x="555" y="210" fill="#B58A43" fontSize="11" fontFamily="monospace" textAnchor="middle" transform="rotate(90, 555, 210)">H = 30.00m (AXIAL LOAD 14.5MN)</text>

          {/* Forensic Target Crosshair */}
          <circle cx="300" cy="260" r="18" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 2" fill="rgba(212, 175, 55, 0.15)" />
          <circle cx="300" cy="260" r="4" fill="#D4AF37" />
          <line x1="300" y1="235" x2="300" y2="285" stroke="#D4AF37" strokeWidth="1" />
          <line x1="275" y1="260" x2="325" y2="260" stroke="#D4AF37" strokeWidth="1" />

          {/* Callout Box */}
          <rect x="40" y="45" width="180" height="42" fill="#1F2E4F" stroke="#B58A43" strokeWidth="1" rx="4" />
          <text x="50" y="62" fill="#D4AF37" fontSize="10" fontFamily="monospace" fontWeight="bold">STRUCTURAL CAD REF</text>
          <text x="50" y="78" fill="#E2E7F0" fontSize="10" fontFamily="monospace">POST-TENSIONED AXIAL DEEP CORE</text>
        </svg>
      </div>
    );
  }

  if (type === 'tunnel') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-navy-dark rounded-lg border border-navy-border p-4 flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[360px]">
          <rect width="400" height="240" fill="#121C33" />
          {/* Tunnel Ring */}
          <circle cx="200" cy="120" r="80" stroke="#B58A43" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="200" cy="120" r="68" stroke="#1F2E4F" strokeWidth="12" />
          <circle cx="200" cy="120" r="62" stroke="#4B6A9B" strokeWidth="1" />

          {/* Substrata geological vectors */}
          <line x1="20" y1="40" x2="380" y2="40" stroke="#2C3E66" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#2C3E66" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Geotechnical Anchors */}
          <line x1="200" y1="40" x2="200" y2="58" stroke="#D4AF37" strokeWidth="2" />
          <line x1="120" y1="120" x2="138" y2="120" stroke="#D4AF37" strokeWidth="2" />
          <line x1="280" y1="120" x2="262" y2="120" stroke="#D4AF37" strokeWidth="2" />

          <text x="200" y="124" fill="#D4AF37" fontSize="10" fontFamily="monospace" textAnchor="middle">TBM TUNNEL DIA = 12.4m</text>
          <text x="200" y="222" fill="#8F6B2E" fontSize="9" fontFamily="monospace" textAnchor="middle">SUBTERRANEAN STRAIN SENSORS ACTIVE</text>
        </svg>
      </div>
    );
  }

  if (type === 'datacenter') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-navy-dark rounded-lg border border-navy-border p-4 flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[360px]">
          <rect width="400" height="240" fill="#121C33" />
          {/* Server Slab & Raised Floor Grid */}
          <rect x="40" y="160" width="320" height="30" fill="#1F2E4F" stroke="#B58A43" strokeWidth="1.5" />
          <line x1="40" y1="175" x2="360" y2="175" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 2" />

          {/* Server Rack Frames */}
          <rect x="60" y="60" width="60" height="100" fill="none" stroke="#4B6A9B" strokeWidth="1.5" />
          <rect x="140" y="60" width="60" height="100" fill="none" stroke="#4B6A9B" strokeWidth="1.5" />
          <rect x="220" y="60" width="60" height="100" fill="none" stroke="#4B6A9B" strokeWidth="1.5" />
          <rect x="300" y="60" width="40" height="100" fill="none" stroke="#4B6A9B" strokeWidth="1.5" />

          {/* Floor Vibration Isolators */}
          <circle cx="90" cy="160" r="4" fill="#D4AF37" />
          <circle cx="170" cy="160" r="4" fill="#D4AF37" />
          <circle cx="250" cy="160" r="4" fill="#D4AF37" />

          <text x="200" y="210" fill="#D4AF37" fontSize="10" fontFamily="monospace" textAnchor="middle">SUPERFLAT SLAB TOLERANCE: FF 58 / FL 38</text>
        </svg>
      </div>
    );
  }

  // Fallback / Bridge / Foundation
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-navy-dark rounded-lg border border-navy-border p-4 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[360px]">
        <rect width="400" height="240" fill="#121C33" />
        {/* Pier Box Girder */}
        <polygon points="40,160 200,40 360,160" fill="none" stroke="#B58A43" strokeWidth="2" />
        <line x1="40" y1="160" x2="360" y2="160" stroke="#D4AF37" strokeWidth="2" />
        <line x1="200" y1="40" x2="200" y2="160" stroke="#4B6A9B" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Tendon Trajectory */}
        <path d="M40 140 Q 200 170 360 140" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 2" />

        <text x="200" y="195" fill="#D4AF37" fontSize="10" fontFamily="monospace" textAnchor="middle">POST-TENSIONED BOX GIRDER ANALYSIS</text>
        <text x="200" y="215" fill="#8F6B2E" fontSize="9" fontFamily="monospace" textAnchor="middle">AS 5100 BRIDGE CODE COMPLIANT</text>
      </svg>
    </div>
  );
};
