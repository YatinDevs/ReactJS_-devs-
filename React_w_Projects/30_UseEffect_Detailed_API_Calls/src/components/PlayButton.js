import { useContext, useState, memo } from "react";
import "../css/PlayButton.css";
import ThemeContext from "../context/ThemeContext";

const PlayButton = memo(function PlayButton({
  message,
  children,
  onPause,
  onPlay,
}) {
  console.log("render PlayButton..");
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
});
export default PlayButton;
