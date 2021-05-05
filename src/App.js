import logo from "./lul.png";
import "./App.css";
import Joke from "./components/joke";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Joke></Joke>
        <a
          className="App-link"
          href="https://sv443.net/jokeapi/v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JokeAPI
        </a>
      </header>
    </div>
  );
}

export default App;
