function Animal() {
  this.speak = function () {
    console.log("This animal makes a sound");
  };
}

function Dog() {
  this.speak = function () {
    console.log("This dog barks");
  };
}

function Cat() {
  this.speak = function () {
    console.log("The cat meows");
  };
}

const myDog = new Dog();
const myCat = new Cat();

const animals = [myDog, myCat];

for (const animal of animals) {
  animal.speak();
}

const person = {
  name: "yatin",
};
person.age = 30; // add property
delete person.name; // delete property

console.log(person);

function Counter() {
  let count = 0;

  this.increment = function () {
    count++;
  };
  this.decrement = function () {
    count--;
  };
  this.getCount = function () {
    return count;
  };
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);
console.log(counter.getCount());
