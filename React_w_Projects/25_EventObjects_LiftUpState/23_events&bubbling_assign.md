# Events && Event Bubbling

- Assignment 1 : Make a simple page with 1 Image, 1button, 1 form Input text box and try to apply these events .

  - Image : onMouseOver : when you hover on image. Image should increase in size. Think of any way where you can do it. Also, try that when you "move out" the mouse, it should be back to normal size.

  - Button : onDoubleClick: when you doubleClick a button. show some alert box. Also make a console.log for single click event. Is console.log printed twice on double click ? check this ?

  - Input Textbox : onFocus, onBlur are 2 events which occur when you enter or exit an input text box by click of mouse etc. Use it to display some console.log, which print "focused on the textbox", "out of textbox".

  - onCopy, onCut, onPaste are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.

- Assignment 2 : Make a form using < Form> tag and put an textbox and button inside this form. try to click the button after entering into textbox. Does form reloads ? Can you try to stop is using e.preventDefault. Try it.

- Assignment 3 : use an Input Textbox : after you enter some text. try to press ENTER button and show the an alert or console.log. You can capture the onKeyPress event, button how you will you make it work only for "Enter" ? It should not work on pressing of other keys. [Hint: Explore the synthetic event object ]

# Events handled :

- handleMouseOver
- handleMouseOut
- handleDoubleClick
- const handleonFocus
- const handleonFocusOut
- const handlecut
- const handleCopy
- const handlepaste
- const handleSubmit
- const keyDown

======================================================================

function handleMouseOver(e) {
e.preventDefault();
setOver(true);
console.log("handledMouseOver.....");
}
function handleMouseOut(e) {
setOver(false);
console.log("handledMouseOut.....");
e.preventDefault();
}

function handleDoubleClick(e) {
alert("Single Click Please");
console.log("Double Click Event.....! Please Click Once");
}

const handleonFocus = (e) => {
e.preventDefault();

    e.stopPropagation();
    setfocus(true);
    console.log("focused on the textbox");

};

const handleonFocusOut = (e) => {
e.preventDefault();

    e.stopPropagation();
    setfocus(false);
    console.log("focused out Blur on the textbox");

};

const handlecut = (e) => {
e.stopPropagation();
console.log("onCut Event handled on the textbox");
};

const handleCopy = (e) => {
e.stopPropagation();
console.log("OnCopy Event handled on the textbox");
};

const handlepaste = (e) => {
e.stopPropagation();
console.log("onPaste Event handled on the textbox");
};

const handleSubmit = (e) => {
alert("The browser will not reload when the alert box is closed.");
console.log("submit");

    e.preventDefault();

};

const keyDown = (e) => {
// console.log(e);
if (e.keyCode === 13) {
console.log("Enter");
alert("Submit Form?");
}
};
======================================================================
