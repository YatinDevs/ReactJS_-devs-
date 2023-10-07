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

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addNew={AddVideos} editableVideo={editableVideo}></AddVideo>
      <VideoList
        passVideo={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      />
    </div>
  );
}

export default App;
