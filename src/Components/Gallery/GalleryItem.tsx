import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
  category: string;
  onViewMore: (category: string) => void;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, category, onViewMore }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{category}</h3>
        <button
          onClick={() => onViewMore(category)}
          className="inline-block bg-yellow-600 text-white text-sm font-medium py-1.5 px-3 rounded-md 
                     opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150
                     hover:bg-yellow-700 transform group-hover:translate-y-0"
        >
          View More
        </button>
      </div>
    </div>
  );
};