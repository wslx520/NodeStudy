process.stdout.write('hello');

process.stdin.on('data', function(data) {
    console.log(data.toString())
})

process.argv;
// 0: node.js , 1: current module file, 2-N:follow arguments

process.on('uncaughtException', function(e) {
    console.log(e);
});

// console.log(b);

setImmediate(function() {
    console.log('in immediate');
});

setTimeout(function() {
    console.log('in timeOut');
}, 0);

// 比 setTimeout 优先级高
process.nextTick(() => {
    console.log('I\'m in nextTick');
})

// nextTick > setTimeout > setImmediate > 异步回调
// 当前工作目录,可使用 chdir 更改
process.cwd();
console.log(process.cwd(),__dirname, __filename);
// __dirname, __filename 无法更改
// 改变目录
process.chdir('..');
console.log(process.cwd(),__dirname, __filename);
