class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // Adding a method to the constructor
  greet() {
    return `$(this.name) says Assalamu'alaikum...`;
  }
}

// Creating a new class from the parent

class Mage extends HEro {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add new property
    this.spell = spell;
  }
}
