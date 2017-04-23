/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {

	var findTarget = function(lowIndex, highIndex) {
		var midIndex = Math.floor((highIndex - lowIndex)/2) + lowIndex;

		if (array[midIndex] === target) {
			return midIndex;
		} else if (highIndex === lowIndex) {
			return null;
		} else if (array[midIndex] < target) {
			return findTarget(midIndex + 1, highIndex);
		} else {
			return findTarget(lowIndex, midIndex - 1);
		}
	};
	return findTarget(0, array.length - 1)
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([3], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([11, 22, 33, 45, 53, 62], 45));



