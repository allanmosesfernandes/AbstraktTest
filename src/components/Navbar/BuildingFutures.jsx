import React, { useRef } from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function BuildingFutures() {
  const sliderRef = useRef(null);
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow Component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const slideStyle = {
    margin: "0 10px", // Adjust the spacing as needed
  };

  return (
    <div className="flex flex-row gap-6 items-center">
      {/* Left Side */}
      <div className="flex flex-col w-[40%]">
        <h2 className="pl-4 md:pl-20 font-satoshiBold lg:text-6xl text-4xl text-scapeBlue900 my-10">
          Building a stronger future
        </h2>
        <p className="pl-4 md:pl-20 bodycopy text-[16px]">
          Fully compliant with EU, UK and Scottish procurement regulations, our
          public sector procurement process selects only the best delivery
          partners available through a robust and rigorous tender process. We’re
          the first public sector body to adopt the Common Assessment Standards,
          making it simpler for you to procure your essential projects. Central
          to delivery is our partner’s extensive local supply chain, ensuring
          the money you invest locally, stays local.
        </p>
        <p className="bodycopy pl-4 md:pl-20 font-bold text-[17px]">
          How our partners are selected
        </p>
      </div>
      {/* Right Side */}
      <div className="flex flex-col w-[60%] gap-4">
        <Slider {...settings}>
          <div
            className="bg-scapeBlue700 text-white w-[90%] h-300 p-6 "
            style={slideStyle}
          >
            <h3 className="font-satoshiBold text-5xl">600+</h3>
            <p>public bodies are actively using our services</p>
          </div>
          <div
            className="bg-scapeBlue700 text-white w-[90%] h-300 p-6"
            style={slideStyle}
          >
            <h3 className="font-satoshiBold text-5xl">95%</h3>
            <p>of our projects are delivered on time with 99% on budget </p>
          </div>
          <div
            className="bg-scapeBlue700 text-white w-[90%] h-300 p-6"
            style={slideStyle}
          >
            <h3 className="font-satoshiBold text-5xl">600+</h3>
            <p>public bodies are actively using our services</p>
          </div>

          <div
            className="bg-scapeBlue700 text-white w-[90%] h-300 p-6 "
            style={slideStyle}
          >
            <h3 className="font-satoshiBold text-5xl">600+</h3>
            <p>public bodies are actively using our services</p>
          </div>
        </Slider>
        <div className="controls flex gap-4 my-6">
          <button onClick={handlePrev} type="button">
            {/* Add your custom back arrow icon/image here */}
            Back
          </button>
          <button onClick={handleNext} type="button">
            {/* Add your custom forward arrow icon/image here */}
            Forward
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildingFutures;
