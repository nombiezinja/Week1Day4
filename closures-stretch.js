var wrapLog = function (callback, name) {
  return function(a, b) {
    var added = sum(a, b);
    console.log(name + "(" + a + "," + b + ") =>" + name);
  };
};

var sum = function (a, b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5, 3); // sum(5,3) => 8
logSum(3, 2); // sum(3,2) => 5
logSum(121, 221);
