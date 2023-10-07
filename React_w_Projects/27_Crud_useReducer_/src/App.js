import "./css/App.css";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, seteditableVideo] = useState(null);

  function AddVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log(id);
  }
  function editVideo(id) {
    // const res = videos.find((video) => video.id === id);
    seteditableVideo(videos.find((video) => video.id === id));
    // console.log(res);
  }
  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
    // console.log(newVideos);
    // console.log(video);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo
        updateVideo={updateVideo}
        addNew={AddVideos}
        editableVideo={editableVideo}
      ></AddVideo>
      <VideoList
        passVideo={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      />
    </div>
  );
}

export default App;
