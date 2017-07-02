var a = require('./a');
// require 后会将文件加入缓存,后面再次 require 同文件不会重新请求文件
console.log(require.cache);
// 但可以手动清理掉缓存
// delete require.cache[require.resolve('./a')];
// 这时再 require 就会再次执行文件里的代码了
var othera = require('./a');

console.log(a, othera);

// module.loaded 表示当前模块是否加载成功
console.log(module, module.loaded);

// module.parent 表示引用此模块的模块
// 比如 a 中 require b,则 b中输出 module.parent 会得到一个 Module对象, 指向 b

module.parent