import Education from "./resumecomponents/Education";
import Interests from "./resumecomponents/Interests";
import "./index.css";
import "./App.css";
import Skills from "./resumecomponents/Skills";
import Experience from "./resumecomponents/Experience";
import Extracurriculars from "./resumecomponents/Extracurriculars";

function Card({ children }) {
  return (
    <div className="card">
      <div id="header">
        <h1>Resume Emily</h1>
      </div>
      <br></br>
      <br></br>
      <div className="left"></div>
      <div className="right"></div>
      <hr></hr>
      {children}

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
      {/* <div id="header"></div>
      
     
        */}
      <Card>
        <div className="stuff">
          <Interests {...resume} />
          <Skills {...resume}></Skills>
          <Education {...resume}></Education>
          <Experience {...resume}></Experience>
          <Extracurriculars {...resume}></Extracurriculars>
          {/* </div>
           */}
        </div>
      </Card>
    </div>
  );
}
