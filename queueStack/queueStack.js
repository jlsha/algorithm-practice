/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};
  this._size = 0;
  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    this.storage[this._size] = value;
    this._size++;
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    this._size && this._size--;
    var result = this.storage[this._size];

    delete this.storage[this._size];
    return result;
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return this._size;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  Queue.prototype.enqueue = function(value) {
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  Queue.prototype.dequeue = function() {
    // TODO: implement `dequeue`
    if (!outbox.size()) {
      if (!inbox.size()) {
        return null;
      }
      while (inbox.size()) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  Queue.prototype.size = function() {
    // TODO: implement `size`
    return inbox.size() + outbox.size();

  };
};
