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
