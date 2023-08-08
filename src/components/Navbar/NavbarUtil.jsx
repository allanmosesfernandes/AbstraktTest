import { Link } from "gatsby";
import React from "react";
import Arrow from "../../assets/images/nav/arrow.svg";
import Search from "../../assets/images/nav/search.svg";

function NavbarUtil() {
  return (
    <div className="hidden z-10 lg:flex bg-scapeBlue900  text-scapeGray400 text-xs font-satoshiLight">
      <div className="ml-auto flex gap-4 items-center z-10">
        <Link
          to="/"
          className="border-r pr-6 hover:text-scapeGray300 leading-25 border-scapeGray400"
        >
          Live Procurement{" "}
        </Link>
        <Link
          to="/"
          className="border-scapeGray400 border-r pr-6 hover:text-scapeGray300 leading-25"
        >
          Careers
        </Link>
        {/* Add search box */}
        <div className="form-field relative flex items-center w-fit">
          <input
            type="text"
            placeholder="Search"
            className=" border-scapeGray400 focus:outline-none focus:ring focus:scapeBlue500 rounded-full p-3 bg-transparent transition-border-color"
          />
          <span>
            <img
              src={Search}
              alt="arrow"
              className="ml-6 flex absolute right-4 top-[30%]"
            />
          </span>
        </div>
        {/* <Link to="/" className="flex items-center hover:text-scapeGray300">
          Search
          <span>
            <img src={Search} alt="arrow" className="ml-6 flex" />
          </span>
        </Link> */}
        <Link
          to="/"
          className="bg-scapeBlue500  text-scapeBlue900 p-4 flex items-center rounded-tl-full rounded-bl-full font-bold font-satoshiBold"
        >
          Contact
          <span>
            <img src={Arrow} alt="arrow" className="ml-6 flex" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavbarUtil;
