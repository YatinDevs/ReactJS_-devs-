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

# Writing Markup With JSX :

- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

# JSX: Putting markup into JavaScript

- The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript. — often in separate files!

- Content was marked up inside HTML while the page’s logic lived separately in JavaScript:

- But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML!
- This is why in React, rendering logic and markup live together in the same place—components.
