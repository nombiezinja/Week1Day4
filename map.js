var words = ["ground", "control", "to", "major", "tom"];

function map(arr) {
  newArr = [];
  arr.forEach(function(str, index, arr){
    newArr.push(arr[index].length);
    // console.log("str is " + str + " index is " + index + " arr is " + arr)
  });
  return(newArr);
}


console.log(map(words, function(word) {
  return word.length;
}));

