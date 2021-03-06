var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  // return a new tree with the same structure as `this`, with values generated by the callback
  var newTree = new Tree(callback(this.value));

  for (var i = 0; i < this.children.length; i++) {
    newTree.addChild(this.children[i].map(callback));
  }
  
  return newTree;
};


Tree.prototype.mapInPlace = function (callback) {
  //update the values of the existing tree with values generated by the callback
  this.value = callback(this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].mapInPlace(callback);
  }
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
})
console.log(newTree.value) // 2
console.log(newTree.children[0].value) // 4
console.log(newTree.children[1].value) // 6
console.log(newTree.children[0].children[1].value) // 10
console.log(newTree.children[1].children[1].value) // 14
console.log(root1.value) // still 1
