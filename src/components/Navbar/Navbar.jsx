import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import NavbarUtil from "./NavbarUtil";
import Logo from "../../assets/images/nav/logoo.svg";
import Arrow from "../../assets/images/nav/mobile-arrow.svg";
import Search from "../../assets/images/nav/search.svg";
import ArrowBlack from "../../assets/images/nav/contact.svg";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const toggleMenu = () => {
    setHamburger(!hamburger);
  };
  useEffect(() => {
    if (hamburger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [hamburger]);
  return (
    <>
      <NavbarUtil />
      <nav className="flex md:p-5 p-3">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="z-[129] w-[170px] md:w-full " />
        </div>
        {/* Links */}
        <div className="navbar-links hidden md:flex">
          <Link to="/">Frameworks</Link>
          <Link to="/">Leading Procurement</Link>
          <Link to="/">Social Value</Link>

          <Link to="/">Sustainability</Link>
          <Link to="/">News & Media</Link>
          <Link to="/">About</Link>
        </div>
        {/* Hamburger */}
        <button
          className={
            hamburger ? "hamburger-icon open" : "hamburger-icon md:hidden block"
          }
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </button>

        <div className={hamburger ? "menu__custom active" : "menu__custom"}>
          {/* Mobile Menu Links */}
          <div className="menu-items mt-[5rem] font-satoshiBold">
            <Link to="/" className="menu-item" onClick={toggleMenu}>
              Frameworks
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
            <Link to="/" className="menu-item" onClick={toggleMenu}>
              Better Procurement
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
            <Link
              to="/news"
              className="block py-4 text-center menu-item"
              onClick={toggleMenu}
            >
              Social Value
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
            <Link
              to="/"
              className="block py-4 text-center menu-item"
              onClick={toggleMenu}
            >
              Sustainability
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
            <Link
              to="/"
              className="block py-4 text-center menu-item"
              onClick={toggleMenu}
            >
              News & Media
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
            <Link
              to="/"
              className="block py-4 text-center menu-item"
              onClick={toggleMenu}
            >
              About
              <span>
                <img src={Arrow} alt="arrow" />
              </span>
            </Link>
          </div>
          {/* Mobile Menu Base */}
          <div className="bg-scapeBlue900 text-scapeGray400 flex flex-col justify-evenly items-start px-6 font-satoshi space-y-4 pt-4 h-full">
            <Link to="/" className="block text-center">
              Live Procurement
            </Link>
            <Link to="/" className="block  text-center">
              Careers
            </Link>
            {/* Add search box */}
            <div className="form-field relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full border-scapeGray400 border-[1px] rounded-full p-3 bg-transparent"
              />
              <span>
                <img
                  src={Search}
                  alt="arrow"
                  className="ml-6 flex absolute right-4 top-4"
                />
              </span>
            </div>

            <Link
              to="/"
              className="bg-scapeBlue500 justify-between  w-full text-scapeBlue900 p-4 flex items-center rounded-full  font-bold font-satoshiBold"
            >
              Contact us
              <span>
                <img src={ArrowBlack} alt="arrow" className="ml-6 flex" />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
