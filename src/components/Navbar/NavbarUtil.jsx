import { Link } from "gatsby";
import React from "react";
import Arrow from "../../assets/images/nav/arrow.svg";
import Search from "../../assets/images/nav/search.svg";

function NavbarUtil() {
  return (
    <div className="hidden md:flex bg-scapeBlue900  text-scapeGray400  font-satoshi  text-xs ">
      <div className="ml-auto flex gap-7 items-center">
        <Link to="/" className="border-r pr-6 hover:text-scapeGray300">
          Live Procurement{" "}
        </Link>
        <Link to="/" className="border-r pr-6 hover:text-scapeGray300">
          Careers
        </Link>
        {/* Add search box */}
        <div className="form-field relative flex items-center w-fit">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-noney border-scapeGray400 focus:border-scapeBlue500 w-[100px] rounded-full p-3 bg-transparent"
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
