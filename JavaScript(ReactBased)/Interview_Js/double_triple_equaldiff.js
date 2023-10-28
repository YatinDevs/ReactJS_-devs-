// What is the difference between == and === operators in JavaScript?

// both ==  and ===  are used for comparisons
// to find the degree of sameness or equality between the things we are
// comparing.
// Both == and === returns true equality and false otherwise. Boolean

// const a = 100;
// const b = "100";

// console.log(a == b); // true

// Double equals (==) is often referred to as 'loose equality'
// because it performs type coercion before making any comparison.

/*
  This means that if the datatypes of the operands we are comparing 
  are different, then the JavaScript Engine automatically converts one 
  of the operands to be the same as the other one in order to make the 
  comparison possible.
  It is important to note that the actual values remains unchanged.
  It only implicitly gets converted while comparing

*/
// // Rules for Type Coercion
// const a = true;
// const b = "true";

// console.log(a == b);

// The rules for type coercion in JavaScript:

// 1. If either operand is a string,
// the other operand will be converted to a string.
// 2. If either operand is a number,
// the other operand will be converted to a number.
// 3. If either operand is a boolean,
// it will be converted to a number (true becomes 1 and false becomes 0).
// 4. If one operand is an object and the other is a primitive value,
// the object will be converted to a primitive value before the comparison
// is made.
// 5. If one of the operands is null or undefined,
// the other must also be null or undefined to return true.
// Otherwise it will return false.

// How Triple Equals (===) Works – with Examples
// Triple equals (===), also referred to as "strict equality",
// works similarly to how double equals (==) works,
// with one important difference: it does not convert the types of
// the operands before comparing.

// const a = 100;
// const b = "100";

// console.log(a === b);

const a = true;
const b = 1;

console.log(a === b);

// Conclusion
/*
The == and === operators in JavaScript are comparison operators that we use
 to determine if two values are equal or not.

The == operator performs a loose equality comparison that performs type 
coercion if necessary to make the comparison possible.

The === operator, on the other hand, performs a strict equality comparison
 that does not perform type coercion and requires the operands to have the 
 same type (as well as the same value).

Type coercion in JavaScript can sometimes lead to unexpected results, 
so it's mostly recommended to use the strict equality operator === instead 
of the loose equality operator ==.

*/
