// function getClosingParen (string, openParenIndex) {
// 	var openParens = [];

// 	for (var i = openParenIndex; i < string.length; i++) {
// 		if (string[i] === '(') {
// 			openParens.push(i);
// 		}
// 		if (string[i] === ')') {
// 			if (openParens[openParens.length-1] === openParenIndex) {
// 				return i;
// 			} else {
// 				openParens.pop()
// 			}
// 		}
// 	}
// }

function getClosingParen (string, openParenIndex) {
	var openParens = 0;

	for (var i = openParenIndex + 1; i < string.length; i++) {
		if (string[i] === '(') {
			openParens++;
		} 
		if (string[i] === ')') {
			if (!openParens) {
				return i;
			} else {
				openParens--;
			}
		}
	}
}

console.log(getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));
