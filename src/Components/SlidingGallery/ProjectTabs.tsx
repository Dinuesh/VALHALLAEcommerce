import React from 'react';

interface ProjectTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ 
  categories, 
  activeCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-white rounded-lg shadow-sm overflow-hidden">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-3 text-sm font-medium transition-colors duration-200 relative
              ${activeCategory === category 
                ? 'text-cyan-500 bg-white' 
                : 'text-gray-800 hover:text-cyan-500 bg-white'
              }
            `}
            onClick={() => onSelectCategory(category)}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;