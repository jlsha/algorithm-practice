function recursivePermutations (string) {
	if (string.length <= 1) {
		return new Set(string);
	}

	var getAllCharsExceptLast = string.slice(0, -1);
	var lastChar = string[string.length - 1];

	var permutationsOfAllExceptLast = recursivePermutations(getAllCharsExceptLast);

	var permutations = new Set();

	permutationsOfAllExceptLast.forEach(function(permutationsOfAllExceptLast) {
		for (var i = 0; i <= getAllCharsExceptLast.length; i++) {
			var permutation = permutationsOfAllExceptLast.slice(0, i) + lastChar + permutationsOfAllExceptLast.slice(i);
			permutations.add(permutation);
		}
	});

	return permutations;
}

console.log(recursivePermutations('cats'));