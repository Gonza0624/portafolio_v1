import icon1 from "../../assets/icon1.svg";

export const Navbar = () => (
  <nav class="nav">
    <ul class="nav__menu">
      <div className="nav__logo">
        <img src={icon1} alt="" />
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
  </nav>
);
