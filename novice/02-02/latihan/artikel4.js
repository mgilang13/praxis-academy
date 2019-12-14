class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log("Hi, I'm a ", this.name + ", ");
  }

  sayHistory() {
    console.log("Polygon is dreived from geh greek polus (many)" + "and gonia");
  }
}

let p = new Polygon(300, 400);
p.sayName();
console.log("The width of this polygon is " + p.width);
