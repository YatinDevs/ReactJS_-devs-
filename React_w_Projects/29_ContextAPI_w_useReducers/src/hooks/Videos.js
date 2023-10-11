import { useContext } from "react";
import VideosContext from "../context/VideosContext";

export default function useVideos() {
  return useContext(VideosContext);
}
