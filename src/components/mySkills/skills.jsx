import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import git from "../../assets/skills/git.png";
import sass from "../../assets/skills/sass.png";

export const Skills = () => {
  return (
    <section className="skills">
      <div class="skills__container">
        <div className="skills__flex">
          <div class="skills__my-skill">
            <img className="skills__img" src={js} />
            <h4>Javascript</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={react} />
            <h4>React</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={html} />
            <h4>HTML</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={css} />
            <h4>CSS</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={sass} />
            <h4>Sass</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={git} />
            <h4>Git</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
