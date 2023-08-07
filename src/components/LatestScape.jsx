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
    <section className="relative ">
      <div className="z-50 relative flex flex-col bg-scapeGray200 py-10 w-full ">
        <div className="futuresBG" />
        <h2 className="font-satoshiBold md:text-4xl text-2xl text-scapeBlue900 pl-4 md:pl-20 ">
          The latest from SCAPE
        </h2>
        <div className="pl-0 lg:pl-20 flex flex-col lg:flex-row my-6 lg:w-[90%] w-full lg:mb-[10rem] mb-[5rem] gap-6 md:gap-2 lg:gap-10 ">
          {/* Left Side */}
          <div className="flex flex-col relative lg:w-[90%] w-full">
            <div className="relative group">
              <div className="overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt="placeholder"
                  className="w-full object-cover z-50 relative md:h-full h-[400px] duration-1000 overflow-hidden group-hover:scale-[1.1] ease-in-out transition-all"
                />
              </div>
              <div className="duration-500 group-hover:translate-y-[-3%] framework-details shadow-lg absolute bottom-[-70%] md:bottom-[-50%] lg:bottom-[-40%] xl:bottom-[-20%] z-50  left-[10px] md:left-[30px] md:w-[70%] lg:w-[60%] w-[90%] font-satoshi p-6 flex flex-col  border-l-[6px] bg-white border-scapeYellow400 hover:border-opacity-50">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-10 h-10 absolute right-6"
                />
                <h4 className="text-scapeBlue700 font-satoshiBold md:w-full w-[60%]">
                  Consultancy Framework | Housing
                </h4>
                <p className="text-scapeBlue900 text-3xl 2xl:w-[50%] xl:w-[80%] lg:w-[80%] my-4">
                  Winwood Heights, Nottingham
                </p>
                <p className="text-scapeGray700 w-[80%] leading-25 text-base mb-6">
                  A new four-storey extra care building and the part
                  refurbishment of two 15 storey tower blocks, allowing
                  residents to live independently with flexible care provision.
                </p>
                <button
                  className="button__hover rounded-full flex items-center bg-scapeBlue900 text-white font-satoshiBold text-md py-4 px-8  w-fit "
                  type="button"
                >
                  Read case study
                  <span className="arrow__blue group-hover:ml-[10px] ease-in-out transition-all duration-500">
                    <svg
                      className="ml-6"
                      strokeWidth=""
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.48322 0.546521L7.48317 0.546572L7.48929 0.552569L13.4505 6.39617L13.4505 6.39623L13.4571 6.40254C13.514 6.4563 13.5147 6.54356 13.4567 6.59844L13.4567 6.59839L13.4505 6.6044L7.48931 12.4474L7.48925 12.4474L7.48281 12.4539C7.42587 12.5118 7.31387 12.5211 7.23869 12.4474L7.23827 12.447C7.18602 12.3959 7.1763 12.2956 7.24262 12.226L12.0585 7.51439L12.9349 6.65699H11.7088H0.665487C0.570725 6.65699 0.5 6.58246 0.5 6.4953C0.5 6.4176 0.561305 6.3427 0.666051 6.34243C0.666127 6.34243 0.666203 6.34243 0.666279 6.34243L11.7088 6.34243H12.9332L12.0588 5.48535L7.23869 0.760799L7.23827 0.760391C7.1821 0.705459 7.18149 0.60865 7.23869 0.552587C7.31363 0.479128 7.42537 0.487836 7.48322 0.546521Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className=" flex lg:flex-col flex-row justify-between shadow-lg bg-white p-6 sm:w-[70%] w-[90%] lg:w-[15%] lg:mt-0 md:mt-[15rem] mt-[17rem] lg:items-start items-center md:ml-[30px] ml-[10px] relative">
            <h2 className="transform-origin-top-left text-4xl flex w-full font-satoshi text-scapeGray700 lg:mt-[3rem] mt-0 lg:rotate-[-90deg] rotate-[0deg] ">
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
                className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50%] border-[1px] border-scapeGray300 flex items-center justify-center hover:border-black transition-all ease-in-out duration-300"
              >
                <img src={backbtn} alt="back button" className="" />
              </button>
              <button
                onClick={goToNextImage}
                type="button"
                disabled={isNextDisabled}
                className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50%] border-[1px] border-scapeGray300 flex items-center justify-center hover:border-black transition-all ease-in-out duration-300"
              >
                <img src={backbtn} alt="back button" className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestScape;
