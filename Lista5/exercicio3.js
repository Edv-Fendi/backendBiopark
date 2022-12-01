const http = require('http');

const server = http.createServer((req, res) =>{

    const url = req.url;

    if(url === '/usuario'){
        res.write("<h1>Oi pessoinha</h1>");
        res.end(`<h2>Voce se conectou na parada dos usuario</h2>`); 
    } else if(url === '/'){
        res.statusCode = 404;
        res.write("<h1> Deu erro amigo </h1>");
        res.end("<h2> Error 404 </h2>");

    }
})



server.listen(3000, () =>{
    console.log("O servidor está rodando na porta http://localhost:3000");
})

