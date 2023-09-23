// - Multi Import / export:
// import { Video, Thumbnail } from "./components/Video";

// Good Practice .
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Video from "./components/Video";

export default function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Video />
      <h2>Learn React Documents :</h2>
      <Profile />
      <Gallery></Gallery>
    </div>
  );
}
