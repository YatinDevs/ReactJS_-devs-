import "./css/App.css";
import React, { useContext, useReducer } from "react";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";

function App() {
  console.log("render App");
  const [mode, setMode] = useState("darkMode");
  const [editableVideo, setEditableVideo] = useState(null);
  // use Reducer
  // function -> returns state
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`} onClick={() => console.log("App")}>
        <button
          onClick={() =>
            setMode(mode === "darkMode" ? "lightMode" : "darkMode")
          }
        >
          Change Theme
        </button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList
          passVideo={videos}
          dispatch={dispatch}
          editVideo={editVideo}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;