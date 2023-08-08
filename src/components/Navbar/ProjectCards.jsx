import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Right from "../../assets/images/homepage/right.svg";
import RightArrow from "../../assets/images/homepage/Shape.svg";
import { Link, graphql } from "gatsby";
import ArrowT from "../../assets/images/nav/arrow.svg";

const borderColors = [
  "border-scapeYellow400",
  "border-scapeGreen500",
  "border-scapeBlue600",
  "border-scapePurple600",
];

function ProjectCards(props) {
  const { projects } = props;
  return (

    <div className="flex overflow-x-auto md:grid md:overflow-hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 lg:mb-16 md:mb-10 mb-20 w-[100%] md:w-[90%] z-10 overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group flex-col font-satoshi carder overflow-hidden xl:min-h-[430px] lg:min-h-[350px] min-h-[330px] cardSwipe"
        >
          <GatsbyImage
              image={project.image.asset.gatsbyImage}
              alt={project.title}
              className="card__image group-hover:scale-110 ease-linear duration-300 z-1 w-full"
            />
            {/* Card copy */}
            <div
              className={`flex flex-col z-10 bg-white text-sm px-4 py-6 ease-linear duration-300 ${borderColors[index]} group-hover:border-opacity-50 border-t-[8px] leading-25`}
            >
              <p className="w-[60%] text-sm font-satoshiBold mb-3 text-scapeBlue900">
                {project.title}
              </p>
              <p className="flex-grow text-scapeGray700 leading-25 font-satoshiLight">
                {project.description}
              </p>
              <div className="relative card-heighterrr">
                {/* Card Arrow */}
                <div className="card-arrow">
                  <img src={Right} alt="Right Arrow" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

  );
}

export default ProjectCards;
