// - Multi Import / export:
// import { Video, Thumbnail } from "./components/Video";

// Good Practice .
import Bio from "./components/Bio";
import TodoList1 from "./components/Date";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import Video from "./components/Video";

export default function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <br></br>
      <br></br>
      <hr></hr>
      <Video />
      <h2>Learning of Props:</h2>
      <Video title="ReactJs Tutorial" border="5px solid red" />
      <Video title="ReactJs Tutorial" border="5px solid blue" />
      <Video />

      <br></br>
      <br></br>
      <hr></hr>
      <h2>Learn React Documents :</h2>
      <Profile />
      <br></br>
      <br></br>
      <hr></hr>
      <h2>Learnings of Component & JS in JSX :</h2>
      <Gallery></Gallery>
      <Bio></Bio>
      <TodoList1 />
      <TodoList />
    </div>
  );
}
