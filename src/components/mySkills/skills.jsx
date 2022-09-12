import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import git from "../../assets/skills/git.png";
import sass from "../../assets/skills/sass.png";
// import bootstrap from "../../assets/skills/bootstrap.png";
// import laravel from "../../assets/skills/laravel.png";

export const Skills = () => {
  return (
    <section className="main-skills">
      <div class="container-skills">
        <div className="flex-skills">
          <div class="skill">
            <img className="skill__img" src={js} />
            <h4>Javascript</h4>
          </div>
          <div class="skill">
            <img className="skill__img" src={react} />
            <h4>React</h4>
          </div>
          <div class="skill">
            <img className="skill__img" src={html} />
            <h4>HTML</h4>
          </div>
          <div class="skill">
            <img className="skill__img" src={css} />
            <h4>CSS</h4>
          </div>
          <div class="skill">
            <img className="skill__img" src={sass} />
            <h4>Sass</h4>
          </div>
          <div class="skill">
            <img className="skill__img" src={git} />
            <h4>Git</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
