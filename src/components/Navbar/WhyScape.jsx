import React from "react";
import Cover from "../../assets/images/why/cover.svg";
import Rect from "../../assets/images/why/rect.svg";
import ArrowRight from "../../assets/images/why/arrowRight.svg";
import Fade from "react-reveal/Fade";

function WhyScape() {
  return (
    <section>
      <Fade bottom>
        <h2 className="container pl-4 md:pl-20 font-satoshiBold lg:text-5xl text-4xl text-scapeBlue900 mt-[2rem]">
          Why SCAPE?
        </h2>
      </Fade>
      {/* Why Scape Wrapper */}
      <div className=" flex flex-col bg-scapeGray100 whyscapeBG pl-4 md:pl-20">
        {/* Image Container */}
        <div className="flex flex-row mt-14 mb-10 md:gap-6 gap-2 max-h-[400px] lg:min-h-0 min-h-[200px] overflow-hidden">
          <div className="lg:w-[90%] w-[100%]">
            <img
              src={Cover}
              alt="Cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-[20%] w-[10%]">
            <img src={Rect} alt="Rect" className="object-cover h-full" />
          </div>
        </div>
        {/* Why Scape Copy */}
        <Fade bottom>
          <div className="container font-satoshi lg:w-[50%] md:w-[80%] w-full flex flex-col mx-auto">
            <p className="text-scapeBlue900 leading-46 text-3xl mb-5 w-[90%]">
              SCAPE is a public sector owned, not-for profit organisation.
            </p>
            <p className="bodycopy">
              Any surplus income generated is returned to the public sector via
              our six local authority shareholders. For over a decade, SCAPE have
              partnered with the best, industry leading delivery partners to
              provide fully compliant framework services across the UK.
            </p>
            <p className="bodycopy">
              Procured via a two-stage ‘restricted’ process, our frameworks comply
              with Regulation 28 of the Public Contracts (England, Wales and
              Northern Ireland) Regulations 2015, and Regulation 29 of the Public
              Contracts (Scotland) Regulations 2015. Quick and compliant, our
              direct award approach enables you to engage with the very best
              delivery partners to accelerate your project.
            </p>
            <p className="bodycopy">
              The role of the public sector is more pivotal than ever, and we're
              here to power your procurement and accelerate your projects.
            </p>
            <button
              className="group button__hover rounded-full flex items-center bg-scapeBlue900 text-white font-satoshiBold text-sm md:text-xl py-4 px-8 mb-20 w-fit"
              type="button"
            >
              Who we are
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
        </Fade>
      </div>
    </section>
  );
}

export default WhyScape;
