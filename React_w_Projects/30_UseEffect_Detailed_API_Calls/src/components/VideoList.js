import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext, useEffect, useState } from "react";
import useVideos from "../hooks/Videos";
import axios from "axios";

export default function VideoList({ editVideo }) {
  const [videos, setVideo] = useState([]);
  const url = "https://my.api.mockaroo.com/video.json?key=91945440";

  async function handleVideos() {
    const response = await axios.get(url);
    console.log("getVideos", response.data);
    setVideo(response.data);
  }
  useEffect(() => {
    handleVideos();
  }, []);

  // const videos = useVideos();
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
      {/* <button onClick={handleClick}>AddVideos</button> */}
    </>
  );
}
