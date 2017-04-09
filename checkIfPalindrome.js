function checkIfPalindrome(string) {
	var letters = {};

	for (var i = 0; i < string.length; i++) {
		if (letters.hasOwnProperty(string[i])) {
			delete letters[string[i]];
		} else {
			letters[string[i]] = 1;
		}
	}

	return Object.keys(letters).length <= 1;
}

// with Set()

// function hasPalindromePermutation(theString) {

//   // track characters we've seen an odd number of times
//   var unpairedCharacters = new Set();

//   for (var i = 0; i < theString.length; i++) {
//       var char = theString[i];

//       if (unpairedCharacters.has(char)) {
//           unpairedCharacters.delete(char);
//       } else {
//           unpairedCharacters.add(char);
//       }
//   }

//   // the string has a palindrome permutation if it
//   // has one or zero characters without a pair
//   return unpairedCharacters.size <= 1;
// }

console.log(checkIfPalindrome("civic"));
console.log(checkIfPalindrome("ivicc"));
console.log(checkIfPalindrome("civil"));
console.log(checkIfPalindrome("livci"));