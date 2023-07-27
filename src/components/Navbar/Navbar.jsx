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
          <img src={Logo} alt="logo" />
        </div>
        {/* Links */}
        <div className="navbar-links">
          <Link to="/">
            Frameworks
          </Link>
          <Link to="/">
            Leading Procurement
          </Link>
          <Link to="/">
            Social Value
          </Link>

          <Link to="/">
            Sustainability
          </Link>
          <Link to="/">
            News & Media
          </Link>
          <Link to="/">
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
