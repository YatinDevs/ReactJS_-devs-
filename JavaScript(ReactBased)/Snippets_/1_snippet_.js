/*
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
}
  
class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
}
  
  const dog = new Dog('Rex');
  dog.speak(); //output : Rex barks.
*/

  // Snippet :

var length = 10;
function fn() {
console.log(this.length);
console.log(this);
}

var obj = {

 length: 5,
 method: function(fn) {
    console.log(arguments);

   fn();
   arguments[0]();
 }
};

obj.method(fn, 1);

arr = [1,function fn() {
    console.log(this.length);
    console.log(this);
    },3,4,5];
arr[1]();

const user = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
   };
   
   const { name, age, address: { city } } = user;
   
   console.log(name, age, city);


   function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.getName = function() {
    return this.name;
  }
  
  const cat = new Animal("Fluffy");
  
  console.log(cat.getName());
  const person = { name: "John", age: 30 };
const copy = Object.assign({}, person);
copy.age = 40;
console.log(person.age);