import logo from "../../assets/logo.svg";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="nav__menu">
          <div className="nav__logo">
            <img src={logo} alt="" />
            <div>
              <h1>Portfolio</h1>
              <h5>Gonzalo</h5>
            </div>
          </div>
          <li className="nav__li">
            <a href="#">Home</a>
          </li>
          <li className="nav__li">
            <a href="#">About me</a>
          </li>
          <li className="nav__li">
            <a href="#">Projects</a>
          </li>
          <li className="nav__li">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        +
      </button>
    </nav>
  );
};
