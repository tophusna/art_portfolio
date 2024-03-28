import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselButtons = ({ selectedImageIndex, totalImages, onClick, source, count }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prevStartIndex) =>
      Math.max(0, prevStartIndex - 1) 
    );
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      Math.min(totalImages - count, prevStartIndex + 1)
    );
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = startIndex; i < startIndex + count && i < totalImages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`px-4 py-2 mx-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ${
            i === selectedImageIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } `}
        >
          <img src={source[i]} />
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="flex justify-center mt-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 mx-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-300 text-gray-700"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {renderButtons()}
      <button
        onClick={handleNext}
        className="px-4 py-2 mx-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-300 text-gray-700"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default CarouselButtons;