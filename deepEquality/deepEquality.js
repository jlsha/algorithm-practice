/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  if (apple === orange) {
    return true;
  }
  if (typeof apple !== 'object' || typeof orange !== 'object') {
    return false;
  }
  var appleKeys = Object.keys(apple), orangeKeys = Object.keys(orange);
  
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

  for (var i = 0; i < appleKeys.length; i++) {
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) {
        return false;
    }
  }
  return true;
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));