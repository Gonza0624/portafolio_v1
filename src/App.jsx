import { Navbar } from "./components/myNavbar/navbar";
import { Home } from "./components/myHome/home";
import { Projects } from "./components/myProjects/projects";
import { Skills } from "./components/mySkills/skills";
import { Form } from "./components/myForm/form";
import { About } from "./components/aboutMe/aboutMe";
import { Footer } from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Form />
      <Footer />
    </>
  );
};

export default App;
