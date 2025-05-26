import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProjectTabs from './ProjectTabs';
import ProjectCard from './ProjectCard';
import { ProjectData, projectsData } from './projectsData';

const SlidingGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Custom Pool/Spa');
  
  const categories = [
    'Custom Pool/Spa',
    'Remodel',
    'Take Over',
    'Outdoor Living'
  ];
  
  const filteredProjects = projectsData.filter(
    project => project.category === activeCategory
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-8">Sliding Gallery</h2>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Recent Projects</h2>
          
          <ProjectTabs 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          <div className="relative mt-8">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-4 py-2 transition-all duration-300 ease-in-out">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            
            {/* <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center absolute -right-4 top-1/2 transform -translate-y-1/2 cursor-pointer shadow-md">
              <ChevronRight size={20} color="white" />
            </div> */}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300">
              View all projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingGallery;