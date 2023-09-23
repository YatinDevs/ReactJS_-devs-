import "../index.css";
import "../App.css";
export default function Extracurriculars({ extracurriculars }) {
  return (
    <>
      <p className="head">Extracurriculars</p>
      <ul>
        <li>{extracurriculars[0]}</li>
        <li>{extracurriculars[1]}</li>
        <li>{extracurriculars[2]}</li>
      </ul>
    </>
  );
}
