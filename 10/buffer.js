// 3 种 构建 buffer 的方法

var buf1 = new Buffer(3);

buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;

let buf2 = new Buffer('abc');

let buf3 = new Buffer(['a', 'b', 'c']);

console.log(buf1.toString(), buf2.toString(), buf3.toString());

let buf4 = new Buffer('中国', 'utf8');

console.log(buf4, buf4.toString());

let buf5 = new Buffer(12);
let start = 0, len = 6;
buf5.write('好人', start, len);

console.log(buf5, buf5.toString());

let buf6 = new Buffer('好长的一个字符串');
// 不按正常字节截取
let buf7 = buf6.slice(0, 7);
let buf8 = buf6.slice(7);
// 则 toString() 时会乱码
console.log(buf6.toString(), buf7.toString(), buf8.toString());

const {StringDecoder} = require('string_decoder');
let decoder = new StringDecoder();
console.log(decoder.write(buf7));
console.log(decoder.write(buf8));

let src = new Buffer([4,5,6]);
let to = new Buffer(6);
// src.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
src.copy(to, 3, 0, 3);
console.log(src, to, Buffer.concat([src, to]));
// 如果大于255,会对 256 取模;如果小于 0, 先模上256,再加上 256

let buf = new Buffer(2);
buf[0] = -250; // -250%256 + 256
buf[1] = 260; // 260%256

console.log(buf, buf.toString())

