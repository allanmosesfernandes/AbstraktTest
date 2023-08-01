import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import CardImage from "../assets/images/homepage/card-image.png";
import Right from "../assets/images/homepage/right.svg";
import RightArrow from "../assets/images/homepage/Shape.svg";
import ArrowT from "../assets/images/nav/arrow.svg";
import ProjectCards from "../components/Navbar/ProjectCards";
import SEO from "../components/Navbar/SEO";
import WhyScape from "../components/Navbar/WhyScape";
import RoadToZero from "../components/Navbar/RoadToZero";
import BuildingFutures from "../components/Navbar/BuildingFutures";

const index = (data) => {
  /* Fetch projects from query and pass it as props */
  const projects = data.data.allSanityProjects.nodes;

  return (
    <>
      <SEO />
      <Navbar />
      <main className="flex flex-col relative z-10">
        <div className="bg" />
        <section>
          {/* Main Title Copy */}
          <div className="ml-4 md:ml-20 my-4 ">
            <h2 className="font-satoshiBold lg:text-6xl text-4xl mb-2 text-scapeBlue900">
              Power your procurement.{" "}
            </h2>
            <h2 className="font-satoshi lg:text-6xl text-4xl text-scapeBlue900">
              Accelerate your public sector projects.
            </h2>
          </div>
          <div className="bg-scapeGray100 flex flex-col pl-4 md:pl-14 mx-0 md:mx-6 mt-[-1rem] leading-normal">
            {/* Body Copy  */}
            <p className="text-scapeGray700 text-md w-[100%] lg:w-[60%] font-satoshi py-6 z-10">
              Your go-to suite of compliant, direct award, not-for-profit,
              public sector procurement frameworks. SCAPE delivers high quality
              outcomes for you sustainably, at pace, and with social value and
              community legacy at the heart of your projects.{" "}
              <span className="font-satoshiBold">
                Get started with an actively managed framework by the public
                sector, for the public sector:
              </span>
            </p>
            <ProjectCards projects={projects} />

            {/* Cards Grid */}
          </div>
          {/* Latest Updates */}
          <div className="flex flex-col-reverse md:flex-row md:pl-20 mx-4 md:mx-6 mb-2 lg:mb-10 relative gap-8">
            {/* Left Side */}
            <div className="flex lg:flex-row flex-col border-b-2 border-gray-70  md:items-center gap-6 w-[100%] md:w-[75%]">
              <p className="bg-scapeGray700 text-white p-4 font-satoshi text-sm 0 w-fit">
                {" "}
                Latest updates{" "}
              </p>
              <p className="font-satoshiBold text-black flex items-center gap-6 py-2">
                SCAPE project to bring much-needed school places to community
                <span>
                  <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
                </span>
              </p>
            </div>
            {/* Right Side */}
            <div className="flex flex-col bg-scapeBlue900 w-[100%] md:w-[30%] p-4 font-satoshi gap-6 md:mt-[-4rem] mt-[-2rem]">
              <p className="text-white">
                Prefer to speak with someone at SCAPE?
              </p>
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
        {/* Why Scape */}
        <WhyScape />
        <RoadToZero />
        <BuildingFutures />
      </main>
    </>
  );
};

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
            gatsbyImage(layout: CONSTRAINED, height: 350)
          }
        }
      }
    }
  }
`;

export function Head() {
  return (
    <>
      <title>Abstrakt Scape</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  );
}
