import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

import backbtn from "../../assets/images/carousel/backbtn.svg";

function BuildingFutures() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="carousel__custom__next"
      >
        <img src={backbtn} alt="back button" className=" rotate-180" />
      </button>
    );
  }

  // Custom Previous Arrow Component
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="carousel__custom__prev"
      >
        <img src={backbtn} alt="back button" className="" />
      </button>
    );
  }

  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100, // Adjust this value as needed for your mobile breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center bg-scapeGray200 mt-[10rem] relative">
      {/* Left Side */}
      <Fade bottom>
        <h2 className="font-satoshiBold w-full text-3xl xl:text-5xl text-scapeBlue900 block pl-4  md:pl-20 absolute top-[-90px]">
          Building a <br />
          stronger future
        </h2>
        <div className="flex flex-col lg:w-[40%] w-full pb-20">
          <p className="pl-4 md:pl-20 bodycopy text-[16px] pt-10">
            Fully compliant with EU, UK and Scottish procurement regulations, our
            public sector procurement process selects only the best delivery
            partners available through a robust and rigorous tender process. We’re
            the first public sector body to adopt the Common Assessment Standards,
            making it simpler for you to procure your essential projects. Central
            to delivery is our partner’s extensive local supply chain, ensuring
            the money you invest locally, stays local.
          </p>
          <p className="bodycopy font-satoshiBold pl-4 md:pl-20 font-bold text-[17px] underline decoration-solid text-scapeBlue900">
            How our partners are selected
          </p>
        </div>
      </Fade>
      {/* Right Side */}
      <div className="z-50 flex flex-col lg:w-[60%] w-full gap-4 px-2 md:px-20 lg:mt-[-15rem] md:mt-[-3rem] mt-[-4rem] relative">
        <Slider {...settings}>
          <div className="carousel__div">
            <h3 className="font-satoshiBold  text-3xl xl:text-5xl">
              600
              <span className="font-satoshiLight">+</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              public bodies are actively using our services
            </p>
          </div>
          <div className="carousel__div">
            <h3 className="font-satoshiBold text-3xl xl:text-5xl">
              95
              <span className="font-satoshiLight">%</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              of our projects are delivered on time with 99% on budget
            </p>
          </div>
          <div className="carousel__div">
            <h3 className="font-satoshiBold  text-3xl xl:text-5xl">
              9<span className="font-satoshiLight">/10</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              of our clients are really happy with the final project results
            </p>
          </div>
          <div className="carousel__div">
            <h3 className="font-satoshiBold  text-3xl xl:text-5xl">
              600
              <span className="font-satoshiLight">+</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              public bodies are actively using our services
            </p>
          </div>
          <div className="carousel__div">
            <h3 className="font-satoshiBold  text-3xl xl:text-5xl">
              95
              <span className="font-satoshiLight">%</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              of our projects are delivered on time with 99% on budget
            </p>
          </div>
          <div className="carousel__div">
            <h3 className="font-satoshiBold  text-3xl xl:text-5xl">
              9<span className="font-satoshiLight">/10</span>
            </h3>
            <p className="font-satoshiLight my-4 xl:w-[75%] w-full">
              of our clients are really happy with the final project results
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BuildingFutures;
