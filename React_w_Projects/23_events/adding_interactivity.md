<!--               Adding Interactivity                           -->

# Responding to Events

- React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

# You will learn

- Different ways to write an event handler
- How to pass event handling logic from a parent component
- How events propagate and how to stop them

=============================================================================

# Adding event handlers

- To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example, here is a button that doesn’t do anything yet:

- You can make it show a message when a user clicks by following these three steps:

  - 1. Declare a function called handleClick inside your Button component.
  - 2. Implement the logic inside that function (use alert to show the message).
  - 3. Add onClick={handleClick} to the <button> JSX.

export default function Button() {
function handleClick() {
alert('You clicked me!');
}

return (
<button onClick={handleClick}>
Click me
</button>
);
}

=============================================================================

# Functions passed to event handlers must be passed, not called. For example:

- passing a function (correct)  
  <button onClick={handleClick}>

- calling a function (incorrect)
  <button onClick={handleClick()}>

- passing a function (correct)
  <button onClick={() => alert('...')}>

- calling a function (incorrect)
  <button onClick={alert('...')}>

=============================================================================

# Reading props in event handlers

function AlertButton({ message, children }) {
return (
<button onClick={() => alert(message)}>
{children}
</button>
);
}

export default function Toolbar() {
return (

<div>
<AlertButton message="Playing!">
Play Movie
</AlertButton>
<AlertButton message="Uploading!">
Upload Image
</AlertButton>
</div>
);
}

=============================================================================

# Passing event handlers as props

function Button({ onClick, children }) {
return (
<button onClick={onClick}>
{children}
</button>
);
}

function PlayButton({ movieName }) {
function handlePlayClick() {
alert(`Playing ${movieName}!`);
}

return (
<Button onClick={handlePlayClick}>
Play "{movieName}"
</Button>
);
}

function UploadButton() {
return (
<Button onClick={() => alert('Uploading!')}>
Upload Image
</Button>
);
}

export default function Toolbar() {
return (

<div>
<PlayButton movieName="Kiki's Delivery Service" />
<UploadButton />
</div>
);
}

# Naming event handler props

# All events propagate in React except onScroll, which only works on the JSX tag you attach it to.

# e.stopPropagation() stops the event handlers attached to the tags above from firing.

# e.preventDefault() prevents the default browser behavior for the few events that have it.

=============================================================================

# Recap

- You can handle events by passing a function as a prop to an element like <button>.
- Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
- You can define an event handler function separately or inline.
- Event handlers are defined inside a component, so they can access props.
- You can declare an event handler in a parent and pass it as a prop to a child.
- You can define your own event handler props with application-specific names.
- Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
- Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
- Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
