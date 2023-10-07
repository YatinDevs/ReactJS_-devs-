import { useEffect, useState } from "react";
import "../css/AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ dispatch, editableVideo }) {
  const [video, setVideo] = useState({ initialState });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(video);
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
  }
  const handleChange = (e) => {
    e.stopPropagation();
    console.log(e.target.value, e.target.name);
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
  // 1.use Effect hook runs first time when component is mount/ render
  // 2.and as many times if any changes in dependencies added to its array.
  return (
    <>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="title "
          type="text"
          value={video.title}
        ></input>
        <input
          onChange={handleChange}
          name="views"
          placeholder="views"
          type="text"
          value={video.views}
        ></input>
        <button onClick={handleSubmit}>
          {editableVideo ? "Edit " : "Add "}
        </button>

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
