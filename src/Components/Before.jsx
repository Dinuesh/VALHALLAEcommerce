import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import BeforeAfterSlider from './BeforeAfterSlider';
import SlideCard from './SlideCard';

const Before = () => {
  const beforeAfterImages = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop"
    }
  ];

  const slides = [
    {
      id: 1,
      title: "Slide Title",
      description: "Slide description",
      buttonText: "Button",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      bgColor: "from-green-900/80 to-green-700/80"
    },
    {
      id: 2,
      title: "Slide Title",
      description: "Slide description", 
      buttonText: "Button",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
      bgColor: "from-amber-900/80 to-amber-700/80"
    },
    {
      id: 3,
      title: "Slide Title",
      description: "Slide description",
      buttonText: "Button", 
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
      bgColor: "from-blue-900/80 to-blue-700/80"
    },
    {
      id: 4,
      title: "Student Title",
      description: "Slide description",
      buttonText: "Button", 
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
      bgColor: "from-green-900/80 to-pink-700/80"
    },
    {
      id: 5,
      title: "Software Title",
      description: "Software description",
      buttonText: "Button", 
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
      bgColor: "from-red-900/80 to-yellow-700/80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sliding gallery with Before & After photos
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Works great on mobile & desktop
          </h2>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beforeAfterImages.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                beforeImage={item.before}
                afterImage={item.after}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="pl-6 sm:basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <SlideCard slide={slide} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-gray-300" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-gray-300" />
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default Before;
