// #################### Object Destructuring ###################

const person = {
  name: "Yatin",
  age: 24,
  hobbies: ["chess", "sketches", "esports"],
  getdetails: function () {
    return `Myself ${this.name} age is ${this.age} and my hobbies are ${this.hobbies}.`;
  },
};
//  ############ ###########  ############# #############

// Ways to Destructure Object :
//  ############ ###########  ############# #############

/*

// 1. Seperately fetching with Keys

const name = person.name;
const hobbies = person.hobbies;

console.log(name, hobbies);
*/
//  ############ ###########  ############# #############

// 2. Other Ways

/*
// Decide variable type (let,const,var)
// In Case of Const :

const { name, age, hobbies } = person;

console.log(name, age, hobbies);

// name = "Sanket"; //  error --> (we cannot change const) Uncaught TypeError: Assignment to constant variable.
*/

//  ############ ###########  ############# #############

// Decide variable type (let,const,var)

let { name, age, hobbies } = person;
name = "Sanket";
// here it is changed let can be reassigned.
// But Here the name age and hobbies are not Destructured
// Key and Value is in Object.
// So for This Purpose we .............
console.log(name, age, hobbies);

let { name: fullname, age: ageGroup, hobbies: likes } = person;
// we performed Destructure and stored key value pairs of Object in
// variables.
console.log(fullname, ageGroup, likes);

//  ############ ###########  ############# #############

const band = {
  bandName: "led Zepplin",
  famousSong: "Stairway to heaven",
  year: 1993,
  othersong: "abcdef",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

let { bandName, famousSong, ...restprops } = band;

console.log(bandName, famousSong, restprops);

// Adding remaining key value pairs as object in variable.
