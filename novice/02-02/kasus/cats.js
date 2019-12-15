class Cat {
  constructor(tiredness, hunger, lonliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
  }

  feed(arbit) {
    if (arbit > 5) {
      this.hunger = "very hunger";
    } else {
      this.hunger = "just little hunger";
    }

    return this.hunger;
  }

  sleep(arbit) {
    if (arbit > 5) {
      this.tiredness = "very tired";
    } else {
      this.tiredness = "just little tired";
    }

    return this.tiredness;
  }

  pet(arbit) {
    if (arbit > 5) {
      this.lonliness = "very alone, this cat want to be petted";
    } else {
      this.lonliness = "not alone, this cat won't to be petted";
    }

    return this.pet;
  }

  meow(arbit) {
    if (arbit > 5) {
      this.happiness = "very happy, this cat is very noisy";
    } else {
      this.happiness = "not happy, this cat looks glum";
    }

    return this.happiness;
  }
}

let myCat = new Cat();
let status =
  "This cat is " +
  myCat.feed(6) +
  " and " +
  myCat.sleep(3) +
  " but " +
  myCat.meow(2);

console.log(status);
