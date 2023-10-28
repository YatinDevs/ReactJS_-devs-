// Inheritance

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

function Car(make, model, year) {
  Vehicle.call(this, make, model);
  this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2003);

console.log(car1.make);
console.log(car1);
