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
