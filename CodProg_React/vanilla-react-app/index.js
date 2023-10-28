console.log("_script start");

const rootElement = document.getElementById("root");
// console.log(rootElement);

// React :
const ele = React.createElement("h1", null, "Hello World");
console.log(ele);
// we can also create functions and do this :
function HelloWorld() {
  return React.createElement("h1", { className: "heading" }, "Hello World2");
}

// React-DOM to append created Element :
// ReactDOM.createRoot(rootElement).render(ele);
// ReactDOM.createRoot(rootElement).render(HelloWorld());

// (Creating with above  code is tedious):
// JSX :

function Hello() {
  return <h1>Hello JSX world</h2>;
}

ReactDOM.createRoot(rootElement).render(Hello());
