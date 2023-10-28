// Inheritance

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

function Car(make, model, year) {
  Vehicle.call(this, make, model);
}
