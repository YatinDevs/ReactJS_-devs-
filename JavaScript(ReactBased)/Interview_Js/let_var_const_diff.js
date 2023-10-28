// what is Key Difference in Let , Var and const ?

// var  is older version amd way  of creating variable.
// let and const are more strict and newly introduced in ES6.
// 1. scope.
// 2. hoisting.
// 3. declaration.
// 4. initialization.

//               ### ### ### ### #### ###  ### ### ### ###

// [1]. Scope :
// 1.var --> function Scope.
// 2.let and const --> block scope --> {} - This is Block.

//               ### ### ### ### #### ###  ### ### ### ###
// 1.var --> function Scope.
/*
var a = 10;
{
  var a = 20;
}

console.log(a);
*/

/*
var a = 10;
function x() {
  var a = 20;
}
x();
console.log(a);
// var --> function Scope.
*/
//               ### ### ### ### #### ###  ### ### ### ###

// 2.let and const --> block scope --> {} - This is Block.
// let a = 10;
// {
//   let a = 20;
// }
// console.log(a);

// const a = 10;
// {
//   const a = 20;
// }
// console.log(a);

// let a = 10;
// function x() {
//   let a = 20;
// }
// x();
// console.log(a);

//               ### ### ### ### #### ###  ### ### ### ###

// [2]. hoisting --> occurs in variables , functions , classes.

// console.log(a);
// var a = 100;

// console.log(a); //Reference Error
// let a = 100;

// A temporal dead zone (TDZ) is the area of a block where a variable is
// inaccessible until the moment the computer completely initializes it with
//  a value.

/*
What is the temporal dead zone for VAR and let?

## : Temporal dead zone (TDZ)
A variable declared with let , const , or class is said to be in a
"temporal dead zone" (TDZ) from the start of the block until code execution 
reaches the place where the variable is declared and initialized.

*/
//               ### ### ### ### #### ###  ### ### ### ###
/*
x();
function x() {
  console.log(10);
}

// let a; //declaration
// a = 10; //intialization
// a = 100; // re-assigning or re-intialization.

let a = 10; //declaration and intialization in same line
*/
//               ### ### ### ### #### ###  ### ### ### ###

/*
Summary of Let vs Var vs Const :
  var  : 1.can re-declare    --- can Re-initialization/re-assigning
  let  : 1.cannot re-declare --- can Re-initialization/re-assigning
  const: 1.cannot re-declare --- cannot Re-initialization/re-assigning
*/

//               ### ### ### ### #### ###  ### ### ### ###

//Re-declaration and Re-initialization

/*
// 1.can redclare using var
console.log(a);

var a = 10;

console.log(a);

var a = 100;

console.log(a);

// 1.cannot redclare using let and const

// let b;

// let b;
//  Uncaught SyntaxError: Identifier 'b' has already been declared (at let_var_const_diff.js:115:5)

*/
//               ### ### ### ### #### ###  ### ### ### ###

// allows Re-initialization  using let and var

let a = 10;
console.log(a);
a = 200;
console.log(a);

var b = 30;
console.log(b);
b = 500;
console.log(b);

//               ### ### ### ### #### ###  ### ### ### ###

//cannot redclare and  Re-initialization  using const

// const a;

// const a;

// const a = 10;

// a = 200;

console.log(a);

// Uncaught TypeError: Assignment to constant variable.

//dont do this to avoid confusion
// console.log(a)
// window.a = 'John'
