# [2] Components ,Props ,JSX.

- Components are : Functions In React --> Returns UI.
- Components returning JSX.
- In Component Multi-Line Return Use '()' parenthesis.
- Multi Import / export:
  - import { Video, Thumbnail } from "./components/Video";
  - export { Video, Thumbnail };
    Generally React allows default import export.
- React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup.

=======================================================================

# react.dev Documents:

=======================================================================

<!--   -              Describing the UI :                    -->

# Your First Component:

- here’s how to build a component:

# Step 1: Export the component

- The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.

# Step 2: Define the function

- With function Profile() { } you define a JavaScript function with the name Profile.

# Note : React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

# Step 3: Add markup

- The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.

- Return statements can be written all on one line, as in this component:

return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

- But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:

return (

  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);

# Note : Without parentheses, any code on the lines after return will be ignored!

# Using a component

- Now that you’ve defined your Profile component, you can nest it inside other components. For example, you can export a Gallery component that uses multiple Profile components:

# Recap

You’ve just gotten your first taste of React! Let’s recap some key points.

- [1] React lets you create components, reusable UI elements for your app.

- [2] In a React app, every piece of UI is a component.

- [3] React components are regular JavaScript functions except:

  - Their names always begin with a capital letter.
  - They return JSX markup.

# Try out some challenges

1. Export the component
2. Fix the return statement
3. Spot the mistake
4. Your own component

=======================================================================

# Importing and Exporting Components

The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.

# You can move a component in three steps:

- Make a new JS file to put the components in.
- Export your function component from that file (using either default or named exports).
- Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

# Default vs named exports

- There are two primary ways to export values with JavaScript: default exports and named exports. So far, our examples have only used default exports. But you can use one or both of them in the same file.

# Note :A file can have no more than one default export, but it can have as many named exports as you like.

- People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values

- A file can only have one default export, but it can have numerous named exports!

# Note : To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file. Do what works best for you!

# Recap

On this page you learned:

- What a root component file is
- How to import and export a component
- When and how to use default and named imports and exports
- How to export multiple components from the same file

=======================================================================

# react.dev Documents:

=======================================================================

<!--   -              Describing the UI :                    -->

# Writing Markup With JSX :

- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

# JSX: Putting markup into JavaScript

- The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript. — often in separate files!

- Content was marked up inside HTML while the page’s logic lived separately in JavaScript:

- But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML!
- This is why in React, rendering logic and markup live together in the same place—components.

- Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup.

- JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. The best way to understand this is to convert some HTML markup to JSX markup.

# Note : JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

=======================================================================

# The Rules of JSX :

# -[1]. Return a single root element

- To return multiple elements from a component, wrap them with a single parent tag.

- For example, you can use a <div>:

<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>

- If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:

<>

  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>

# This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

# Why do multiple JSX tags need to be wrapped?

- JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

# -[2]. Close all the tags

- JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

# -[3]. camelCase all most of the things!

- JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

- This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:

# For historical reasons, aria-_ and data-_ attributes are written as in HTML with dashes.

# Recap

Now you know why JSX exists and how to use it in components:

- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a converter if you need to.
- Error messages will often point you in the right direction to fixing your markup.

=======================================================================

# JavaScript in JSX with Curly Braces

- JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place.
- Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

# Passing strings with quotes

  <!--App.js-->

export default function Avatar() {
const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
const description = 'Gregorio Y. Zara';
return (
<img
      className="avatar"
      src={avatar}
      alt={description}
    />
);
}

- Using curly braces: A window into the JavaScript world

  <!--App.js-->

  export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
  <h1>{name}'s To Do List</h1>
  );
  }

# Where to use curly braces

You can only use curly braces in two ways inside JSX:

- As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works,
  but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.

- As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".

# Using “double curlies”: CSS and other objects in JSX

export default function TodoList() {
return (

<ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
<li>Improve the videophone</li>
<li>Prepare aeronautics lectures</li>
<li>Work on the alcohol-fuelled engine</li>
</ul>
);
}

# Recap

Now you know almost everything about JSX:

- JSX attributes inside quotes are passed as strings.
- Curly braces let you bring JavaScript logic and variables into your markup.
- They work inside the JSX tag content or immediately after = in attributes.
- {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

=======================================================================

# Passing Props to a Component :

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Passing props to a component

You can give Avatar some props in two steps.

# Step 1: Pass props to the child component

export default function Profile() {
return (
<Avatar
person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
size={100}
/>
);
}

Now you can read these props inside the Avatar component.

# Step 2: Read props inside the child component

You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

function Avatar({ person, size }) {
// person and size are available here
}

Add some logic to Avatar that uses the person and size props for rendering, and you’re done.

Now you can configure Avatar to render in many different ways with different props. Try tweaking the values!
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
return (
<img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
);
}

export default function Profile() {
return (

<div>
<Avatar
size={100}
person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
/>
<Avatar
size={80}
person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
/>
<Avatar
size={50}
person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
/>
</div>
);
}

# Recap

- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.

=======================================================================

# Chapter - Components - JSX and Props

- Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.

resume = {
experience : [ { year:2012, company:'xyz', role:'something' }],
education:[ ],
skills : [ 'react js', 'node js']
.....
...
}
You can choose any simple HTML layout and convert it to React Components

Example Link : Resume HTML

Special Assignments ==============

- Assignment 2 : Create a Parent Component called Border which can provide some CSS border to any component nested into it. [Hint : You will need to use children props here
