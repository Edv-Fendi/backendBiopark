const http = require('http');

let contador = 0;
const servidor = http.createServer(function(request, response){
    if (request.url === '/') {
        response.write("<h1> Voce esta na pagina principal </h1>");
    } else {
        response.write(`Voce esta acessando a pagina ${request.url}`)
    }
    response.end(" By Edv");
})


servidor.listen(3000, function(){
        console.log("O pai ta on");
        
})
