import calculadora from "../../assets/calculator.png";
import tasks from "../../assets/tasks.png";
import puzzle from "../../assets/puzzle.png";
import todo from "../../assets/todo.png";

export const Card = () => {
    return (
        <div>
            <div class="row1-container">
                <div class="box box-down cyan">
                    <h2>Calculator</h2>
                    <p>calculator with basic functions</p>
                    <a href="https://github.com/Gonza0624/calculadoraJS" target="_blank" className="repo__btn1">repositorio</a>
                    <a href="https://gonza0624.github.io/calculadoraJS/" target="_blank" rel="noopener noreferrer">
                        <img className="card__img" src={calculadora} alt="" />
                    </a>
                </div>

                <div class="box blue">
                    <h2>To-Do list</h2>
                    <p>Todo list that are automatically saved in the localstorage</p>
                    <a href="https://github.com/Gonza0624/to-do-list-js" target="_blank" className="repo__btn2">repositorio</a>
                    <a href="https://gonza0624.github.io/to-do-list-js/" target="_blank" rel="noopener noreferrer">
                        <img className="card__img" src={tasks} alt="" />
                    </a>
                </div>

                <div class="box box-down red">
                    <h2>Puzzle game</h2>
                    <p>this is a puzzle game where you have to put the correct sequence</p>
                    <a href="https://github.com/Gonza0624/puzzleGame" target="_blank" className="repo__btn3">repositorio</a>
                    <a href="https://gonza0624.github.io/puzzleGame/" target="_blank" rel="noopener noreferrer">
                        <img className="card__img" src={puzzle} alt="" />
                    </a>
                </div>
            </div>
            <div class="row2-container">
                <div class="box orange">
                    <h2>To-Do list React</h2>
                    <p>to do list made with react</p>
                    <button className="repo__btn4">Repositorio</button>
                    <img className="card__img" src={todo} alt="" />
                </div>
            </div>
        </div>
    )
}