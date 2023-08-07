import { Link } from "gatsby-link";
import React from "react";
import RightArrow from "../../assets/images/homepage/Shape.svg";
import ImageCarousel from "../ImageCarousel";

function RoadToZero() {
  return (
    <section>
      <div className="z-50 relative flex flex-col-reverse lg:flex-row bg-white gap-0 lg:gap-24 py-10 w-full">
        {/* Left Side */}
        <div className="carouselBG" />
        <div className="flex flex-col lg:w-[50%] w-full">
          <ImageCarousel />
        </div>
        {/* Right Side */}
        <div className="ml-4 md:ml-20 flex flex-col lg:w-[50%] w-full justify-start lg:ml-auto">
          <h2 className="font-satoshiBold lg:text-4xl text-4xl text-scapeBlue900">
            The road to net zero
          </h2>
          <p className="bodycopy lg:my-8 my-4 xl:w-[70%] w-[90%] ">
            SCAPE can support you to build a low carbon future and achieve net
            zero. Our direct award frameworks, property services and innovative
            design approach can support your transition to net zero.
          </p>
          <div className="hidden lg:flex  flex-col bg-scapeBlue900  w-[80%] xl:w-[60%] p-6  font-satoshi gap-4 ">
            <p className="text-white text-md leading-25 ">
              Discover the road to net zero with SCAPE
            </p>
            <Link
              to="/"
              className="bg-white  text-scapeBlue900 py-4 px-6 flex items-center rounded-tl-full rounded-full font-bold font-satoshiBold w-fit contacter "
            >
              Net Zero by SCAPE
              <span>
                <img
                  src={RightArrow}
                  alt="arrow"
                  className="ml-6 flex transition-all ease-in-out duration-300 "
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadToZero;
