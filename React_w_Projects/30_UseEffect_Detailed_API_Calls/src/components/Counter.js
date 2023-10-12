import { useCallback, useMemo, useRef, useState } from "react";

function Counter() {
  // console.log("render Counter");

  //   let number = 0;
  // Destructuring useState
  // returns 1 variable and callbackFunction.
  const [number, setNumber] = useState(5);
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

  // Prevents from rendering and creating multiple address
  const fibFunc = useCallback(function fibonnaci(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }, []);

  // Prevents from rendering if dependency is not changed
  const fibMemoized = useMemo(() => fibFunc(number), [number]);

  return (
    <>
      <h1 style={{ color: "white" }}>
        {number} | {fibMemoized}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
