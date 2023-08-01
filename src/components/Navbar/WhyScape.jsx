import React from "react";
import Cover from "../../assets/images/why/cover.svg";
import Rect from "../../assets/images/why/rect.svg";
import ArrowRight from "../../assets/images/why/arrowRight.svg";

function WhyScape() {
  return (
    <section>
      <h2 className="pl-4 md:pl-20 font-satoshiBold lg:text-6xl text-4xl text-scapeBlue900">
        Why SCAPE?
      </h2>
      {/* Why Scape Wrapper */}
      <div className="flex flex-col bg-scapeGray100 whyscapeBG pl-4 md:pl-20">
        {/* Image Container */}
        <div className="flex flex-row mt-14 mb-10 gap-6 ">
          <div><img src={Cover} alt="Cover" className="" /></div>
          <div><img src={Rect} alt="Rect" className="" /></div>
        </div>
        {/* Why Scape Copy */}
        <div className="font-satoshi w-[60%] flex flex-col mx-auto">
          <p className="text-scapeBlue900 leading-46 text-3xl mb-5">
            SCAPE is a public sector owned, not-for profit <br />
            organisation.
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

          <button className="rounded-full flex items-center bg-scapeBlue900 text-white font-satoshiBold text-xl py-4 px-8 mb-20 w-fit" type="button">
            Who we are
            <span>
              <img src={ArrowRight} alt="arrow" className="ml-6" />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default WhyScape;
