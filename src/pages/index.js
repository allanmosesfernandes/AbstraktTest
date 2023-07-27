import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import CardImage from "../assets/images/homepage/card-image.png";
import Right from "../assets/images/homepage/right.svg";
import RightArrow from "../assets/images/homepage/Shape.svg";
import ArrowT from "../assets/images/nav/arrow.svg";

const index = () => (
  <>
    <Navbar />
    <main className="container flex flex-col">
      <section>
        {/* Main Title Copy */}
        <div className="ml-6 md:ml-24 my-4">
          <h2 className="font-satoshiBold text-6xl mb-2">
            Power your procurement.{" "}
          </h2>
          <h2 className="font-satoshi text-6xl">
            Accelerate your public sector projects.
          </h2>
        </div>
        {/* Card Bits */}
        <div className="bg-scapeGray100 flex flex-col px-6  md:px-20 mx-0 md:mx-6">
          {/* Body Copy  */}
          <p className="text-scapeGray700 text-sm w-[100%] lg:w-[60%] font-satoshi leading-[1.2rem] py-6">
            Your go-to suite of compliant, direct award, not-for-profit, public
            sector procurement frameworks. SCAPE delivers high quality outcomes
            for you sustainably, at pace, and with social value and community
            legacy at the heart of your projects.{" "}
            <span className="font-satoshiBold">
              Get started with an actively managed framework by the public
              sector, for the public sector:
            </span>
          </p>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card Styles */}
            <div className="group flex flex-col font-satoshi carder overflow-hidden h-[400px]">
              <img
                src={CardImage}
                alt="Card"
                className="card__image group-hover:scale-110 ease-linear duration-300 z-1"
              />
              {/* Card copy */}
              <div className="flex flex-col border-t-8 z-10 border-scapeYellow400 group-hover:border-opacity-50 bg-white text-sm px-4 py-6 ease-linear duration-300">
                <p className="w-[50%] font-satoshiBold mb-3">
                  Consultancy Frameworks
                </p>
                <p className="">
                  Access placeshaping and the future of cities, plus all types
                  of built environment consultancy across the UK.
                </p>
                {/* Card Arrow */}
                <div className="relative card-heighterrr">
                  {/* Card Arrow */}
                  <div className="card-arrow">
                    <img src={Right} alt="Right Arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col font-satoshi carder overflow-hidden h-[400px]">
              <img
                src={CardImage}
                alt="Card"
                className="card__image group-hover:scale-110 ease-linear duration-300 z-1"
              />
              {/* Card copy */}
              <div className="flex flex-col border-t-8 z-10 border-scapeYellow400 group-hover:border-opacity-50 bg-white text-sm px-4 py-6 ease-linear duration-300">
                <p className="w-[50%] font-satoshiBold mb-3">
                  Consultancy Frameworks
                </p>
                <p className="">
                  Access placeshaping and the future of cities, plus all types
                  of built environment consultancy across the UK.
                </p>
                {/* Card Arrow */}
                <div className="relative card-heighterrr">
                  {/* Card Arrow */}
                  <div className="card-arrow">
                    <img src={Right} alt="Right Arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col font-satoshi carder overflow-hidden h-[400px]">
              <img
                src={CardImage}
                alt="Card"
                className="card__image group-hover:scale-110 ease-linear duration-300 z-1"
              />
              {/* Card copy */}
              <div className="flex flex-col border-t-8 z-10 border-scapeYellow400 group-hover:border-opacity-50 bg-white text-sm px-4 py-6 ease-linear duration-300">
                <p className="w-[50%] font-satoshiBold mb-3">
                  Consultancy Frameworks
                </p>
                <p className="">
                  Access placeshaping and the future of cities, plus all types
                  of built environment consultancy across the UK.
                </p>
                {/* Card Arrow */}
                <div className="relative card-heighterrr">
                  {/* Card Arrow */}
                  <div className="card-arrow">
                    <img src={Right} alt="Right Arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group flex flex-col font-satoshi carder overflow-hidden h-[400px]">
              <img
                src={CardImage}
                alt="Card"
                className="card__image group-hover:scale-110 ease-linear duration-300 z-1"
              />
              {/* Card copy */}
              <div className="flex flex-col border-t-8 z-10 border-scapeYellow400 group-hover:border-opacity-50 bg-white text-sm px-4 py-6 ease-linear duration-300">
                <p className="w-[50%] font-satoshiBold mb-3">
                  Consultancy Frameworks
                </p>
                <p className="">
                  Access placeshaping and the future of cities, plus all types
                  of built environment consultancy across the UK.
                </p>
                {/* Card Arrow */}
                <div className="relative card-heighterrr">
                  {/* Card Arrow */}
                  <div className="card-arrow">
                    <img src={Right} alt="Right Arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Latest Updates */}
        <div className="flex flex-col-reverse md:flex-row md:pl-20 mx-0 md:mx-6 mb-10 relative gap-8">
          {/* Left Side */}
          <div className="flex lg:flex-row flex-col border-b-2 border-gray-70  md:items-center gap-6 w-[100%] md:w-[75%]">
            <p className="bg-scapeGray700 text-white py-2 px-4 font-satoshi text-sm 0">
              {" "}
              Latest updates{" "}
            </p>
            <p className="font-satoshiBold text-black flex items-center gap-6">
              SCAPE project to bring much-needed school places to community
              <span>
                <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
              </span>
            </p>
          </div>
          {/* Right Side */}
          <div className="flex flex-col bg-scapeBlue900 w-[100%] md:w-[30%] p-4 font-satoshi gap-6 mt-[-2rem]">
            <p className="text-white">Prefer to speak with someone at SCAPE?</p>
            <Link
              to="/"
              className="bg-scapeBlue500  text-scapeBlue900 py-4 px-6 flex items-center rounded-tl-full rounded-full font-bold font-satoshiBold w-fit contacter"
            >
              Contact us
              <span>
                <img src={ArrowT} alt="arrow" className="ml-6 flex" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default index;
export const query = graphql`
  query MyQuery {
    allSanityProjects(limit: 4) {
      nodes {
        id
        title
        description
        image {
          asset {
            gatsbyImage(height: 300)
          }
        }
      }
    }
  }
`;
