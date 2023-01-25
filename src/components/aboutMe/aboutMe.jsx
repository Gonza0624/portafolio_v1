import about from "../../assets/about2.svg";

export const About = () => {
  let title = "<About>";
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div class="about__title">
          <h1>{title}</h1>
        </div>
        <p className="about__p">
          my name is{" "}
          <span className="about__span">Gonzalo Salazar Carvajal</span>, I am 20
          years old, I am an apprentice of the training program Technologist in
          analysis and development of information systems in the{" "}
          <span className="about__span">Sena</span>, I am currently an intern at{" "}
          <span className="about__span">Globant</span> and fulfill the role of{" "}
          <span className="about__span">web UI developer</span>, I focus on
          front end but I am open to learn new technologies both backend and
          mobile, I am a responsible person, organized, creative, also I learn
          fast and I adapt to any situation, eager to learn and grow in the
          future both personally and professionally.
        </p>
        <figure className="about__img">
          <img src={about} alt="" />
        </figure>
      </div>
    </section>
  );
};
