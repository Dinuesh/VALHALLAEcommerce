import React, { useState } from "react";

const images = {
  "Living Room": ["/src/assets/images/l1.jpeg", "/src/assets/images/l2.jpeg"],
  Bedroom: ["/src/assets/images/b1.jpeg", "/src/assets/images/b2.jpeg"],
  "Dining Room": ["/src/assets/images/dd1.jpeg", "/src/assets/images/dd2.jpeg"],
  Kitchen: ["/src/assets/images/k1.jpeg", "/src/assets/images/k2.jpeg"],
  Other: ["/src/assets/images/o1.jpeg"],
};

const tabs = ["All", "Living Room", "Bedroom", "Dining Room", "Kitchen", "Other"];

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const displayedImages =
    activeTab === "All" ? Object.values(images).flat() : images[activeTab] || [];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors duration-200
              ${
                activeTab === tab
                  ? "bg-yellow-600 text-white border-yellow-700"
                  : "bg-white text-gray-800 border-yellow-300 hover:bg-yellow-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedImages.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No images available
          </p>
        ) : (
          displayedImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded shadow hover:shadow-lg transition-shadow">
              <img
                src={src}
                alt={`${activeTab} ${idx + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryTabs;
