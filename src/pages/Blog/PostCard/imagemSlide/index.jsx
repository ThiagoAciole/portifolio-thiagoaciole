/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full max-w-md mx-auto relative flex items-center bg-white rounded-xl border rounded-lg shadow overflow-hidden md:max-w-2xl">
      <div className="absolute md:px-2 sm:px-1 justify-between flex flex-row text-white w-full">
        <button className="" onClick={prevSlide}>
          <ChevronLeft size={48} />
        </button>

        <button className="" onClick={nextSlide}>
          <ChevronRight size={48} />
        </button>
      </div>

      <img src={images[currentImageIndex]} alt="Imagem do Slide" />
    </div>
  );
};

export default ImageSlider;
