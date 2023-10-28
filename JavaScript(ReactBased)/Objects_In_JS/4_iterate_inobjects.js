// How to iterate in Objects

// How to create Objects
const person = {
  name: "Yatin",
  age: 24,
  hobbies: ["chess", "sketches", "esports"],
  getdetails: function () {
    return `Myself ${this.name} age is ${this.age} and my hobbies are ${this.hobbies}.`;
  },
};

//-------------------------------------------------------------
/*
// Two Ways To Iterate Through Objects ::
//-------------------------------------------------------------

// ###  1. for in loop
for (let key in person) {
  console.log(key);
}

// In Case : Dot Notation -> Not able to fetch key data of object.
for (let key in person) {
  console.log(person.key);
}

// In Case : Bracket Notation -> able to fetch key data of object.
for (let key in person) {
  console.log(person[key]);
}

*/
//-------------------------------------------------------------

// ###  2. Objects.keys

console.log(Object.keys(person)); // Gives Array of Keys
console.log(Object.values(person)); // Gives Array of Values

console.log(typeof Object.values(person));
// Checking that the Object.Keys and Object.values
// do they return arrays as values
const val = Array.isArray(Object.values(person));
console.log(val);

//-------------------------------------------------------------
// In General For of Loop doesnt work in Object
// But with help of Object.keys and .values we can use it.
for (let key of Object.keys(person)) {
  console.log(key);
}

for (let value of Object.values(person)) {
  console.log(value);
}
