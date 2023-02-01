import "./App.css";
import Logo from "./components/Logo";
import movies from "./assets/data/movies.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      {movies.map((section) => {
        return (
          <Section
            key={section.category}
            categoryName={section.category}
            images={section.images}
          />
        );
      })}
    </div>
  );
}

export default App;
