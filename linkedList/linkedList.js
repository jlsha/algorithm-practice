/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;

};

//write methods here!

LinkedList.prototype.addToTail = function(val) {
	var newTail = LinkedList.prototype.makeNode(val);
	if (!this.head) {
		this.head = newTail;
	} 
	if (this.tail) {
		this.tail.next = newTail;
	}
	this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
	if (this.head === null) {
		return null;
	}
	var currentHead = this.head;
	this.head = this.head.next;

	return currentHead.value;
};

LinkedList.prototype.contains = function(target) {
	var node = this.head;

	while(node) {
		if (node.value === target) {
			return true;
		}
		node = node.next;
	}
	return false;
};

LinkedList.prototype.makeNode = function(val) {
	var node = {};
	node.value = val;
	node.next = null;
	return node;
};
