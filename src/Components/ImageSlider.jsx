import React, { useRef, useState, useEffect } from 'react';

const allImages = [
  '/images/s1.jpeg',
  '/images/s2.jpeg',
  '/images/s3.jpeg',
  '/images/s4.jpeg',
  '/images/s5.jpeg',
  '/images/s1.jpeg',
  '/images/s2.jpeg',
  '/images/s3.jpeg',
  '/images/s4.jpeg',
  '/images/s5.jpeg',
  '/images/s1.jpeg',
  '/images/s2.jpeg',
  '/images/s3.jpeg',
  '/images/s4.jpeg',
  '/images/s5.jpeg',
];

const slider1Images = allImages.slice(0, 5);
const slider2Images = allImages.slice(5, 10);
const slider3Images = allImages.slice(10, 15);

const LeftArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const SingleSlider = ({ images }) => {
  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const [current, setCurrent] = useState(1);
  const [dividerX, setDividerX] = useState(50);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollTo({ left: width * current, behavior: 'smooth' });
    }
  }, [current]);

  const handleScroll = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const container = scrollRef.current;
      const width = container.clientWidth;
      const index = Math.round(container.scrollLeft / width);

      if (index === 0) {
        container.style.scrollBehavior = 'auto';
        setCurrent(images.length);
        container.scrollLeft = width * images.length;
        requestAnimationFrame(() => {
          container.style.scrollBehavior = 'smooth';
        });
      } else if (index === extendedImages.length - 1) {
        container.style.scrollBehavior = 'auto';
        setCurrent(1);
        container.scrollLeft = width;
        requestAnimationFrame(() => {
          container.style.scrollBehavior = 'smooth';
        });
      } else {
        setCurrent(index);
      }
    }, 100);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = ((e.clientX - rect.left) / rect.width) * 100;
    newX = Math.max(0, Math.min(newX, 100));
    setDividerX(newX);
  };

  const handleMouseDown = () => {
    dragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch support for dragging
  const handleTouchMove = (e) => {
    if (!dragging.current || !containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    let newX = ((touch.clientX - rect.left) / rect.width) * 100;
    newX = Math.max(0, Math.min(newX, 100));
    setDividerX(newX);
  };

  const handleTouchStart = () => {
    dragging.current = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  return (
    <div
      className="relative w-full max-w-md mx-auto mb-6 md:mb-0 md:mx-4"
      ref={containerRef}
      style={{ touchAction: 'none' }} // Helps touch dragging
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-hidden rounded-xl shadow-lg"
        style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
      >
        {extendedImages.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-full h-64 md:h-72 lg:h-80 scroll-snap-align-start"
          >
            <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover" draggable={false} />
            <div className="absolute inset-0 select-none">
              <div
                className="absolute top-0 left-0 h-full bg-black"
                style={{ width: `${dividerX}%`, opacity: 0.3 }}
              />
              <div
                className="absolute top-0 right-0 h-full bg-black"
                style={{ width: `${100 - dividerX}%`, opacity: 0.6 }}
              />
              <div
                className="absolute top-0 h-full w-0.5 bg-white z-10 cursor-col-resize"
                style={{ left: `${dividerX}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-20"
        aria-label="Previous Slide"
      >
        <LeftArrowIcon />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-20"
        aria-label="Next Slide"
      >
        <RightArrowIcon />
      </button>
    </div>
  );
};

const ImageSlider = () => {
  return (
    <div className="flex flex-col md:flex-row mt-2 pt-5 pb-5 justify-center items-center">
      {/* Mobile only: show just first slider */}
      <div className="block md:hidden w-full max-w-md">
        <SingleSlider images={slider1Images} />
      </div>

      {/* Tablet+ show all sliders side by side */}
      <div className="hidden md:flex md:space-x-4">
        <SingleSlider images={slider1Images} />
        <SingleSlider images={slider2Images} />
        <SingleSlider images={slider3Images} />
      </div>
    </div>
  );
};

export default ImageSlider;
