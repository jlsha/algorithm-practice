/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
	var matching = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	var stack = [];

	for (var i = 0; i < input.length; i++) {
		var char = input[i];

		if(matching[char]) {
			stack.push(char);
		} else if (char === ')' || char === '}' || char === ']') {
			if (matching[stack.pop()] !== char) {
				return false;
			}
		}
	}

	return !stack.length;
};

// console.log(balancedParens('('),  balancedParens('()'), balancedParens(')('), balancedParens('(())'))
// console.log(balancedParens('[](){}'), balancedParens('[({})]'), balancedParens('[(]{)}'))
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'), balancedParens(' var hubble = function() { telescopes.awesome();'))


