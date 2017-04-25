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
  var chars = {};
  var result = [];

  for (var i = 0; i < string2.length; i++) {
    if (!chars[string2[i]] && string2[i] !== ' ') {
      chars[string2[i]] = true;
    }
  }

  for (var i = 0; i < string1.length; i++) {
    if (chars[string1[i]]) {
      result.push(string1[i]);
      delete chars[string1[i]]
    }
  }
  return result.join('');
};

console.log(commonCharacters('vicapow', 'wopaciv'));
console.log(commonCharacters('abc', 'abc'));
console.log(commonCharacters('ab', 'bc'));
console.log(commonCharacters('zyx', 'xzy'));
console.log(commonCharacters('aeiou', 'aaeeiioouu'));
console.log(commonCharacters('', 'eiauo'));
console.log(commonCharacters('all boys love fudge', 'boys all love fudge'));