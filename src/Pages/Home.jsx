import React, { useState, useEffect } from "react";


const ImageSlider = () => {
  const images = [
    "https://th.bing.com/th?id=OIP.XLTqTC6UBPAKyFI7HuN_5gHaEw&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.u-431AjZd8tHQLsqLB4h-QHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.Q_sCQGO4uzOtWflCO3mLqgHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div className="slider">
      <div
        className="slider-images"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Slide effect
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
