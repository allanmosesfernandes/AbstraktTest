import React from "react";
import { Link } from "gatsby";
import Logo from "../assets/images/footer/logo.svg";
import ArrowT from "../assets/images/nav/arrow.svg";
import Twitter from "../assets/images/footer/icons/twitter.svg";
import LinkedIn from "../assets/images/footer/icons/linkedin.svg";
import Youtube from "../assets/images/footer/icons/youtube.svg";
import cyber from "../assets/images/footer/essentials.svg";
import NACF from "../assets/images/footer/NACF.svg";
import Carbon from "../assets/images/footer/carbon.png";

function Footer() {
  return (
    <footer className="bg-scapeBlue900 flex flex-col z-50 text-white text-sm font-satoshi ">
      <div className="ml-4 md:ml-20 py-10 w-[80%] ">
        <img src={Logo} className="h-10" alt="scape logo" />
        {/* Left Side */}
        <div className="flex md:flex-row flex-col gap-10 w-full border-b-2 pb-10">
          <div className="md:w-[40%] w-[90%]">
            <p className="py-6 w-full lg:w-[75%] leading-25">
              SCAPE is a public sector organisation, dedicated to creating
              efficiency and social value via the built environment.
            </p>
            <p className="text-lg mb-6">
              0800 669 6565
              <br />
              general@scape.co.uk
            </p>
            <div className="flex lg:flex-row flex-col gap-6 ml-auto">
              <Link
                to="/"
                className="bg-scapeBlue500  text-scapeBlue900 py-4 px-6 flex items-center rounded-tl-full rounded-full font-bold font-satoshiBold w-fit contacter mr-4"
              >
                Contact us
                <span>
                  <img src={ArrowT} alt="arrow" className="ml-6 flex" />
                </span>
              </Link>
              <div className="flex gap-8">
                <Link
                  to="/"
                  className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-scapeGray300 flex items-center justify-center hover:border-scapeBlue500 transition-all ease-in-out duration-300"
                >
                  <img
                    src={Twitter}
                    alt=""
                    className="cursor-pointer w-[30px] h-[30px]"
                  />
                </Link>
                <Link
                  to="/"
                  className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-scapeGray300 flex items-center justify-center hover:border-scapeBlue500 transition-all ease-in-out duration-300"
                >
                  <img src={LinkedIn} alt="" className="cursor-pointer" />
                </Link>
                <Link
                  to="/"
                  className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-scapeGray300 flex items-center justify-center hover:border-scapeBlue500 transition-all ease-in-out duration-300"
                >
                  <img src={Youtube} alt="" className="cursor-pointer" />
                </Link>

              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:w-[60%] w-full relative">
            {/* Left */}
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex flex-col py-6 space-y-4">
                <a href="#" className="underline leading-25 font-medium ">
                  Policies and Statements
                </a>
                <a href="#" className="underline leading-25 font-medium">
                  Cyber Essentials Certified
                </a>
                <a href="#" className="underline leading-25 font-medium">
                  Carbon Reduction Code Champions
                </a>
              </div>
              <div className="flex flex-row-reverse md:flex-row gap-6 my-4 lg:absolute md:right-0  mr-auto items-center">
                <img src={cyber} alt="" />
                <img src={NACF} alt="" />
              </div>
              <div className="leading-23 text-xs md:mt-0 mt-2">
                <p className="">
                  Registered in England Number 5660357 VAT: 877 9484 43
                </p>
                <p>
                  Registered office: 2nd Floor, City Gate West, Tollhouse Hill,
                  Nottingham NG1 5AT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center pt-10">
          <div className="flex flex-col space-y-2">
            <p className="text-scapeBlue500 font-satoshiBold  font-bold leading-26">
              Creating a zero carbon internet
            </p>
            <p>
              This website was created following sustainable design practices.
              <a href="#" className="underline ml-1">
                Find out more
              </a>
            </p>
          </div>
          <div className="flex flex-col text-center  lg:ml-auto my-4">
            <img src={Carbon} alt="" className="w-[200px]" />
            <p className="text-xs w-fit">Cleaner than 96% of pages tested</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
