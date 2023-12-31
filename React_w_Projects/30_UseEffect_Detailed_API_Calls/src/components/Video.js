import { useContext, useEffect, useState } from "react";
import "../css/Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";
import useCounter from "../hooks/Counters";
function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  //   let channelJSX;

  /*
  // We Are Breaking JSX here Not Good Approach
  // Also We cannot write if else in JSX below 
  // So Better lets Try Ternary operators
  if (verified) {
    channelJSX = <div className="channel">{channel}✅</div>;
  } else {
    channelJSX = <div className="channel">{channel}</div>;
  }
 */

  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();
  const [count, increment, decrement] = useCounter(0);

  /*
  // first time rendering --> mounting
  // remove something --> unmounting
  useEffect(() => {
    const idInterval = setInterval(() => {
      console.log("videoPlaying..", id);
    }, 5000);

    return () => {
      clearInterval(idInterval);
    };
  }, [id]);
  */

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          // className={theme}
          className="close"
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          X
        </button>
        <button
          // className={theme}
          className="edit"
          onClick={() => {
            editVideo(id);
          }}
        >
          Edit
        </button>

        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>

        {/* Conditional Rendering with Ternary */}

        <div className="channel">
          {channel} {verified && "✅"}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>

        <button onClick={increment}>UpVote</button>
        <p> Vote : {count}</p>
        <button onClick={decrement}>DownVote</button>
      </div>
    </>
  );
}

export default Video;
