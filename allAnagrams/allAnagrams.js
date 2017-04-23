/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  var resultsObj = {};

  function anagram (beg, str) {
    if (str.length === 0) {
      resultsObj[beg] = true;
    }

    for (var i = 0; i < str.length; i++) {
      anagram(beg + str[i], str.slice(0, i) + str.slice(i+1));
    }
  }

  anagram('', string);

  return Object.keys(resultsObj);
}

console.log(allAnagrams('abcd'));

// console.log(allAnagrams('jenni'))

/*
anagram('', 'abc')
  anagram('a', 'bc')
    anagram('ab', 'c')
      anagram('abc', '')    push to obj
    anagram('ac', 'b')
      anagram('acb', '')    push to obj
  anagram('b', 'ac')
    anagram('ba', 'c')
      anagram('bac', '')    push to obj
    anagram('bc', 'a')
      anagram('bca')        push to obj
  anagram('c', 'ab')
    anagram('ca', 'b')
      anagram('cab')        push to obj
    anagram('cb', 'a')
      anagram('cba')        push to obj


abc, bac, bca, cab, cba
*/