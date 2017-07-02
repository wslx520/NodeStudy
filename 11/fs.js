let fs = require('fs');

// fs.readFile(path, options, callback);

/**
 * 
 * if options is string , options will transform to {
        encoding: options,
        flag: 'r'
    }
 */

// 同步打开文件 openSync ,返回一个文件描述符


let fd = fs.openSync('./2.txt', 'r');
let buf = new Buffer(3);

/**
 * readSync 
 * 
 * fd 文件描述符
 * buf 存放读取出的内容的buffer
 * offset 写入buf的起始索引
 * length 写入的长度
 * position 文件的读取位置
 */
fs.readSync(fd, buf, 0, 3, 0);

// fs.open('./2.txt', 'r', function(err, fd) {
//     // 这也是一个文件描述符
//     console.log(err, fd);
// })
console.log(fd);
console.log(buf.toString());