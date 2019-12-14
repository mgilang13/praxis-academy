// Standar OOP
class User {
  constructor(name) {
    this.name = name;
  }
  sayHI() {
    alert(this.name);
  }
}

let user = new User("Gilang");
user.sayHI();
