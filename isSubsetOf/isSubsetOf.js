/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  var subArr = this;
  
  var words = {};
  
  for (var i = 0; i < arr.length; i++) {
    if (!words[arr[i]]) {
      words[arr[i]] = true;
    }
  }
  
  for (var i = 0; i < subArr.length; i++) {
    if (!words[subArr[i]]) {
      return false;
    }
  }
  
  return true;
};


var a = ['commit','push']
console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true

var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true 

