import "../index.css";
import "../App.css";
export default function Experience({ experience }) {
  return (
    <>
      <p className="head">Experience</p>
      <ul>
        <li>{experience.company}</li>
        <li>{experience.role}</li>
        <li>{experience.year}</li>
      </ul>
    </>
  );
}
