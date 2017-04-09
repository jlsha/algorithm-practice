// function twiceArray(arr) {
// 	var nums = new Set();

// 	for (var i = 0; i < arr.length; i++) {
// 		if (!nums.has(arr[i])) {
// 			nums.add(arr[i]);
// 		} else {
// 			return arr[i];
// 		}
// 	}
// }

// console.log(twiceArray([1,3,2,4,4,9]))

function twiceArr(arr, largestNum) {
	//this is a triangle series, we can find sum without duplicates
	var newSum = (Math.pow(largestNum, 2) + largestNum) / 2;
	var originalSum = 0;

	//find sum of arr given and subtract from newSum to get duplicate number
	for (var i = 0; i < arr.length; i++) {
		originalSum += arr[i];
	}
	return originalSum - newSum;
}

console.log(twiceArr([1,2,3,4,5,5,6,7,8], 8));