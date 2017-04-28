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
  var newArr = array.slice().sort(function(a,b) {
  	return a - b;
  })
  return newArr[newArr.length - 1] * Math.max(newArr[newArr.length - 2] * newArr[newArr.length - 3], newArr[0] * newArr[1]);

};

console.log(largestProductOfThree([0, 2, 3])); //0
console.log(largestProductOfThree([2, 3, 5])); //30
console.log(largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5])) //1859
console.log(largestProductOfThree([2, 3, -11, 7, 5, -13])) //1001
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29])) //47027