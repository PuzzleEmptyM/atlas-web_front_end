function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  };
}

// Creating four closures
var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);
