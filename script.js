'use strict'

var http = require('http').createServer(webServer),
  form=require('fs').readFileSync('index.html'),
  querystring=require('querystring'),
  util=require('util'),
  dataString = ''


function webServer(req,res) {
   if (req.method == 'GET') {
     res.writeHead(200,{'Content-Type': 'text/html'})
     res.end(form)
   }

   if (req.method =='POST') {
     req.on('data',function (data){
            dataString+=data
          }).on('end',function (){
            var dataObject = querystring.parse(dataString),
                dataJson=util.inspect(dataObject),
            templateString = `
                los datos que enviaste por POST como string son: ${dataString}
                los datos que enviaste por POST como JSON son: ${dataJson}
                `
            console.log(templateString)

            res.end(templateString)
     })
   }
}

http.listen(3000);
console.log('Servidor corriendo en htt://localhost:3000/');






// boton.addEventListener('submit',Validar);
// const mysql=require('mysql');
//
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: '',
//   database:'systemge'
// });


// con.connect();
//    con.query("Select * From usuario" , (err,res,campos)=>{
//      console.log(res);
// });
// con.end();

// var formulario=boton.parentNode;
//
// console.log(formulario);
//
// function Validar(e) {
//      e.preventDefault();
//
//     var formulario=boton.parentNode;
//     console.log(formulario);
// }
