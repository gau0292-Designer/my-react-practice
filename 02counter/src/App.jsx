import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () => {
    setCounter((prev) => Math.min(prev + 1, 20));
  };

  const removeValue = () => {
    setCounter((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <h1>My React Counter React</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

      <footer>{counter}</footer>
    </>
  );
}

export default App;
