import React, { useState } from "react";

const sections = [
  { name: "BATHROOMS", img: "/images/bathroom.jpg" },
  { name: "KITCHENS", img: "/images/kitchan.jpeg" },
  { name: "BUILT CLOSETS", img: "/images/close.jpeg" },
  { name: "HOME OFFICE", img: "/images/homeoffice.jpeg" },
  { name: "CLOSETS", img: "/images/clo.jpeg" },
];

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Show first section by default

  const toggleIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 flex flex-col items-center justify-center">
      <div className="border border-gray-400 rounded-lg p-4 sm:p-6 shadow-xl max-w-full sm:max-w-5xl w-full">
        {/* Nav buttons */}
        <nav className="mb-6">
          {/* Desktop horizontal buttons */}
          <div className="hidden sm:flex justify-center flex-wrap gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`px-6 py-3 rounded font-semibold transition
                  ${
                    selectedIndex === index
                      ? "bg-black text-white"
                      : "bg-gray-400 text-white hover:bg-white hover:text-black"
                  }
                `}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile accordion buttons */}
          <div className="sm:hidden flex flex-col gap-2">
            {sections.map((section, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full text-left px-4 py-3 rounded font-semibold transition
                    ${
                      selectedIndex === index
                        ? "bg-black text-white"
                        : "bg-gray-400 text-white hover:bg-white hover:text-black"
                    }
                  `}
                >
                  {section.name}
                </button>
                {selectedIndex === index && (
                  <div className="mt-2 rounded overflow-hidden">
                    <img
                      src={section.img}
                      alt={section.name}
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Desktop image display below nav buttons */}
        {selectedIndex !== null && (
          <div className="hidden sm:flex justify-center mt-4">
            <img
              src={sections[selectedIndex].img}
              alt={sections[selectedIndex].name}
              className="w-full max-w-[800px] h-auto rounded object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
