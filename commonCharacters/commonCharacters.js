/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var matches = [];

  var longer, shorter;

  if (string1.length > string2.length) {
  	longer = string1.replace(' ','');
  	shorter = string2.replace(' ','');
  } else {
  	longer = string2.replace(' ','');
  	shorter = string1.replace(' ','');
  }

  for (var i = 0; i < shorter.length; i++) {

  	if (matches.indexOf(shorter[i]) && longer.indexOf(shorter[i]) > -1) {
  		matches.push(shorter[i]);
  	}
  }
  return matches.join('');
};
