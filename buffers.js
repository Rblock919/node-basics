var os = require('os');
var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World');

console.log(v.toString());
console.log(v.toString('base64'));

console.log(b.toString('utf-8',0,2));

console.log('OS: ' + os.type());

console.log('OS arch: ' + os.arch());

console.log('OS platform: ' + os.platform());

console.log('OS total memory: ' + os.totalmem() + ' bytes');
