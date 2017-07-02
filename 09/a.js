// 多次 require ,这句话也只会执行一次, 除非清掉 require 的缓存
console.log('a');

let a = 'A';

exports.a = a;