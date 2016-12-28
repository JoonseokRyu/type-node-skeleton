import _ = require('lodash');

var a : number = 123;
var b = [1,2,3];

var c = _.map(b, a => a+7);
console.log(a);
console.log(b);
console.log(c);
