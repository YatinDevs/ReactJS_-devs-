
/*

# Why we Need OOPS?

// - 1 - Popular paradigm for structuring our complex code.
// - 2 - Easy for us and other developers to debug(Clean Structure).
// - 3 - Performant(Efficient terms of memory).

# What if we can store the data along with its associated
 functionality?

 - Objects -> Stores Functions with its associated data.
*/
// 1. ways to create Object :

const user1 = {
    name : 'john',
    score:10,
    increment:function(){
        user1.score++;
    }
}

user1.increment(); // user1.score will be 11;
console.log(user1.score);

// this is encapsulation

// 2. ways to create Object :
const user2 = {};
user2.name = 'peter';
user2.score = 6;
user2.increment = function(){
    user2.score++;
}

// 3. ways to create Object :

const user3 = Object.create(null);
user3.name = 'rock';
user3.score = 7;
user3.increment = function(){
    user3.score++;
}

// Problem of above Solution:
// Code is Getting Repetitive , as we are breaking DRY principle.
// donot repeat yourself :

// Solution : 1 we can generate objects using functions:
function createUser(name,score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser;
}

const user4 = new createUser('sanket',8);
const user5 = new createUser('shivani',12);
const user6 = new createUser('siddesh',13);

console.log(user4);
user4.increment();
console.log(user4.score);
console.log(user5);
console.log(user6);

// Problems of solution 1:
// each time we create a new user we utilize space of computer memory
// for all our data and function:
// the function are just extra copies.


// Solution 2:

// Store the increment function in just one object
// if the interpreter doesnt find the function inside user1,
// it goes and search for that object to check for the 
// increment function.

// How the link can be made??


// JS protoypal property.


// const functionStore ={
//     increment: function(){this.score ++},
//     login: function(){console.log('logged in')}
// }

// const user1 = {
//     name: 'John',
//     score: 10
// };

// user1.increment()



//Solution 2 


// function createUser(name, score) {
//     //creating a link manually
//     const newUser = Object.create(userFunctionStore);
//     console.log(newUser);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;

// };
// const userFunctionStore = {
//     increment: function () {
//         this.score++;
//     }
// };
// const user1 = createUser('John', 10);
// const user2 = createUser('Peter', 5);
// user1.increment();

//not much problem at all
//some amount manual work

//Solution 3 that means our new key word
//1. it will create a new object
//2. it will create a link
//3. it will return the new object

//again some problems comes that
//How to refer the auto created objects?? => this keyword
//where we will put the single copy of functions to be shared among users?





// function multiplyByFive(num) {

//     return num * 5;
// }

// multiplyByFive.storedNum = 5;
// console.log(multiplyByFive(10));

// console.log(multiplyByFive.storedNum);

// console.log(multiplyByFive.prototype);



//Solution 2  using new keyword


function CreateUser(name, score) {

    //create an empty object and make it equal to this
    console.log(this);
    this.name = name;
    this.score = score;

    //creates a link between new object and and the function's prototype object

    //return the new created object

}

//keep the shared functions inside the function's prototype object

CreateUser.prototype.increment = function () {
    this.score++;
};
CreateUser.prototype.login = function () {
    console.log('login');
};

const userr1 = new CreateUser('John', 10);
user1.increment();