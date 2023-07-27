import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Right from "../../assets/images/homepage/right.svg";

const borderColors = [
  "scapeYellow400",
  "scapeGreen500",
  "scapeBlue600",
  "scapePurple600",
];

function ProjectCards(props) {
  const { projects } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16 grid-flow-col">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group flex flex-col font-satoshi carder overflow-hidden min-h-[375px]"
        >
          <GatsbyImage
            image={project.image.asset.gatsbyImage}
            alt={project.title}
            className="card__image group-hover:scale-110 ease-linear duration-300 z-1"
          />
          {/* Card copy */}
          <div
            className={`flex flex-col z-10 bg-white text-sm px-4 py-6 ease-linear duration-300 border-${borderColors[index]} group-hover:border-opacity-50 border-t-[8px]`}
          >
            <p className="w-[60%] font-satoshiBold mb-3">{project.title}</p>
            <p className="flex-grow">{project.description}</p>
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
