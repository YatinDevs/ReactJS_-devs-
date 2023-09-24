import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  let message = "";
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
            // message="abc"
            onPlay={() =>
              console.log((message = "Playing.. : title ->"), video.title)
            }
            onPause={() =>
              console.log((message = "Paused.. : title ->"), video.title)
            }
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
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
