import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import ClockTipoFuncion from "./components/ClockTipoFuncion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Clock />
        <ClockTipoFuncion />
      </header>
    </div>
  );
}

export default App;
