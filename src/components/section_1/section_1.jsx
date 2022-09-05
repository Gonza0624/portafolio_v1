import img1 from "../../assets/img1.svg";

export function Section1() {
  return (
    <section className="section-1">
      <figure className="section-1__img">
        <img src={img1} alt="" />
      </figure>
      <div className="section-1__content">
        <h1 className="section-1__title">
          Hello, im Gonzalo, front end developer
          <hr className="section-1__line" />
        </h1>
        <p className="section-1__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          laboriosam explicabo maxime veniam aut officia reiciendis aspernatur
          numquam architecto exercitationem atque
        </p>
        <button className="section-1__btn">My projects</button>
      </div>
    </section>
  );
}
