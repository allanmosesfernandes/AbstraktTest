import React from "react";
import { useState } from "react";
import ArrowRight from "../assets/images/why/arrowRight.svg";
import one from "../assets/images/future/background.svg";
import Logo from "../assets/images/future/logo.svg";
import backbtn from "../assets/images/carousel/backbtn.svg";
// import one from "../assets/images/carousel/3.png";
import two from "../assets/images/carousel/Bitmap.png";

function LatestScape() {
  const images = [one, two, one, two];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isPreviousDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === images.length - 1;
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section>
      <div className=" z-50 relative flex flex-col  bg-white pl-4 md:pl-20 py-10 w-full ">
        <h2 className="font-satoshiBold text-4xl text-scapeBlue900">
          The latest from SCAPE
        </h2>
        <div className="flex flex-row my-6 lg:w-[90%] w-full mb-[20rem] gap-6">
          {/* Left Side */}
          <div className="flex flex-col relative">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="placeholder"
                className="w-[full] object-cover z-50 relative md:h-full h-[400px]"
              />
              <div className="framework-details shadow-lg absolute bottom-[-70%] md:bottom-[-50%] lg:bottom-[-20%] z-50  left-[10px] md:left-[30px] lg:w-[60%] w-[90%] font-satoshi p-6 flex flex-col  border-l-4 bg-white border-scapeYellow400 ">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-10 h-10 absolute right-6"
                />
                <h4 className="text-scapeBlue700 font-satoshiBold">
                  Consultancy Framework | Housing
                </h4>
                <p className="text-scapeBlue900 text-3xl md:w-[60%] w-[80%] my-4">
                  Winwood Heights, Nottingham
                </p>
                <p className="text-scapeGray700  w-[80%] leading-25 text-base mb-6">
                  A new four-storey extra care building and the part
                  refurbishment of two 15 storey tower blocks, allowing
                  residents to live independently with flexible care provision.
                </p>
                <button
                  className="rounded-full flex items-center bg-scapeBlue900 text-white font-satoshiBold text-md py-4 px-8  w-fit"
                  type="button"
                >
                  Read case study
                  <span>
                    <img src={ArrowRight} alt="arrow" className="ml-6" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col justify-between shadow-lg bg-white p-10 w-fit">
            <h2 className="text-4xl font-satoshi text-scapeGray700 rotate-[-90deg]">
              <span className="font-bold"> 01 </span>
              / 4
            </h2>
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
        </div>
      </div>
    </section>
  );
}

export default LatestScape;
