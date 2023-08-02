import { Link } from "gatsby-link";
import React from "react";
import RightArrow from "../../assets/images/homepage/Shape.svg";
import ImageCarousel from "../ImageCarousel";

function RoadToZero() {
  return (
    <section>
      <div className=" z-50 relative flex flex-col-reverse md:flex-row bg-white pl-4 md:pl-20 gap-2 md:gap-20 py-10 w-full">
        {/* Left Side */}
        <div className="carouselBG" />
        <div className="flex flex-col">
          <ImageCarousel />
        </div>
        {/* Right Side */}
        <div className="flex flex-col md:w-[60%] w-full justify-start ml-auto">
          <h2 className="font-satoshiBold lg:text-6xl text-4xl text-scapeBlue900">
            The road to net zero
          </h2>
          <p className="bodycopy my-10 md:w-[65%] w-full">
            SCAPE can support you to build a low carbon future and achieve net
            zero. Our direct award frameworks, property services and innovative
            design approach can support your transition to net zero.
          </p>
          <div className="md:flex hidden flex-col bg-scapeBlue900 w-fit p-6 pr-[100px] font-satoshi gap-6 ">
            <p className="text-white">
              Discover the road to net zero with SCAPE
            </p>
            <Link
              to="/"
              className="bg-white  text-scapeBlue900 py-4 px-6 flex items-center rounded-tl-full rounded-full font-bold font-satoshiBold w-fit contacter"
            >
              Net Zero by SCAPE
              <span>
                <img src={RightArrow} alt="arrow" className="ml-6 flex" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadToZero;
