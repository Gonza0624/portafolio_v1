import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import git from "../../assets/skills/git.png";
import sass from "../../assets/skills/sass.png";
import typeScript from "../../assets/skills/typeScript.png";
import ReactN from "../../assets/skills/RN.svg";
import php from "../../assets/skills/php.png";
import laravel from "../../assets/skills/laravel.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import mysql from "../../assets/skills/mysql.png";

export const Skills = () => {
  let title = "<Skills>";
  return (
    <section className="skills" id="skills">
      <div class="skills__container">
        <div class="skills__title">
          <h1>{title}</h1>
        </div>
        <div className="skills__flex">
          <div class="skills__my-skill">
            <img className="skills__img" src={html} />
            <h4>HTML</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={css} />
            <h4>CSS</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={js} />
            <h4>Javascript</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={typeScript} />
            <h4>TypeScript</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={react} />
            <h4>React JS</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={ReactN} />
            <h4>React Native</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={sass} />
            <h4>Sass</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={git} />
            <h4>Git</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={php} />
            <h4>PHP</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={laravel} />
            <h4>Laravel</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={bootstrap} />
            <h4>Bootstrap</h4>
          </div>
          <div class="skills__my-skill">
            <img className="skills__img" src={mysql} />
            <h4>MySQL</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
