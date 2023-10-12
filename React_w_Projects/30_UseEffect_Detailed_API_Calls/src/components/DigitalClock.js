import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  useEffect(() => {
    if (time.getSeconds() > 59) {
      console.log("End of mins");
    }
  }, [time]);

  const formattedtime = `${String(time.getHours()).padStart(2, "0")}:${String(
    time.getMinutes()
  ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;

  const [start, setStart] = useState(new Date());

  const Stopwatchtime =
    (Math.floor((time - start) / (1000 * 60 * 60)) % 24) +
    ":" +
    (Math.floor((time - start) / (1000 * 60)) % 60) +
    ":" +
    (Math.floor((time - start) / 1000) % 60);

  return (
    <div>
      <h1>DigitalClock</h1>
      <p>{formattedtime}</p>

      <hr></hr>
      <h1>Stop-Watch</h1>
      <p>{Stopwatchtime}</p>
      <button>Start</button>
      <button
        onClick={() => {
          setStart(new Date());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default DigitalClock;
