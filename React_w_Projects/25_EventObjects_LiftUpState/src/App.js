import "./css/App.css";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
function App() {
  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "NewVideo tutorial",
                views: "1M",
                time: "1 month ago",
                channel: "Coder Dost",
                verified: true,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
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
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
