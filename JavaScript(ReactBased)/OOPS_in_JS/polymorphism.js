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
