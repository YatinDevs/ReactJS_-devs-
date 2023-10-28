// So We can make function and just call it :
// ## ## ## ## ## ## ## ##     function declaration            ## ## ## ## ## ##
/*
// Declaration of function:
function printText() {
  console.log("This is console text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = linearSearch(arr, 10);
console.log(res);

*/
// ## ## ## ## ## ## ## ##     function expression            ## ## ## ## ## ##

// we initialize let,var,const variable to function
// so addition here expresses function
const addition = function () {
  return 2 + 4;
};
const result = addition();
console.log(result);

//   Create function
//   input : array , target(number)
//   output : index of target present in array
//   linear Search

const linearSearch = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = linearSearch(arr, 10);
console.log(res);

// Above All are function expression :
// anynomous function --> is assigned to const variable
// to call the function .

// ## ## ## ## ## ## ## ##    Arrow function           ## ## ## ## ## ##

/*
Arrow function {()=>} is concise way of writing Javascript 
functions in shorter way. Arrow functions were introduced 
in the ES6 version. They make our code more structured and 
readable.

*/
const linearSearch2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
