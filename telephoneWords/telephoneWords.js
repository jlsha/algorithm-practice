/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};



var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var results = [];
  var nums = digitString.split('');
  // numToLetters return array of the letters on each numerical button
  var numToLetters = [];

  for (var i = 0; i < nums.length; i++) {
    numToLetters.push(phoneDigitsToLetters[nums[i]]);
  }

  return results;
};

telephoneWords('2745');

// var telephoneWords = function(digitString) {
//   // TODO: return every combination that can be spelled on a phone with these digits
//   var nums = digitString.split('');
//   var lettersOnNum = [];
//   //lettersOnNum gives us an array of the letters on the numbers we pressed
//   for (var i = 0; i < nums.length; i++) {
//     lettersOnNum.push(phoneDigitsToLetters[+nums[i]]);
//   }
//   // console.log(lettersOnNum);
//   //need to find all possible combinations of these letters and return result
//   var result = [];

//   for (var j = lettersOnNum.length - 1; j >= 0; j--) {
//     var tempArr = [];
//     for (var k = 0; k < lettersOnNum[j].length; k++) {
//       tempArr.push(lettersOnNum[k][0]);
//       console.log('lettersOnNum[k][0]', lettersOnNum[k][0]);
//     }
//     for (var l = 0; l < lettersOnNum[j].length; l++) {
//       tempArr.push(lettersOnNum[j][l]);
//       result.push(tempArr);
//     }
//   }
//   return result;
// };
















