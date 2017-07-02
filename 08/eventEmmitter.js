const EventEmitter = require('events');
const util = require('util');
function Person(name) {
    this.name = name;
}

util.inherits(Person, EventEmitter);

let p = new Person('hao');

p.on('walk', function (...arg) {
    console.log(this.name, 'walk', arg, ...arg);
});


console.log('enter');
setTimeout(function () {
    p.emit('walk', 1, 2, 3);
}, 1000);
