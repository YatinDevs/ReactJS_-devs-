import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>Videos</div>
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
