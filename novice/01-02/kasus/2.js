var a = 3;
var b = -7;
var c = 2;
if (a > 0 && b > 0 && c > 0) {
  alert("Signing in +");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("Signing in +");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("Signing in +");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("Signing in +");
} else {
  console.log("Signing in -");
}
