class Vehicle {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  getName() {
    return this.make + " " + this.model;
  }
}

class Car extends Vehicle {
  getNameCar() {
    console.log(this.make + " " + this.model + " in child class. ");
  }
}

let car = new Car("Honda", "Accord", "Black");
car.getNameCar();
