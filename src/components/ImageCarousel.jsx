import React, { useState } from "react";
import one from "../assets/images/carousel/3.png";
import two from "../assets/images/carousel/Bitmap.png";
import backbtn from "../assets/images/carousel/backbtn.svg";

function ImageCarousel() {
  const images = [one, two, one, two];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isPreviousDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === images.length - 1;

  return (
    <>
      <div className="pl-0 lg:pl-20 image-carousel flex lg:flex-col flex-col-reverse">
        <img
          src={images[currentImageIndex]}
          alt={` ${currentImageIndex + 1}`}
          className="w-full h-[120%] object-center object-cover md:min-h-[400px]"
        />

        <div className="controls flex gap-4 my-6 ml-4 md:ml-20 lg:ml-0">
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
          <button
            onClick={goToNextImage}
            type="button"
            disabled={isNextDisabled}
          >
            <img
              src={backbtn}
              alt="back button"
              className="arrowButtonsCarousel rotate-180"
            />
          </button>
        </div>
      </div>
      <div className="lg:hidden flex mx-[1rem] md:mx-[5rem] my-[-2rem] flex-col bg-scapeBlue900 w-fit p-6 md:pr-[100px] pr-10 font-satoshi gap-6 ">
        <p className="text-white">Discover the road to net zero with SCAPE</p>
        <a
          to="/"
          className="bg-white  text-scapeBlue900 py-4 px-6 flex items-center rounded-tl-full rounded-full font-bold font-satoshiBold w-fit contacter"
        >
          Net Zero by SCAPE
          <span>
            {/* <img src={RightArrow} alt="arrow" className="ml-6 flex" /> */}
          </span>
        </a>
      </div>
    </>
  );
}

export default ImageCarousel;
