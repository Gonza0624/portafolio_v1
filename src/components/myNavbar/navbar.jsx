import logo from "../../assets/logo3.png";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="nav" onClick={(e) => e.stopPropagation()}>
        <div className="nav__container">
          <div className="nav__logo">
            <img src={logo} alt="" />
            <div>
              <h1>Gonza</h1>
              <h5>Software Developer</h5>
            </div>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav__icon" onClick={handleClick}>
            <div>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
