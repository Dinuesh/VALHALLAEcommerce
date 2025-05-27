import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from './GalleryItem';
import { galleryData } from './galleryData';
import { TabButton } from './TabButton';
import { ImageModal } from './ImageModal';

const tabs = ["All", ...Object.keys(galleryData)];

const GalleryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedImages = activeTab === "All"
    ? Object.entries(galleryData).flatMap(([category, imgs]) =>
        imgs.map((img) => ({ category, src: img }))
      )
    : (galleryData[activeTab] || []).map((img) => ({ category: activeTab, src: img }));

  const handleViewMore = (category: string) => {
    // Show all images from the category in the modal
    setModalImages(galleryData[category]);
    setModalTitle(category);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 relative">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Interior Design <span className="text-yellow-600">Gallery</span>
      </h1>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {tabs.map((tab) => (
          <TabButton 
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => {
              setActiveTab(tab);
              setIsModalOpen(false);
            }}
          />
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {displayedImages.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 py-10">No images available</p>
        ) : (
          displayedImages.map((item, idx) => (
            <GalleryItem 
              key={idx}
              src={item.src} 
              alt={`${item.category} ${idx + 1}`}
              category={item.category}
              onViewMore={handleViewMore}
            />
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          title={modalTitle}
          images={modalImages}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default GalleryTabs;