'use client';

import React from 'react';
import { ServicePillar } from '@/data/content';
import { ServiceCard } from './ServiceCard';

interface ServiceCarouselProps {
  services: ServicePillar[];
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  // Duplicate services to create a 100% seamless infinite loop
  const marqueeServices = [...services, ...services];

  return (
    <div className="relative overflow-hidden">
      {/* Seamless Continuous Smooth Marquee Track */}
      <div className="w-full overflow-hidden relative py-2">
        {/* Subtle Edge Gradients for Smooth Entrance / Exit Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 flex items-stretch">
          {marqueeServices.map((service, idx) => (
            <div
              key={`${service.id}-${idx}`}
              className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
