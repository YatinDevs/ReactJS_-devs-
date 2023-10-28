// ################ Introduction to Objects .#############

// Arrays are Good but not sufficient for real world data.

// 1.Object is Reference type
// Stored in Similar to Array in heap and stack pointer
// pointing ,All Reference type act in same way.

// 2.Objects are Stored in key value pairs
// 3.object dont have index.

// -----------------------------------------------------------

// How to create Objects
const person = {
  name: "Yatin",
  age: 24,
  hobbies: ["chess", "sketches", "esports"],
  getdetails: function () {
    return `Myself ${this.name} age is ${this.age} and my hobbies are ${this.hobbies}.`;
  },
};

const details = person.getdetails();
console.log(details);
