const http = require('http');
const fs = require('fs');
const url = require('url');


function server(request, response) {
    // true means trans query string to object
    var obj = url.parse(request.url, true);
    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/html');

    response.write('OK, Succeed');
    fs.readFile('./index.html', function(err, data) {
        response.write(data);
        var a = 0;
        var timer = setInterval(function() {
            // 一直发送内容,浏览器会一直处于加载状态
            response.write(new Date().toJSON());
            if (a++ > 4) {
                response.end();
                clearInterval(timer);
            }
        }, 1000);
        // response.end();
    })
    // response.end();
}

var serv = http.createServer(server);

serv.listen(8080, '0.0.0.0', function(err) {
    if (err) throw err;
    console.log('server start at: 8080');
})