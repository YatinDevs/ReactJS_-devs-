import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(2);
  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 10) {
      setCounter((counter) => counter + 1);
      console.log("value Added", counter, Math.random());
    }
  };
  const reduceValue = () => {
    // counter = counter + 1;
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
    console.log("value Added", counter, Math.random());
  };
  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Count {counter}</button>
      <button onClick={reduceValue}>Reduce Count {counter}</button>
    </>
  );
}

export default App;
