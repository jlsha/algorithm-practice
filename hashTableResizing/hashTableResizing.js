/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!this[index]) {
      this[index] = [[key, value]];
    } else {
      this[index].push([key, value]);
    }
    this.size++;
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
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
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (this[index]) {
      for (var i = 0; i < this[index].length; i++) {
        if (this[index][i][0] === key) {
          this[index][i].splice(i, 1);
          continue;
        }
      }
    }
    this.size--;
  };
  return result;
};
