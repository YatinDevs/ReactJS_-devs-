import "./App.css";
import List from "./components/List";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div>
        <List layout="numbered" items={videos} />
        <List layout="alpha" items={videos} />
        <List layout="bullet" items={videos} />
      </div>
    </div>
  );
}

export default App;
