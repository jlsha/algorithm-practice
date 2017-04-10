// function inPlaceShuffle(arr) {
// 	var shuffleTimes = 0;

// 	while(shuffleTimes <= arr.length) {
// 		var randomIndex1 = Math.floor(Math.random * arr.length);
// 		var randomIndex2 = Math.floor(Math.random * arr.length);

// 		if (randomIndex1 !== randomIndex2) {
// 			var tempVal = arr[randomIndex1];
// 			arr[randomIndex1] = arr[randomIndex2];
// 			arr[randomIndex2] = arr[randomIndex1];
// 			shuffleTimes++;
// 		}
// 	}

// 	return arr;
// }

function getRandom(floor, ceiling) {
	return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	for (var i = 0; i < arr.length - 1; i++) {
		var pickedIndex = getRandom(i, arr.length - 1);
		if (pickedIndex !== i) {
			var tempVal = arr[pickedIndex];
			arr[pickedIndex] = arr[i];
			arr[i] = tempVal;
		}
	}
	return arr;
}

console.log(shuffle([1,2,3,4,5]))