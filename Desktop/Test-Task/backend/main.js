const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;


var convert = require('xml-js');
var xml = require('fs').readFileSync('./example_1.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});

// FIXME (обработать отсутствие данных в списке)

var vacanciesList = JSON.parse(result)["source"]["vacancies"]["vacancy"];
console.log(vacanciesList);

//Вот тут логика
var page = 1;
var pageSize = 10;
var custom = "abcd";
  
if(vacanciesList == null || vacanciesList == undefined || vacanciesList == NaN) {
  console.log("Список пуст");
}


 const server = http.createServer((req, res) => {
   var page = 1;
   var pageSize = 10;
   res.statusCode = 200;
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader('Content-Type', 'application/json');
   res.end(result);
 });

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });




/*
if (page.isNaN || page == null || page == undefined ) {
  const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.end(vacanciesList);
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
} else {
  //var newVacanciesList = vacanciesList.slice(0, 1);
  console.log(vacanciesList);
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.end(vacanciesList);
 });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

*/

// const server = http.createServer((req, res) => {

//   var page = 1;
//   var pageSize = 10;
//   var custom = "abcd";
//   res.statusCode = 200;
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader('Content-Type', 'application/json');
//   res.end(result);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });