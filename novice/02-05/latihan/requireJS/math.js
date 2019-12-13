define(function() {
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
});
