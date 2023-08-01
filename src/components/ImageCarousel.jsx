import React, { useState } from "react";
import image2 from "../assets/images/carousel/dfdfdf.png";
import one from "../assets/images/carousel/1.png";
import two from "../assets/images/carousel/2.png";
import three from "../assets/images/carousel/3.png";
import four from "../assets/images/carousel/4.png";


function ImageCarousel() {
  const images = [image2, one, two, three, four];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>(prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isPreviousDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === images.length - 1;

  return (
    <div className="image-carousel">
      <img
        src={images[currentImageIndex]}
        alt={` ${currentImageIndex + 1}`}
        className="w-fit"
      />

      <div className="controls flex gap-4 my-6">
        <button
          onClick={goToPreviousImage}
          type="button"
          disabled={isPreviousDisabled}
        >
          <img
            src={backbtn}
            alt="back button"
            className="arrowButtonsCarousel"
          />
        </button>
        <button onClick={goToNextImage} type="button" disabled={isNextDisabled}>
          <img
            src={backbtn}
            alt="back button"
            className="arrowButtonsCarousel rotate-180"
          />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
