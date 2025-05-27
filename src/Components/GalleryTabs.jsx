import React, { useState } from "react";

const images = {
  "Living Room": ["/src/assets/images/l1.jpeg", "/src/assets/images/l2.jpeg"],
  Bedroom: ["/src/assets/images/b1.jpeg", "/src/assets/images/b2.jpeg"],
  "Dining Room": ["/src/assets/images/dd1.jpeg", "/src/assets/images/dd2.jpeg"],
  Kitchen: ["/src/assets/images/k1.jpeg", "/src/assets/images/k2.jpeg"],
  Other: ["/src/assets/images/o1.jpeg"],
};

const tabs = ["All", "Living Room", "Bedroom", "Dining Room", "Kitchen", "Other"];

const getRandomImages = (arr, count = 2) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedImages =
    activeTab === "All"
      ? Object.entries(images).flatMap(([category, imgs]) =>
          imgs.map((img) => ({ category, src: img }))
        )
      : (images[activeTab] || []).map((img) => ({ category: activeTab, src: img }));

  const handleViewMore = (category) => {
    setModalImages(getRandomImages(images[category], 2));
    setModalTitle(category);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 relative">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setIsModalOpen(false);
            }}
            className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium border transition-all duration-200
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayedImages.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No images available</p>
        ) : (
          displayedImages.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded shadow hover:shadow-lg transition-shadow">
              <img
                src={item.src}
                alt={`${item.category} ${idx + 1}`}
                className="w-full h-44 sm:h-52 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm text-center py-2 cursor-pointer"
                onClick={() => handleViewMore(item.category)}
              >
                View More
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4 py-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl p-5 w-full max-w-3xl relative">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">{modalTitle} Preview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modalImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Modal Preview ${i + 1}`}
                  className="w-full h-52 sm:h-60 object-cover rounded"
                />
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTabs;
