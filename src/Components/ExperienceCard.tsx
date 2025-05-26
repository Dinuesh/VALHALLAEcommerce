import React from 'react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: 'top' | 'bottom-left' | 'bottom-right';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  description, 
  icon,
  position
}) => {
  let positionClasses = '';

  switch (position) {
    case 'top':
    case 'bottom-left':
    case 'bottom-right':
    default:
      positionClasses = 'bg-black/70 border-amber-600';
  }

  return (
    <div 
      className={`
        w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 
        flex flex-col items-center justify-center p-6 rounded-full border-2
        ${positionClasses}
        transform transition-all duration-500 
        hover:scale-105 hover:border-amber-400 
        hover:shadow-[0_0_15px_rgba(217,119,6,0.5)]
      `}
    >
      <div className="mb-4 text-amber-500 text-3xl sm:text-4xl">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-amber-200 text-center mb-4">
        {description}
      </p>
      <button 
        className="px-4 py-1 bg-amber-800 text-amber-100 text-sm rounded hover:bg-amber-700 transition-colors duration-300"
      >
        EXPLORE
      </button>
    </div>
  );
};

export default ExperienceCard;
