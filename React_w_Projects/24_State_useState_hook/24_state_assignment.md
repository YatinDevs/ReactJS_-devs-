- Assignment 1 : Make a digital CLOCK Component using useEffect Hook. We need to only update the time Upto seconds in it. HH:MM:SS format can be used. Can you make it send a Console.log at end of every minute ?

========================================================================================================================================================

- Assignment 2 : Implement a simple TIMER that displays the elapsed time since the start button was pressed, and it can be stopped and reset. Like a stopwatch.

========================================================================================================================================================

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
(Math.floor((time - start) / (1000 _ 60 _ 60)) % 24) +
":" +
(Math.floor((time - start) / (1000 \* 60)) % 60) +
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
