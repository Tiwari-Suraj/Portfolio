import React, { useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%"; // Updated to full width slide-out
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <img
        className="nav-mob-open"
        onClick={openMenu}
        src={menu_open}
        alt="open menu"
      />

      <ul ref={menuRef} className="nav_menu">
        <img
          className="nav-mob-close"
          onClick={closeMenu}
          src={menu_close}
          alt="close menu"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
