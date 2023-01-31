import "./App.css";
import Logo from "./components/Logo";
import movies from "./assets/data/movies.json";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Logo />
      {movies.map((section) => {
        return (
          <Section
            key={section.category}
            categoryName={section.category}
            images={section.images}
          />
        );
      })}
    </>
  );
}

export default App;
