import "./css/App.css";
import React, { useReducer } from "react";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("render App");

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

  // const [videos, setVideos] = useState(videoDB);

  // function AddVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // action : {type:'ADD',payload:video}
  // }

  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  //   // setVideos(videos.filter((video) => video.id !== id));
  //   console.log(id);
  // }
  function editVideo(id) {
    // const res = videos.find((video) => video.id === id);
    setEditableVideo(videos.find((video) => video.id === id));
    // console.log(res);
  }
  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video });

  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newVideos = [...videos];
  //   // newVideos.splice(index, 1, video);
  //   // setVideos(newVideos);
  //   // console.log(newVideos);
  //   console.log(video);
  // }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      <VideoList passVideo={videos} dispatch={dispatch} editVideo={editVideo} />
    </div>
  );
}

export default App;
