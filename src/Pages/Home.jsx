import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderImages = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Smooth sliding effect
`;

const Slide = styled.div`
  min-width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);  /* Optional: adds a shadow to the text for better readability */
`;



// ImageSlider Component
const ImageSlider = () => {
  const images = [
    "https://th.bing.com/th?id=OIP.XLTqTC6UBPAKyFI7HuN_5gHaEw&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.u-431AjZd8tHQLsqLB4h-QHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.Q_sCQGO4uzOtWflCO3mLqgHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  ];
  <OverlayText>Text Overlay</OverlayText>

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
    <SliderWrapper>
      <SliderImages
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Slide effect
        }}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderImages>
    </SliderWrapper>
  );
};

export default ImageSlider;
