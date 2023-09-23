import "./PlayButton.css";

export default function PlayButton({ message, children, onPause, onPlay }) {
  let status = false; // Dont Use This Approach .
  function handleClick(e) {
    // console.log(message);
    // console.log(e);
    e.stopPropagation();
    e.preventDefault();

    if (status) onPause();
    else onPlay();

    status = !status;
  }
  return (
    <button onClick={handleClick}>
      {children} {status ? ">" : "||"}
    </button>
  );
}
