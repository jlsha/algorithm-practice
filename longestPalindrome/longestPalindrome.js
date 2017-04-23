/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var longestWord = '';

  var findLongest = function(string) {
    var tempLongestWord = '';
    for (var i = 1; i <= string.length; i++) {
      //get rid of spaces
      var word = string.slice(0, i).split('').join('');
      // console.log('word', word);
      var reverseWord = word.split('').reverse().join('');
      // console.log('reverseword', reverseWord);
      if (word === reverseWord && string.slice(0, i).length > tempLongestWord.length) {
        tempLongestWord = string.slice(0, i);
      }
    }
    console.log('tempLongestWord', tempLongestWord);
    if (tempLongestWord.length > longestWord.length) {
      longestWord = tempLongestWord;
    }
  };

  for (var j = 0; j < string.length; j++) {
    findLongest(string.slice(j, string.length));
  }
  return longestWord;
};

// console.log('answer',longestPalindrome('dad'));
// console.log('answer',longestPalindrome('My dad is a racecar athlete'));
