var a = 2154; //First number
var b = 458; //Second number
var c;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
c = a;
console.log(c);
