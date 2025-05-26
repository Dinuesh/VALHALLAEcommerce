import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectData } from './projectsData';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="
      flex-shrink-0 
      w-full max-w-xs sm:w-72 
      overflow-hidden bg-white rounded-lg shadow-md 
      transition-transform duration-300 hover:scale-[1.02] group
      m-2
    ">
      <div className="relative h-48 sm:h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-gray-800 font-medium">{project.title}</h3>
        <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={18} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
