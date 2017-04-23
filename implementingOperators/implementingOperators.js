// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  var total = x;

  for (var i = 0; i < y - 1; i++) {
  	total += x;
  }
  return total
};

var divide = function(x, y) {
  // TODO: should return the quotient of x / y
  var total;

  for (var i = 0; i < x; i++) {
  	if (multiply(y, i) === x) {
  		total = i;
  	}
  }
  return total;
};


var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  var remainder = x;

  while (remainder >= y) {
  	remainder -= y;
  }

  return remainder;
};

