// how to make an own server in your loacl machine 
const http =require('http');

// how to load a file on server 
var fs = require('fs');

const hostname = '127.1.0.1'
const port = 3000;
fs.readFile('index.html','utf8', (err,html) =>   {
if (err) {
    throw err;
}

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-type', 'text/plain');
     res.write(html);
    res.end();

});

        server.listen(port,hostname, () =>{
        console.log('Server Started on port Boom ' + port);
});



});
