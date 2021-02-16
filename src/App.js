import "./styles.css";
import Greet from "./components/Greet.js";
import Toggle from "./components/Toggle.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greet />
      <Toggle />
    </div>
  );
}
