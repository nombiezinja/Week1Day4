var countdownGenerator = function (x) {
  var list = ["T-minus", "Blast Off!","Rockets already gone, bub!"];
  var position = 0
  function counter(){

    if (position < x) {
      console.log(list[0],x - (position));
      return position++;
    }
    if (position === x ) {
      console.log(list[1]);
      return position++;
    }

    console.log(list[2]);
    return position++;

  }
  return counter;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
