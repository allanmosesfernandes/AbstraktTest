import React from "react";
import NavbarUtil from "./NavbarUtil";
import Logo from "../../assets/images/nav/logo.png"
import { Link } from "gatsby";

function Navbar() {
  return (
    <>
      <NavbarUtil />
      <nav className="md:flex hidden p-5">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="" />
        </div>
        {/* Links */}
        <div className="flex items-center gap-8 ml-auto font-satoshiBold">
          <Link to="/" className="hover:text-scapeGray300">
            Frameworks
          </Link>
          <Link to="/" className="hover:text-scapeGray300">
            Leading Procurement
          </Link>
          <Link to="/" className="hover:text-scapeGray300">
            Social Value
          </Link>

          <Link to="/" className="hover:text-scapeGray300">
            Sustainability
          </Link>
          <Link to="/" className="hover:text-scapeGray300">
            News & Media
          </Link>
          <Link to="/" className="hover:text-scapeGray300">
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
