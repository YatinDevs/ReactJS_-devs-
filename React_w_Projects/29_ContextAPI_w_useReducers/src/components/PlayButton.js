import { useContext, useState } from "react";
import "../css/PlayButton.css";
import ThemeContext from "../context/ThemeContext";

export default function PlayButton({ message, children, onPause, onPlay }) {
  // let status = false; // Dont Use This Approach .
  const [status, setStatus] = useState(false);

  const theme = useContext(ThemeContext);

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
    <button className={theme} onClick={handleClick}>
      {children} : {status ? "⏸️" : "⏯️"}
    </button>
  );
}
