/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    // TODO: implement `insert()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!this[index]) {
      this[index] = [[key, value]];
    } else {
      // only push if array is less than storageLimit 1000

      if (this[index].length < 1000) {
        this[index].push([key, value]);
      }
    }

  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (this[index]) {
      for (var i = 0; i < this[index].length; i++) {
        if (this[index][i][0] === key) {
          return this[index][i][1];
        }
      }
    }
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (this[index]) {
      for (var i = 0; i < this[index].length; i++) {
        if (this[index][i][0] === key) {
          if (this[index].length === 1) {
            delete this[index];
          } else {
            console.log('this[index]', this[index])
            this[index].splice(i, 1);
            break;
          }
        }
      }
    }
  };

  return result;
};
