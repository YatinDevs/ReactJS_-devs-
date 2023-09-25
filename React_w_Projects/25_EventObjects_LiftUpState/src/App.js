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

  function AddVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addNew={AddVideos}></AddVideo>

      <VideoList passVideo={videos} />
    </div>
  );
}

export default App;
