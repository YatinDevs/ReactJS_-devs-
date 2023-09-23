import "../index.css";
import "../App.css";
export default function Interests({ interests }) {
  return (
    <>
      <p className="head">Interests</p>
      <ul>
        <li>{interests[0]}</li>
        <li>{interests[1]}</li>
        <li>{interests[2]}</li>
        <li>{interests[3]}</li>
        <li>{interests[4]}</li>
      </ul>
    </>
  );
}
