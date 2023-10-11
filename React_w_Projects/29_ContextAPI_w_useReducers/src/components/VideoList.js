import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import VideosContext from "../context/VideosContext";

export default function VideoList({ editVideo }) {
  const videos = useContext(VideosContext);
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          editVideo={editVideo}
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
    </>
  );
}
