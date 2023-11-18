// JavaScript Interview Questions & Answers :

// 1.  What are Possible ways to Create Objects in JavaScript?

// [1] Object Literal :-
// 1.(Object initializer) ---> Object Literal Syntax .
// 2.stores comma-separated, set of name-value pairs , wrapped in {}(curly braces).
// 3.{property name : property values}
// 4.property values can be of any datatype,can be array,function,object.

var object1 = {
  name: "Yatin",
  hobbies: ["chess", "sketch"],
  designation: { developement: "FrontEnd Developer" },
  age: 24,
  about: function () {
    console.log(`${this.name} is of age ${this.age} with hobbies ${this.hobbies} at designation
    ${this.designation.developement} .`);
  },
};

// object1.about();
console.log(object1);

// [2] Object.create Method :-

var object2 = Object.create(null);
console.log(object2);

// 1. create Method of Object --> creates Empty new Object
// 2. we pass prototype object as parameter or null.

// JavaScript object.create() method is used to create a new object with the specified
// prototype object and properties. Object.create() method returns a new object with
// the specified prototype object and properties.

// Return Value: Object.create() returns a new object with the specified prototype
// object and properties.

// [3] Object Constructor : (not recommended).

var object3 = new Object();

object3.name = "yatin";
object3.age = 24;

console.log(object3);

// [4] function constructor :

function CreateObject(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var object4 = new CreateObject("Yatin", 23, "male");
console.log(object4);

// [5]function constructor with Prototype :

function CreateObj() {}
CreateObj.prototype.name = "Yatin";
CreateObj.prototype.age = 25;
var object5 = new CreateObj();
console.log(object5);

// [6] ES6 Class Syntax :

class Person {
  constructor(name, age, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
  }
}

var object6 = new Person("ABC", 24, "female");
console.log(object6);
