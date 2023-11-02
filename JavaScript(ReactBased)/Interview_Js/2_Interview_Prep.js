/*
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
*/

// In Classes in JS:
// To Pass Arguments --> we use constructors:

  // ***    // # # # #  Snippet  # # # # #

  /*
class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    sayHello(){
        console.log(`this is my Name - ${this.name} and ages is ${this.age} years`);

    }


}

const person1 = new Person('Yatin',23);
const person2 = new Person('bhusn',21);

person1.sayHello();
person2.sayHello();

  // ***    // # # # #  Snippet  # # # # #

class Student extends Person{
    constructor(name,age,school){
        super(age,name);
        this.school = school;
    }

    study(){
        console.log(`this is my Name - ${this.name} and  is ${this.school} school`);

    }
}


const student1 = new Student('Alice',23,'Carmel Convent High School');
console.log(student1);


*/
  // ***    // # # # #  Snippet  # # # # #

class BankAccount{
   
    constructor(balance){
       this.balance = balance;
      
    }
  

    deposit(credit){
        this.balance += credit;
        console.log(`The Amount has been Credited :${credit}Rs.`);
        console.log(`Your Account Balance is : ${this.balance}.`);

        
    }

    withdraw(debit){

        this.balance -= debit;
        console.log(`The Amount :${debit}Rs has been Withdrawn.`);
        console.log(`Your Account Balance is : ${this.balance}.`);

    }

    checkBalance(){
      console.log(`Your Account Balance is : ${this.balance}.`);
    }
}

const account1 = new BankAccount(100000);
account1.checkBalance();
account1.deposit(1000);
account1.withdraw(50000);

class Person{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

const pers = new Person('Bach');
pers.name = 'Wish';
console.log(pers);