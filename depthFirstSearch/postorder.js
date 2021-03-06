var Tree = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function postorder (tree) {
    var results = [];

    var findNext = function (node) {
        if (node.left) {
            findNext(node.left);
        }
        if (node.right) {
            findNext(node.right);
        }
        results.push(node.value);
    }
    findNext(tree);
    return results;
}

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

console.log(postorder(f));

var one = new Tree(1);
var two = new Tree(2);
var three = new Tree(3);
var four = new Tree(4);
var five = new Tree(5);
var six = new Tree(6);
var seven = new Tree(7);

seven.left = four;
seven.right = six;
four.left = one;
four.right = three;
three.left = two;
six.right = five;

console.log(postorder(seven));
