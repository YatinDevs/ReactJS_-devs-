import "../App.css";

function Video() {
  let topic = "JS in JSX with Curly Braces.";
  let bg = "dark";
  return (
    <div>
      <h1>Video Component</h1>
      <img
        style={{ border: "2px solid lightsalmon" }}
        className={bg}
        src="https://picsum.photos/640/360"
        alt="Katherine Johnson"
      />
      <h3 className={bg}>{topic}</h3>
    </div>
  );
}

// function Thumbnail() {
//   return (
//     <div>
//       <h1>Thumbnail</h1>
//     </div>
//   );
// }
// - Multi Import / export:
// export { Video, Thumbnail };

// Good Practice .
export default Video;
