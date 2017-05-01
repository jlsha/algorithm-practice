var Tree = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function preorder (tree) {
    var results = [];

    var findNext = function (node) {
        results.push(node.value);
        if (node.left) {
            findNext(node.left);
        } 
        if (node.right) {
            findNext(node.right);
        }

    }
    findNext(tree);
    return results;
}

var one = new Tree(1);
var two = new Tree(2);
var three = new Tree(3);
var four = new Tree(4);
var five = new Tree(5);
var six = new Tree(6);
var seven = new Tree(7);

one.left = two;
two.left = three;
two.right = four;
four.left = five;
one.right = six;
six.right = seven;

preorder(one);

var a = new Tree('a');
var b = new Tree('b');
var c = new Tree('c');
var d = new Tree('d');
var e = new Tree('e');
var f = new Tree('f');
var g = new Tree('g');
var h = new Tree('h');
var i = new Tree('i');
var j = new Tree('j');
var k = new Tree('k');
var l = new Tree('l');

f.left = d;
d.left = b;
d.right = e;
b.left = a;
b.right = c;
f.right = k;
k.left = g;
k.right = l;
g.left = h;
h.right = j;
j.left = i;

preorder(f);