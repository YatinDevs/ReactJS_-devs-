import Education from "./resumecomponents/Education";
import Interests from "./resumecomponents/Interests";
import "./index.css";
import "./App.css";
import Skills from "./resumecomponents/Skills";
import Experience from "./resumecomponents/Experience";
import Extracurriculars from "./resumecomponents/Extracurriculars";

function Border({ childern }) {
  return (
    <div>
      <div id="header"></div>
      <div className="left"></div>
      <div className="stuff">{childern}</div>
      <div className="right"></div>
      <div id="footer">
        <h2 id="name">Emily</h2>
      </div>
    </div>
  );
}

export default function Resume() {
  const resume = {
    interests: ["Drawing", "Photography", "Design", "Programming", "CS"],
    skills: ["reactjs", "nodejs", "Html", "WebDesign"],
    education: {
      href: "http://www.wiltonhighschool.org/pages/Wilton_High_School",
      name: "Wilton High School",
    },
    experience: { year: 2012, company: "xyz", role: "something" },
    extracurriculars: ["Recycling Club", "Gardening Club", "Book Club"],
  };
  return (
    <div>
      <div id="header"></div>
      <div className="left"></div>
      <div className="stuff">
        <br />
        <br />
        <h1>Resume</h1>
        <h2>Emily</h2>
        <hr></hr>
        <Interests {...resume} />
        <Skills {...resume}></Skills>
        <Education {...resume}></Education>
        <Experience {...resume}></Experience>
        <Extracurriculars {...resume}></Extracurriculars>
      </div>
      <div className="right"></div>
      <div id="footer">
        <h2 id="name">Emily</h2>
      </div>
    </div>
  );
}
