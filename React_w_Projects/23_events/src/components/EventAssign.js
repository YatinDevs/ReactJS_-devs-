import "./EventAssign.css";
import { useState } from "react";

function EventAssign() {
  const [over, setOver] = useState(false);
  const [focus, setfocus] = useState(false);

  const url =
    "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  const alt = "image-1";

  function handleMouseOver(e) {
    e.preventDefault();
    setOver(true);
    console.log("handledMouseOver.....");
  }
  function handleMouseOut(e) {
    setOver(false);
    console.log("handledMouseOut.....");
    e.preventDefault();
  }

  function handleDoubleClick(e) {
    alert("Single Click Please");
    console.log("Double Click Event.....! Please Click Once");
  }

  const handleonFocus = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setfocus(true);
    console.log("focused on the textbox");
  };

  const handleonFocusOut = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setfocus(false);
    console.log("focused out Blur on the textbox");
  };

  const handlecut = (e) => {
    e.stopPropagation();
    console.log("onCut Event handled on the textbox");
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    console.log("OnCopy Event handled on the textbox");
  };

  const handlepaste = (e) => {
    e.stopPropagation();
    console.log("onPaste Event handled on the textbox");
  };

  const handleSubmit = (e) => {
    alert("The browser will not reload when the alert box is closed.");
    console.log("submit");

    e.preventDefault();
  };

  const keyDown = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      console.log("Enter");
      alert("Submit Form?");
    }
  };

  return (
    <div className="event-container">
      <div className="image-cont">
        <img
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          src={url}
          alt={alt}
          style={over ? { transform: "scale(1.1)" } : null}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text Box : </label>
        <input
          onKeyDown={keyDown}
          onCopy={handleCopy}
          onCut={handlecut}
          onPaste={handlepaste}
          onFocus={handleonFocus}
          onBlur={handleonFocusOut}
          type="text"
          id="text"
          placeholder="Input here.."
          style={focus ? { padding: "0.5rem 0.2rem" } : null}
        />
        <button type="submit">Submit</button>
      </form>
      <button type="submit" onDoubleClick={handleDoubleClick}>
        Submit
      </button>
    </div>
  );
}

export default EventAssign;
