// TODO: ## ## ## ## ## ## ## ## ## React OverView ## ## ## ## ## ## ## ## ## ## ##
/*
React, as a JavaScript library for building user interfaces, 
typically requires a set of dependencies and tools to work 
effectively. These dependencies are often managed using a 
package manager like npm (Node Package Manager) and bundled 
together using a build tool like Webpack or Parcel. Here's a 
list of common dependencies and tools used in a React project:

* React: The core library for building user interfaces in a declarative
 and efficient way.

* React DOM: A package for React that provides the DOM-specific methods
 that are used to interact with the web browser's DOM.

* Babel: A JavaScript compiler that allows you to use the latest
 ECMAScript features (like JSX) and converts them into 
 browser-compatible JavaScript.

* Webpack or Parcel or Vite: These are build tools that help bundle 
and optimize your JavaScript, CSS, and other assets. They often
 include features like hot module replacement, code splitting, and 
 more.

* Webpack Dev Server or similar:  is a development server that comes 
bundled with Webpack. Its primary purpose is to serve your webpack
 bundles during development, providing features like live reloading,
  hot module replacement, and a simplified development setup.
  webpack-dev-server is used with front-end projects, especially 
  those using webpack for bundling and building client-side code.
 It is commonly used in combination with frameworks like React,
  Angular, or Vue.

* babel-loader: A Webpack loader for Babel, allowing you to use Babel 
with Webpack to transpile your JavaScript code.

* CSS loader and style loader: These loaders help Webpack process and
 bundle your CSS styles.

* file-loader or url-loader: These loaders help Webpack handle static 
assets like images, fonts, etc.

* ESLint: A linter tool that helps enforce coding standards and catch 
common errors in your JavaScript code.

* React Router: If your application involves client-side routing,
 React Router is a popular choice for handling navigation in React 
 applications.

* Prop-types: While not strictly required, prop-types is often used 
during development to define and check the types of properties passed
 to React components.

* Redux (optional): If you need a state management solution for your 
React application, Redux is a popular choice.

* Axios or Fetch (for API calls): These are commonly used libraries 
for making HTTP requests from your React application.

Keep in mind that the specific dependencies and versions can vary 
based on your project requirements and the latest developments in 
the React ecosystem. Always refer to the official documentation for
 the most up-to-date information.

*/
// TODO: ## ## ## ## ## ## ## ## ## ## Intro to React ## ## ## ## ## ## ## ## ##
// *What is React ?

/*
   React is a FrontEnd Library For Building USER INTERFACES.
 */

// * Why React?

/**
 *
 * 1. React is Most Popular Front End Library for Building User Interfaces.
 * 2. It is very easy to learn and use.
 * 3. It is Declarative.
 * 4. React Enhances the Performance of web application because it uses the concept of Virtual DOM.
 * 5. Many Job Opportunities.
 * 6. You Can Build Both Web and Mobile Applications Using React.
 */

// Currently React-18.

// Before Class Based Component && Function Based Components.
// Currently Function base Components with React Hooks.

// * ## ## Framework vs Library.
/*
  Framework Provides more functionality but it does not provide much flexibility.
*/

/*

 Library is lightweight but it provides more Flexibility.

*/
/*

I think of React More like a Framework than a library.
Because we always use other libraries with React.
Example :  React Router DOM.
Whole React Ecosystem feels like a Framework.

*/

// TODO: ## ## ## ## ## ## ## ## ## Access Source Code ## ## ## ## ## ## ## ## ## ## ##

// Accessing Source Codes :
// https://github.com/Codprog-Technologies/React-Mastery

// TODO: ## ## ## ## ## ## ## ## Creating React App ## ## ## ## ## ## ## ## ## ## ## ##
/*
   ? Create React App using Vanilla-JS.

?## ## ##  Things To Remember :
!Note :
 <!-- Content Delivery Network -- to help serve content to their users.  -->
 <!-- React Library CDN -->
 <!-- React DOM Library CDN -->
 <!-- Bable CDN -- To convert JSX to react js Code -->
 <!-- Link external Js File -- index.js -->

* Libraries Used -> React,ReactDOM.
* Babel -> (Convert JSX to Actual React Code).

*/

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
// TODO : Bundler :
/*
Does React need a bundler?
  Bundling is an important phase in the web development process, 
 particularly when dealing with JavaScript frameworks like React.
 It entails combining all the various JavaScript files and 
 dependencies into a single file for faster browser loading 
 and execution.

*/
// TODO : # Yarn vs npm Comparison Table:
/*
 # Feature                             # Yarn :                

 - Package Management   -----> yarn.lock file	      
 - Speed                -----> Faster                  
 - Offline Support	     -----> Built-in	                
 - Security             -----> Uses checksums	
 - Installation Speed   -----> Faster
 - Network Utilization  -----> Parallel connections	
 - Memory Usage         -----> Less
 - Installing Packages  -----> yarn add [package_name]	
 
    # Feature                          # npm
 
 - Package Management   -----> package-lock.json file
 - Speed                -----> Slower, but improving
 - Offline Support	     -----> Requires additional configuration
 - Security             -----> Uses signatures and hashes
 - Installation Speed   -----> Slower
 - Network Utilization  -----> Single connection
 - Memory Usage         -----> More
 - Installing Packages  -----> npm install [package_name]
 
 # Yarn
 - yarn -v
 - yarn (to install)
 - yarn start (start app)
 */
// ? React Mastery - Concepts Over View :

// TODO: ## ## ## ## ## ## ## ## ##  React Components ## ## ## ## ## ## ## ## ## ## ##

/**
 *
 * !1. React Components :
 * * - Convention Captial Letter of Component File first Letter.
 *
 * * - if we dont write default while exporting Component.
     - export { Home }; 
 * * - In one file we can only have One default export component.
     - export default Home;
 * 
 * * - if we dont write default.
 *   - import {Home} from "./components/Home";
 * * - On default export component.
 *   - import Home from "./components/Home";
 * 
 * * - Organise Components in Component Folder.
 * 
 * ? - React Dev Tools ,Chrome Dev Tools, Redux Dev Tools. - 
 */

// TODO: ## ## ## ## ## ## ## ## ## JSX Rules. ## ## ## ## ## ## ## ## ## ## ##

/**
 *  TODO : JSX Rules.
 * 
 *  * 1.Instead of class we write className.
    - class is reserved keyword in JSX used for creating classes.
 *  
 *  * 2.In JSX if you want to use JavaScript use {}.
 *  * 3.Can use all function types.
 *  * 4.Instead of for we use htmlFor.
 *  
 */

// TODO: ## ## ## ## ## ## ## ## ## CSS in React Application. ## ## ## ## ## ## ## ## ## ## ##

/*
   TODO : CSS in React Application.
    * 1. we can create styling obj and apply using js Object.
      const cssStyles = {
        backgroundColor: "lightblue",
        fontFamily: "sans-serif",
        margin: "1rem",
        padding: "1rem",
      };
        style={cssStyles}

    * 2. we can directly do inline style
        style={{
          backgroundColor: "lightblue",
          fontFamily: "sans-serif",
          margin: "1rem",
          padding: "1rem",
        }}

    * 3. we can import external style sheet

         import "./FirstComponent.css";

    ?usecases:
       * ternary operator
        className={isDarkmode ? "bg-dark" : null}
       * && operator
        className={isDarkmode && "bg-dark"}

    *  case 1:
        className={`container ${isDarkmode ? "bg-dark" : null}`}
        - if true class applied.
        - but false null as string added to class.
    *  case 2:
        className={`container ${isDarkmode && "bg-dark"}`}
        - if true class applied.
        - but false false as string added to class.
    *  case 3:
        className={`container ${isDarkmode ? "bg-dark" : ""}`}
        - if true class applied.
        - but false empty string applied to class.

    !Note : CSS Modules are supported in both CRA & Vite.

    * case : 
     - save file as (styles.module.css);
     - import styles from "./styles.module.css";
     - className = {styles.container}
     - <header class="_container_s9xcv_11"> -->(Unique Class name applied)
     - Avoids Name Collision.

     className={`${styles.container} ${
          isDarkmode ? styles2["bg-dark"] : ""
     }`}

 */

/*
   props : read Only / Immutable
*/
