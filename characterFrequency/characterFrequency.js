/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var freq = {};
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if(!freq[string[i]]) {
      freq[string[i]] = 1;
    } else {
      freq[string[i]]++;
    }
  }

  for (var letter in freq) {
    result.push([letter, freq[letter]])
  };

  result.sort(function(a, b) {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  })

  return result;
};

console.log(characterFrequency('aaabbc'))
console.log(characterFrequency('mississippi'))
console.log(characterFrequency('yzbzy'))
console.log(characterFrequency('popopo'))
console.log(characterFrequency('popopop'))
console.log(characterFrequency('supercalifragilisticexpialidocious'))
console.log(characterFrequency(''))










