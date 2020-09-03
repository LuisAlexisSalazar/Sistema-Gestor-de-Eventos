var http = require("http"); // Incluit HTTP para iniciar el servidor y manipular las cabeceras
var fs = require ("fs"); // Incluir FS para alterar la informacion de la pagina

http.createServer(function (req, res) {
  fs.readFile("./index.html", function(err,html) {

    // Conversion del sitio web (Hexadecimal) a texto (String)
    var html_string = html.toString();

    // Tomar todos los valores del documento HTML que este entre llaves y guardarlo en un array llamado variables
    var variables = html_string.match((/[^\{\}]+(?=\})/g));

    // Comprobamos que esten todos los elementos en el arreglo
    console.log(variables);

    // Ingreso el valor de mis variables
    var values = ["Seba", "********", "Celeste"];

    // Cantidad de elementos en el array
    console.log(variables.length);

    // Quitar todo el contenido entre llaves e intercambiarlo por el valor de mis variables
    for (i = 0; i < variables.length; i++) {
      html_string = html_string.replace("{"+variables[i]+"}", values[i]);
      console.log("Variable: " + variables[i]);
      console.log("===========================");
    }

    // Mostrar la pagina resultante en la consola
    console.log(html_string);

    // Mostrar el hexadecimal equivalente de la pagina (Por mero aprendizaje)
    console.log(html);


    res.writeHead (200, {"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  });
}).listen (8080);
