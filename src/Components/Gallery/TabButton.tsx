import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-200
        ${
          isActive
            ? "bg-yellow-600 text-white border-yellow-700 shadow-md"
            : "bg-white text-gray-800 border-yellow-200 hover:bg-yellow-50"
        }`}
    >
      {label}
    </button>
  );
};