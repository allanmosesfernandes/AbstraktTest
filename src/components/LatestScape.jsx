import React from "react";
import { useState } from "react";
import ArrowRight from "../assets/images/why/arrowRight.svg";
import one from "../assets/images/future/background.svg";
import five from "../assets/images/future/5.png";
import six from "../assets/images/future/6.png";
import seven from "../assets/images/future/7.png";
import Logo from "../assets/images/future/logo.svg";
import Shape from "../assets/images/future/shape.svg";
import backbtn from "../assets/images/carousel/backbtn.svg";
// import one from "../assets/images/carousel/3.png";
import two from "../assets/images/carousel/Bitmap.png";

function LatestScape() {
  const images = [one, five, six, seven];
  const numbers = [1, 2, 3, 4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isPreviousDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === images.length - 1;
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

  return (
    <section className="relative">
      <div className="z-50 relative flex flex-col bg-scapeGray200 py-10 w-full ">
        <div className="futuresBG" />
        <h2 className="font-satoshiBold md:text-4xl text-2xl text-scapeBlue900 pl-4 md:pl-20 ">
          The latest from SCAPE
        </h2>
        <div className="pl-0 lg:pl-20 flex flex-col lg:flex-row my-6 lg:w-[90%] w-full lg:mb-[10rem] mb-[5rem] gap-10 ">
          {/* Left Side */}
          <div className="flex flex-col relative lg:w-[90%] w-full">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="placeholder"
                className="w-full object-cover z-50 relative md:h-full h-[400px]"
              />
              <div className="framework-details shadow-lg absolute bottom-[-70%] md:bottom-[-50%] lg:bottom-[-50%] xl:bottom-[-20%] z-50  left-[10px] md:left-[30px] lg:w-[60%] w-[90%] font-satoshi p-6 flex flex-col  border-l-4 bg-white border-scapeYellow400 ">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-10 h-10 absolute right-6"
                />
                <h4 className="text-scapeBlue700 font-satoshiBold md:w-full w-[60%]">
                  Consultancy Framework | Housing
                </h4>
                <p className="text-scapeBlue900 text-3xl lg:w-[60%] w-[80%] my-4">
                  Winwood Heights, Nottingham
                </p>
                <p className="text-scapeGray700 w-[80%] leading-25 text-base mb-6">
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
          <div className="flex lg:flex-col flex-row justify-between shadow-lg bg-white p-6 w-[90%] lg:w-[15%] lg:mt-0 md:mt-[15rem] mt-[17rem] lg:items-start items-center md:ml-[30px] ml-[10px] relative">
            <h2 className="transform-origin-top-left text-4xl flex w-full font-satoshi text-scapeGray700 lg:mt-[2rem] mt-0 lg:rotate-[-90deg] rotate-[0deg] ">
              <span className="font-bold inline-flex px-2">
                0{numbers[currentImageIndex]}
              </span>
              /04
            </h2>
            <div className="controls flex gap-4 my-6 w-[100px] lg:w-full md:justify-between justify-normal">
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
