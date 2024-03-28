import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  '/img/img1.png',
  '/img/img2.png',
  '/img/img3.png',
  '/img/img4.png',
  '/img/img5.png',
  '/img/img6.png',
  '/img/img7.png',
  '/img/img8.png',

  // Add more image URLs as needed
];

const App = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleButtonClick = (index) => {
    setFadeOut(true); // Start the fade-out animation
    setTimeout(() => {
      setSelectedImageIndex(index);
      setFadeIn(true); // Start the fade-in animation
      setFadeOut(false); // Reset the fade-out animation
    }, 500); // Adjust the delay to match the CSS transition duration
  };

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex flex-col items-center justify-between flex-1 inset-0 transition-opacity ${fadeOut ? 'opacity-30' : 'opacity-100'}`}
         style={{ backgroundImage: `url(${images[selectedImageIndex]})`, backgroundSize: '100% 100%' }}>
        <div></div>
        <div className="flex justify-center mt-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
          {images.map((imageUrl, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`px-4 py-2 mx-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ${
                index === selectedImageIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
            >
              <img src={`${images[index]}`} width={80} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;