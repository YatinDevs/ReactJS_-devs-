import { useState } from "react";
import "../css/Video.css";

function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
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
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

export default Video;
