var Tree = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function bfs (tree) {
    var result = [tree.value];


    var findChild = function (node) {
        if (node.left) {
            result.push(node.left.value)
        }
        if (node.right) {
            result.push(node.right.value);
        }
        if (node.left) {
            findChild(node.left);
        }
        if (node.right) {
            findChild(node.right);
        }
    }

    findChild(tree);
    return result;
}

var one = new Tree(1);
var two = new Tree(2);
var three = new Tree(3);
var four = new Tree(4);
var five = new Tree(5);
var six = new Tree(6);
var seven = new Tree(7);
var eight = new Tree(8);

one.left = two;
two.left = four;
one.right = three;
three.left = five;
three.right = six;
five.left = seven;
five.right = eight;

console.log(bfs(one));