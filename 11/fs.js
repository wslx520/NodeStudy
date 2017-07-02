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
 * 文件描述符起始为3
 * 因为 0: stdin, 1: stdout, 2: stderr
 */
fs.write(2, '其实是调用了stderr', err => {});
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

function readToEnd(file, callback) {
    let list = [];
    let len = 3;
    fs.open(file, 'r', function (err, fd) {
        let pos = 0;
        function read() {
            let buff = new Buffer(len);
            fs.read(fd, buff, 0, len, pos, function (err, bytes) {
                // bytes 读取到的字节数
                list.push(buff);
                pos += bytes;
                if (bytes > 0) {
                    read();
                } else {
                    let result = Buffer.concat(list);
                    callback(result.slice(0, pos));
                }
            });
        }
        read();
    })
}

readToEnd('2.txt', function (res) {
    console.log(res.toString());
});