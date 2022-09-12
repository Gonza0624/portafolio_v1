import img from "../../assets/img2.png";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">
          Hello, <span className="home__span">im Gonzalo</span>, front end developer
          <hr className="home__line" />
        </h1>
        <p className="home__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          laboriosam explicabo maxime veniam aut officia reiciendis aspernatur
          numquam architecto
        </p>
        <div>
          <button className="home__btn">My projects</button>
          <button className="home__btn--mod">My projects</button>
        </div>
      </div>
      <figure className="home__img">
        <img src={img} alt="" />
      </figure>
    </section>
  );
};
