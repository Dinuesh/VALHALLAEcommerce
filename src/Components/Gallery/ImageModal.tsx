import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  title: string;
  images: string[];
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ title, images, onClose }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl p-5 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
      >
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            <span className="text-yellow-600">{title}</span> Gallery
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`${title} ${i + 1}`}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};