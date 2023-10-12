import Video from "./Video";
import PlayButton from "./PlayButton";
import { useCallback, useContext, useEffect, useState } from "react";
import useVideos from "../hooks/Videos";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";

export default function VideoList({ editVideo }) {
  // const [videos, setVideo] = useState([]);

  const url = "https://my.api.mockaroo.com/video.json?key=91945440";
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  useEffect(() => {
    async function handleVideos() {
      const response = await axios.get(url);
      console.log("getVideos", response.data);
      dispatch({ type: "LOAD", payload: response.data });
    }
    handleVideos();
  }, [dispatch]);

  const play = useCallback(() => console.log("Play"), []);
  const pause = useCallback(() => console.log("Pause"), []);
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
          <PlayButton message="play-video" onPlay={play} onPause={pause}>
            {video.title}
          </PlayButton>
        </Video>
      ))}
      {/* <button onClick={handleClick}>AddVideos</button> */}
    </>
  );
}
