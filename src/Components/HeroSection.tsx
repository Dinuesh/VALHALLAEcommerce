import React from 'react';
import { Hammer, Sword, Shield } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/220634/pexels-photo-220634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: 'brightness(0.4)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 tracking-wider text-center">
          VALHALLA EXPERIENCES
        </h1>

        {/* Responsive Cards Layout */}
        <div className="relative w-full max-w-4xl h-auto md:h-[450px] flex flex-col md:block items-center gap-6">
          {/* Top Card */}
          <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2">
            <ExperienceCard
              title="JOURNEY TO VALHALLA"
              description="A HEROIC ADVENTURE"
              icon={<Sword className="h-10 w-10" />}
              position="top"
            />
          </div>

          {/* Bottom Left Card */}
          <div className="md:absolute md:bottom-0 md:left-0">
            <ExperienceCard
              title="ODIN'S HALL"
              description="FEAST EXPERIENCE"
              icon={<Hammer className="h-10 w-10" />}
              position="bottom-left"
            />
          </div>

          {/* Bottom Right Card */}
          <div className="md:absolute md:bottom-0 md:right-0">
            <ExperienceCard
              title="VALHALLA'S VALKYRIE"
              description="A WARRIOR EXPERIENCE"
              icon={<Shield className="h-10 w-10" />}
              position="bottom-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
