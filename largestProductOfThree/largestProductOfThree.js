/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  var sortedArr = array.sort(function(a,b){return a-b});
  var lastThree = sortedArr.slice(-3);
	var result = 1;
	
  for (var i = 0; i < lastThree.length; i++) {
  	result *= lastThree[i];
  }
  return result;
};
