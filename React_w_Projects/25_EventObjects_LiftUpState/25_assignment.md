# Assignment

- Assignment 1 : Create a Dropdown (< Select >) menu which is formed by a nations array. You can push to this array new items using a 2 input textbox (for country name and code) and button. On selection of the any option from dropdown, its value should be displayed on console.log
  const nations = [
  { name: 'India', value: 'IN' },
  { name: 'Pak', value: 'PK' },
  { name: 'Bangladesh', value: 'BG' },
  ]
  Assignment 2 : FILTERED LIST : Make a List of something using an Array (a list can of cricket player /countries/ movie name etc). Now make this list it searchable, you have to put a input textbox at top of list. When you type in textbox it should only show you items matching from text typed. For example - If you type only "in" it should show things like "India" / "China" as both have in in it.

======================================================================

- Assignment 2.1 : FILTERED LIST : Make above List as separate components for List, Input form and pass the states from each other using concepts learnt till now.

======================================================================

- Assignment 3 :

This is continuation of previous assignment RESUME Builder. Now you have to make a separate component ResumeEditor which has a FORM. This form will have many input boxes. Each one related to one section. For example you can have one input box or experience section. Another input box for skill section and like this. Every input box should have an Add button in front of it. Once you press this add button that information is stored in the state , which you can update at top of the App level. Now this state should update the Resume Component and its child you have built.

first component will be your RESUME document which is only for reading purpose.

second component will be this FORM

you have to manage the state in between

only Add functionality is required in this assignment

you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.

======================================================================

# - Assignment 4 : Try this challenge : https://beta.reactjs.org/learn/state-a-components-memory#challenges

- 1.  Complete the Task :

let hasPrev = index > 0;
let hasNext = index < sculptureList.length - 1;

    function handlePrevClick() {
    if (hasPrev) {
    setIndex(index - 1);
    }
    }

    function handleNextClick() {
    if (hasNext) {
    setIndex(index + 1);
    }
    }

- This adds a guarding condition inside both event handlers and disables the buttons when needed:

- Notice how hasPrev and hasNext are used both for the returned JSX and inside the event handlers! This handy pattern works because event handler functions “close over” any variables declared while rendering.

- 2.Fix stuck form inputs

- First, import useState from React.
- Then replace firstName and lastName with state variables declared by calling useState.
- Finally, replace every firstName = ... assignment with setFirstName(...), and do the same for lastName. Don’t forget to update handleReset too so that the reset button works.

- 3. fix the crash :

- Hooks can only be called at the top level of the component function. Here, the first isSent definition follows this rule, but the message definition is nested in a condition.
  Remember, Hooks must be called unconditionally and always in the same order!

- You could also remove the unnecessary else branch to reduce the nesting. However, it’s still important that all calls to Hooks happen before the first return.

- Try moving the second useState call after the if condition and notice how this breaks it again.

- 4 . Remove unnecessary State :

======================================================================

# Recap

- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the useState Hook.
- Hooks are special functions that start with use. They let you “hook into” React features like state.
- Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
- The useState Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.
