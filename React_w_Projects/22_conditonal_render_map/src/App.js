import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
        ></Video>
      ))}
    </div>
  );
}

export default App;
