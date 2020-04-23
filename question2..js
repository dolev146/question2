var readline = require("readline-sync");

var a = readline.questionInt(
  "please insert the numbers according to the question "
);
var b = readline.questionInt(
  "please insert the numbers according to the question "
);
var p = 1;

while (b > 0) {
  m = 0;
  var t = a;
  while (t > 0) {
    m = m + p;
    t = t - 1;
  }
  p = m;
  b = b - 1;
}
console.log(p);
