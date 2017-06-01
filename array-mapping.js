var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//x^2 + y^2 = z^2
var result = input.map(function num(num, index, input) {
  // console.log("num is" + num.x + num.y + "index is " + index + "input is " + input)
  var z = Math.sqrt(Math.pow(num.x, 2) + Math.pow(num.y, 2));
  return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);