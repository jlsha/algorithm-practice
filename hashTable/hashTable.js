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
  result.insert = function(key, val) {
    // TODO: implement `insert()`
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit);
    
    storage[hashIndex] = storage[hashIndex] || [];
    var pairs = storage[hashIndex]
    var replaced = false;
    
    for (var i = 0; i < pairs.length; i++) {
      if (pairs[i][0] === key) {
        pairs[i][1] = val;
        replaced = true;
        break;
      }
    }
    
    if (!replaced) {
      pairs.push([key, val]);
    }
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit);
    
    if (!storage[hashIndex]) {
      return;
    }
    
    for (var i = 0; i < storage[hashIndex].length; i++) {
      if (storage[hashIndex][i] && storage[hashIndex][i][0] === key) {
        return storage[hashIndex][i][1];
      }
    }   
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit);
    
    if (storage[hashIndex].length === 1) {
      storage[hashIndex] = [];
    } else {
      for (var i = 0; i < storage[hashIndex].length; i++) {
        if (storage[hashIndex][i][0] === key) {
          delete storage[hashIndex][i];
        }
      }
    }   
  };

  return result;
};