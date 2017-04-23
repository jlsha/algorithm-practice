/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  for (var i = 0; i < string.length; i++) {
  	var character = string[i];
  	if (string.indexOf(character) == i && string.indexOf(character, i + 1) == -1) {
  		return character;
  	}
  }
  return null;
};
