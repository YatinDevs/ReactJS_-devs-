import { useState } from "react";
import "../css/AddVideo.css";

function AddVideo({ addNew }) {
  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(video);
    addNew(video);
  }
  const handleChange = (e) => {
    e.stopPropagation();
    console.log(e.target.value, e.target.name);
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="title "
          type="text"
        ></input>
        <input
          onChange={handleChange}
          name="views"
          placeholder="views"
          type="text"
        ></input>
        <button onClick={handleSubmit}>Add Video</button>

        {/* <button
        //   onClick={(e) => {
        //     e.preventDefault();
        //     setVideos([
        //       ...videos,
        //       {
        //         id: videos.length + 1,
        //         title: "NewVideo tutorial",
        //         views: "1M",
        //         time: "1 month ago",
        //         channel: "Coder Dost",
        //         verified: true,
        //       },
        //     ]);
        //   }}
        >
          Add Video
        </button> */}
      </form>
    </>
  );
}

export default AddVideo;
