import React from 'react';
import './RastaGallery.css';

const images = [
  'images/q1.jpeg',
  'images/q2.jpeg',
  'images/q3.jpeg',
  'images/q4.jpeg',
  'images/q5.jpeg',
  'images/q6.jpeg',
  'images/q7.jpeg',
  'images/q8.jpeg',
];

const RastaGallery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="box w-[200px] h-[200px] relative">
        {images.map((img, index) => (
          <span
            key={index}
            style={{ '--i': index + 1 }}
            className="image-span absolute top-0 left-0 w-full h-full"
          >
            <img
              src={`/${img}`}
              alt={`img-${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover border-2 border-white rounded-[18px]"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RastaGallery;
