function bracketValidator (string) {
	var openersArr = [];
	var openersClosers = {
		'{': '}',
		'[': ']',
		'(': ')'
	}

	for (var i = 0; i < string.length; i++) {
		if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
			openersArr.push(string[i]);
		} else if (string[i] === '}' || string[i] === ']' || string[i] === ')') {
			if (string[i] !== openersClosers[openersArr.pop()]) {
				return false;
			}
		}
	}
	return openersArr.length === 0;
}
//true
console.log(bracketValidator("{ [ ] ( ) }"))
//false
console.log(bracketValidator("{ [ ( ] ) }"))
//true
console.log(bracketValidator("{ [ }"))