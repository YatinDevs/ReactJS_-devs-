import "../index.css";
import "../App.css";

export default function Skills({ skills }) {
  return (
    <>
      <p className="head">Skills</p>
      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
      </ul>
    </>
  );
}
