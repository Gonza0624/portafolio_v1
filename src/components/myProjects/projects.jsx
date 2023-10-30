import { Card } from "./card";
import calculator from "../../assets/calcu.jpg";
import puzzle from "../../assets/puzzle1.jpg";
import pokemon1 from "../../assets/poke.jpg";

export const Projects = () => {
  let title = "<Projects>";
  return (
    <section className="projects" id="projects">
      <div class="projects__title">
        <h1>{title}</h1>
      </div>
      <section className="projects__gallery">
        <Card
          name="Pokedex"
          info="Application made with react native, consuming the pokemon api to show the characters and their details."
          image={pokemon1}
        />
        <Card
          name="calculadora"
          info="calculator with the basic functions of adding, subtracting, multiplying and dividing made with html css javascript and boostrap"
          image={calculator}
        />
        <Card
          name="puzzle game"
          info="puzzle game made with html css javascript bootstrap in which you have to complete the cards correctly"
          image={puzzle}
        />
      </section>
    </section>
  );
};
