// import img from "../../assets/img2.png";
import img2 from "../../assets/robot.svg";
import { ImArrowRight2 } from "react-icons/im";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__content">
        <h1 className="home__title">
          <span className="home__span">
            {" "}
            <span style={{ color: "white" }}>Hello,</span> im Gonzalo
          </span>
          software developer
          <hr className="home__line" />
        </h1>
        <p className="home__p">
          Hello, welcome to my portfolio, I'm Gonzalo Salazar, I'm currently an
          intern at Globant and I'm looking to continue growing and increasing
          my knowledge in software development.
        </p>
        <div className="home__container-btn">
          <button className="home__btn">
            Descarga mi CV <ImArrowRight2 className="icon-btn" />
          </button>
        </div>
      </div>
      <figure className="home__img">
        <img src={img2} alt="" />
      </figure>
    </section>
  );
};
