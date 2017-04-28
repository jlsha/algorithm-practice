/*
 * function bind():
 *
 * example 1:
 *

 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context) {
  // TODO: Your code here
  var args = Array.prototype.slice.call(arguments, 2);
  
  return function() {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, newArgs); 
  }
  
};

 var alice = {
   name: 'alice',
   shout: function(){
     console.log(this.name);
 }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result); // 'foobar'

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(context) {
  // TODO: Your code here
  var args = Array.prototype.slice.call(arguments, 1);
  var func = this;
  
  return function() {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, newArgs);
  }
};


var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
boundShout(); // 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // 'bob'

var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result); // 'foobar'
