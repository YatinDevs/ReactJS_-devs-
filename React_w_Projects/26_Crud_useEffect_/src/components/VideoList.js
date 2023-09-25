import Video from "./Video";
import PlayButton from "./PlayButton";

export default function VideoList({ passVideo }) {
  return (
    <>
      {passVideo.map((video) => (
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
    </>
  );
}
