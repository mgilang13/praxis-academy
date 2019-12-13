function myModule() {
  this.hello = function() {
    return console.log("Hello, Gilang");
  };

  this.goodbye = function() {
    return console.log("Good Bye");
  };
}

module.exports = myModule;
