const http = require('http');

const server = http.createServer((req, res) =>{

    console.log('Alguém se conectou');
    res.write("<h1>Oi pessoinha</h1>");
    res.end("Bye bye");
})

server.listen(3000, () =>{
    console.log("O servidor está rodando na porta http://localhost:3000");
})

