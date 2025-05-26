import React, { useState } from "react";

const sections = [
  { name: "BATHROOMS", img: "/images/bathroom.jpg" },
  { name: "KITCHENS", img: "/images/kitchan.jpeg" },
  { name: "BUILTS CLOSETS", img: "/images/close.jpeg" },
  { name: "HOME OFFICE", img: "/images/homeoffice.jpeg" },
  { name: "CLOSETS", img: "/images/clo.jpeg" },
];

const Navbar = () => {
  // Default active: pehla section selected rahe
  const [selectedImg, setSelectedImg] = useState(sections[0].img);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-6">
      <div
        className={`border border-gray-400 rounded-lg p-4 sm:p-6 shadow-xl transition-all duration-300 ${
          selectedImg ? "bg-white" : "bg-gray-100"
        } max-w-full sm:max-w-5xl`}
      >
        <nav className="mb-6">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedImg(section.img)}
                className={`px-4 sm:px-6 py-3 rounded font-semibold transition w-full sm:w-auto text-center
                  ${
                    selectedImg === section.img
                      ? "bg-black text-white"
                      : "bg-gray-400 text-white hover:bg-white hover:text-black"
                  }
                `}
              >
                {section.name}
              </button>
            ))}
          </div>
        </nav>

        {selectedImg && (
          <div className="mt-4 flex justify-center">
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full max-w-full sm:max-w-[800px] h-auto rounded object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
