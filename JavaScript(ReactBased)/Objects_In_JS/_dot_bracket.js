// Major Difference in Dot Notation and Bracket Notation.

// 1. (Fetching/Accessing data Through Certain type of Key)

// Here person hobbie key has space in between
const person = {
  name: "yatin",
  age: 23,
  // we cannot store the key without adding string literals
  "persons hobbie": ["chess", "sketch", "books"],
};

console.log(person.age);
console.log(person.name);
// In Case of Accessing this type of Key here
// we need Bracket Notation and not dot
// as Dot Notation will give error due to space in between
// console.log(person.person hobbie); //SyntaxError
console.log(person["persons hobbie"]);

// 2. Difference Case 2
// (Adding data )

// Dot Notation (adding data with key variable)
const newkey = "email";
person.newkey = "c.yatin279@gmail.com";
console.log(person);
// here while adding data with dot notation
// the key variable it self is considered key here and
// not the data inside the key

// Bracket Notation (adding data with key variable)
const newkey1 = "email";
person[newkey1] = "c.yatin279@gmail.com";
console.log(person);
// here when we give key variable it fetches its value and
// value is assigned as key and to it email data in person object.
