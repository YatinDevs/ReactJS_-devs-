import "../index.css";
import "../App.css";
export default function Education({ education }) {
  return (
    <>
      <p className="head">Education</p>
      <ul>
        <a href={education.href}>
          <li>{education.name}</li>
        </a>
        <a href="https://www.silvermineart.org/">
          <li>Silvermine School of Arts</li>
        </a>
        <li>Codeacademy</li>
      </ul>
    </>
  );
}
