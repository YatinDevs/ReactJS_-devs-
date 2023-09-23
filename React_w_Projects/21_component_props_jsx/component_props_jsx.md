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
