import { useState } from "react";
import "../css/PlayButton.css";

export default function PlayButton({ message, children, onPause, onPlay }) {
  // let status = false; // Dont Use This Approach .
  const [status, setStatus] = useState(false);

  function handleClick(e) {
    // console.log(message);
    // console.log(e);
    e.stopPropagation();
    e.preventDefault();

    if (status) onPause();
    else onPlay();

    setStatus(!status);
  }
  return (
    <button onClick={handleClick}>
      {children} : {status ? "⏸️" : "⏯️"}
    </button>
  );
}
