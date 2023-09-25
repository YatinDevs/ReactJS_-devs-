import "./css/App.css";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
function App() {
  const [videos, setVideos] = useState(videoDB);

  function AddVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addNew={AddVideos}></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
        >
          <PlayButton
            message="play-video"
            onPlay={() => console.log("Play", video.title)}
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div className="btn-div">
        {/* <PlayButton
          message="pause-video"
          onSmash={() => alert("Video Paused!")}
        >
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
