import { useState } from "react";

function Counter() {
  console.log("render Counter");

  //   let number = 0;
  // Destructuring useState
  // returns 1 variable and callbackFunction.
  const [number, setNumber] = useState(0);
  //   console.log(useState);
  //   console.log(setNumber);

  const handleClick = (e) => {
    e.stopPropagation();
    // number++;
    // setTimeout(() => {
    //   setNumber((number) => number + 1);
    // }, 2000);
    setNumber((number) => number + 1);

    console.log("clicked", number);
  };

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
