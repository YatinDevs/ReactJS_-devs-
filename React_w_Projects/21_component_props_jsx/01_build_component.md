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
