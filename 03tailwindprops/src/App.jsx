import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    username: "gaurav",
    password: "123",
  };
  return (
    <>
      <h1 className="bg-green-700 text-black p-3 rounded-2xl mb-2">
        tailwind test
      </h1>
      <Card username="Gaurav Sharma" btnTxt="Click Me" />
      <Card username="Manoj Sharma" />
    </>
  );
}

export default App;
