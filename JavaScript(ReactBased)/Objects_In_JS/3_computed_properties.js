/*
  What is the computed property in ES6?
The Computed Property Names Feature.
The Computed Property Names feature in ES6 allows you to set property names 
dynamically – that is, property names will be expressions that evaluate to a value.

*/

const key1 = "email";
const key2 = "password";

const val1 = "c.yatin2323@gmail.com";
const val2 = "adsdasd231@dad";

const obj = {
  key1: val1,
  key2: val2,
};
console.log(obj);

const obj2 = {
  [key1]: val1,
  [key2]: val2,
};
console.log(obj2);

const abc = [key1];
console.log(abc);
