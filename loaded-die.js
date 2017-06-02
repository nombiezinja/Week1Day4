//everytime you call the makeLoadedDie function it logs the next number
//from the list declared within it
//the closure function declared within it should use the list
//BUT *****how to make sure the function knows to move down the array each
//time it gets invoked?*****

function makeLoadedDie() {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var position = 0;
  function rollDie(){
    if (position < list.length){
      return list[position++];
    }
    else {
      return position = 0;
    }
  }

  return rollDie;
}

var rollLoadedDie = makeLoadedDie(1);


console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());