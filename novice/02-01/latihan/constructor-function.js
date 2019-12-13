function Animal(name) {
  // this is an object we are about to create
  this.name = name; //add properties 'name' with value received from argument

  // Add method on object
  this.getName = function() {
    // here 'this'also the object as function belongs to the object
    return "Animal name is => " + this.name;
  };
}

var anjing = new Animal("Anjing Red");
console.log("Objek itu adalah ==> ", anjing);
console.log("anjing.getName() ==> ", anjing.getName());
console.log("anjing.constructor === Animal", anjing.constructor === Animal);

//log prototype
console.log(Animal.prototype);
