// Spread Operators in Js..
/// -------------------------------------------------------------------------------

// ## ## ## Iteratable
// 1. String Iterable
// 2. Array Iteratable
// 3. Numbers Non-Iteratable.

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
// 2. Array Iteratable
const newarr = [...array1, ...array2, array2];
// whole array object added as third element
// with ... it is spread and then added to elements of new arr
console.log(newarr);

/// -------------------------------------------------------------------------------

// 1. String Iterable
// Spreading String and saving at seperate indexes.
const str = "yatinchaudhari";
const namearr = [...str];
console.log(namearr);

// const num = [...1233242352535235];
// Error TypeError : as number are not iterable..

/// -------------------------------------------------------------------------------

// 3. Numbers Non-Iteratable.
// We can Convert Numbers to String and then save it.
const num = [..."121321412421"];
console.log(num);

/// -------------------------------------------------------------------------------

// In Objects only one key can exist they are Unique
// Value will override in key if added similar key.

const obj1 = {
  key1: "value1",
  key2: "value2",
  key1: "value3",
};
console.log(obj1);

/// -------------------------------------------------------------------------------

// Spread Operator in JS Objects ....
const object1 = {
  key1: "value1",
  key2: "value2",
};

const object2 = {
  key3: "value3",
  key4: "value4",
};

// We use Spread Operator in Object Js for :
// 1. Cloning
const newObj = { ...object1, ...object2 };
console.log(newObj);

// ---------------------------------------------------------------------------

// Using Spread Iterable in String in Object

const newobj1 = { ..."abcdef" };
// we spread string  and will be saved as key value pair
console.log(newobj1);
// ---------------------------------------------------------------------------

// Spreading array items with key value pairs
const newobj2 = { ...["item1", "item2"] };

console.log(newobj2);

// ---------------------------------------------------------------------------

// Even when we clone objects in new Object
// it will override the values if two objects have same key
// But there are two cases according
// to they way there are added and cloned in sequence

const ob1 = {
  key1: "value1",
  key2: "value2",
};
const ob2 = {
  key1: "addingUnique",
  key3: "value3",
  key4: "value4",
};

// case 1:

// const newobj = { ...ob1 };
// const newobj = { ...ob1, ...ob2 };
// console.log(newobj);

// Here the key of obj2 will override the key of obj1
// as it is added afterwards

// case 2:

// const newobj = { ...ob2, ...ob1 };
// console.log(newobj);

// Here the key of obj1 will override the key of obj2
// as it is added afterwards

// case 3:

// also we can add new key value pairs

const newobj = { ...ob2, ...ob1, key23: "abcd" };

console.log(newobj);
