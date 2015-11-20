var messages = [{
  message: 'test1'
}, {
  message: 'test2'
}, {
  message: 'test3'
}, {
  message: 'test4'
}, {
  message: 'test5'
}];

var http = require('http');

var server = http.createServer();

var handleRequest = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (req.method === 'POST') {
    res.statusCode === '201';

    var postData = '';
    req.on('data', function (chunk) {
      postData += chunk.toString();
    });
    req.on('end', function () {
      messages.push(JSON.parse(postData));
    });

    res.end();

  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    var returnObj = JSON.stringify(messages);
    res.end(returnObj);

  } else if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
  }


}

server.on('request', handleRequest).listen('9001');