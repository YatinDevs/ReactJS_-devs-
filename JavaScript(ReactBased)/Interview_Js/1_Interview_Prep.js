// .Virtual functions should be defined in?

// In JavaScript, the idea of method overriding can be achieved through the prototype chain.
// Functions can be defined in the prototype of an object,
// These functions can be modified or overridden by defining new functions with the same name in the derived object's prototype.

/*
   In JavaScript, to achieve method overriding (similar to virtual functions), 
   you would define the function in the derived class to override the function 
   defined in the base class.

*/

// # # # #  Snippet  # # # # #

/*
const person = { name: "John", age: 30 };
const user = { user_id : 23, user_gender : 'male'};
// # # # # Object.assign---------------
// Object.assign method is used to create a shallow copy of the person object :
const copy = Object.assign({}, person,user);

copy.age = 40;
console.log(person.age);
console.log(copy);
*/

// # # # #  Snippet  # # # # #

/*
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    set setName(value) {
      this.name = value;
    }
   }
   
   let person = new Person('John', 30);
   person.setName = 'Jane';
   console.log(person.name);

 */  

 // # # # #  Snippet  # # # # #

 /*
   class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Employee extends Person {
    constructor(name, salary) {
      super(name);
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  }
  
  const myManager = new Manager('John', 50000, 'Marketing');
  console.log(myManager.name); 
  console.log(myManager.salary); 
  console.log(myManager.department); 

  */

 // # # # #  Snippet  # # # # #

/*
  class Counter {
    constructor() {
      let count = 0;
      
      this.increment = function() {
        count++;
      };
      
      this.getCount = function() {
        return count;
      };
      
      const privateMethod = function() {
        console.log('This is a private method.');
      };
    }
  }
*/

   // # # # #  Snippet  # # # # #

/*

// Base class --> SuperClass --> "parent class"
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some sound");
    }
  }
  
  // Derived class --> subclass --> child class.
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof!");
    }
  
    fetch() {
      console.log("Fetching!");
    }
  }
  
  // Creating instances of the classes
  const genericAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  // Using the methods
  genericAnimal.makeSound(); // Output: Some sound
  myDog.makeSound(); // Output: Woof!
  myDog.fetch(); // Output: Fetching!
  
  console.log(myDog.name); // Output: Buddy
  console.log(myDog.breed); // Output: Golden Retriever

 */ 


  // ***    // # # # #  Snippet  # # # # #


  // Base class
class Animal {
    constructor(species) {
      this.species = species;
    }
  
    makeSound() {
      console.log("Some sound");
    }
  }
  
  // Intermediate class inheriting from Animal
  class Mammal extends Animal {
    constructor(species, sound) {
      super(species);
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`The ${this.species} makes a ${this.sound} sound.`);
    }
  }
  
  // Subclass inheriting from Mammal
  class Dog extends Mammal {
    constructor(species, sound, breed) {
      super(species, sound);
      this.breed = breed;
    }
  
    fetch() {
      console.log("Fetching!");
    }
  }
  
  // Creating an instance of the Dog class
  const myDog = new Dog("Canis lupus", "bark", "German Shepherd");
  
  // Using the methods
  myDog.makeSound(); // Output: The Canis lupus makes a bark sound.
  myDog.fetch(); // Output: Fetching!
  console.log(myDog.species); // Output: Canis lupus
  console.log(myDog.breed); // Output: German Shepherd
  
  // What is the difference between Object.prototype and Object.__proto__ in JavaScript?

  // ***    // # # # #  Snippet  # # # # #

  (function(){
    var a = b = 5;
})()

console.log(b);

  // ***    // # # # #  Snippet  # # # # #
  var y = 1;
if (function f() {}) {
    y = typeof f; 
}
console.log(y); 
