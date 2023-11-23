console.log("script start!");

/*
//  !## ## Case 1 :

const rootElement = document.getElementById("root");
// We have Linked React library by CDN :
// Using React.createElement Method of it :
// createElement takes (type,props,childern)

const element = React.createElement("h1", null, "Hello World");
console.log(element);

// we created Element using React library :
// Now to connect Element to Root Element we need React DOM library :

 ReactDOM.createRoot(rootElement).render(element);

 

// we Can do above thing creating Functions as well lets try:
// createElement takes (type,props,childern)

*/

/*

// !## ## Case 2 :
const rootElement = document.getElementById("root");

function Home() {
  return React.createElement("h1", null, "lorem abc react application");
}

ReactDOM.createRoot(rootElement).render(Home());

*/

/*
// !## ## Case 3 :

const rootElement = document.getElementById("root");

// Linked index.css for styling our created new Element .

function Home() {
  return React.createElement(
    "h1",
    { className: "heading" },
    "lorem abc react application"
  );
}

// we can give attributes in props
ReactDOM.createRoot(rootElement).render(Home());

// So Creating Elements and using Html and CSS this way is tedious
// Solution is Using JSX.

*/

/*
// !## ## Case 4 :
// JSX Solution --> to avoid Tedious work .

const rootElement = document.getElementById("root");

function App() {
  return (
    <div>
      <h1 className="heading">Hello React App</h1>
    </div>
  );
}

// ReactDOM.createRoot(rootElement).render(App());
ReactDOM.createRoot(rootElement).render(<App />);

// Error --> unexpected Token '<' at 69
// So how will browser known we are writing JSX.
// <script type="text/jsx" src="index.js" defer></script>
// Change type
// ## ## ##  JSX to React Syntax is Done by Babel

*/

/*

?## ## ##  Things To Remember :
!Note :

* Libraries Used -> React,ReactDOM.
* Babel -> (Convert JSX to Actual React Code).

*/

//* Create React Application : (React,ReactDOM,JSX,Babel(JSXtoReactCode)).
const rootElement = document.getElementById("root");

const App = () => {
  return (
    <div>
      <h1 className="heading">Welcome to React App.</h1>
    </div>
  );
};

ReactDOM.createRoot(rootElement).render(<App />);

/*
   ? Create React App using Create-React-App.
   * npx :
   - npx create-react-app my-app
   * npm :
   - npm init react-app my-app
   * Yarn:
   - yarn create react-app my-
   
   - Decide which package manager to use -Yarn or Npm .

   * To Start App :
   npm start or yarn start
   * index.js
      - if Jsx is present .jsx extension or .js extension dosent matter.

   
 */

/*
   ? Create React App using Vite.

   * npx :
   - npm create vite@latest

   * Yarn:
   - yarn create vite
   
   - Decide which package manager to use  -Yarn or Npm .

   * To Start App :
   npm run dev or yarn start
   * main.jsx
   - if Jsx is present we need to use .jsx extension.
 */
