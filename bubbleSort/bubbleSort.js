/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // Your code here.
  var arr = array.slice(0);

  for (var j = 0; j < array.length - 1; j++) {
	  for (var i = 1; i < array.length - j; i++) {
	  	var current = arr[i];
	  	var previous = arr[i-1];

	  	if (current < previous) {
	  		arr[i-1] = current;
	  		arr[i] = previous;
	  	}
	  }
	}
  return arr;
};

// console.log(bubbleSort([1, 2, 43, 100, 100, 21, 21]))
// console.log(bubbleSort([24.7, 24.3, 23, 9, 3, 3, 100, 25, 100]))
// console.log(bubbleSort([5, 4, 3, 2, 1]))
// console.log(bubbleSort([1, 2, 3, 4, 5]))
// console.log(bubbleSort([20, -10, -10.1, 2, 4, 299]))















