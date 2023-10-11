import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

/*React Hook "useContext" cannot be called at the top level. 
React Hooks must be called in a React function component or a custom
 React Hook function. */
// custom hook
function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
