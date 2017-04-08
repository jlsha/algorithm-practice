function reverseWords (sentence) {
	var wordsArr = sentence.split(' ');

	for (var i = 0; i < Math.floor(wordsArr.length/2); i++) {
		var tempWord = wordsArr[i];
		wordsArr[i] = wordsArr[wordsArr.length - 1 - i];
		wordsArr[wordsArr.length - 1 - i] = tempWord;
	}
	return wordsArr.join(' ');
}


var message = 'find you will pain only go you recordings security the into if';
console.log(reverseWords(message));