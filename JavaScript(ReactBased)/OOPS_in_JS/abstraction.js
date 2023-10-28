function Shape() {
  this.area = function () {
    throw new Error("This is an abstract MEthod");
  };
}

function Circle(radius) {
  this.radius = radius;
}

// const shape = new Shape();
// console.log(shape.area());

//-------------------

Circle.prototype = new Shape();
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

const circle = new Circle(10);
console.log(circle.area());

//------------------------------------------------------

function Car(make, model) {
  // public
  this.make = make;
  this.model = model;

  // private
  let fuel = 0;

  this.addFuel = function (amt) {
    if (amt > 0) {
      fuel += amt;
    }
  };

  this.drive = function () {
    if (fuel > 0) {
      console.log(`Driving the ${this.make} ${this.model}`);
      fuel--;
    } else {
      console.log("Out of fuel");
    }
  };
}

const toyota = new Car("Toyota", "Camry");
toyota.addFuel(1); // Add 3 units of fuel
toyota.drive(); // Drive the Toyota Camry
toyota.drive(); // Drive the Toyota Camry
