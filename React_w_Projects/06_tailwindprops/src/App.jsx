import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Yatin chaudhari",
    age: 23,
  };

  let newArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black border-transparent">
        Tailwind Test
      </h1>
      <Card username="YatinChaudhari" btnText="Click Me" />
      <Card username="Yatin" />
    </>
  );
}

export default App;
