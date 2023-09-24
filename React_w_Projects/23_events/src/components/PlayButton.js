import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; // don't use this approach;
  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();
    window.close();

    if (playing) onPause(console.log(message));
    else onPlay(console.log(message));

    playing = !playing;
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
