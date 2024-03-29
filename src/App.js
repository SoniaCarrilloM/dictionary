import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Wise Donkey Sophie's Dictionary</h1>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/981/original/DOnkey_Sonia_with_my_Apple.jpg?1706628660"
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            This project is created by{" "}
            <a
              href="https://github.com/SoniaCarrilloM"
              target="_blank"
              rel="noreferrer noopener"
            >
              Sonia Carrillo{" "}
            </a>
            and is open-sourced on{" "}
            <a
              href="https://github.com/SoniaCarrilloM/dictionary"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://donkeysophiedictionary.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
export default App;
