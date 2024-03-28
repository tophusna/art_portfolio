import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import CarouselButtons from './components/CarouselButtons'; // Assuming CarouselButtons component is in the same directory

const images = [
  '/img/11提拉米蘇.png',
  '/img/12柏油路灰.png',
  '/img/13排水蓋灰.png',
  '/img/14雪茄棕.png',
  '/img/15巧克力.png',
  '/img/16生鏽棕.png',
  '/img/17消防栓紅.png',
  '/img/18擲筊紅.png',
  '/img/19廟簷橘.png',
  '/img/20辦桌紅.png',
  '/img/21三角錐橘.png',
  '/img/22藕粉色.png',
  '/img/23蜜桃莓果.png',
  '/img/24櫻花粉.png',
  '/img/25奶油粉.png',
  '/img/26磚杏色.png',
  '/img/27醃蘿蔔黃.png',
  '/img/28垃圾車黃.png',
  '/img/29黃芥末.png',
  '/img/30米黃.png',
];

const images_res = [
  '/img/iPhone11提拉米蘇.png',
  '/img/iPhone12柏油路灰.png',
  '/img/iPhone13排水蓋灰.png',
  '/img/iPhone14雪茄棕.png',
  '/img/iPhone15巧克力.png',
  '/img/iPhone16生鏽棕.png',
  '/img/iPhone17消防栓紅.png',
  '/img/iPhone18擲筊紅.png',
  '/img/iPhone19廟簷橘.png',
  '/img/iPhone20辦桌紅.png',
  '/img/iPhone21三角錐橘.png',
  '/img/iPhone22藕粉色.png',
  '/img/iPhone23蜜桃莓果.png',
  '/img/iPhone24櫻花粉.png',
  '/img/iPhone25奶油粉.png',
  '/img/iPhone26磚杏色.png',
  '/img/iPhone27醃蘿蔔黃p30.png',
  '/img/iPhone28垃圾車黃.png',
  '/img/iPhone29黃芥末.png',
  '/img/iPhone30米黃.png',
];

const App = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dragStart, setDragStart] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragStart = (e) => {
    setDragStart(e.clientX);
  };

  const handleButtonClick = (index) => {
    setFadeOut(true); // Start the fade-out animation
    setTimeout(() => {
      setSelectedImageIndex(index);
      setFadeIn(true); // Start the fade-in animation
      setFadeOut(false); // Reset the fade-out animation
    }, 500); // Adjust the delay to match the CSS transition duration
  };

  const handleDragEnd = (e) => {
    const dragEnd = e.clientX;
    const threshold = 50; // adjust as needed
    if (dragStart && dragEnd - dragStart > threshold) {
      // Dragged right
      handleNext();
    } else if (dragStart && dragStart - dragEnd > threshold) {
      // Dragged left
      handlePrevious();
    }
    setDragStart(null);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getBackgroundImage = () => {
    if (windowWidth < 767) {
      return `url(${images_res[selectedImageIndex]})`;
    } else {
      return `url(${images[selectedImageIndex]})`;
    }
  };

  return (
    <div
      className="flex flex-col h-screen"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      <div
        className={`flex flex-col items-center justify-between flex-1 inset-0 transition-opacity ${fadeOut ? 'opacity-30' : 'opacity-100'}`}
        style={{
          backgroundSize: '100% 100%',
          backgroundImage: getBackgroundImage(),
        }}
      >
        <div></div>
        <CarouselButtons
          selectedImageIndex={selectedImageIndex}
          totalImages={images.length}
          onClick={handleButtonClick}
          source={(windowWidth < 767) ? images_res : images}
          count={(windowWidth < 767) ? 5 : 10}
        />
      </div>
    </div>
  );
};

export default App;