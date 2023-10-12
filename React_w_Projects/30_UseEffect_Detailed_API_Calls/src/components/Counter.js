import { useRef, useState } from "react";

function Counter() {
  console.log("render Counter");

  //   let number = 0;
  // Destructuring useState
  // returns 1 variable and callbackFunction.
  const [number, setNumber] = useState(0);
  //   console.log(useState);
  //   console.log(setNumber);

  let num = useRef(0);
  const handleClick = (e) => {
    e.stopPropagation();
    // number++;
    // setTimeout(() => {
    //   setNumber((number) => number + 1);
    // }, 2000);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log("clicked", number);
    console.log("clicked", num.current);
  };

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
