const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;


var convert = require('xml-js');
var xml = require('fs').readFileSync('./example_1.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result);


//Вот тут логика


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});