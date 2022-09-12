import { Card } from "./card";
import calculator from "../../assets/calcu.jpg";
import todo from "../../assets/todo.jpg";
import puzzle from "../../assets/puzzle1.jpg";

export const Projects = () => {
  return (
    <section className="projects">
      <div class="projects__title">
        <h1>Projects</h1>
      </div>
      <section className="projects__gallery">
        <Card
          name="calculadora"
          info="calculator with the basic functions of adding, subtracting, multiplying and dividing made with html css javascript and boostrap"
          link="https://gonza0624.github.io/calculadoraJS/"
          repo="https://github.com/Gonza0624/calculadoraJS"
          image={calculator}
        />
        <Card
          name="puzzle game"
          info="puzzle game made with html css javascript bootstrap in which you have to complete the cards correctly"
          link="https://gonza0624.github.io/puzzleGame/"
          repo="https://github.com/Gonza0624/puzzleGame"
          image={puzzle}
        />
        <Card
          name="to do list"
          info="task list to create and delete, made with html css javascript localstorage and sweetalerts"
          link="https://gonza0624.github.io/to-do-list-js/"
          repo="https://github.com/Gonza0624/to-do-list-js"
          image={todo}
        />
        <Card
          name="example"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, ad!"
          link="#"
          repo="#"
        />
        <Card
          name="example"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, ad!"
          link="#"
          repo="#"
        />
      </section>
    </section>
  );
};
