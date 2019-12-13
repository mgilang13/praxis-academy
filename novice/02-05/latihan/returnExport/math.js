//if the module has no dependencies, the above pattern can be simplified to.

(function(root, factory) {
  //environtment detection

  if (typeof define === "function" && define.amd) {
    //AMD
    define([], factory);
  } else if (typeof exports === "object") {
    //Common JS
    module.exports = factory();
  } else {
    //script tag import i.e., IIFE
    root.returnExports = factory();
  }
}(this, function() {
  //Module defination

  var sum = function(x, y) {
    return x + y;
  };
  var sub = function(x, y) {
    return x - y;
  };

  var math = {
    calculateSum: function(a, b) {
      return sum(a, b);
    },
    calculateSub: function(a, b) {
      return sub(a, b);
    }
  };
  return math;
}));
