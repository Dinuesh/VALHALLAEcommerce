interface SlideCardProps {
  slide: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image: string;
    bgColor: string;
  };
}

const SlideCard = ({ slide }: SlideCardProps) => {
  return (
    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl group cursor-pointer">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-b ${slide.bgColor} transition-opacity duration-300 group-hover:opacity-90`}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
          {slide.title}
        </h3>
        <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
          {slide.description}
        </p>
        <button className="bg-transparent border-2 border-white text-white px-4 py-1 sm:px-6 sm:py-2 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 self-start transform group-hover:-translate-y-1 group-hover:scale-105">
          {slide.buttonText}
        </button>
      </div>
    </div>
  );
};

export default SlideCard;
